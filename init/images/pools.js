const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-cihad-yildiz-2160041419-37610710_klrbot",
  "pexels-quang-nguyen-vinh-222549-2476632_pzpata",
  "pexels-thanhhoa-tran-640546-1488267_v8udjl",
  "pexels-ahmetcotur-28054849_g96vhv",
  "pexels-darrell-fraser-1187740-2259226_imlswq",
  "pexels-lhoang-2151363723-37729825_puoefn",
  "pexels-reneterp-635126_mikoul",
  "pexels-cripsdog-19977303_zc11xu",
  "pexels-freestockpro-30163975_iprilm",
  "pexels-jane-ann-421919702-15283660_hi3w4d",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));