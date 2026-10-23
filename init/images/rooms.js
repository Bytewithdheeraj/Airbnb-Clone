const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-izafi-39796876_cf1z21",
  "pexels-ira-2300811-16825412_ftychc",
  "pexels-ivanna-lebediuk-2150011567-39102530_ytf2nq",
  "pexels-cihad-yildiz-2160041419-36466231_kudgec",
  "pexels-luizavenanci-29334668_sgkxxv",
  "pexels-abid-ali-150086727-10647324_ioe01e",
  "pexels-tara-winstead-8407007_u5jrgl",
  "pexels-chris-f-38966-29145900_tyarww",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));