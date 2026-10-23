const sampleListings = [
  // ==================== TRENDING (6) ====================
  {
    price: 35000,
    location: "Malibu",
    country: "United States",
    category: "Trending",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    price: 42000,
    location: "Santorini",
    country: "Greece",
    category: "Trending",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    price: 65000,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "Trending",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] }
  },
  {
    price: 28000,
    location: "Paris",
    country: "France",
    category: "Trending",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    price: 48000,
    location: "Zermatt",
    country: "Switzerland",
    category: "Trending",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
  },
  {
    price: 32000,
    location: "Kyoto",
    country: "Japan",
    category: "Trending",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] }
  },

  // ==================== ROOMS (6) ====================
  {
    price: 6500,
    location: "New York",
    country: "United States",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [-73.957, 40.7142] }
  },
  {
    price: 7500,
    location: "London",
    country: "United Kingdom",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [-0.134, 51.5137] }
  },
  {
    price: 5000,
    location: "Berlin",
    country: "Germany",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [13.418, 52.4984] }
  },
  {
    price: 5800,
    location: "Rome",
    country: "Italy",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [12.4924, 41.8902] }
  },
  {
    price: 7000,
    location: "Tokyo",
    country: "Japan",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [139.7005, 35.6895] }
  },
  {
    price: 8200,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [4.884, 52.368] }
  },

  // ==================== ICONIC CITIES (6) ====================
  {
    price: 18000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [139.7671, 35.6719] }
  },
  {
    price: 34000,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [-73.9855, 40.758] }
  },
  {
    price: 14500,
    location: "Barcelona",
    country: "Spain",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [2.1649, 41.3917] }
  },
  {
    price: 26000,
    location: "Singapore",
    country: "Singapore",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [103.8547, 1.2838] }
  },
  {
    price: 12000,
    location: "Istanbul",
    country: "Turkey",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [28.9784, 41.0082] }
  },
  {
    price: 29000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [55.2744, 25.1972] }
  },

  // ==================== MOUNTAINS (6) ====================
  {
    price: 38000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    price: 24000,
    location: "Chamonix",
    country: "France",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [6.8694, 45.9237] }
  },
  {
    price: 7500,
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.1892, 32.2432] }
  },
  {
    price: 18500,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    price: 21000,
    location: "Innsbruck",
    country: "Austria",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [11.4041, 47.2692] }
  },
  {
    price: 11000,
    location: "Cusco",
    country: "Peru",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [-71.9675, -13.5319] }
  },

  // ==================== CASTLES (6) ====================
  {
    price: 35000,
    location: "Edinburgh",
    country: "United Kingdom",
    category: "Castles",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] }
  },
  {
    price: 42000,
    location: "Loire Valley",
    country: "France",
    category: "Castles",
    geometry: { type: "Point", coordinates: [0.6833, 47.4167] }
  },
  {
    price: 38000,
    location: "Bavaria",
    country: "Germany",
    category: "Castles",
    geometry: { type: "Point", coordinates: [11.4979, 48.7904] }
  },
  {
    price: 45000,
    location: "Tuscany",
    country: "Italy",
    category: "Castles",
    geometry: { type: "Point", coordinates: [11.13, 43.4711] }
  },
  {
    price: 26000,
    location: "Transylvania",
    country: "Romania",
    category: "Castles",
    geometry: { type: "Point", coordinates: [24.7536, 46.4669] }
  },
  {
    price: 31000,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Castles",
    geometry: { type: "Point", coordinates: [-1.8, 51.833] }
  },

  // ==================== AMAZING POOLS (6) ====================
  {
    price: 32000,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [98.3923, 7.8804] }
  },
  {
    price: 24000,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    price: 36000,
    location: "Cabo San Lucas",
    country: "Mexico",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [-109.9167, 22.8905] }
  },
  {
    price: 21000,
    location: "Marrakech",
    country: "Morocco",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [-7.9811, 31.6295] }
  },
  {
    price: 41000,
    location: "Ibiza",
    country: "Spain",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [1.4206, 38.9067] }
  },
  {
    price: 27000,
    location: "Palm Springs",
    country: "United States",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [-116.5453, 33.8303] }
  },

  // ==================== CAMPING (6) ====================
  {
    price: 3500,
    location: "Yosemite",
    country: "United States",
    category: "Camping",
    geometry: { type: "Point", coordinates: [-119.5383, 37.8651] }
  },
  {
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
    category: "Camping",
    geometry: { type: "Point", coordinates: [34.8333, -2.3333] }
  },
  {
    price: 2200,
    location: "Lake District",
    country: "United Kingdom",
    category: "Camping",
    geometry: { type: "Point", coordinates: [-3.089, 54.4609] }
  },
  {
    price: 1800,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
  },
  {
    price: 2800,
    location: "Black Forest",
    country: "Germany",
    category: "Camping",
    geometry: { type: "Point", coordinates: [8.1519, 48.15] }
  },
  {
    price: 3200,
    location: "Outback",
    country: "Australia",
    category: "Camping",
    geometry: { type: "Point", coordinates: [134.0, -25.0] }
  },

  // ==================== FARMS (6) ====================
  {
    price: 12500,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
    geometry: { type: "Point", coordinates: [11.13, 43.4711] }
  },
  {
    price: 14000,
    location: "Provence",
    country: "France",
    category: "Farms",
    geometry: { type: "Point", coordinates: [5.4474, 43.9352] }
  },
  {
    price: 18000,
    location: "Napa Valley",
    country: "United States",
    category: "Farms",
    geometry: { type: "Point", coordinates: [-122.2869, 38.5025] }
  },
  {
    price: 6500,
    location: "Kerala",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [76.2711, 10.8505] }
  },
  {
    price: 9500,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms",
    geometry: { type: "Point", coordinates: [-1.8, 51.833] }
  },
  {
    price: 11000,
    location: "Yarra Valley",
    country: "Australia",
    category: "Farms",
    geometry: { type: "Point", coordinates: [145.44, -37.65] }
  },

  // ==================== ARCTIC (6) ====================
  {
    price: 26000,
    location: "Rovaniemi",
    country: "Finland",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [25.7294, 66.5039] }
  },
  {
    price: 22000,
    location: "Tromsø",
    country: "Norway",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [18.9553, 69.6492] }
  },
  {
    price: 19500,
    location: "Reykjavik",
    country: "Iceland",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [-21.9426, 64.1466] }
  },
  {
    price: 24000,
    location: "Abisko",
    country: "Sweden",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [18.8298, 68.3559] }
  },
  {
    price: 17500,
    location: "Fairbanks",
    country: "United States",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [-147.7164, 64.8378] }
  },
  {
    price: 28000,
    location: "Longyearbyen",
    country: "Norway",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [15.6267, 78.2232] }
  },

  // ==================== DOMES (6) ====================
  {
    price: 16000,
    location: "Sedona",
    country: "United States",
    category: "Domes",
    geometry: { type: "Point", coordinates: [-111.761, 34.8697] }
  },
  {
    price: 18500,
    location: "Joshua Tree",
    country: "United States",
    category: "Domes",
    geometry: { type: "Point", coordinates: [-116.3131, 34.1347] }
  },
  {
    price: 21000,
    location: "Chamonix",
    country: "France",
    category: "Domes",
    geometry: { type: "Point", coordinates: [6.8694, 45.9237] }
  },
  {
    price: 23000,
    location: "Atacama Desert",
    country: "Chile",
    category: "Domes",
    geometry: { type: "Point", coordinates: [-69.1257, -23.65] }
  },
  {
    price: 13500,
    location: "Inverness",
    country: "United Kingdom",
    category: "Domes",
    geometry: { type: "Point", coordinates: [-4.2245, 57.4778] }
  },
  {
    price: 8500,
    location: "Wayanad",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [76.132, 11.6854] }
  },

  // ==================== BOATS (6) ====================
  {
    price: 14000,
    location: "Alleppey",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] }
  },
  {
    price: 16500,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Boats",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
  },
  {
    price: 25000,
    location: "Athens",
    country: "Greece",
    category: "Boats",
    geometry: { type: "Point", coordinates: [23.7275, 37.9838] }
  },
  {
    price: 9500,
    location: "Srinagar",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [74.8723, 34.0837] }
  },
  {
    price: 38000,
    location: "St. Lucia",
    country: "Saint Lucia",
    category: "Boats",
    geometry: { type: "Point", coordinates: [-60.9789, 13.9094] }
  },
  {
    price: 18500,
    location: "Seattle",
    country: "United States",
    category: "Boats",
    geometry: { type: "Point", coordinates: [-122.3321, 47.6062] }
  }
];

const categoryImages = require("./categoryImages");

const listingContent = {
  Trending: [
    ["Modern Villa with Private Pool", "A contemporary villa with clean architectural lines and a landscaped outdoor pool area."],
    ["Hillside Homes with City Views", "A collection of homes set along a green hillside with views across the surrounding neighborhood."],
    ["Coastal Apartment Residence", "A modern residential building close to the coast, with balconies overlooking the surrounding area."],
    ["Seaside Townhouse Stay", "A coastal town setting with compact homes gathered along the water."],
    ["Contemporary Coastal Home", "A modern home near the shoreline, shown from above with its coastal surroundings."],
    ["Island Villa by the Sea", "A secluded-looking home among greenery beside a rocky island coastline."],
    ["Coastal Homes above the Shore", "A cluster of homes overlooking the sea and rugged shoreline."],
    ["Modern High-Rise Residence", "A contemporary tower rising above a city neighborhood."],
    ["Tree-Lined City Apartment", "An urban apartment building on a shaded city street."],
    ["Contemporary Apartment Building", "A modern multi-story residence with broad windows and balconies."],
  ],
  Rooms: [
    ["Modern Apartment Stay", "A contemporary apartment building with a compact urban profile."],
    ["Brick-Facade City Apartment", "A city residence with a distinctive brick exterior and tall windows."],
    ["Coastal Apartment Homes", "A group of homes set near the sea, with balconies facing the surrounding neighborhood."],
    ["Garden Villa Stay", "A private-looking home surrounded by greenery and outdoor space."],
    ["Modern White Villa", "A bright contemporary home with a simple exterior and landscaped grounds."],
    ["Villa with Outdoor Pool", "A modern residence with an outdoor swimming pool beside the home."],
    ["Coastal Townhouse Stay", "A row of homes in a leafy neighborhood close to the coast."],
    ["Colorful Neighborhood Home", "A home among closely spaced houses with varied exterior colors."],
  ],
  "Iconic Cities": [
    ["Coastal Apartment Building", "A multi-story apartment residence overlooking a coastal neighborhood."],
    ["Homes along the Waterfront", "A row of homes beside the water, seen in the evening light."],
    ["City Apartment with Street Views", "A residential building framed by the surrounding city streets."],
    ["Urban Poolside Residence", "A city-side property with an outdoor pool and surrounding buildings."],
    ["Modern City Apartment", "A contemporary apartment building with a distinctive urban facade."],
    ["High-Rise City Residence", "A modern tower with balconies overlooking the city."],
  ],
  Mountains: [
    ["Forest Cabin beneath the Mountains", "A rustic cabin among tall trees with a mountain landscape in the distance."],
    ["Red-Rock Mountain Cabins", "Small cabins set below dramatic red-rock peaks in an open mountain valley."],
    ["Mountain Chalet in a Pine Forest", "A timber chalet surrounded by evergreen trees and steep mountain slopes."],
    ["Hillside Cottage in the Highlands", "A small home on a green hillside with a wooded mountain backdrop."],
    ["Woodland Mountain Retreat", "A cabin tucked among trees on a sloping mountain landscape."],
    ["Log Cabin in Autumn Forest", "A timber cabin surrounded by forest with autumn-colored hills nearby."],
  ],
  Castles: [
    ["Historic Fortified Palace", "A monumental stone facade with towers and defensive-looking walls."],
    ["Historic Tower in the Old Town", "A tall, ornate tower rising above a narrow street of historic buildings."],
    ["Ruined Stone Fortress", "Weathered stone walls and towers spread across a historic fort complex."],
    ["Fortress with Corner Towers", "A fortified stone complex with prominent towers and an enclosed courtyard."],
    ["Hilltop Fort above the City", "A fortified structure on elevated ground with the city visible below."],
    ["Historic Palace Facade", "An ornate palace-like facade with detailed stonework and a prominent central section."],
  ],
  "Amazing Pools": [
    ["Tropical Resort Pool", "A resort-style swimming pool surrounded by palm trees and landscaped grounds."],
    ["Beachfront Villa with Pool", "A coastal villa with an outdoor pool and views toward the shoreline."],
    ["Garden Home with Swimming Pool", "A private home set among greenery with a pool beside the house."],
    ["Modern Villa with Lap Pool", "A contemporary villa with a long, straight-edged outdoor swimming pool."],
    ["Palm-Shaded Resort Pool", "A broad resort pool surrounded by palms and low-rise guest buildings."],
    ["Poolside Tropical Retreat", "An outdoor pool and seating area framed by tropical landscaping."],
    ["Seaside Resort Swimming Pool", "A hotel-style pool area with loungers and views toward the sea."],
    ["Courtyard Pool Villa", "A private courtyard with a swimming pool beside a modern home."],
    ["Hillside Resort Pool", "A landscaped swimming pool among resort buildings and greenery."],
    ["Coastal Hotel with Pool", "A coastal hotel with an outdoor pool and views across the surrounding area."],
  ],
  Camping: [
    ["Mountain Tent Campsite", "A tent pitched in a rugged mountain landscape beside an open campsite."],
    ["Stargazing Tent Retreat", "A glowing tent at night beneath a wide star-filled sky."],
    ["Forest Camp beneath the Pines", "A tent campsite set among tall trees with a simple outdoor cooking area."],
    ["Mountain View from the Tent", "A view through a tent opening toward a distant mountain landscape."],
    ["Misty Forest Campsite", "A small campsite among trees on a misty, wooded hillside."],
    ["High-Altitude Tent Camp", "Bright tents arranged on open ground beneath snow-covered mountain peaks."],
  ],
  Farms: [
    ["Countryside Farmhouse", "A farmhouse and outbuildings surrounded by open green fields."],
    ["Garden Home by the Coast", "A home surrounded by a green garden with the sea visible nearby."],
    ["Tropical Farmstead near the Shore", "A low-rise property among palms and greenery near the coastline."],
    ["Coastal Countryside Retreat", "A home set among green grounds with a broad view toward the water."],
    ["Rural Home beside Green Fields", "A farmhouse beside open fields and tree-lined countryside."],
  ],
  Arctic: [
    ["Snowy Mountain Lodge", "A small lodge set in a snowy mountain landscape."],
    ["Remote Cabin in Deep Snow", "A cabin surrounded by snow beneath a broad mountain sky."],
    ["Winter Lodge beneath the Peaks", "A snow-covered retreat in an open alpine landscape."],
  ],
  Domes: [
    ["White Domed Landmark", "A white monumental building distinguished by a large central dome."],
    ["Red-Domed Historic Building", "A historic-looking building with a prominent red dome and ornate exterior."],
    ["Ornate Domed Palace", "A richly detailed building with a large central dome and decorative towers."],
    ["Stone Pavilion with a Dome", "A small ornate stone pavilion topped by a carved dome."],
    ["Historic Cathedral and Domes", "A historic religious building with multiple towers and domed details."],
  ],
  Boats: [
    ["Boats in a Busy Harbor", "Small boats gathered along a waterfront with homes and hills in the background."],
    ["Harbor Boats at Sunset", "Boats floating on calm water in the warm light of sunset."],
    ["Fishing Boats by the Shore", "A line of small fishing boats pulled up beside the water."],
    ["Colorful Working Boats", "Brightly painted boats moored together along a working harbor."],
    ["Small Boats on Green Water", "Several small boats resting in shallow green water near the shore."],
  ],
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
const actualCategories = Object.keys(require("./categoryImages"));
if (JSON.stringify(actualCategories) !== JSON.stringify(expectedCategories)) {
  throw new Error("Seed categories do not match the supported listing categories.");
}

const categoryImagesByName = require("./categoryImages");
const sampleListingsByCategory = Object.fromEntries(
  expectedCategories.map((category) => [
    category,
    sampleListings.filter((listing) => listing.category === category),
  ])
);
const seenTitles = new Set();

const seededListings = expectedCategories.flatMap((category) => {
  const images = categoryImagesByName[category];
  const categorySamples = sampleListingsByCategory[category];
  const content = listingContent[category];

  if (content.length !== images.length) {
    throw new Error(
      `Expected ${images.length} title/description records for ${category}, found ${content.length}.`
    );
  }

  if (categorySamples.length === 0) {
    throw new Error(`No seed listing details are available for ${category}.`);
  }

  return images.map((image, index) => {
    const [title, description] = content[index];
    const sample = categorySamples[index % categorySamples.length];
    const listing = {
      ...sample,
      title,
      description,
      image: { ...image },
    };

    if (seenTitles.has(title)) {
      throw new Error(`Duplicate seed title: "${title}".`);
    }
    seenTitles.add(title);

    return listing;
  });
});

module.exports = { data: seededListings };