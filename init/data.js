const sampleListings = [
  {
    "title": "Beachfront Cottage in Malibu",
    "description": "Escape to this stunning Beachfront Cottage for an unforgettable stay in Malibu.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=1"
    },
    "price": 800,
    "location": "Malibu",
    "country": "United States",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.7798,
        34.0259
      ]
    }
  },
  {
    "title": "Cliffside Villa in Santorini",
    "description": "A peaceful retreat in Santorini, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=2"
    },
    "price": 997,
    "location": "Santorini",
    "country": "Greece",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.4615,
        36.3932
      ]
    }
  },
  {
    "title": "Overwater Bungalow in Bora Bora",
    "description": "Wake up to incredible views in Bora Bora at this one-of-a-kind overwater bungalow.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=3"
    },
    "price": 1194,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -151.7415,
        -16.5004
      ]
    }
  },
  {
    "title": "Chic Studio in Paris",
    "description": "A perfect getaway in Paris, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=4"
    },
    "price": 1391,
    "location": "Paris",
    "country": "France",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.3522,
        48.8566
      ]
    }
  },
  {
    "title": "Luxury Beach House in Bali",
    "description": "Escape to this stunning Luxury Beach House for an unforgettable stay in Bali.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=5"
    },
    "price": 1588,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Hilltop Retreat in Miami Beach",
    "description": "A peaceful retreat in Miami Beach, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=6"
    },
    "price": 1785,
    "location": "Miami Beach",
    "country": "United States",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.13,
        25.7907
      ]
    }
  },
  {
    "title": "Skyline Penthouse in Phuket",
    "description": "Wake up to incredible views in Phuket at this one-of-a-kind skyline penthouse.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=7"
    },
    "price": 1982,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        98.3923,
        7.8804
      ]
    }
  },
  {
    "title": "Garden Bungalow in Ibiza",
    "description": "A perfect getaway in Ibiza, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=8"
    },
    "price": 2179,
    "location": "Ibiza",
    "country": "Spain",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        1.4206,
        38.9067
      ]
    }
  },
  {
    "title": "Riverside Loft in Cancun",
    "description": "Escape to this stunning Riverside Loft for an unforgettable stay in Cancun.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=9"
    },
    "price": 2376,
    "location": "Cancun",
    "country": "Mexico",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -86.8515,
        21.1619
      ]
    }
  },
  {
    "title": "Sunset Villa in Capri",
    "description": "A peaceful retreat in Capri, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=10"
    },
    "price": 2573,
    "location": "Capri",
    "country": "Italy",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.2167,
        40.55
      ]
    }
  },
  {
    "title": "Beachfront Cottage in Maldives #2",
    "description": "Wake up to incredible views in Maldives at this one-of-a-kind beachfront cottage.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=11"
    },
    "price": 2770,
    "location": "Maldives",
    "country": "Maldives",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.2207,
        3.2028
      ]
    }
  },
  {
    "title": "Cliffside Villa in Mykonos #2",
    "description": "A perfect getaway in Mykonos, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=12"
    },
    "price": 2967,
    "location": "Mykonos",
    "country": "Greece",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.3289,
        37.4467
      ]
    }
  },
  {
    "title": "Overwater Bungalow in Cape Town #2",
    "description": "Escape to this stunning Overwater Bungalow for an unforgettable stay in Cape Town.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=13"
    },
    "price": 3164,
    "location": "Cape Town",
    "country": "South Africa",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.4241,
        -33.9249
      ]
    }
  },
  {
    "title": "Chic Studio in Dubai #2",
    "description": "A peaceful retreat in Dubai, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=14"
    },
    "price": 3361,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.2708,
        25.2048
      ]
    }
  },
  {
    "title": "Luxury Beach House in Goa #2",
    "description": "Wake up to incredible views in Goa at this one-of-a-kind luxury beach house.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=15"
    },
    "price": 3558,
    "location": "Goa",
    "country": "India",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.8567,
        15.2993
      ]
    }
  },
  {
    "title": "Hilltop Retreat in Malibu #3",
    "description": "A perfect getaway in Malibu, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=16"
    },
    "price": 3755,
    "location": "Malibu",
    "country": "United States",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.7798,
        34.0259
      ]
    }
  },
  {
    "title": "Skyline Penthouse in Santorini #3",
    "description": "Escape to this stunning Skyline Penthouse for an unforgettable stay in Santorini.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=17"
    },
    "price": 3952,
    "location": "Santorini",
    "country": "Greece",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.4615,
        36.3932
      ]
    }
  },
  {
    "title": "Garden Bungalow in Bora Bora #3",
    "description": "A peaceful retreat in Bora Bora, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=18"
    },
    "price": 4149,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -151.7415,
        -16.5004
      ]
    }
  },
  {
    "title": "Riverside Loft in Paris #3",
    "description": "Wake up to incredible views in Paris at this one-of-a-kind riverside loft.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/travel,vacation?lock=19"
    },
    "price": 4346,
    "location": "Paris",
    "country": "France",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.3522,
        48.8566
      ]
    }
  },
  {
    "title": "Modern Loft in New York City",
    "description": "Escape to this stunning Modern Loft for an unforgettable stay in New York City.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=20"
    },
    "price": 933,
    "location": "New York City",
    "country": "United States",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    }
  },
  {
    "title": "Art Deco Apartment in Miami",
    "description": "A peaceful retreat in Miami, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=21"
    },
    "price": 1130,
    "location": "Miami",
    "country": "United States",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.1918,
        25.7617
      ]
    }
  },
  {
    "title": "Luxury Penthouse in Los Angeles",
    "description": "Wake up to incredible views in Los Angeles at this one-of-a-kind luxury penthouse.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=22"
    },
    "price": 1327,
    "location": "Los Angeles",
    "country": "United States",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.2437,
        34.0522
      ]
    }
  },
  {
    "title": "Stylish Flat in London",
    "description": "A perfect getaway in London, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=23"
    },
    "price": 1524,
    "location": "London",
    "country": "United Kingdom",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -0.1276,
        51.5072
      ]
    }
  },
  {
    "title": "Boutique Suite in Lisbon",
    "description": "Escape to this stunning Boutique Suite for an unforgettable stay in Lisbon.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=24"
    },
    "price": 1721,
    "location": "Lisbon",
    "country": "Portugal",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -9.1393,
        38.7223
      ]
    }
  },
  {
    "title": "Cozy Studio in Amsterdam",
    "description": "A peaceful retreat in Amsterdam, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=25"
    },
    "price": 1918,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        4.9041,
        52.3676
      ]
    }
  },
  {
    "title": "Designer Room in Berlin",
    "description": "Wake up to incredible views in Berlin at this one-of-a-kind designer room.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=26"
    },
    "price": 2115,
    "location": "Berlin",
    "country": "Germany",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        13.405,
        52.52
      ]
    }
  },
  {
    "title": "Minimalist Apartment in Vienna",
    "description": "A perfect getaway in Vienna, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=27"
    },
    "price": 2312,
    "location": "Vienna",
    "country": "Austria",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        16.3738,
        48.2082
      ]
    }
  },
  {
    "title": "Sunlit Suite in Prague",
    "description": "Escape to this stunning Sunlit Suite for an unforgettable stay in Prague.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=28"
    },
    "price": 2509,
    "location": "Prague",
    "country": "Czech Republic",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.4378,
        50.0755
      ]
    }
  },
  {
    "title": "Industrial Loft in Dublin",
    "description": "A peaceful retreat in Dublin, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=29"
    },
    "price": 2706,
    "location": "Dublin",
    "country": "Ireland",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -6.2603,
        53.3498
      ]
    }
  },
  {
    "title": "Modern Loft in Toronto #2",
    "description": "Wake up to incredible views in Toronto at this one-of-a-kind modern loft.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=30"
    },
    "price": 2903,
    "location": "Toronto",
    "country": "Canada",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.3832,
        43.6532
      ]
    }
  },
  {
    "title": "Art Deco Apartment in Seoul #2",
    "description": "A perfect getaway in Seoul, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=31"
    },
    "price": 3100,
    "location": "Seoul",
    "country": "South Korea",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        126.978,
        37.5665
      ]
    }
  },
  {
    "title": "Luxury Penthouse in Melbourne #2",
    "description": "Escape to this stunning Luxury Penthouse for an unforgettable stay in Melbourne.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=32"
    },
    "price": 3297,
    "location": "Melbourne",
    "country": "Australia",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        144.9631,
        -37.8136
      ]
    }
  },
  {
    "title": "Stylish Flat in Copenhagen #2",
    "description": "A peaceful retreat in Copenhagen, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=33"
    },
    "price": 3494,
    "location": "Copenhagen",
    "country": "Denmark",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.5683,
        55.6761
      ]
    }
  },
  {
    "title": "Boutique Suite in Madrid #2",
    "description": "Wake up to incredible views in Madrid at this one-of-a-kind boutique suite.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=34"
    },
    "price": 3691,
    "location": "Madrid",
    "country": "Spain",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -3.7038,
        40.4168
      ]
    }
  },
  {
    "title": "Cozy Studio in New York City #3",
    "description": "A perfect getaway in New York City, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=35"
    },
    "price": 3888,
    "location": "New York City",
    "country": "United States",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    }
  },
  {
    "title": "Designer Room in Miami #3",
    "description": "Escape to this stunning Designer Room for an unforgettable stay in Miami.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=36"
    },
    "price": 4085,
    "location": "Miami",
    "country": "United States",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.1918,
        25.7617
      ]
    }
  },
  {
    "title": "Minimalist Apartment in Los Angeles #3",
    "description": "A peaceful retreat in Los Angeles, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=37"
    },
    "price": 4282,
    "location": "Los Angeles",
    "country": "United States",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.2437,
        34.0522
      ]
    }
  },
  {
    "title": "Sunlit Suite in London #3",
    "description": "Wake up to incredible views in London at this one-of-a-kind sunlit suite.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/bedroom,interior?lock=38"
    },
    "price": 4479,
    "location": "London",
    "country": "United Kingdom",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -0.1276,
        51.5072
      ]
    }
  },
  {
    "title": "Modern Apartment in Tokyo",
    "description": "Escape to this stunning Modern Apartment for an unforgettable stay in Tokyo.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=39"
    },
    "price": 1066,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6503,
        35.6762
      ]
    }
  },
  {
    "title": "Seaside Apartment in Barcelona",
    "description": "A peaceful retreat in Barcelona, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=40"
    },
    "price": 1263,
    "location": "Barcelona",
    "country": "Spain",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.1734,
        41.3851
      ]
    }
  },
  {
    "title": "Urban Escape in Singapore",
    "description": "Wake up to incredible views in Singapore at this one-of-a-kind urban escape.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=41"
    },
    "price": 1460,
    "location": "Singapore",
    "country": "Singapore",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        103.8198,
        1.3521
      ]
    }
  },
  {
    "title": "Heritage Apartment in Rome",
    "description": "A perfect getaway in Rome, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=42"
    },
    "price": 1657,
    "location": "Rome",
    "country": "Italy",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.4964,
        41.9028
      ]
    }
  },
  {
    "title": "Penthouse in São Paulo",
    "description": "Escape to this stunning Penthouse for an unforgettable stay in São Paulo.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=43"
    },
    "price": 1854,
    "location": "São Paulo",
    "country": "Brazil",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -46.6333,
        -23.5505
      ]
    }
  },
  {
    "title": "Designer Flat in New York",
    "description": "A peaceful retreat in New York, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=44"
    },
    "price": 2051,
    "location": "New York",
    "country": "United States",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    }
  },
  {
    "title": "City View Loft in Hong Kong",
    "description": "Wake up to incredible views in Hong Kong at this one-of-a-kind city view loft.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=45"
    },
    "price": 2248,
    "location": "Hong Kong",
    "country": "Hong Kong",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        114.1694,
        22.3193
      ]
    }
  },
  {
    "title": "Historic Residence in Istanbul",
    "description": "A perfect getaway in Istanbul, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=46"
    },
    "price": 2445,
    "location": "Istanbul",
    "country": "Turkey",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        28.9784,
        41.0082
      ]
    }
  },
  {
    "title": "Skyline Suite in Buenos Aires",
    "description": "Escape to this stunning Skyline Suite for an unforgettable stay in Buenos Aires.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=47"
    },
    "price": 2642,
    "location": "Buenos Aires",
    "country": "Argentina",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -58.3816,
        -34.6037
      ]
    }
  },
  {
    "title": "Riverside Flat in Cairo",
    "description": "A peaceful retreat in Cairo, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=48"
    },
    "price": 2839,
    "location": "Cairo",
    "country": "Egypt",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        31.2357,
        30.0444
      ]
    }
  },
  {
    "title": "Modern Apartment in Shanghai #2",
    "description": "Wake up to incredible views in Shanghai at this one-of-a-kind modern apartment.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=49"
    },
    "price": 3036,
    "location": "Shanghai",
    "country": "China",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        121.4737,
        31.2304
      ]
    }
  },
  {
    "title": "Seaside Apartment in Mumbai #2",
    "description": "A perfect getaway in Mumbai, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=50"
    },
    "price": 3233,
    "location": "Mumbai",
    "country": "India",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        72.8777,
        19.076
      ]
    }
  },
  {
    "title": "Urban Escape in Mexico City #2",
    "description": "Escape to this stunning Urban Escape for an unforgettable stay in Mexico City.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=51"
    },
    "price": 3430,
    "location": "Mexico City",
    "country": "Mexico",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -99.1332,
        19.4326
      ]
    }
  },
  {
    "title": "Heritage Apartment in Moscow #2",
    "description": "A peaceful retreat in Moscow, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=52"
    },
    "price": 3627,
    "location": "Moscow",
    "country": "Russia",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        37.6173,
        55.7558
      ]
    }
  },
  {
    "title": "Penthouse in Bangkok #2",
    "description": "Wake up to incredible views in Bangkok at this one-of-a-kind penthouse.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=53"
    },
    "price": 3824,
    "location": "Bangkok",
    "country": "Thailand",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        100.5018,
        13.7563
      ]
    }
  },
  {
    "title": "Designer Flat in Tokyo #3",
    "description": "A perfect getaway in Tokyo, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=54"
    },
    "price": 4021,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6503,
        35.6762
      ]
    }
  },
  {
    "title": "City View Loft in Barcelona #3",
    "description": "Escape to this stunning City View Loft for an unforgettable stay in Barcelona.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=55"
    },
    "price": 4218,
    "location": "Barcelona",
    "country": "Spain",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.1734,
        41.3851
      ]
    }
  },
  {
    "title": "Historic Residence in Singapore #3",
    "description": "A peaceful retreat in Singapore, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=56"
    },
    "price": 4415,
    "location": "Singapore",
    "country": "Singapore",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        103.8198,
        1.3521
      ]
    }
  },
  {
    "title": "Skyline Suite in Rome #3",
    "description": "Wake up to incredible views in Rome at this one-of-a-kind skyline suite.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/cityskyline?lock=57"
    },
    "price": 4612,
    "location": "Rome",
    "country": "Italy",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.4964,
        41.9028
      ]
    }
  },
  {
    "title": "Alpine Chalet in Aspen",
    "description": "Escape to this stunning Alpine Chalet for an unforgettable stay in Aspen.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=58"
    },
    "price": 1199,
    "location": "Aspen",
    "country": "United States",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Mountain Lodge in Chamonix",
    "description": "A peaceful retreat in Chamonix, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=59"
    },
    "price": 1396,
    "location": "Chamonix",
    "country": "France",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        6.8694,
        45.9237
      ]
    }
  },
  {
    "title": "Rustic Cabin in Interlaken",
    "description": "Wake up to incredible views in Interlaken at this one-of-a-kind rustic cabin.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=60"
    },
    "price": 1593,
    "location": "Interlaken",
    "country": "Switzerland",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.8632,
        46.6863
      ]
    }
  },
  {
    "title": "Hillside Retreat in Banff",
    "description": "A perfect getaway in Banff, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=61"
    },
    "price": 1790,
    "location": "Banff",
    "country": "Canada",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.5708,
        51.1784
      ]
    }
  },
  {
    "title": "Forest Cottage in Queenstown",
    "description": "Escape to this stunning Forest Cottage for an unforgettable stay in Queenstown.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=62"
    },
    "price": 1987,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        168.6626,
        -45.0312
      ]
    }
  },
  {
    "title": "Ski Chalet in Zermatt",
    "description": "A peaceful retreat in Zermatt, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=63"
    },
    "price": 2184,
    "location": "Zermatt",
    "country": "Switzerland",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.7491,
        46.0207
      ]
    }
  },
  {
    "title": "Highland Hut in Manali",
    "description": "Wake up to incredible views in Manali at this one-of-a-kind highland hut.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=64"
    },
    "price": 2381,
    "location": "Manali",
    "country": "India",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.1892,
        32.2432
      ]
    }
  },
  {
    "title": "Peakside Villa in Innsbruck",
    "description": "A perfect getaway in Innsbruck, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=65"
    },
    "price": 2578,
    "location": "Innsbruck",
    "country": "Austria",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.4041,
        47.2692
      ]
    }
  },
  {
    "title": "Timber Cabin in Whistler",
    "description": "Escape to this stunning Timber Cabin for an unforgettable stay in Whistler.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=66"
    },
    "price": 2775,
    "location": "Whistler",
    "country": "Canada",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.9574,
        50.1163
      ]
    }
  },
  {
    "title": "Valley Lodge in Cusco",
    "description": "A peaceful retreat in Cusco, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=67"
    },
    "price": 2972,
    "location": "Cusco",
    "country": "Peru",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.9675,
        -13.5319
      ]
    }
  },
  {
    "title": "Alpine Chalet in Kathmandu #2",
    "description": "Wake up to incredible views in Kathmandu at this one-of-a-kind alpine chalet.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=68"
    },
    "price": 3169,
    "location": "Kathmandu",
    "country": "Nepal",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        85.324,
        27.7172
      ]
    }
  },
  {
    "title": "Mountain Lodge in Bariloche #2",
    "description": "A perfect getaway in Bariloche, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=69"
    },
    "price": 3366,
    "location": "Bariloche",
    "country": "Argentina",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.3103,
        -41.1335
      ]
    }
  },
  {
    "title": "Rustic Cabin in Tirol #2",
    "description": "Escape to this stunning Rustic Cabin for an unforgettable stay in Tirol.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=70"
    },
    "price": 3563,
    "location": "Tirol",
    "country": "Austria",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.4041,
        47.2692
      ]
    }
  },
  {
    "title": "Hillside Retreat in Lake Tahoe #2",
    "description": "A peaceful retreat in Lake Tahoe, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=71"
    },
    "price": 3760,
    "location": "Lake Tahoe",
    "country": "United States",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -120.0324,
        39.0968
      ]
    }
  },
  {
    "title": "Forest Cottage in Dolomites #2",
    "description": "Wake up to incredible views in Dolomites at this one-of-a-kind forest cottage.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=72"
    },
    "price": 3957,
    "location": "Dolomites",
    "country": "Italy",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.85,
        46.4102
      ]
    }
  },
  {
    "title": "Ski Chalet in Aspen #3",
    "description": "A perfect getaway in Aspen, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=73"
    },
    "price": 4154,
    "location": "Aspen",
    "country": "United States",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Highland Hut in Chamonix #3",
    "description": "Escape to this stunning Highland Hut for an unforgettable stay in Chamonix.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=74"
    },
    "price": 4351,
    "location": "Chamonix",
    "country": "France",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        6.8694,
        45.9237
      ]
    }
  },
  {
    "title": "Peakside Villa in Interlaken #3",
    "description": "A peaceful retreat in Interlaken, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=75"
    },
    "price": 4548,
    "location": "Interlaken",
    "country": "Switzerland",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.8632,
        46.6863
      ]
    }
  },
  {
    "title": "Timber Cabin in Banff #3",
    "description": "Wake up to incredible views in Banff at this one-of-a-kind timber cabin.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/mountains?lock=76"
    },
    "price": 4745,
    "location": "Banff",
    "country": "Canada",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.5708,
        51.1784
      ]
    }
  },
  {
    "title": "Medieval Castle in Edinburgh",
    "description": "Escape to this stunning Medieval Castle for an unforgettable stay in Edinburgh.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=77"
    },
    "price": 1332,
    "location": "Edinburgh",
    "country": "United Kingdom",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -3.1883,
        55.9533
      ]
    }
  },
  {
    "title": "Fairytale Chateau in Loire Valley",
    "description": "A peaceful retreat in Loire Valley, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=78"
    },
    "price": 1529,
    "location": "Loire Valley",
    "country": "France",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0.6833,
        47.4167
      ]
    }
  },
  {
    "title": "Stone Fortress in Bavaria",
    "description": "Wake up to incredible views in Bavaria at this one-of-a-kind stone fortress.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=79"
    },
    "price": 1726,
    "location": "Bavaria",
    "country": "Germany",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.4979,
        48.7904
      ]
    }
  },
  {
    "title": "Hilltop Castle in Transylvania",
    "description": "A perfect getaway in Transylvania, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=80"
    },
    "price": 1923,
    "location": "Transylvania",
    "country": "Romania",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        24.7536,
        46.4669
      ]
    }
  },
  {
    "title": "Royal Manor in Tuscany",
    "description": "Escape to this stunning Royal Manor for an unforgettable stay in Tuscany.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=81"
    },
    "price": 2120,
    "location": "Tuscany",
    "country": "Italy",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.13,
        43.4711
      ]
    }
  },
  {
    "title": "Gothic Keep in Cotswolds",
    "description": "A peaceful retreat in Cotswolds, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=82"
    },
    "price": 2317,
    "location": "Cotswolds",
    "country": "United Kingdom",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -1.8,
        51.833
      ]
    }
  },
  {
    "title": "Riverside Chateau in Salzburg",
    "description": "Wake up to incredible views in Salzburg at this one-of-a-kind riverside chateau.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=83"
    },
    "price": 2514,
    "location": "Salzburg",
    "country": "Austria",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        13.055,
        47.8095
      ]
    }
  },
  {
    "title": "Ancient Citadel in Wales",
    "description": "A perfect getaway in Wales, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=84"
    },
    "price": 2711,
    "location": "Wales",
    "country": "United Kingdom",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -3.7837,
        52.1307
      ]
    }
  },
  {
    "title": "Turreted Manor in Burgundy",
    "description": "Escape to this stunning Turreted Manor for an unforgettable stay in Burgundy.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=85"
    },
    "price": 2908,
    "location": "Burgundy",
    "country": "France",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        4.65,
        47.2167
      ]
    }
  },
  {
    "title": "Countryside Castle in Prague",
    "description": "A peaceful retreat in Prague, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=86"
    },
    "price": 3105,
    "location": "Prague",
    "country": "Czech Republic",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.4378,
        50.0755
      ]
    }
  },
  {
    "title": "Medieval Castle in Andalusia #2",
    "description": "Wake up to incredible views in Andalusia at this one-of-a-kind medieval castle.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=87"
    },
    "price": 3302,
    "location": "Andalusia",
    "country": "Spain",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.5345,
        37.5443
      ]
    }
  },
  {
    "title": "Fairytale Chateau in Loch Ness #2",
    "description": "A perfect getaway in Loch Ness, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=88"
    },
    "price": 3499,
    "location": "Loch Ness",
    "country": "United Kingdom",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.4244,
        57.3229
      ]
    }
  },
  {
    "title": "Stone Fortress in Rhine Valley #2",
    "description": "Escape to this stunning Stone Fortress for an unforgettable stay in Rhine Valley.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=89"
    },
    "price": 3696,
    "location": "Rhine Valley",
    "country": "Germany",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.6261,
        50.3569
      ]
    }
  },
  {
    "title": "Hilltop Castle in Carcassonne #2",
    "description": "A peaceful retreat in Carcassonne, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=90"
    },
    "price": 3893,
    "location": "Carcassonne",
    "country": "France",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.3639,
        43.213
      ]
    }
  },
  {
    "title": "Royal Manor in Bran #2",
    "description": "Wake up to incredible views in Bran at this one-of-a-kind royal manor.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=91"
    },
    "price": 4090,
    "location": "Bran",
    "country": "Romania",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.3672,
        45.5149
      ]
    }
  },
  {
    "title": "Gothic Keep in Edinburgh #3",
    "description": "A perfect getaway in Edinburgh, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=92"
    },
    "price": 4287,
    "location": "Edinburgh",
    "country": "United Kingdom",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -3.1883,
        55.9533
      ]
    }
  },
  {
    "title": "Riverside Chateau in Loire Valley #3",
    "description": "Escape to this stunning Riverside Chateau for an unforgettable stay in Loire Valley.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=93"
    },
    "price": 4484,
    "location": "Loire Valley",
    "country": "France",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0.6833,
        47.4167
      ]
    }
  },
  {
    "title": "Ancient Citadel in Bavaria #3",
    "description": "A peaceful retreat in Bavaria, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=94"
    },
    "price": 4681,
    "location": "Bavaria",
    "country": "Germany",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.4979,
        48.7904
      ]
    }
  },
  {
    "title": "Turreted Manor in Transylvania #3",
    "description": "Wake up to incredible views in Transylvania at this one-of-a-kind turreted manor.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/castle?lock=95"
    },
    "price": 4878,
    "location": "Transylvania",
    "country": "Romania",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        24.7536,
        46.4669
      ]
    }
  },
  {
    "title": "Infinity Pool Villa in Phuket",
    "description": "Escape to this stunning Infinity Pool Villa for an unforgettable stay in Phuket.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=96"
    },
    "price": 1465,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        98.3923,
        7.8804
      ]
    }
  },
  {
    "title": "Resort-Style Villa in Bali",
    "description": "A peaceful retreat in Bali, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=97"
    },
    "price": 1662,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Poolside Bungalow in Cabo San Lucas",
    "description": "Wake up to incredible views in Cabo San Lucas at this one-of-a-kind poolside bungalow.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=98"
    },
    "price": 1859,
    "location": "Cabo San Lucas",
    "country": "Mexico",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.9167,
        22.8905
      ]
    }
  },
  {
    "title": "Lagoon Villa in Marrakech",
    "description": "A perfect getaway in Marrakech, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=99"
    },
    "price": 2056,
    "location": "Marrakech",
    "country": "Morocco",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -7.9811,
        31.6295
      ]
    }
  },
  {
    "title": "Cliffside Pool House in Ibiza",
    "description": "Escape to this stunning Cliffside Pool House for an unforgettable stay in Ibiza.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=100"
    },
    "price": 2253,
    "location": "Ibiza",
    "country": "Spain",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        1.4206,
        38.9067
      ]
    }
  },
  {
    "title": "Tropical Pool Villa in Palm Springs",
    "description": "A peaceful retreat in Palm Springs, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=101"
    },
    "price": 2450,
    "location": "Palm Springs",
    "country": "United States",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -116.5453,
        33.8303
      ]
    }
  },
  {
    "title": "Desert Pool Retreat in Tulum",
    "description": "Wake up to incredible views in Tulum at this one-of-a-kind desert pool retreat.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=102"
    },
    "price": 2647,
    "location": "Tulum",
    "country": "Mexico",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -87.4653,
        20.2114
      ]
    }
  },
  {
    "title": "Garden Pool House in Santorini",
    "description": "A perfect getaway in Santorini, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=103"
    },
    "price": 2844,
    "location": "Santorini",
    "country": "Greece",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.4615,
        36.3932
      ]
    }
  },
  {
    "title": "Rooftop Pool Suite in Maldives",
    "description": "Escape to this stunning Rooftop Pool Suite for an unforgettable stay in Maldives.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=104"
    },
    "price": 3041,
    "location": "Maldives",
    "country": "Maldives",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.2207,
        3.2028
      ]
    }
  },
  {
    "title": "Oasis Villa in Costa Rica",
    "description": "A peaceful retreat in Costa Rica, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=105"
    },
    "price": 3238,
    "location": "Costa Rica",
    "country": "Costa Rica",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.0907,
        9.7489
      ]
    }
  },
  {
    "title": "Infinity Pool Villa in Sicily #2",
    "description": "Wake up to incredible views in Sicily at this one-of-a-kind infinity pool villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=106"
    },
    "price": 3435,
    "location": "Sicily",
    "country": "Italy",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.0154,
        37.5994
      ]
    }
  },
  {
    "title": "Resort-Style Villa in Phuket #2",
    "description": "A perfect getaway in Phuket, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=107"
    },
    "price": 3632,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        98.3923,
        7.8804
      ]
    }
  },
  {
    "title": "Poolside Bungalow in Algarve #2",
    "description": "Escape to this stunning Poolside Bungalow for an unforgettable stay in Algarve.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=108"
    },
    "price": 3829,
    "location": "Algarve",
    "country": "Portugal",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -8.0192,
        37.133
      ]
    }
  },
  {
    "title": "Lagoon Villa in Seminyak #2",
    "description": "A peaceful retreat in Seminyak, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=109"
    },
    "price": 4026,
    "location": "Seminyak",
    "country": "Indonesia",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1686,
        -8.6912
      ]
    }
  },
  {
    "title": "Cliffside Pool House in Dubai #2",
    "description": "Wake up to incredible views in Dubai at this one-of-a-kind cliffside pool house.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=110"
    },
    "price": 4223,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.2708,
        25.2048
      ]
    }
  },
  {
    "title": "Tropical Pool Villa in Phuket #3",
    "description": "A perfect getaway in Phuket, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=111"
    },
    "price": 4420,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        98.3923,
        7.8804
      ]
    }
  },
  {
    "title": "Desert Pool Retreat in Bali #3",
    "description": "Escape to this stunning Desert Pool Retreat for an unforgettable stay in Bali.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=112"
    },
    "price": 4617,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Garden Pool House in Cabo San Lucas #3",
    "description": "A peaceful retreat in Cabo San Lucas, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=113"
    },
    "price": 4814,
    "location": "Cabo San Lucas",
    "country": "Mexico",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.9167,
        22.8905
      ]
    }
  },
  {
    "title": "Rooftop Pool Suite in Marrakech #3",
    "description": "Wake up to incredible views in Marrakech at this one-of-a-kind rooftop pool suite.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/swimmingpool?lock=114"
    },
    "price": 5011,
    "location": "Marrakech",
    "country": "Morocco",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -7.9811,
        31.6295
      ]
    }
  },
  {
    "title": "Glamping Tent in Yosemite",
    "description": "Escape to this stunning Glamping Tent for an unforgettable stay in Yosemite.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=115"
    },
    "price": 1598,
    "location": "Yosemite",
    "country": "United States",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -119.5383,
        37.8651
      ]
    }
  },
  {
    "title": "Forest Campsite in Serengeti",
    "description": "A peaceful retreat in Serengeti, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=116"
    },
    "price": 1795,
    "location": "Serengeti",
    "country": "Tanzania",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        34.8333,
        -2.3333
      ]
    }
  },
  {
    "title": "Riverside Camp in Lake District",
    "description": "Wake up to incredible views in Lake District at this one-of-a-kind riverside camp.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=117"
    },
    "price": 1992,
    "location": "Lake District",
    "country": "United Kingdom",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -3.089,
        54.4609
      ]
    }
  },
  {
    "title": "Safari Tent in Patagonia",
    "description": "A perfect getaway in Patagonia, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=118"
    },
    "price": 2189,
    "location": "Patagonia",
    "country": "Chile",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71,
        -45
      ]
    }
  },
  {
    "title": "Wilderness Camp in Yellowstone",
    "description": "Escape to this stunning Wilderness Camp for an unforgettable stay in Yellowstone.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=119"
    },
    "price": 2386,
    "location": "Yellowstone",
    "country": "United States",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.5885,
        44.428
      ]
    }
  },
  {
    "title": "Canvas Tent Retreat in Outback",
    "description": "A peaceful retreat in Outback, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=120"
    },
    "price": 2583,
    "location": "Outback",
    "country": "Australia",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        134,
        -25
      ]
    }
  },
  {
    "title": "Lakeside Campsite in Black Forest",
    "description": "Wake up to incredible views in Black Forest at this one-of-a-kind lakeside campsite.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=121"
    },
    "price": 2780,
    "location": "Black Forest",
    "country": "Germany",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        8.1519,
        48.15
      ]
    }
  },
  {
    "title": "Mountain Glamp Site in Sahara Desert",
    "description": "A perfect getaway in Sahara Desert, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=122"
    },
    "price": 2977,
    "location": "Sahara Desert",
    "country": "Morocco",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        9,
        23
      ]
    }
  },
  {
    "title": "Desert Camp in Rocky Mountains",
    "description": "Escape to this stunning Desert Camp for an unforgettable stay in Rocky Mountains.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=123"
    },
    "price": 3174,
    "location": "Rocky Mountains",
    "country": "Canada",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.7821,
        39.5501
      ]
    }
  },
  {
    "title": "Treehouse Camp in Amazon Rainforest",
    "description": "A peaceful retreat in Amazon Rainforest, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=124"
    },
    "price": 3371,
    "location": "Amazon Rainforest",
    "country": "Brazil",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -62.2159,
        -3.4653
      ]
    }
  },
  {
    "title": "Glamping Tent in Scottish Highlands #2",
    "description": "Wake up to incredible views in Scottish Highlands at this one-of-a-kind glamping tent.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=125"
    },
    "price": 3568,
    "location": "Scottish Highlands",
    "country": "United Kingdom",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.75,
        57.2
      ]
    }
  },
  {
    "title": "Forest Campsite in Joshua Tree #2",
    "description": "A perfect getaway in Joshua Tree, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=126"
    },
    "price": 3765,
    "location": "Joshua Tree",
    "country": "United States",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -116.3131,
        34.1347
      ]
    }
  },
  {
    "title": "Riverside Camp in Kruger Park #2",
    "description": "Escape to this stunning Riverside Camp for an unforgettable stay in Kruger Park.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=127"
    },
    "price": 3962,
    "location": "Kruger Park",
    "country": "South Africa",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        31.5547,
        -23.9884
      ]
    }
  },
  {
    "title": "Safari Tent in Himalayas #2",
    "description": "A peaceful retreat in Himalayas, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=128"
    },
    "price": 4159,
    "location": "Himalayas",
    "country": "Nepal",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        86.925,
        27.9881
      ]
    }
  },
  {
    "title": "Wilderness Camp in Big Sur #2",
    "description": "Wake up to incredible views in Big Sur at this one-of-a-kind wilderness camp.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=129"
    },
    "price": 4356,
    "location": "Big Sur",
    "country": "United States",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -121.8081,
        36.2704
      ]
    }
  },
  {
    "title": "Canvas Tent Retreat in Yosemite #3",
    "description": "A perfect getaway in Yosemite, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=130"
    },
    "price": 4553,
    "location": "Yosemite",
    "country": "United States",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -119.5383,
        37.8651
      ]
    }
  },
  {
    "title": "Lakeside Campsite in Serengeti #3",
    "description": "Escape to this stunning Lakeside Campsite for an unforgettable stay in Serengeti.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=131"
    },
    "price": 4750,
    "location": "Serengeti",
    "country": "Tanzania",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        34.8333,
        -2.3333
      ]
    }
  },
  {
    "title": "Mountain Glamp Site in Lake District #3",
    "description": "A peaceful retreat in Lake District, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=132"
    },
    "price": 4947,
    "location": "Lake District",
    "country": "United Kingdom",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -3.089,
        54.4609
      ]
    }
  },
  {
    "title": "Desert Camp in Patagonia #3",
    "description": "Wake up to incredible views in Patagonia at this one-of-a-kind desert camp.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/camping,tent?lock=133"
    },
    "price": 5144,
    "location": "Patagonia",
    "country": "Chile",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71,
        -45
      ]
    }
  },
  {
    "title": "Country Farmhouse in Tuscany",
    "description": "Escape to this stunning Country Farmhouse for an unforgettable stay in Tuscany.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=134"
    },
    "price": 1731,
    "location": "Tuscany",
    "country": "Italy",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.13,
        43.4711
      ]
    }
  },
  {
    "title": "Vineyard Cottage in Provence",
    "description": "A peaceful retreat in Provence, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=135"
    },
    "price": 1928,
    "location": "Provence",
    "country": "France",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        5.4474,
        43.9352
      ]
    }
  },
  {
    "title": "Rustic Barn House in Napa Valley",
    "description": "Wake up to incredible views in Napa Valley at this one-of-a-kind rustic barn house.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=136"
    },
    "price": 2125,
    "location": "Napa Valley",
    "country": "United States",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.2869,
        38.5025
      ]
    }
  },
  {
    "title": "Working Farm Stay in Cotswolds",
    "description": "A perfect getaway in Cotswolds, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=137"
    },
    "price": 2322,
    "location": "Cotswolds",
    "country": "United Kingdom",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -1.8,
        51.833
      ]
    }
  },
  {
    "title": "Orchard Cottage in Yarra Valley",
    "description": "Escape to this stunning Orchard Cottage for an unforgettable stay in Yarra Valley.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=138"
    },
    "price": 2519,
    "location": "Yarra Valley",
    "country": "Australia",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        145.44,
        -37.65
      ]
    }
  },
  {
    "title": "Ranch House in Stellenbosch",
    "description": "A peaceful retreat in Stellenbosch, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=139"
    },
    "price": 2716,
    "location": "Stellenbosch",
    "country": "South Africa",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.8602,
        -33.9321
      ]
    }
  },
  {
    "title": "Olive Grove Villa in Mendoza",
    "description": "Wake up to incredible views in Mendoza at this one-of-a-kind olive grove villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=140"
    },
    "price": 2913,
    "location": "Mendoza",
    "country": "Argentina",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -68.8458,
        -32.8895
      ]
    }
  },
  {
    "title": "Countryside Farmhouse in Loire Valley",
    "description": "A perfect getaway in Loire Valley, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=141"
    },
    "price": 3110,
    "location": "Loire Valley",
    "country": "France",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0.6833,
        47.4167
      ]
    }
  },
  {
    "title": "Dairy Farm Cottage in Marlborough",
    "description": "Escape to this stunning Dairy Farm Cottage for an unforgettable stay in Marlborough.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=142"
    },
    "price": 3307,
    "location": "Marlborough",
    "country": "New Zealand",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        173.8,
        -41.5
      ]
    }
  },
  {
    "title": "Hillside Vineyard Home in Douro Valley",
    "description": "A peaceful retreat in Douro Valley, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=143"
    },
    "price": 3504,
    "location": "Douro Valley",
    "country": "Portugal",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -7.7833,
        41.1667
      ]
    }
  },
  {
    "title": "Country Farmhouse in Kerala #2",
    "description": "Wake up to incredible views in Kerala at this one-of-a-kind country farmhouse.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=144"
    },
    "price": 3701,
    "location": "Kerala",
    "country": "India",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.2711,
        10.8505
      ]
    }
  },
  {
    "title": "Vineyard Cottage in Bavaria #2",
    "description": "A perfect getaway in Bavaria, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=145"
    },
    "price": 3898,
    "location": "Bavaria",
    "country": "Germany",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.4979,
        48.7904
      ]
    }
  },
  {
    "title": "Rustic Barn House in Punjab #2",
    "description": "Escape to this stunning Rustic Barn House for an unforgettable stay in Punjab.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=146"
    },
    "price": 4095,
    "location": "Punjab",
    "country": "India",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.3412,
        31.1471
      ]
    }
  },
  {
    "title": "Working Farm Stay in Normandy #2",
    "description": "A peaceful retreat in Normandy, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=147"
    },
    "price": 4292,
    "location": "Normandy",
    "country": "France",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0.1,
        49.1829
      ]
    }
  },
  {
    "title": "Orchard Cottage in Vermont #2",
    "description": "Wake up to incredible views in Vermont at this one-of-a-kind orchard cottage.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=148"
    },
    "price": 4489,
    "location": "Vermont",
    "country": "United States",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -72.5778,
        44.0459
      ]
    }
  },
  {
    "title": "Ranch House in Tuscany #3",
    "description": "A perfect getaway in Tuscany, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=149"
    },
    "price": 4686,
    "location": "Tuscany",
    "country": "Italy",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.13,
        43.4711
      ]
    }
  },
  {
    "title": "Olive Grove Villa in Provence #3",
    "description": "Escape to this stunning Olive Grove Villa for an unforgettable stay in Provence.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=150"
    },
    "price": 4883,
    "location": "Provence",
    "country": "France",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        5.4474,
        43.9352
      ]
    }
  },
  {
    "title": "Countryside Farmhouse in Napa Valley #3",
    "description": "A peaceful retreat in Napa Valley, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=151"
    },
    "price": 5080,
    "location": "Napa Valley",
    "country": "United States",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.2869,
        38.5025
      ]
    }
  },
  {
    "title": "Dairy Farm Cottage in Cotswolds #3",
    "description": "Wake up to incredible views in Cotswolds at this one-of-a-kind dairy farm cottage.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/farm,countryside?lock=152"
    },
    "price": 5277,
    "location": "Cotswolds",
    "country": "United Kingdom",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -1.8,
        51.833
      ]
    }
  },
  {
    "title": "Northern Lights Cabin in Rovaniemi",
    "description": "Escape to this stunning Northern Lights Cabin for an unforgettable stay in Rovaniemi.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=153"
    },
    "price": 1864,
    "location": "Rovaniemi",
    "country": "Finland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.7294,
        66.5039
      ]
    }
  },
  {
    "title": "Arctic Cabin in Tromsø",
    "description": "A peaceful retreat in Tromsø, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=154"
    },
    "price": 2061,
    "location": "Tromsø",
    "country": "Norway",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.9553,
        69.6492
      ]
    }
  },
  {
    "title": "Geothermal Cottage in Reykjavik",
    "description": "Wake up to incredible views in Reykjavik at this one-of-a-kind geothermal cottage.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=155"
    },
    "price": 2258,
    "location": "Reykjavik",
    "country": "Iceland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -21.9426,
        64.1466
      ]
    }
  },
  {
    "title": "Wilderness Cabin in Longyearbyen",
    "description": "A perfect getaway in Longyearbyen, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=156"
    },
    "price": 2455,
    "location": "Longyearbyen",
    "country": "Norway",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        15.6267,
        78.2232
      ]
    }
  },
  {
    "title": "Aurora Dome in Abisko",
    "description": "Escape to this stunning Aurora Dome for an unforgettable stay in Abisko.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=157"
    },
    "price": 2652,
    "location": "Abisko",
    "country": "Sweden",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.8298,
        68.3559
      ]
    }
  },
  {
    "title": "Glacier View Lodge in El Calafate",
    "description": "A peaceful retreat in El Calafate, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=158"
    },
    "price": 2849,
    "location": "El Calafate",
    "country": "Argentina",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -72.2649,
        -50.3379
      ]
    }
  },
  {
    "title": "Snow Cabin in Yellowknife",
    "description": "Wake up to incredible views in Yellowknife at this one-of-a-kind snow cabin.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=159"
    },
    "price": 3046,
    "location": "Yellowknife",
    "country": "Canada",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.3718,
        62.454
      ]
    }
  },
  {
    "title": "Polar Retreat in Murmansk",
    "description": "A perfect getaway in Murmansk, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=160"
    },
    "price": 3243,
    "location": "Murmansk",
    "country": "Russia",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        33.0827,
        68.9585
      ]
    }
  },
  {
    "title": "Icefjord Cottage in Ilulissat",
    "description": "Escape to this stunning Icefjord Cottage for an unforgettable stay in Ilulissat.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=161"
    },
    "price": 3440,
    "location": "Ilulissat",
    "country": "Greenland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -51.1,
        69.2167
      ]
    }
  },
  {
    "title": "Tundra Lodge in Kiruna",
    "description": "A peaceful retreat in Kiruna, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=162"
    },
    "price": 3637,
    "location": "Kiruna",
    "country": "Sweden",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        20.2253,
        67.8558
      ]
    }
  },
  {
    "title": "Northern Lights Cabin in Fairbanks #2",
    "description": "Wake up to incredible views in Fairbanks at this one-of-a-kind northern lights cabin.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=163"
    },
    "price": 3834,
    "location": "Fairbanks",
    "country": "United States",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -147.7164,
        64.8378
      ]
    }
  },
  {
    "title": "Arctic Cabin in Akureyri #2",
    "description": "A perfect getaway in Akureyri, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=164"
    },
    "price": 4031,
    "location": "Akureyri",
    "country": "Iceland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -18.0878,
        65.6885
      ]
    }
  },
  {
    "title": "Geothermal Cottage in Nuuk #2",
    "description": "Escape to this stunning Geothermal Cottage for an unforgettable stay in Nuuk.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=165"
    },
    "price": 4228,
    "location": "Nuuk",
    "country": "Greenland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -51.7216,
        64.1835
      ]
    }
  },
  {
    "title": "Wilderness Cabin in Inari #2",
    "description": "A peaceful retreat in Inari, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=166"
    },
    "price": 4425,
    "location": "Inari",
    "country": "Finland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        27.025,
        68.9056
      ]
    }
  },
  {
    "title": "Aurora Dome in Churchill #2",
    "description": "Wake up to incredible views in Churchill at this one-of-a-kind aurora dome.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=167"
    },
    "price": 4622,
    "location": "Churchill",
    "country": "Canada",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -94.1813,
        58.7684
      ]
    }
  },
  {
    "title": "Glacier View Lodge in Rovaniemi #3",
    "description": "A perfect getaway in Rovaniemi, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=168"
    },
    "price": 4819,
    "location": "Rovaniemi",
    "country": "Finland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.7294,
        66.5039
      ]
    }
  },
  {
    "title": "Snow Cabin in Tromsø #3",
    "description": "Escape to this stunning Snow Cabin for an unforgettable stay in Tromsø.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=169"
    },
    "price": 5016,
    "location": "Tromsø",
    "country": "Norway",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.9553,
        69.6492
      ]
    }
  },
  {
    "title": "Polar Retreat in Reykjavik #3",
    "description": "A peaceful retreat in Reykjavik, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=170"
    },
    "price": 5213,
    "location": "Reykjavik",
    "country": "Iceland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -21.9426,
        64.1466
      ]
    }
  },
  {
    "title": "Icefjord Cottage in Longyearbyen #3",
    "description": "Wake up to incredible views in Longyearbyen at this one-of-a-kind icefjord cottage.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/snow,arctic?lock=171"
    },
    "price": 5410,
    "location": "Longyearbyen",
    "country": "Norway",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        15.6267,
        78.2232
      ]
    }
  },
  {
    "title": "Private Island Retreat in Fiji",
    "description": "Escape to this stunning Private Island Retreat for an unforgettable stay in Fiji.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=172"
    },
    "price": 1997,
    "location": "Fiji",
    "country": "Fiji",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        178.065,
        -17.7134
      ]
    }
  },
  {
    "title": "Eco Lodge in Galápagos Islands",
    "description": "A peaceful retreat in Galápagos Islands, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=173"
    },
    "price": 2194,
    "location": "Galápagos Islands",
    "country": "Ecuador",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -90.9656,
        -0.7393
      ]
    }
  },
  {
    "title": "Bubble Dome in Chamonix",
    "description": "Wake up to incredible views in Chamonix at this one-of-a-kind bubble dome.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=174"
    },
    "price": 2391,
    "location": "Chamonix",
    "country": "France",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        6.8694,
        45.9237
      ]
    }
  },
  {
    "title": "Geodesic Dome in Inverness",
    "description": "A perfect getaway in Inverness, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=175"
    },
    "price": 2588,
    "location": "Inverness",
    "country": "United Kingdom",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.2245,
        57.4778
      ]
    }
  },
  {
    "title": "Desert Dome in Sedona",
    "description": "Escape to this stunning Desert Dome for an unforgettable stay in Sedona.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=176"
    },
    "price": 2785,
    "location": "Sedona",
    "country": "United States",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.761,
        34.8697
      ]
    }
  },
  {
    "title": "Jungle Dome in Manaus",
    "description": "A peaceful retreat in Manaus, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=177"
    },
    "price": 2982,
    "location": "Manaus",
    "country": "Brazil",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -60.0217,
        -3.119
      ]
    }
  },
  {
    "title": "Stargazing Dome in Joshua Tree",
    "description": "Wake up to incredible views in Joshua Tree at this one-of-a-kind stargazing dome.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=178"
    },
    "price": 3179,
    "location": "Joshua Tree",
    "country": "United States",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -116.3131,
        34.1347
      ]
    }
  },
  {
    "title": "Transparent Pod in Tasmania",
    "description": "A perfect getaway in Tasmania, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=179"
    },
    "price": 3376,
    "location": "Tasmania",
    "country": "Australia",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        146.8087,
        -41.4545
      ]
    }
  },
  {
    "title": "Forest Dome in Costa Rica",
    "description": "Escape to this stunning Forest Dome for an unforgettable stay in Costa Rica.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=180"
    },
    "price": 3573,
    "location": "Costa Rica",
    "country": "Costa Rica",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.0907,
        9.7489
      ]
    }
  },
  {
    "title": "Glass Dome Retreat in Atacama Desert",
    "description": "A peaceful retreat in Atacama Desert, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=181"
    },
    "price": 3770,
    "location": "Atacama Desert",
    "country": "Chile",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -69.1257,
        -23.65
      ]
    }
  },
  {
    "title": "Private Island Retreat in Bali #2",
    "description": "Wake up to incredible views in Bali at this one-of-a-kind private island retreat.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=182"
    },
    "price": 3967,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Eco Lodge in Lapland #2",
    "description": "A perfect getaway in Lapland, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=183"
    },
    "price": 4164,
    "location": "Lapland",
    "country": "Finland",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        27,
        67.5
      ]
    }
  },
  {
    "title": "Bubble Dome in New Zealand #2",
    "description": "Escape to this stunning Bubble Dome for an unforgettable stay in New Zealand.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=184"
    },
    "price": 4361,
    "location": "New Zealand",
    "country": "New Zealand",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        174.886,
        -40.9006
      ]
    }
  },
  {
    "title": "Geodesic Dome in Banff #2",
    "description": "A peaceful retreat in Banff, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=185"
    },
    "price": 4558,
    "location": "Banff",
    "country": "Canada",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.5708,
        51.1784
      ]
    }
  },
  {
    "title": "Desert Dome in Slovenia #2",
    "description": "Wake up to incredible views in Slovenia at this one-of-a-kind desert dome.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=186"
    },
    "price": 4755,
    "location": "Slovenia",
    "country": "Slovenia",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.9955,
        46.1512
      ]
    }
  },
  {
    "title": "Jungle Dome in Fiji #3",
    "description": "A perfect getaway in Fiji, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=187"
    },
    "price": 4952,
    "location": "Fiji",
    "country": "Fiji",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        178.065,
        -17.7134
      ]
    }
  },
  {
    "title": "Stargazing Dome in Galápagos Islands #3",
    "description": "Escape to this stunning Stargazing Dome for an unforgettable stay in Galápagos Islands.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=188"
    },
    "price": 5149,
    "location": "Galápagos Islands",
    "country": "Ecuador",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -90.9656,
        -0.7393
      ]
    }
  },
  {
    "title": "Transparent Pod in Chamonix #3",
    "description": "A peaceful retreat in Chamonix, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=189"
    },
    "price": 5346,
    "location": "Chamonix",
    "country": "France",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        6.8694,
        45.9237
      ]
    }
  },
  {
    "title": "Forest Dome in Inverness #3",
    "description": "Wake up to incredible views in Inverness at this one-of-a-kind forest dome.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/geodesicdome?lock=190"
    },
    "price": 5543,
    "location": "Inverness",
    "country": "United Kingdom",
    "category": "Domes",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.2245,
        57.4778
      ]
    }
  },
  {
    "title": "Houseboat in Alleppey",
    "description": "Escape to this stunning Houseboat for an unforgettable stay in Alleppey.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=191"
    },
    "price": 2130,
    "location": "Alleppey",
    "country": "India",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.3388,
        9.4981
      ]
    }
  },
  {
    "title": "Floating Villa in Bangkok",
    "description": "A peaceful retreat in Bangkok, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=192"
    },
    "price": 2327,
    "location": "Bangkok",
    "country": "Thailand",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        100.5018,
        13.7563
      ]
    }
  },
  {
    "title": "Sailing Yacht in Athens",
    "description": "Wake up to incredible views in Athens at this one-of-a-kind sailing yacht.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=193"
    },
    "price": 2524,
    "location": "Athens",
    "country": "Greece",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        23.7275,
        37.9838
      ]
    }
  },
  {
    "title": "Canal Boat in Amsterdam",
    "description": "A perfect getaway in Amsterdam, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=194"
    },
    "price": 2721,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        4.9041,
        52.3676
      ]
    }
  },
  {
    "title": "Luxury Catamaran in St. Lucia",
    "description": "Escape to this stunning Luxury Catamaran for an unforgettable stay in St. Lucia.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=195"
    },
    "price": 2918,
    "location": "St. Lucia",
    "country": "Saint Lucia",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -60.9789,
        13.9094
      ]
    }
  },
  {
    "title": "Waterfront Loft in Sydney",
    "description": "A peaceful retreat in Sydney, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=196"
    },
    "price": 3115,
    "location": "Sydney",
    "country": "Australia",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        151.2093,
        -33.8688
      ]
    }
  },
  {
    "title": "River Barge in Kashmir",
    "description": "Wake up to incredible views in Kashmir at this one-of-a-kind river barge.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=197"
    },
    "price": 3312,
    "location": "Kashmir",
    "country": "India",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.7973,
        34.0837
      ]
    }
  },
  {
    "title": "Floating Bungalow in Seattle",
    "description": "A perfect getaway in Seattle, ideal for couples, families, or solo explorers.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=198"
    },
    "price": 3509,
    "location": "Seattle",
    "country": "United States",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.3321,
        47.6062
      ]
    }
  },
  {
    "title": "Anchored Yacht in Venice",
    "description": "Escape to this stunning Anchored Yacht for an unforgettable stay in Venice.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=199"
    },
    "price": 3706,
    "location": "Venice",
    "country": "Italy",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.3155,
        45.4408
      ]
    }
  },
  {
    "title": "Lake Houseboat in Split",
    "description": "A peaceful retreat in Split, perfect for travelers seeking comfort and character.",
    "image": {
      "filename": "listingimage",
      "url": "https://loremflickr.com/800/600/houseboat?lock=200"
    },
    "price": 3903,
    "location": "Split",
    "country": "Croatia",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        16.4402,
        43.5081
      ]
    }
  }
];

module.exports = { data: sampleListings };