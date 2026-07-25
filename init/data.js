const sampleListings = [
  {
    "title": "Beachfront Cottage in Malibu",
    "description": "Escape to this stunning Beachfront Cottage for an unforgettable stay in Malibu.",
    "image": {
      "filename": "listingimage",
      "url": "https://picsum.photos/seed/Trending-Malibu-0/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Santorini-1/800/600"
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
      "url": "https://picsum.photos/seed/Trending-BoraBora-2/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Paris-3/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Bali-4/800/600"
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
      "url": "https://picsum.photos/seed/Trending-MiamiBeach-5/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Phuket-6/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Ibiza-7/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Cancun-8/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Capri-9/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Maldives-10/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Mykonos-11/800/600"
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
      "url": "https://picsum.photos/seed/Trending-CapeTown-12/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Dubai-13/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Goa-14/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Malibu-15/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Santorini-16/800/600"
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
      "url": "https://picsum.photos/seed/Trending-BoraBora-17/800/600"
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
      "url": "https://picsum.photos/seed/Trending-Paris-18/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-NewYorkCity-19/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Miami-20/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-LosAngeles-21/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-London-22/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Lisbon-23/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Amsterdam-24/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Berlin-25/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Vienna-26/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Prague-27/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Dublin-28/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Toronto-29/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Seoul-30/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Melbourne-31/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Copenhagen-32/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Madrid-33/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-NewYorkCity-34/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-Miami-35/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-LosAngeles-36/800/600"
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
      "url": "https://picsum.photos/seed/Rooms-London-37/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Tokyo-38/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Barcelona-39/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Singapore-40/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Rome-41/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-S%C3%A3oPaulo-42/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-NewYork-43/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-HongKong-44/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Istanbul-45/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-BuenosAires-46/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Cairo-47/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Shanghai-48/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Mumbai-49/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-MexicoCity-50/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Moscow-51/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Bangkok-52/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Tokyo-53/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Barcelona-54/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Singapore-55/800/600"
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
      "url": "https://picsum.photos/seed/IconicCities-Rome-56/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Aspen-57/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Chamonix-58/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Interlaken-59/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Banff-60/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Queenstown-61/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Zermatt-62/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Manali-63/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Innsbruck-64/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Whistler-65/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Cusco-66/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Kathmandu-67/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Bariloche-68/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Tirol-69/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-LakeTahoe-70/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Dolomites-71/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Aspen-72/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Chamonix-73/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Interlaken-74/800/600"
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
      "url": "https://picsum.photos/seed/Mountains-Banff-75/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Edinburgh-76/800/600"
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
      "url": "https://picsum.photos/seed/Castles-LoireValley-77/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Bavaria-78/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Transylvania-79/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Tuscany-80/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Cotswolds-81/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Salzburg-82/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Wales-83/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Burgundy-84/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Prague-85/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Andalusia-86/800/600"
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
      "url": "https://picsum.photos/seed/Castles-LochNess-87/800/600"
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
      "url": "https://picsum.photos/seed/Castles-RhineValley-88/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Carcassonne-89/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Bran-90/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Edinburgh-91/800/600"
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
      "url": "https://picsum.photos/seed/Castles-LoireValley-92/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Bavaria-93/800/600"
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
      "url": "https://picsum.photos/seed/Castles-Transylvania-94/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Phuket-95/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Bali-96/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-CaboSanLucas-97/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Marrakech-98/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Ibiza-99/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-PalmSprings-100/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Tulum-101/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Santorini-102/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Maldives-103/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-CostaRica-104/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Sicily-105/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Phuket-106/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Algarve-107/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Seminyak-108/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Dubai-109/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Phuket-110/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Bali-111/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-CaboSanLucas-112/800/600"
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
      "url": "https://picsum.photos/seed/AmazingPools-Marrakech-113/800/600"
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
      "url": "https://picsum.photos/seed/Camping-Yosemite-114/800/600"
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
      "url": "https://picsum.photos/seed/Camping-Serengeti-115/800/600"
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
      "url": "https://picsum.photos/seed/Camping-LakeDistrict-116/800/600"
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
      "url": "https://picsum.photos/seed/Camping-Patagonia-117/800/600"
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
      "url": "https://picsum.photos/seed/Camping-Yellowstone-118/800/600"
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
      "url": "https://picsum.photos/seed/Camping-Outback-119/800/600"
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
      "url": "https://picsum.photos/seed/Camping-BlackForest-120/800/600"
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
      "url": "https://picsum.photos/seed/Camping-SaharaDesert-121/800/600"
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
      "url": "https://picsum.photos/seed/Camping-RockyMountains-122/800/600"
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
      "url": "https://picsum.photos/seed/Camping-AmazonRainforest-123/800/600"
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
      "url": "https://picsum.photos/seed/Camping-ScottishHighlands-124/800/600"
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
      "url": "https://picsum.photos/seed/Camping-JoshuaTree-125/800/600"
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
      "url": "https://picsum.photos/seed/Camping-KrugerPark-126/800/600"
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
      "url": "https://picsum.photos/seed/Camping-Himalayas-127/800/600"
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
      "url": "https://picsum.photos/seed/Camping-BigSur-128/800/600"
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
      "url": "https://picsum.photos/seed/Camping-Yosemite-129/800/600"
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
      "url": "https://picsum.photos/seed/Camping-Serengeti-130/800/600"
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
      "url": "https://picsum.photos/seed/Camping-LakeDistrict-131/800/600"
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
      "url": "https://picsum.photos/seed/Camping-Patagonia-132/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Tuscany-133/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Provence-134/800/600"
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
      "url": "https://picsum.photos/seed/Farms-NapaValley-135/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Cotswolds-136/800/600"
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
      "url": "https://picsum.photos/seed/Farms-YarraValley-137/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Stellenbosch-138/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Mendoza-139/800/600"
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
      "url": "https://picsum.photos/seed/Farms-LoireValley-140/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Marlborough-141/800/600"
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
      "url": "https://picsum.photos/seed/Farms-DouroValley-142/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Kerala-143/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Bavaria-144/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Punjab-145/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Normandy-146/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Vermont-147/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Tuscany-148/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Provence-149/800/600"
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
      "url": "https://picsum.photos/seed/Farms-NapaValley-150/800/600"
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
      "url": "https://picsum.photos/seed/Farms-Cotswolds-151/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Rovaniemi-152/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Troms%C3%B8-153/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Reykjavik-154/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Longyearbyen-155/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Abisko-156/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-ElCalafate-157/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Yellowknife-158/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Murmansk-159/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Ilulissat-160/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Kiruna-161/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Fairbanks-162/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Akureyri-163/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Nuuk-164/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Inari-165/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Churchill-166/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Rovaniemi-167/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Troms%C3%B8-168/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Reykjavik-169/800/600"
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
      "url": "https://picsum.photos/seed/Arctic-Longyearbyen-170/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Fiji-171/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Gal%C3%A1pagosIslands-172/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Chamonix-173/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Inverness-174/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Sedona-175/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Manaus-176/800/600"
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
      "url": "https://picsum.photos/seed/Domes-JoshuaTree-177/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Tasmania-178/800/600"
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
      "url": "https://picsum.photos/seed/Domes-CostaRica-179/800/600"
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
      "url": "https://picsum.photos/seed/Domes-AtacamaDesert-180/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Bali-181/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Lapland-182/800/600"
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
      "url": "https://picsum.photos/seed/Domes-NewZealand-183/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Banff-184/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Slovenia-185/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Fiji-186/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Gal%C3%A1pagosIslands-187/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Chamonix-188/800/600"
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
      "url": "https://picsum.photos/seed/Domes-Inverness-189/800/600"
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
      "url": "https://picsum.photos/seed/Boats-Alleppey-190/800/600"
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
      "url": "https://picsum.photos/seed/Boats-Bangkok-191/800/600"
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
      "url": "https://picsum.photos/seed/Boats-Athens-192/800/600"
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
      "url": "https://picsum.photos/seed/Boats-Amsterdam-193/800/600"
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
      "url": "https://picsum.photos/seed/Boats-St.Lucia-194/800/600"
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
      "url": "https://picsum.photos/seed/Boats-Sydney-195/800/600"
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
      "url": "https://picsum.photos/seed/Boats-Kashmir-196/800/600"
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
      "url": "https://picsum.photos/seed/Boats-Seattle-197/800/600"
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
      "url": "https://picsum.photos/seed/Boats-Venice-198/800/600"
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
      "url": "https://picsum.photos/seed/Boats-Split-199/800/600"
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