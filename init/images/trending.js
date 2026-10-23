const images = require("../cloudinaryImages");
const filenames = new Set([
  "pexels-eyecon-design-500632474-16573669_aezuga",
  "pexels-roman-odintsov-4870616_jea7gq",
  "pexels-tara-winstead-8407001_chk3eo",
  "pexels-tatianaa-co-564885161-35976514_vx7zty",
  "pexels-kelly-30018117_gach0a",
  "pexels-brunafisantos-29850367_cscvkm",
  "pexels-brunafisantos-29850368_xjduuh",
  "pexels-stiven-gonzales-1176841953-23466753_b6huja",
  "pexels-marthaseacher-18300615_lvznsd",
  "pexels-mike-haddad-2044216681-29160977_mawkoo",
]);

module.exports = images.filter(({ filename }) => filenames.has(filename));