const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});

console.log("CLOUD_NAME:", process.env.CLOUD_NAME);
console.log("CLOUD_API_KEY:", process.env.CLOUD_API_KEY);
console.log("CLOUD_API_SECRET:", process.env.CLOUD_API_SECRET);
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

async function getImages() {
  const result = await cloudinary.search
    .expression("folder:AirBnB_DEV")
    .max_results(100)
    .execute();

  console.log(
    result.resources.map((img) => ({
      url: img.secure_url,
      filename: img.public_id,
    }))
  );
}

getImages();