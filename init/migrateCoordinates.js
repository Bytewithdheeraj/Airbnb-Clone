require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
const Listing = require("../models/listing");

const dbUrl = process.env.ATLASDB_URL;
const apiKey = process.env.GEOAPIFY_API_KEY;

const geocode = async (location, country) => {
    const query = encodeURIComponent(`${location}, ${country}`);
    const url = `https://api.geoapify.com/v1/geocode/search?text=${query}&apiKey=${apiKey}`;
    const { data } = await axios.get(url);
    const coordinates = data.features?.[0]?.geometry?.coordinates;

    if (
        Array.isArray(coordinates) &&
        coordinates.length === 2 &&
        coordinates.every(Number.isFinite)
    ) {
        return coordinates;
    }
    return null;
};

async function migrate() {
    if (!dbUrl) {
        throw new Error("ATLASDB_URL is not set. Add it to .env before running this migration.");
    }
    if (!apiKey) {
        throw new Error("GEOAPIFY_API_KEY is not set. Add it to .env before running this migration.");
    }

    await mongoose.connect(dbUrl);
    console.log(`Connected to database: ${mongoose.connection.name}`);

    const listings = await Listing.find({
        "geometry.coordinates": { $not: { $size: 2 } }
    });
    console.log(`Found ${listings.length} listings without valid coordinates`);

    let updated = 0;
    let failed = 0;

    for (const listing of listings) {
        if (!listing.location || !listing.country) {
            console.error(`Skipped "${listing.title}": location or country is missing`);
            failed += 1;
            continue;
        }

        try {
            const coordinates = await geocode(listing.location, listing.country);
            if (!coordinates) {
                console.error(`No geocoding result for "${listing.title}"`);
                failed += 1;
                continue;
            }

            listing.geometry = { type: "Point", coordinates };
            await listing.save();
            updated += 1;
            console.log(`Updated "${listing.title}": ${coordinates}`);
        } catch (error) {
            console.error(`Failed to update "${listing.title}": ${error.message}`);
            failed += 1;
        }
    }

    console.log(`Migration complete. Updated: ${updated}; failed: ${failed}.`);
    if (failed > 0) {
        process.exitCode = 1;
    }
}

migrate()
    .catch((error) => {
        console.error("Coordinate migration failed:", error.message);
        process.exitCode = 1;
    })
    .finally(async () => {
        await mongoose.disconnect();
    });
