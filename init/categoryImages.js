const categoryImages = {
  Trending: require("./images/trending"),
  Rooms: require("./images/rooms"),
  "Iconic Cities": require("./images/cities"),
  Mountains: require("./images/mountains"),
  Castles: require("./images/castles"),
  "Amazing Pools": require("./images/pools"),
  Camping: require("./images/camping"),
  Farms: require("./images/farms"),
  Arctic: require("./images/arctics"),
  Domes: require("./images/domes"),
  Boats: require("./images/boats"),
};

const expectedCategories = [
  "Trending",
  "Rooms",
  "Iconic Cities",
  "Mountains",
  "Castles",
  "Amazing Pools",
  "Camping",
  "Farms",
  "Arctic",
  "Domes",
  "Boats",
];

if (JSON.stringify(Object.keys(categoryImages)) !== JSON.stringify(expectedCategories)) {
  throw new Error("Category image modules do not match the supported listing categories.");
}

module.exports = categoryImages;
