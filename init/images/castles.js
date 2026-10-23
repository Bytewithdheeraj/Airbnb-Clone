const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-axp-photography-500641970-19160107_ye3ss9",
  "pexels-chetan-jha-624961868-17397822_u60xic",
  "pexels-roman-saienko-1867764487-29433249_zsxp9g",
  "pexels-anurag-gusain-807847056-23973679_jbvdby",
  "pexels-sbsoneji-3581368_ygbmhg",
  "pexels-avneet-singh-1592548633-27880160_xdzcbp",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));