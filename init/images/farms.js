const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-damir-17973243_qeil2a",
  "pexels-christy-rice-1208544-2300959_lvrr67",
  "pexels-jonathanborba-19130094_uxvxzc",
  "pexels-quang-nguyen-vinh-222549-14024042_a0jayv",
  "pexels-damir-27308291_q0xono",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));