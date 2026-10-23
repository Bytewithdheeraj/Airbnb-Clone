if (process.env.NODE_ENV !== "production") {
  const path = require("path");

  require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
  });

  const dns = require("dns");
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
}

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const dbUrl = process.env.ATLASDB_URL;
const dbName = process.env.DB_NAME || "AirBnB";

console.log("DB URL loaded:", !!dbUrl);

async function main() {
  if (!dbUrl) {
    throw new Error("ATLASDB_URL is not set. Add it to .env before seeding.");
  }

  await mongoose.connect(dbUrl, { dbName });
  console.log("Connected database:", mongoose.connection.name);
}

const seedDB = async () => {
  if (!initData || !Array.isArray(initData.data) || initData.data.length === 0) {
    throw new Error("Seed data must export a non-empty data array.");
  }

  const invalidListingIndex = initData.data.findIndex(
    (item) => !item || typeof item.title !== "string" || item.title.trim() === ""
  );
  if (invalidListingIndex !== -1) {
    throw new Error(`Seed listing at index ${invalidListingIndex} is missing a title.`);
  }

  console.log("Total listings:", initData.data.length);

  await Listing.deleteMany({});
  const insertedListings = await Listing.insertMany(initData.data);
  const listingCount = await Listing.countDocuments();
  if (listingCount !== initData.data.length) {
    throw new Error(
      `Expected ${initData.data.length} listings after seeding, found ${listingCount}.`
    );
  }
  console.log(`Database reseeded with ${insertedListings.length} listings.`);
};

async function run() {
  try {
    await main();
    await seedDB();
    console.log("Seeding completed");
  } catch (err) {
    console.error("ERROR:", err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

run();