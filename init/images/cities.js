const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-izafi-24259314_sx5ulw",
  "pexels-radis-20049160_r6oy7d",
  "pexels-wendywei-2959632_ay10yr",
  "pexels-denis-zhyravlev-237908692-12631676_pm9kft",
  "pexels-berdant-14846410_zs9ust",
  "pexels-aysegul-aytoren-46790226-16110999_qyywxq",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));