require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/AirBnB";

const geocode = async (location, country) => {
    const query = encodeURIComponent(`${location}, ${country}`);
    const url = `https://api.geoapify.com/v1/geocode/search?text=${query}&apiKey=${process.env.GEOAPIFY_API_KEY}`;
    const res = await axios.get(url);
    const data = res.data;
    if (data.features && data.features.length) {
        return data.features[0].geometry.coordinates;
    }
    return null;
};

async function migrate() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    const listings = await Listing.find({ "geometry.coordinates": { $size: 0 } });
    console.log(`Found ${listings.length} listings without coordinates`);

    for (let listing of listings) {
        const coordinates = await geocode(listing.location, listing.country);
        if (coordinates) {
            listing.geometry = { type: "Point", coordinates };
            await listing.save();
            console.log(`Updated: ${listing.title} → ${coordinates}`);
        } else {
            console.log(`Failed: ${listing.title}`);
        }
    }

    console.log("Migration complete!");
    mongoose.connection.close();
}

migrate();
// fixing the migration
// node -e "
// require('dotenv').config();
// const mongoose = require('mongoose');
// const axios = require('axios');
// const Listing = require('./models/listing');

// mongoose.connect('mongodb://127.0.0.1:27017/AirBnB').then(async () => {
//     const listings = await Listing.find({});
//     for (let listing of listings) {
//         if (listing.geometry?.coordinates?.length === 2) {
//             console.log('Skipping:', listing.title);
//             continue;
//         }
//         try {
//             const query = encodeURIComponent(listing.location + ', ' + listing.country);
//             const url = 'https://api.geoapify.com/v1/geocode/search?text=' + query + '&apiKey=' + process.env.GEOAPIFY_API_KEY;
//             const res = await axios.get(url);
//             const data = res.data;
//             if (data.features && data.features.length) {
//                 listing.geometry = { type: 'Point', coordinates: data.features[0].geometry.coordinates };
//                 await listing.save();
//                 console.log('Updated:', listing.title, data.features[0].geometry.coordinates);
//             } else {
//                 console.log('No results:', listing.title);
//             }
//         } catch(e) {
//             console.log('Error:', listing.title, e.message);
//         }
//     }
//     console.log('Done!');
//     mongoose.connection.close();
// });
// "