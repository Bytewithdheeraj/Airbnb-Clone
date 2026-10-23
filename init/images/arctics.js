const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-audio-visual-art-10697918_fhgpcp",
  "pexels-gocebey-10891904_qguswi",
  "pexels-mauro-morandini-2157991400-35333337_ucmpfh",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));