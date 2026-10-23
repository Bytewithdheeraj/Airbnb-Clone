const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-samuel-hajnik-3231550-13647349_aknc34",
  "pexels-catalin-todosia-876894548-29338236_skdgvy",
  "pexels-catalin-todosia-876894548-29277637_h48oqf",
  "pexels-triemli-28559653_kqnduk",
  "pexels-leotrim-tishuku-1007049077-20253067_w05fhc",
  "pexels-liuguangxi-13587579_rgqdlf",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));