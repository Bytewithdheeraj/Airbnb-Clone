const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-bliss-39537628_itxvln",
  "pexels-suman-mandal-2155185917-35133217_nmxljp",
  "pexels-rukia-sultana-1693305621-34883304_if6qgz",
  "pexels-shubhammahitkar-5076002_yux2in",
  "pexels-harshit-nandu-1286798-2873086_frpeww",
  "pexels-ventarafilms-34363682_mhaik5",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));