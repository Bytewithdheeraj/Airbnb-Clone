const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/AirBnB";

async function main() {
  await mongoose.connect(MONGO_URL);
}

const seedDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner: '6a30daf9f9a863c4813eba16' }));
  await Listing.insertMany(initData.data);
  console.log("Database fully reset from data.js");
};

main()
  .then(async () => {
    console.log("Connected to DB");
    await seedDB();
  })
  .then(() => mongoose.connection.close())
  .catch((err) => console.log(err));