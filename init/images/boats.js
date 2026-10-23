const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-dibakar-roy-2432543-35308765_gjdgth",
  "pexels-sameerbangotra-18613444_bellal",
  "pexels-kichu98-25559799_p9pi7x",
  "pexels-mirrajjak-38884336_uqfk9k",
  "pexels-rumpy-32658319_spn63a",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));