const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-reyyan-505450018-32183963_breq8p",
  "pexels-k3ithvision-18680881_kihaa7",
  "pexels-anurag-upadhyay-168783412-10958566_a0smvl",
  "pexels-ayush-sinha-855671783-33823968_idxrqy",
  "pexels-ibyin-3473246-5209288_dpq9gq",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));