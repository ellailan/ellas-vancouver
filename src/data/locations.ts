import type { Location } from '../types'

// Coordinates were geocoded once during development from the street
// addresses below and are stored here directly so the finished app
// never needs to geocode (or call any API) at runtime.
//
// NOTE (verification pass): Coordinates below were cross-checked against
// Google Places. Entries marked "FLAG" have an address that doesn't match
// any real location for that business — the coordinates given are the
// closest verified match, but you should confirm which spot you meant.
export const locations: Location[] = [
  // ---------- Dinner ----------
  {
    id: 'maenam',
    name: 'Maenam',
    category: 'Dinner',
    address: '1938 W 4th Ave, Vancouver, BC',
    latitude: 49.26795,
    longitude: -123.14891,
    description: "Thai place Kat and I have been meaning to try out",
  },
  {
    id: 'raisu',
    name: 'Raisu',
    category: 'Dinner',
    address: '2340 W 4th Ave, Vancouver, BC',
    latitude: 49.26806,
    longitude: -123.15832,
    description:
      'Great Japanese restaurant and the go-to date night spot for many teenage couples in Vancouver…',
  },
  {
    id: 'nook-olympic-village',
    name: 'Nook (Olympic Village)',
    category: 'Dinner',
    // Google lists this location at 195 W 2nd Ave (not W 1st) — same restaurant.
    address: '95 W 1st Ave, Vancouver, BC',
    latitude: 49.26952,
    longitude: -123.10921,
    description: 'Cozy Italian. Either this location or Kits.',
  },
  {
    id: 'nook-kitsilano',
    name: 'Nook (Kitsilano)',
    category: 'Dinner',
    address: '1525 Yew St, Vancouver, BC',
    latitude: 49.27223,
    longitude: -123.15517,
    description: 'Cozy Italian. Either this location or Kits.',
  },
  {
    id: 'green-leaf-sushi',
    name: 'Green Leaf Sushi',
    category: 'Dinner',
    address: '3416 W Broadway, Vancouver, BC',
    latitude: 49.26414,
    longitude: -123.18015,
    description: 'Cute sushi spot.',
  },
  {
    id: 'saku',
    name: 'Saku',
    category: 'Dinner',
    // FLAG: 2028 W 4th Ave is a spa (Halsa Float Spa), not a Saku location.
    // Saku has locations at Robson, Broadway/Cambie, Richmond, Burquitlam,
    // and Brentwood. Coordinates below are the Broadway location (548 W
    // Broadway), the closest one to the address you had — confirm this is
    // the one you meant.
    address: '2028 W 4th Ave, Vancouver, BC',
    latitude: 49.26309,
    longitude: -123.11668,
    description: 'Tonkatsu for when you have money in the bank.',
  },
  {
    id: 'katsu-san-richmond',
    name: 'Katsu San Richmond',
    category: 'Dinner',
    address: '6011 No 1 Rd Unit 110, Richmond, BC',
    latitude: 49.16997,
    longitude: -123.18183,
    description: 'Tonkatsu for when you have less money in the bank.',
  },
  {
    id: 'rays-yaletown',
    name: "Ray's (Yaletown)",
    category: 'Dinner',
    address: '1131 Mainland St, Vancouver, BC',
    latitude: 49.27528,
    longitude: -123.12143,
    description:
      'The best happy hour in the city. For when you want to go to Cactus Club deep down but want to act niche.',
  },
  {
    id: 'apollonia-greek',
    name: 'Apollonia Greek Restaurant',
    category: 'Dinner',
    address: '1830 Fir St, Vancouver, BC',
    latitude: 49.26944,
    longitude: -123.14064,
    description: 'Great Greek food.',
  },
  {
    id: 'fable-kitchen',
    name: 'Fable Kitchen',
    category: 'Dinner',
    address: '1944 W 4th Ave, Vancouver, BC',
    latitude: 49.26793,
    longitude: -123.149,
    description: 'BEST brunch.',
  },
  {
    id: 'pho-hong',
    name: 'Pho Hong',
    category: 'Dinner',
    // Google lists this as 6348 Fraser St (a few blocks north of 5975) —
    // kept your address, updated coordinates to the real storefront.
    address: '5975 Fraser St, Vancouver, BC',
    latitude: 49.22691,
    longitude: -123.09053,
    description:
      'Jingna and I got into an argument over whether this is a good pho place, so this pin is slightly controversial. A new pho place will pop up soon when we figure it out.',
  },
  {
    id: 'oretachi-curry',
    name: 'Oretachi Curry',
    category: 'Dinner',
    // FLAG: no Oretachi Curry location exists on Dunbar St. There are only
    // two: 4855 Main St, Vancouver, and a Steveston Village location in
    // Richmond. Coordinates below are for the Main St location — confirm.
    address: '3460 Dunbar St, Vancouver, BC',
    latitude: 49.24118,
    longitude: -123.10167,
    description: 'Japanese curry.',
  },
  {
    id: 'ramen-danbo',
    name: 'Ramen Danbo',
    category: 'Dinner',
    address: '1833 W 4th Ave, Vancouver, BC',
    latitude: 49.26826,
    longitude: -123.14643,
    description: "Good ramen but that's a basic opinion.",
  },

  // ---------- Lowkey Greasy but a Vibe ----------
  {
    id: 'jos-italian-deli',
    name: "Jo's Italian Deli",
    category: 'Lowkey Greasy but a Vibe',
    address: '2505 Alma St, Vancouver, BC',
    latitude: 49.26419,
    longitude: -123.18611,
    description: 'I have a strong emotional bond with this place',
  },
  {
    id: 'maizal-rmf',
    name: 'Maizal RMF',
    category: 'Lowkey Greasy but a Vibe',
    address: '2815 Main St, Vancouver, BC',
    latitude: 49.25999,
    longitude: -123.10135,
    description:
      "Best burritos in Vancouver. So much cheese you'll die of a heart attack and somehow be revived.",
  },
  {
    id: 'jamjar-canteen',
    name: 'Jamjar Canteen',
    category: 'Lowkey Greasy but a Vibe',
    address: '2290 Commercial Dr, Vancouver, BC',
    latitude: 49.2643,
    longitude: -123.0695,
    description:
      'Lebanese food! There used to be a location on campus. It closed recently… I will never recover.',
  },
  {
    id: 'burgoo-main',
    name: 'Burgoo (Main Street)',
    category: 'Lowkey Greasy but a Vibe',
    address: '3096 Main St, Vancouver, BC',
    latitude: 49.25765,
    longitude: -123.10089,
    description:
      "Peak cozy comfort food. Get the mac and cheese after you've had a bad day, it might fix it.",
  },
  {
    id: 'las-tortas',
    name: 'Las Tortas',
    category: 'Lowkey Greasy but a Vibe',
    address: '4328 Main St, Vancouver, BC',
    latitude: 49.246812670557624,
    longitude: -123.10094187241606,
    description: 'Mexican sandwiches. Best service.',
  },
  {
    id: 'tacofino-kits',
    name: 'Tacofino (Kitsilano)',
    category: 'Lowkey Greasy but a Vibe',
    // Google lists Tacofino Kitsilano at 1909 W 4th Ave, not Cornwall Ave.
    address: '1905 Cornwall Ave, Vancouver, BC',
    latitude: 49.26827,
    longitude: -123.14846,
    description: 'Best enjoyed to-go, eaten out of a greasy paper bag on Kits Beach.',
  },
  {
    id: 'burger-crush',
    name: 'Burger Crush',
    category: 'Lowkey Greasy but a Vibe',
    // FLAG: only Burger Crush location found is 755 Nelson St (downtown),
    // not Homer St. Confirm this is the one you meant.
    address: '1150 Homer St, Vancouver, BC',
    latitude: 49.27972,
    longitude: -123.1235,
    description: 'Smash burgers/In-and-Out dupe. Come with an empty stomach.',
  },
  {
    id: 'sing-sing-beer-bar',
    name: 'Sing Sing Beer Bar',
    category: 'Lowkey Greasy but a Vibe',
    address: '2718 Main St, Vancouver, BC',
    latitude: 49.26068,
    longitude: -123.10082,
    description: 'Beer and nice lighting, what more can you ask for?',
  },
  {
    id: 'street-hawker',
    name: 'Street Hawker',
    category: 'Lowkey Greasy but a Vibe',
    address: '3120 Main St, Vancouver, BC',
    latitude: 49.25772,
    longitude: -123.10099,
    description: 'Only visit during extreme hunger emergencies.',
  },

  // ---------- Treats & Coffee ----------
  {
    id: 'little-pisces',
    name: 'Little Pisces',
    category: 'Treats & Coffee',
    // FLAG: no Little Pisces location found on W Broadway. The only
    // location found is at 1778 Columbia St (Olympic Village), which is
    // also what the reviews describe. Confirm which spot you meant.
    address: '2898 W Broadway, Vancouver, BC',
    latitude: 49.26967,
    longitude: -123.10924,
    description: 'Taiyaki ice cream.',
  },
  {
    id: 'snowy-village',
    name: 'Snowy Village',
    category: 'Treats & Coffee',
    // FLAG: no Snowy Village location found on Kingsway in Burnaby. Real
    // BC location is 8571 Alexandra Rd, Richmond. Coordinates below are
    // for that Richmond location — confirm.
    address: '4500 Kingsway, Burnaby, BC',
    latitude: 49.17858,
    longitude: -123.12797,
    description: 'Korean shaved ice!',
  },
  {
    id: 'earnest-ice-cream-fraser',
    name: 'Earnest Ice Cream (Fraser)',
    category: 'Treats & Coffee',
    address: '3992 Fraser St, Vancouver, BC',
    latitude: 49.24935,
    longitude: -123.08992,
    description: 'Favorite Earnest location.',
  },
  {
    id: 'cowdog-coffee',
    name: 'Cowdog Coffee',
    category: 'Treats & Coffee',
    // FLAG: no Cowdog location on Main St. Cowdog has two locations:
    // 3720 Oak St (original) and 1927 W 4th Ave, Kitsilano (second,
    // newer, larger location). Coordinates below are the Kitsilano one —
    // confirm this is the one you meant, or if you meant Oak St.
    address: '3823 Main St, Vancouver, BC',
    latitude: 49.26823,
    longitude: -123.14862,
    description: 'No-tip café. Worth every penny!',
  },
  {
    id: 'emeri-matcha',
    name: 'Émeri Matcha',
    category: 'Treats & Coffee',
    address: '2702 Main St, Vancouver, BC',
    latitude: 49.25985,
    longitude: -123.10136,
    description: 'New! Amazing!',
  },
  {
    id: 'paragon-tea-room',
    name: 'Paragon Tea Room',
    category: 'Treats & Coffee',
    address: '2207 Cambie St, Vancouver, BC',
    latitude: 49.26293,
    longitude: -123.11549,
    description: 'Obviously. Best matcha in the city.',
  },
  {
    id: 'foglifter-coffee',
    name: 'Foglifter Coffee Roasters',
    category: 'Treats & Coffee',
    address: '3590 Main St, Vancouver, BC',
    latitude: 49.25312,
    longitude: -123.10074,
    description: 'Go for the fresh focaccia.',
  },
  {
    id: 'matchstick-coffee',
    name: 'Matchstick Coffee',
    category: 'Treats & Coffee',
    address: '213 E Georgia St, Vancouver, BC',
    latitude: 49.2787,
    longitude: -123.09928,
    description: 'Best espresso in the city.',
  },
  {
    id: 'breka-bakery-w4th',
    name: 'Breka Bakery (West 4th)',
    category: 'Treats & Coffee',
    address: '3750 W 4th Ave, Vancouver, BC',
    latitude: 49.26851,
    longitude: -123.18679,
    description: 'No notes needed',
  },
  {
    id: 'bean-around-the-world-ubc',
    name: 'Bean Around the World (UBC)',
    category: 'Treats & Coffee',
    address: '6308 Thunderbird Blvd, Vancouver, BC',
    latitude: 49.25886,
    longitude: -123.24806,
    description:
      "Campus coffee staple. If you can get a table here it's a good luck sign.",
  },
  {
    id: 'great-dane-coffee-ubc',
    name: 'Great Dane Coffee (UBC)',
    category: 'Treats & Coffee',
    address: '6011 Walter Gage Rd, Vancouver, BC',
    latitude: 49.27006,
    longitude: -123.25078,
    description: 'Campus favorite. Get the Jeremy and a flat-white.',
  },

  // ---------- Shopping & Trinkets ----------
  {
    id: 'f-as-in-frank',
    name: 'F as in Frank',
    category: 'Shopping & Trinkets',
    address: '2425 Main St, Vancouver, BC',
    latitude: 49.26329,
    longitude: -123.10121,
    description: 'Vintage!',
  },
  {
    id: 'the-only-vintage',
    name: 'The Only Vintage',
    category: 'Shopping & Trinkets',
    // FLAG: Google lists The Only Vintage at 1616 Commercial Dr, not 2315.
    address: '2315 Commercial Dr, Vancouver, BC',
    latitude: 49.27018,
    longitude: -123.06929,
    description:
      'I thrifted my winter formal dress here in high school…. $30 and it fit like a glove.',
  },
  {
    id: 'front-and-company',
    name: 'Front & Company',
    category: 'Shopping & Trinkets',
    address: '3772 Main St, Vancouver, BC',
    latitude: 49.2513,
    longitude: -123.10079,
    description:
      'Consignment store with lots of trinkets and amazing clothes. Also a fantastic Jellycat selection.',
  },
  {
    id: 'carson-books-records',
    name: 'Carson Books & Records',
    category: 'Shopping & Trinkets',
    // Google lists this at 4340 Main St, not 4445.
    address: '4445 Main St, Vancouver, BC',
    latitude: 49.24629,
    longitude: -123.10095,
    description: 'The best used bookstore with the most insane stock. Half of my library is from here.',
  },
  {
    id: 'red-cat-records',
    name: 'Red Cat Records',
    category: 'Shopping & Trinkets',
    // Google lists this at 4386 Main St, not 4332.
    address: '4332 Main St, Vancouver, BC',
    latitude: 49.24601,
    longitude: -123.10107,
    description: 'Favorite record store. Filled many punch cards here.',
  },
  {
    id: 'neptoon-records',
    name: 'Neptoon Records',
    category: 'Shopping & Trinkets',
    address: '3561 Main St, Vancouver, BC',
    latitude: 49.25311,
    longitude: -123.10111,
    description: 'Nardwuar films his interviews in the basement here.',
  },
  {
    id: 'the-honey-shoppe',
    name: 'The Honey Shoppe',
    category: 'Shopping & Trinkets',
    // FLAG: Google lists Main Street Honey Shoppe at 4125 Main St, not 3438.
    address: '3438 Main St, Vancouver, BC',
    latitude: 49.24844,
    longitude: -123.10139,
    description: 'Have you ever had raspberry-flavored honey?',
  },
  {
    id: 'strategies-games-hobbies',
    name: 'Strategies Games & Hobbies',
    category: 'Shopping & Trinkets',
    address: '3878 Main St, Vancouver, BC',
    latitude: 49.2505,
    longitude: -123.10075,
    description: 'Board game store.',
  },

  // ---------- UBC / Campus ----------
  {
    id: 'steves-poke-bar',
    name: "Steve's Poke Bar",
    category: 'UBC / Campus',
    // Google lists this at 5990 University Blvd #3, not 5728.
    address: '5728 University Blvd, Vancouver, BC',
    latitude: 49.26596,
    longitude: -123.24664,
    description: 'Mental breakdown recovery poke.',
  },
  {
    id: 'big-way-hot-pot-ubc',
    name: 'Big Way Hot Pot (UBC)',
    category: 'UBC / Campus',
    // FLAG: Google lists this UBC location at 2155 Allison Rd #222, not
    // University Blvd (which is where you also placed Steve's Poke Bar —
    // may have been a copy/paste of the same address). Confirm.
    address: '5728 University Blvd, Vancouver, BC',
    latitude: 49.26607,
    longitude: -123.24282,
    description: 'A classic. Open until 2am.',
  },
  {
    id: 'doughgirls',
    name: 'Doughgirls',
    category: 'UBC / Campus',
    address: '3322 Shrum Lane, Vancouver, BC',
    latitude: 49.25463,
    longitude: -123.23587,
    description: 'Great for a sweet treat.',
  },
]