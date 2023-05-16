const initialGenres = [
  {
    id: 4,
    name: "Action",
    slug: "action",
    games_count: 172235,
    image_background:
      "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
    games: [
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        added: 19271,
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 18442,
      },
      {
        id: 5286,
        slug: "tomb-raider",
        name: "Tomb Raider (2013)",
        added: 15196,
      },
      {
        id: 4291,
        slug: "counter-strike-global-offensive",
        name: "Counter-Strike: Global Offensive",
        added: 15044,
      },
      {
        id: 12020,
        slug: "left-4-dead-2",
        name: "Left 4 Dead 2",
        added: 14717,
      },
      {
        id: 5679,
        slug: "the-elder-scrolls-v-skyrim",
        name: "The Elder Scrolls V: Skyrim",
        added: 14576,
      },
    ],
  },
  {
    id: 51,
    name: "Indie",
    slug: "indie",
    games_count: 52173,
    image_background:
      "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
    games: [
      {
        id: 1030,
        slug: "limbo",
        name: "Limbo",
        added: 12441,
      },
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11344,
      },
      {
        id: 422,
        slug: "terraria",
        name: "Terraria",
        added: 11169,
      },
      {
        id: 9767,
        slug: "hollow-knight",
        name: "Hollow Knight",
        added: 9706,
      },
      {
        id: 3612,
        slug: "hotline-miami",
        name: "Hotline Miami",
        added: 9488,
      },
      {
        id: 3790,
        slug: "outlast",
        name: "Outlast",
        added: 9432,
      },
    ],
  },
  {
    id: 3,
    name: "Adventure",
    slug: "adventure",
    games_count: 131999,
    image_background:
      "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
    games: [
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        added: 19271,
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 18442,
      },
      {
        id: 5286,
        slug: "tomb-raider",
        name: "Tomb Raider (2013)",
        added: 15196,
      },
      {
        id: 13536,
        slug: "portal",
        name: "Portal",
        added: 14752,
      },
      {
        id: 28,
        slug: "red-dead-redemption-2",
        name: "Red Dead Redemption 2",
        added: 13969,
      },
      {
        id: 3439,
        slug: "life-is-strange-episode-1-2",
        name: "Life is Strange",
        added: 13911,
      },
    ],
  },
  {
    id: 5,
    name: "RPG",
    slug: "role-playing-games-rpg",
    games_count: 52219,
    image_background:
      "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    games: [
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 18442,
      },
      {
        id: 5679,
        slug: "the-elder-scrolls-v-skyrim",
        name: "The Elder Scrolls V: Skyrim",
        added: 14576,
      },
      {
        id: 802,
        slug: "borderlands-2",
        name: "Borderlands 2",
        added: 13909,
      },
      {
        id: 58175,
        slug: "god-of-war-2",
        name: "God of War (2018)",
        added: 12273,
      },
      {
        id: 3070,
        slug: "fallout-4",
        name: "Fallout 4",
        added: 12231,
      },
      {
        id: 278,
        slug: "horizon-zero-dawn",
        name: "Horizon Zero Dawn",
        added: 11683,
      },
    ],
  },
  {
    id: 10,
    name: "Strategy",
    slug: "strategy",
    games_count: 52435,
    image_background:
      "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg",
    games: [
      {
        id: 13633,
        slug: "civilization-v",
        name: "Sid Meier's Civilization V",
        added: 8589,
      },
      {
        id: 10243,
        slug: "company-of-heroes-2",
        name: "Company of Heroes 2",
        added: 8497,
      },
      {
        id: 13910,
        slug: "xcom-enemy-unknown",
        name: "XCOM: Enemy Unknown",
        added: 7648,
      },
      {
        id: 5525,
        slug: "brutal-legend",
        name: "Brutal Legend",
        added: 7572,
      },
      {
        id: 10065,
        slug: "cities-skylines",
        name: "Cities: Skylines",
        added: 7422,
      },
      {
        id: 11147,
        slug: "ark-survival-of-the-fittest",
        name: "ARK: Survival Of The Fittest",
        added: 7129,
      },
    ],
  },
  {
    id: 2,
    name: "Shooter",
    slug: "shooter",
    games_count: 59312,
    image_background:
      "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
    games: [
      {
        id: 4200,
        slug: "portal-2",
        name: "Portal 2",
        added: 17365,
      },
      {
        id: 4291,
        slug: "counter-strike-global-offensive",
        name: "Counter-Strike: Global Offensive",
        added: 15044,
      },
      {
        id: 12020,
        slug: "left-4-dead-2",
        name: "Left 4 Dead 2",
        added: 14717,
      },
      {
        id: 4062,
        slug: "bioshock-infinite",
        name: "BioShock Infinite",
        added: 14071,
      },
      {
        id: 802,
        slug: "borderlands-2",
        name: "Borderlands 2",
        added: 13909,
      },
      {
        id: 13537,
        slug: "half-life-2",
        name: "Half-Life 2",
        added: 13155,
      },
    ],
  },
  {
    id: 40,
    name: "Casual",
    slug: "casual",
    games_count: 44304,
    image_background:
      "https://media.rawg.io/media/games/89a/89a700d3c6a76bd0610ca89ccd20da54.jpg",
    games: [
      {
        id: 9721,
        slug: "garrys-mod",
        name: "Garry's Mod",
        added: 8702,
      },
      {
        id: 326292,
        slug: "fall-guys",
        name: "Fall Guys: Ultimate Knockout",
        added: 7701,
      },
      {
        id: 9830,
        slug: "brawlhalla",
        name: "Brawlhalla",
        added: 6621,
      },
      {
        id: 356714,
        slug: "among-us",
        name: "Among Us",
        added: 6289,
      },
      {
        id: 1959,
        slug: "goat-simulator",
        name: "Goat Simulator",
        added: 5783,
      },
      {
        id: 16343,
        slug: "a-story-about-my-uncle",
        name: "A Story About My Uncle",
        added: 5448,
      },
    ],
  },
  {
    id: 14,
    name: "Simulation",
    slug: "simulation",
    games_count: 65455,
    image_background:
      "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
    games: [
      {
        id: 10035,
        slug: "hitman",
        name: "Hitman",
        added: 9755,
      },
      {
        id: 654,
        slug: "stardew-valley",
        name: "Stardew Valley",
        added: 8797,
      },
      {
        id: 9721,
        slug: "garrys-mod",
        name: "Garry's Mod",
        added: 8702,
      },
      {
        id: 10243,
        slug: "company-of-heroes-2",
        name: "Company of Heroes 2",
        added: 8497,
      },
      {
        id: 9882,
        slug: "dont-starve-together",
        name: "Don't Starve Together",
        added: 8123,
      },
      {
        id: 22509,
        slug: "minecraft",
        name: "Minecraft",
        added: 7506,
      },
    ],
  },
  {
    id: 7,
    name: "Puzzle",
    slug: "puzzle",
    games_count: 97068,
    image_background:
      "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg",
    games: [
      {
        id: 4200,
        slug: "portal-2",
        name: "Portal 2",
        added: 17365,
      },
      {
        id: 13536,
        slug: "portal",
        name: "Portal",
        added: 14752,
      },
      {
        id: 1030,
        slug: "limbo",
        name: "Limbo",
        added: 12441,
      },
      {
        id: 19709,
        slug: "half-life-2-episode-two",
        name: "Half-Life 2: Episode Two",
        added: 9810,
      },
      {
        id: 18080,
        slug: "half-life",
        name: "Half-Life",
        added: 9030,
      },
      {
        id: 1450,
        slug: "inside",
        name: "INSIDE",
        added: 7222,
      },
    ],
  },
  {
    id: 11,
    name: "Arcade",
    slug: "arcade",
    games_count: 22548,
    image_background:
      "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg",
    games: [
      {
        id: 3612,
        slug: "hotline-miami",
        name: "Hotline Miami",
        added: 9488,
      },
      {
        id: 17540,
        slug: "injustice-gods-among-us-ultimate-edition",
        name: "Injustice: Gods Among Us Ultimate Edition",
        added: 8690,
      },
      {
        id: 22509,
        slug: "minecraft",
        name: "Minecraft",
        added: 7506,
      },
      {
        id: 4003,
        slug: "grid-2",
        name: "GRID 2",
        added: 6861,
      },
      {
        id: 3408,
        slug: "hotline-miami-2-wrong-number",
        name: "Hotline Miami 2: Wrong Number",
        added: 5546,
      },
      {
        id: 16343,
        slug: "a-story-about-my-uncle",
        name: "A Story About My Uncle",
        added: 5448,
      },
    ],
  },
  {
    id: 83,
    name: "Platformer",
    slug: "platformer",
    games_count: 100589,
    image_background:
      "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
    games: [
      {
        id: 1030,
        slug: "limbo",
        name: "Limbo",
        added: 12441,
      },
      {
        id: 422,
        slug: "terraria",
        name: "Terraria",
        added: 11169,
      },
      {
        id: 9767,
        slug: "hollow-knight",
        name: "Hollow Knight",
        added: 9706,
      },
      {
        id: 41,
        slug: "little-nightmares",
        name: "Little Nightmares",
        added: 9612,
      },
      {
        id: 18080,
        slug: "half-life",
        name: "Half-Life",
        added: 9030,
      },
      {
        id: 3144,
        slug: "super-meat-boy",
        name: "Super Meat Boy",
        added: 8661,
      },
    ],
  },
  {
    id: 1,
    name: "Racing",
    slug: "racing",
    games_count: 23949,
    image_background:
      "https://media.rawg.io/media/games/228/228e21229213695c8f6697a6b3387a2b.jpg",
    games: [
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11344,
      },
      {
        id: 4003,
        slug: "grid-2",
        name: "GRID 2",
        added: 6861,
      },
      {
        id: 2572,
        slug: "dirt-rally",
        name: "DiRT Rally",
        added: 6145,
      },
      {
        id: 58753,
        slug: "forza-horizon-4",
        name: "Forza Horizon 4",
        added: 5486,
      },
      {
        id: 5578,
        slug: "grid",
        name: "Race Driver: Grid",
        added: 5033,
      },
      {
        id: 4347,
        slug: "dirt-showdown",
        name: "DiRT Showdown",
        added: 4366,
      },
    ],
  },
  {
    id: 59,
    name: "Massively Multiplayer",
    slug: "massively-multiplayer",
    games_count: 3189,
    image_background:
      "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg",
    games: [
      {
        id: 32,
        slug: "destiny-2",
        name: "Destiny 2",
        added: 12262,
      },
      {
        id: 10213,
        slug: "dota-2",
        name: "Dota 2",
        added: 11177,
      },
      {
        id: 766,
        slug: "warframe",
        name: "Warframe",
        added: 11049,
      },
      {
        id: 290856,
        slug: "apex-legends",
        name: "Apex Legends",
        added: 9811,
      },
      {
        id: 10533,
        slug: "path-of-exile",
        name: "Path of Exile",
        added: 8839,
      },
      {
        id: 10142,
        slug: "playerunknowns-battlegrounds",
        name: "PlayerUnknown’s Battlegrounds",
        added: 8706,
      },
    ],
  },
  {
    id: 15,
    name: "Sports",
    slug: "sports",
    games_count: 20504,
    image_background:
      "https://media.rawg.io/media/screenshots/376/376c0927f2ff4c5fd38a95d5ff501bba.jpg",
    games: [
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11344,
      },
      {
        id: 326292,
        slug: "fall-guys",
        name: "Fall Guys: Ultimate Knockout",
        added: 7701,
      },
      {
        id: 2572,
        slug: "dirt-rally",
        name: "DiRT Rally",
        added: 6145,
      },
      {
        id: 53341,
        slug: "jet-set-radio-2012",
        name: "Jet Set Radio",
        added: 4783,
      },
      {
        id: 9575,
        slug: "vrchat",
        name: "VRChat",
        added: 4001,
      },
      {
        id: 622492,
        slug: "forza-horizon-5",
        name: "Forza Horizon 5",
        added: 3978,
      },
    ],
  },
  {
    id: 6,
    name: "Fighting",
    slug: "fighting",
    games_count: 11717,
    image_background:
      "https://media.rawg.io/media/games/416/4164ca654a339af5be8e63cc9c480c70.jpg",
    games: [
      {
        id: 17540,
        slug: "injustice-gods-among-us-ultimate-edition",
        name: "Injustice: Gods Among Us Ultimate Edition",
        added: 8690,
      },
      {
        id: 108,
        slug: "mortal-kombat-x",
        name: "Mortal Kombat X",
        added: 8011,
      },
      {
        id: 28179,
        slug: "sega-mega-drive-and-genesis-classics",
        name: "SEGA Mega Drive and Genesis Classics",
        added: 7365,
      },
      {
        id: 9830,
        slug: "brawlhalla",
        name: "Brawlhalla",
        added: 6621,
      },
      {
        id: 274480,
        slug: "mortal-kombat-11",
        name: "Mortal Kombat 11",
        added: 4776,
      },
      {
        id: 44525,
        slug: "yakuza-kiwami",
        name: "Yakuza Kiwami",
        added: 4095,
      },
    ],
  },
  {
    id: 19,
    name: "Family",
    slug: "family",
    games_count: 5379,
    image_background:
      "https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg",
    games: [
      {
        id: 3254,
        slug: "journey",
        name: "Journey",
        added: 7861,
      },
      {
        id: 2597,
        slug: "lego-lord-of-the-rings",
        name: "LEGO The Lord of the Rings",
        added: 5013,
      },
      {
        id: 3350,
        slug: "broken-age",
        name: "Broken Age",
        added: 4674,
      },
      {
        id: 3729,
        slug: "lego-the-hobbit",
        name: "LEGO The Hobbit",
        added: 4605,
      },
      {
        id: 1259,
        slug: "machinarium",
        name: "Machinarium",
        added: 4148,
      },
      {
        id: 1140,
        slug: "world-of-goo",
        name: "World of Goo",
        added: 4089,
      },
    ],
  },
  {
    id: 28,
    name: "Board Games",
    slug: "board-games",
    games_count: 8302,
    image_background:
      "https://media.rawg.io/media/screenshots/eb7/eb70b94188815efea35b95222561e37e.jpg",
    games: [
      {
        id: 23557,
        slug: "gwent-the-witcher-card-game",
        name: "Gwent: The Witcher Card Game",
        added: 4295,
      },
      {
        id: 327999,
        slug: "dota-underlords",
        name: "Dota Underlords",
        added: 3637,
      },
      {
        id: 2055,
        slug: "adventure-capitalist",
        name: "AdVenture Capitalist",
        added: 3036,
      },
      {
        id: 2306,
        slug: "poker-night-2",
        name: "Poker Night 2",
        added: 1933,
      },
      {
        id: 3187,
        slug: "armello",
        name: "Armello",
        added: 1829,
      },
      {
        id: 758,
        slug: "hue",
        name: "Hue",
        added: 1765,
      },
    ],
  },
  {
    id: 34,
    name: "Educational",
    slug: "educational",
    games_count: 15638,
    image_background:
      "https://media.rawg.io/media/games/2e8/2e8063435066d63339f137fc71a73f4e.jpg",
    games: [
      {
        id: 1358,
        slug: "papers-please",
        name: "Papers, Please",
        added: 6160,
      },
      {
        id: 1140,
        slug: "world-of-goo",
        name: "World of Goo",
        added: 4089,
      },
      {
        id: 2778,
        slug: "surgeon-simulator-cpr",
        name: "Surgeon Simulator",
        added: 3587,
      },
      {
        id: 9768,
        slug: "gameguru",
        name: "GameGuru",
        added: 2299,
      },
      {
        id: 13777,
        slug: "sid-meiers-civilization-iv-colonization",
        name: "Sid Meier's Civilization IV: Colonization",
        added: 2132,
      },
      {
        id: 6885,
        slug: "pirates-3",
        name: "Sid Meier's Pirates!",
        added: 2034,
      },
    ],
  },
  {
    id: 17,
    name: "Card",
    slug: "card",
    games_count: 4488,
    image_background:
      "https://media.rawg.io/media/games/1db/1dbc3d0c9de2709e21326cdcb91468ae.jpg",
    games: [
      {
        id: 23557,
        slug: "gwent-the-witcher-card-game",
        name: "Gwent: The Witcher Card Game",
        added: 4295,
      },
      {
        id: 28121,
        slug: "slay-the-spire",
        name: "Slay the Spire",
        added: 4267,
      },
      {
        id: 18852,
        slug: "poker-night-at-the-inventory",
        name: "Poker Night at the Inventory",
        added: 2558,
      },
      {
        id: 8923,
        slug: "faeria",
        name: "Faeria",
        added: 2024,
      },
      {
        id: 332,
        slug: "the-elder-scrolls-legends",
        name: "The Elder Scrolls: Legends",
        added: 1965,
      },
      {
        id: 2306,
        slug: "poker-night-2",
        name: "Poker Night 2",
        added: 1933,
      },
    ],
  },
];

export default initialGenres;
