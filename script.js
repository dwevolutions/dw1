let currentLang = "pt";

/* ========================= STORAGE HELPERS ========================= */

function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* silent */
  }
}

const slotsData = [
  { x: 0.0625, y: 0.0537 },
  { x: 0.0625, y: 0.2428 },
  { x: 0.0625, y: 0.4318 },
  { x: 0.0625, y: 0.6209 },
  { x: 0.1865, y: 0.0537 },
  { x: 0.1865, y: 0.2428 },
  { x: 0.1865, y: 0.4318 },
  { x: 0.1865, y: 0.6209 },
  { x: 0.3116, y: 0.0473 },
  { x: 0.3116, y: 0.1433 },
  { x: 0.3116, y: 0.2393 },
  { x: 0.3116, y: 0.3353 },
  { x: 0.3116, y: 0.4313 },
  { x: 0.3116, y: 0.5273 },
  { x: 0.3116, y: 0.6232 },
  { x: 0.3116, y: 0.7192 },
  { x: 0.3116, y: 0.8152 },
  { x: 0.4345, y: 0.0537 },
  { x: 0.4345, y: 0.1496 },
  { x: 0.4345, y: 0.2455 },
  { x: 0.4345, y: 0.3414 },
  { x: 0.4345, y: 0.4373 },
  { x: 0.4345, y: 0.5332 },
  { x: 0.4345, y: 0.6291 },
  { x: 0.4345, y: 0.7251 },
  { x: 0.5161, y: 0.0537 },
  { x: 0.5161, y: 0.1498 },
  { x: 0.5161, y: 0.2459 },
  { x: 0.5161, y: 0.342 },
  { x: 0.5161, y: 0.4381 },
  { x: 0.5161, y: 0.5342 },
  { x: 0.5161, y: 0.6303 },
  { x: 0.5967, y: 0.0537 },
  { x: 0.5967, y: 0.1498 },
  { x: 0.5967, y: 0.2459 },
  { x: 0.5967, y: 0.342 },
  { x: 0.5967, y: 0.4381 },
  { x: 0.5967, y: 0.5342 },
  { x: 0.5967, y: 0.6303 },
  { x: 0.6772, y: 0.0537 },
  { x: 0.6772, y: 0.1498 },
  { x: 0.6772, y: 0.2459 },
  { x: 0.6772, y: 0.342 },
  { x: 0.6772, y: 0.4381 },
  { x: 0.6772, y: 0.5342 },
  { x: 0.6772, y: 0.6303 },
  { x: 0.798, y: 0.0537 },
  { x: 0.798, y: 0.1496 },
  { x: 0.798, y: 0.2455 },
  { x: 0.798, y: 0.3414 },
  { x: 0.798, y: 0.4373 },
  { x: 0.798, y: 0.5332 },
  { x: 0.798, y: 0.6291 },
  { x: 0.798, y: 0.7251 },
  { x: 0.8786, y: 0.0537 },
  { x: 0.8786, y: 0.1498 },
  { x: 0.8786, y: 0.2459 },
  { x: 0.8786, y: 0.342 },
  { x: 0.8786, y: 0.4381 },
  { x: 0.8786, y: 0.5342 },
  { x: 0.8786, y: 0.6303 },
  { x: 0.656, y: 0.861 },
  { x: 0.7461, y: 0.861 },
  { x: 0.834, y: 0.861 },
];

const techs = [
  {
    golpe: "Fire Tower",
    id: "FIRE",
    poder: 155,
    mp: 81,
    brnchance: ["22%", "11%", "7%"],
    btlchance: ["25%", "16%", "11%"],
    range: "Large",
    efeito: "stun",
    inimigos: ["Agumon", "ClearAgumon", "Flarerizamon", "ToyAgumon"],
  },
  {
    golpe: "Prominence Beam",
    id: "FIRE",
    poder: 444,
    mp: 183,
    brnchance: ["15%", "7%", "0%"],
    btlchance: ["17%", "10%", "5%"],
    range: "Large",
    efeito: "flat",
    inimigos: [
      "Birdramon",
      "BlueMeramon",
      "Guardromon",
      "Saberdramon",
      "Vermilimon",
    ],
  },
  {
    golpe: "Spit Fire",
    id: "FIRE",
    poder: 66,
    mp: 30,
    brnchance: ["0%", "15%", "10%"],
    btlchance: ["30%", "22%", "15%"],
    range: "Large",
    efeito: null,
    inimigos: [
      "Agumon",
      "Flarerizamon",
      "Goburimon",
      "Saberdramon",
      "SandYanmamon",
      "Tankmon",
    ],
  },
  {
    golpe: "Red Inferno",
    id: "FIRE",
    poder: 210,
    mp: 171,
    brnchance: ["18%", "8%", "2%"],
    btlchance: ["20%", "12%", "7%"],
    range: "Wide",
    efeito: null,
    inimigos: [
      "ClearAgumon",
      "Darkrizamon",
      "Saberdramon",
      "Tankmon",
      "ToyAgumon",
      "Vermilimon",
    ],
  },
  {
    golpe: "Magma Bomb",
    id: "FIRE",
    poder: 279,
    mp: 132,
    brnchance: ["20%", "9%", "5%"],
    btlchance: ["22%", "14%", "9%"],
    range: "Large",
    efeito: "confuse",
    inimigos: [
      "Agumon",
      "ClearAgumon",
      "Darkrizamon",
      "Flarerizamon",
      "Fugamon",
      "Goburimon",
      "Greymon",
      "Meramon",
      "Meteormon",
      "Ninjamon",
      "Ogremon",
      "Sharmamon",
      "ToyAgumon",
    ],
  },
  {
    golpe: "Heat Laser",
    id: "FIRE",
    poder: 84,
    mp: 105,
    brnchance: ["25%", "13%", "8%"],
    btlchance: ["28%", "19%", "13%"],
    range: "Wide",
    efeito: "flat",
    inimigos: [
      "Agumon",
      "Darkrizamon",
      "Flarerizamon",
      "Meramon",
      "Vermilimon",
    ],
  },
  {
    golpe: "Inifinity Burn",
    id: "FIRE",
    poder: 488,
    mp: 264,
    brnchance: ["12%", "6%", "0%"],
    btlchance: ["15%", "8%", "0%"],
    range: "Wide",
    efeito: "stun",
    inimigos: ["MetalGreymon"],
  },
  {
    golpe: "Meltdown",
    id: "FIRE",
    poder: 400,
    mp: 318,
    brnchance: ["10%", "5%", "0%"],
    btlchance: ["14%", "6%", "0%"],
    range: "Wide",
    efeito: "stun",
    inimigos: ["Digitamamon", "MetalGreymon", "Meteormon", "Vermilimon"],
  },
  {
    golpe: "Tremar",
    id: "BATTLE",
    poder: 178,
    mp: 168,
    brnchance: ["12%", "6%", "0%"],
    btlchance: ["18%", "8%", "0%"],
    range: "Wide",
    efeito: null,
    inimigos: [
      "Gabumon",
      "Gotsumon",
      "Meteormon",
      "Ogremon",
      "Psychemon",
      "Tyrannomon",
      "Vermilimon",
    ],
  },
  {
    golpe: "Muscle Charge",
    id: "BATTLE",
    poder: 0,
    mp: 66,
    brnchance: ["15%", "7%", "0%"],
    btlchance: ["19%", "9%", "8%"],
    range: "Self",
    efeito: null,
    inimigos: [
      "Devimon",
      "MudFrigimon",
      "Rockmon",
      "SnowAgumon",
      "ToyAgumon",
      "WaruMonzaemon",
    ],
  },
  {
    golpe: "War Cry",
    id: "BATTLE",
    poder: 0,
    mp: 42,
    brnchance: ["22%", "11%", "7%"],
    btlchance: ["22%", "15%", "10%"],
    range: "Self",
    efeito: null,
    inimigos: [
      "Devimon",
      "Etemon",
      "Gabumon",
      "Garurumon",
      "Goburimon",
      "Gururumon",
      "IceDevimon",
      "Kokatorimon",
      "Psychemon",
      "Sharmamon",
      "ShimaUnimon",
      "SkullGreymon",
      "Tsukaimon",
      "Tyrannomon",
    ],
  },
  {
    golpe: "Sonic Jab",
    id: "BATTLE",
    poder: 52,
    mp: 18,
    brnchance: ["0%", "15%", "10%"],
    btlchance: ["26%", "19%", "14%"],
    range: "Short",
    efeito: null,
    inimigos: [
      "Agumon",
      "ClearAgumon",
      "Devimon",
      "Drimogemon",
      "Goburimon",
      "Hyogamon",
      "IceDevimon",
      "MudFrigimon",
      "NiseDrimogemon",
      "Psychemon",
      "Rockmon",
      "Sharmamon",
      "SnowAgumon",
      "SnowGoburimon",
      "Tsukaimon",
    ],
  },
  {
    golpe: "Dynamite Kick",
    id: "BATTLE",
    poder: 193,
    mp: 99,
    brnchance: ["25%", "13%", "8%"],
    btlchance: ["24%", "17%", "12%"],
    range: "Short",
    efeito: "stun",
    inimigos: [
      "Akatorimon",
      "Drimogemon",
      "Etemon",
      "Gabumon",
      "J-Mojyamon",
      "Kokatorimon",
      "Meramon",
      "Ninjamon",
      "NiseDrimogemon",
      "Ogremon",
      "Patamon",
      "Psychemon",
      "ShimaUnimon",
      "SkullGreymon",
      "Tsukaimon",
    ],
  },
  {
    golpe: "Counter",
    id: "BATTLE",
    poder: 285,
    mp: 165,
    brnchance: ["18%", "8%", "2%"],
    btlchance: ["20%", "11%", "8%"],
    range: "Short",
    efeito: "confuse",
    inimigos: ["BlueMeramon", "NiseDrimogemon", "ShimaUnimon", "Vermilimon"],
  },
  {
    golpe: "Megaton Punch",
    id: "BATTLE",
    poder: 320,
    mp: 186,
    brnchance: ["20%", "9%", "5%"],
    btlchance: ["21%", "13%", "9%"],
    range: "Short",
    efeito: "stun",
    inimigos: [
      "Devimon",
      "Drimogemon",
      "Fugamon",
      "Gabumon",
      "Goburimon",
      "Gotsumon",
      "Guardromon",
      "Gururumon",
      "Icemon",
      "J-Mojyamon",
      "Machinedramon",
      "Mamemon",
      "Megadramon",
      "Meteormon",
      "Psychemon",
      "Sharmamon",
      "SnowGoburimon",
      "Tankmon",
      "Tekkamon",
      "Tyrannomon",
      "Vermilimon",
      "WaruMonzaemon",
    ],
  },
  {
    golpe: "Buster Dive",
    id: "BATTLE",
    poder: 500,
    mp: 258,
    brnchance: ["10%", "5%", "0%"],
    btlchance: ["16%", "7%", "0%"],
    range: "Large",
    efeito: "confuse",
    inimigos: [
      "Etemon",
      "Gotsumon",
      "Gururumon",
      "Hyogamon",
      "Mamemon",
      "MetalGreymon",
      "Patamon",
      "SkullGreymon",
      "Tankmon",
      "Tekkamon",
      "Tsukaimon",
      "Tyrannomon",
      "WaruMonzaemon",
    ],
  },
  {
    golpe: "Thunder Justice",
    id: "AIR",
    poder: 586,
    mp: 330,
    brnchance: ["12%", "6%", "0%"],
    btlchance: ["13%", "9%", "0%"],
    range: "Large",
    efeito: "stun",
    inimigos: ["Digitamamon", "Machinedramon", "Soulmon", "WaruMonzaemon"],
  },
  {
    golpe: "Spinning Shot",
    id: "AIR",
    poder: 389,
    mp: 150,
    brnchance: ["20%", "9%", "5%"],
    btlchance: ["22%", "14%", "10%"],
    range: "Large",
    efeito: null,
    inimigos: [
      "Etemon",
      "Patamon",
      "Piddomon",
      "Saberdramon",
      "SandYanmamon",
      "Tsukaimon",
      "Yanmamon",
    ],
  },
  {
    golpe: "Electric Cloud",
    id: "AIR",
    poder: 120,
    mp: 69,
    brnchance: ["25%", "13%", "8%"],
    btlchance: ["32%", "19%", "15%"],
    range: "Large",
    efeito: "stun",
    inimigos: [
      "Akatorimon",
      "Devimon",
      "Kunemon",
      "ModokiBetamon",
      "Soulmon",
      "Yanmamon",
    ],
  },
  {
    golpe: "Megalo Spark",
    id: "AIR",
    poder: 382,
    mp: 174,
    brnchance: ["18%", "8%", "2%"],
    btlchance: ["18%", "13%", "8%"],
    range: "Large",
    efeito: "stun",
    inimigos: [
      "Airdramon",
      "Devimon",
      "Kokatorimon",
      "Piddomon",
      "ShimaUnimon",
      "Soulmon",
    ],
  },
  {
    golpe: "Static Elect",
    id: "AIR",
    poder: 85,
    mp: 45,
    brnchance: ["0%", "15%", "10%"],
    btlchance: ["36%", "21%", "17%"],
    range: "Short",
    efeito: "stun",
    inimigos: ["Akatorimon", "Fugamon", "Kunemon", "ModokiBetamon", "Soulmon"],
  },
  {
    golpe: "Wind Cutter",
    id: "AIR",
    poder: 178,
    mp: 93,
    brnchance: ["22%", "11%", "7%"],
    btlchance: ["26%", "16%", "13%"],
    range: "Large",
    efeito: null,
    inimigos: [
      "Akatorimon",
      "Fugamon",
      "Patamon",
      "Saberdramon",
      "Tsukaimon",
      "Yanmamon",
    ],
  },
  {
    golpe: "Confused Storm",
    id: "AIR",
    poder: 225,
    mp: 216,
    brnchance: ["15%", "7%", "0%"],
    btlchance: ["15%", "11%", "7%"],
    range: "Wide",
    efeito: "confuse",
    inimigos: ["Airdramon", "Digitamamon", "Piddomon", "Piximon"],
  },
  {
    golpe: "Hurricane",
    id: "AIR",
    poder: 366,
    mp: 255,
    brnchance: ["10%", "5%", "0%"],
    btlchance: ["12%", "8%", "0%"],
    range: "Wide",
    efeito: "confuse",
    inimigos: ["Airdramon", "Piddomon", "Saberdramon", "SandYanmamon"],
  },
  {
    golpe: "Poison Powder",
    id: "EARTH",
    poder: 117,
    mp: 171,
    brnchance: ["22%", "11%", "7%"],
    btlchance: ["26%", "19%", "14%"],
    range: "Wide",
    efeito: "poison",
    inimigos: ["Aruraumon", "Dokunemon", "Palmon", "RedVegiemon"],
  },
  {
    golpe: "Bug",
    id: "EARTH",
    poder: 500,
    mp: 354,
    brnchance: ["10%", "5%", "0%"],
    btlchance: ["12%", "8%", "0%"],
    range: "Large",
    efeito: "flat",
    inimigos: ["Piximon", "Tentomon"],
  },
  {
    golpe: "Mass Morph",
    id: "EARTH",
    poder: 0,
    mp: 30,
    brnchance: ["18%", "8%", "2%"],
    btlchance: ["23%", "15%", "12%"],
    range: "Self",
    efeito: null,
    inimigos: ["Dokunemon", "J-Mojyamon", "Tentomon", "Weedmon"],
  },
  {
    golpe: "Insect Plague",
    id: "EARTH",
    poder: 58,
    mp: 96,
    brnchance: ["20%", "9%", "5%"],
    btlchance: ["24%", "16%", "13%"],
    range: "Large",
    efeito: "poison",
    inimigos: ["Tentomon", "Yanmamon"],
  },
  {
    golpe: "Charm Perfume",
    id: "EARTH",
    poder: 180,
    mp: 210,
    brnchance: ["15%", "7%", "0%"],
    btlchance: ["18%", "12%", "9%"],
    range: "Wide",
    efeito: "confuse",
    inimigos: ["MoriShellmon", "Ninjamon", "RedVegiemon", "Tentomon"],
  },
  {
    golpe: "Poison Claw",
    id: "EARTH",
    poder: 62,
    mp: 51,
    brnchance: ["0%", "15%", "10%"],
    btlchance: ["28%", "22%", "16%"],
    range: "Short",
    efeito: "poison",
    inimigos: [
      "Aruraumon",
      "Dokunemon",
      "Muchomon",
      "Palmon",
      "RedVegiemon",
      "Weedmon",
    ],
  },
  {
    golpe: "Danger Sting",
    id: "EARTH",
    poder: 157,
    mp: 102,
    brnchance: ["25%", "13%", "8%"],
    btlchance: ["27%", "20%", "15%"],
    range: "Short",
    efeito: "flat",
    inimigos: [
      "Dokunemon",
      "Kunemon",
      "Piximon",
      "RedVegiemon",
      "Weedmon",
      "Yanmamon",
    ],
  },
  {
    golpe: "Green Trap",
    id: "EARTH",
    poder: 310,
    mp: 147,
    brnchance: ["12%", "6%", "0%"],
    btlchance: ["14%", "10%", "0%"],
    range: "Large",
    efeito: "stun",
    inimigos: ["J-Mojyamon", "Weedmon"],
  },
  {
    golpe: "Giga Freeze",
    id: "ICE",
    poder: 264,
    mp: 120,
    brnchance: ["15%", "7%", "0%"],
    btlchance: ["17%", "10%", "5%"],
    range: "Large",
    efeito: "stun",
    inimigos: [
      "BlueMeramon",
      "Darkrizamon",
      "Garurumon",
      "Gekomon",
      "Goburimon",
      "Gururumon",
      "Hyogamon",
      "IceDevimon",
      "Icemon",
      "Megadramon",
      "Muchomon",
      "SnowGoburimon",
      "Soulmon",
      "WaruSeadramon",
    ],
  },
  {
    golpe: "Ice Statue",
    id: "ICE",
    poder: 424,
    mp: 186,
    brnchance: ["12%", "6%", "0%"],
    btlchance: ["15%", "8%", "0%"],
    range: "Large",
    efeito: "stun",
    inimigos: [
      "BlueMeramon",
      "Garurumon",
      "Gururumon",
      "IceDevimon",
      "MoriShellmon",
      "Rockmon",
      "SnowAgumon",
    ],
  },
  {
    golpe: "Winter Blast",
    id: "ICE",
    poder: 120,
    mp: 165,
    brnchance: ["18%", "8%", "2%"],
    btlchance: ["20%", "12%", "7%"],
    range: "Wide",
    efeito: "stun",
    inimigos: [
      "Darkrizamon",
      "Gekomon",
      "Goburimon",
      "Gururumon",
      "Rockmon",
      "SnowAgumon",
      "SnowGoburimon",
      "WaruSeadramon",
    ],
  },
  {
    golpe: "Ice Needle",
    id: "ICE",
    poder: 126,
    mp: 78,
    brnchance: ["25%", "13%", "8%"],
    btlchance: ["30%", "15%", "8%"],
    range: "Large",
    efeito: "stun",
    inimigos: ["Darkrizamon", "Hyogamon", "Icemon", "Muchomon", "SnowAgumon"],
  },
  {
    golpe: "Water Blit",
    id: "ICE",
    poder: 211,
    mp: 102,
    brnchance: ["22%", "11%", "7%"],
    btlchance: ["20%", "10%", "5%"],
    range: "Large",
    efeito: null,
    inimigos: [
      "Aruraumon",
      "Betamon",
      "Gekomon",
      "J-Mojyamon",
      "ModokiBetamon",
      "MoriShellmon",
      "MudFrigimon",
      "Otamamon",
      "Palmon",
    ],
  },
  {
    golpe: "Aqua Magic",
    id: "ICE",
    poder: 0,
    mp: 36,
    brnchance: ["20%", "9%", "5%"],
    btlchance: ["22%", "14%", "9%"],
    range: "Self",
    efeito: null,
    inimigos: ["Betamon", "ModokiBetamon", "MoriShellmon"],
  },
  {
    golpe: "Aurora Freeze",
    id: "ICE",
    poder: 430,
    mp: 258,
    brnchance: ["10%", "5%", "0%"],
    btlchance: ["14%", "6%", "0%"],
    range: "Wide",
    efeito: "flat",
    inimigos: ["Rockmon", "WaruSeadramon"],
  },
  {
    golpe: "Tear Drop",
    id: "ICE",
    poder: 60,
    mp: 42,
    brnchance: ["0%", "15%", "10%"],
    btlchance: ["30%", "22%", "15%"],
    range: "Large",
    efeito: "flat",
    inimigos: ["Aruraumon", "Gekomon", "MudFrigimon", "Otamamon"],
  },
  {
    golpe: "Power Crane",
    id: "MECH",
    poder: 226,
    mp: 126,
    brnchance: ["0%", "15%", "10%"],
    btlchance: ["40%", "30%", "22%"],
    range: "Large",
    efeito: null,
    inimigos: ["Guardromon"],
  },
  {
    golpe: "All Range Beam",
    id: "MECH",
    poder: 573,
    mp: 330,
    brnchance: ["12%", "6%", "0%"],
    btlchance: ["16%", "13%", "0%"],
    range: "Wide",
    efeito: null,
    inimigos: ["Guardromon", "Machinedramon", "MetalMamemon"],
  },
  {
    golpe: "Metal Sprinter",
    id: "MECH",
    poder: 150,
    mp: 165,
    brnchance: ["25%", "13%", "8%"],
    btlchance: ["35%", "27%", "18%"],
    range: "Wide",
    efeito: null,
    inimigos: ["MetalMamemon"],
  },
  {
    golpe: "Pulse Laser",
    id: "MECH",
    poder: 389,
    mp: 168,
    brnchance: ["20%", "9%", "5%"],
    btlchance: ["28%", "21%", "13%"],
    range: "Large",
    efeito: null,
    inimigos: ["MetalMamemon"],
  },
  {
    golpe: "Delete Program",
    id: "MECH",
    poder: 430,
    mp: 219,
    brnchance: ["15%", "7%", "0%"],
    btlchance: ["20%", "14%", "10%"],
    range: "Large",
    efeito: "flat",
    inimigos: ["Giromon"],
  },
  {
    golpe: "DG Dimension",
    id: "MECH",
    poder: 722,
    mp: 420,
    brnchance: ["10%", "5%", "0%"],
    btlchance: ["15%", "12%", "0%"],
    range: "Wide",
    efeito: null,
    inimigos: ["Giromon", "Megadramon"],
  },
  {
    golpe: "Full Potential",
    id: "MECH",
    poder: 0,
    mp: 99,
    brnchance: ["18%", "8%", "2%"],
    btlchance: ["25%", "17%", "11%"],
    range: "Self",
    efeito: null,
    inimigos: ["Guardromon", "Machinedramon", "Mamemon", "Tekkamon"],
  },
  {
    golpe: "Reverse Prog",
    id: "MECH",
    poder: 256,
    mp: 297,
    brnchance: ["22%", "11%", "7%"],
    btlchance: ["32%", "24%", "15%"],
    range: "Large",
    efeito: "flat",
    inimigos: ["Giromon", "Tekkamon"],
  },
  {
    golpe: "Odor Spray",
    id: "FILTH",
    poder: 88,
    mp: 75,
    brnchance: ["25%", "13%", "8%"],
    btlchance: ["24%", "14%", "9%"],
    range: "Large",
    efeito: "stun",
    inimigos: ["Geremon", "Numemon", "PlatinumSukamon"],
  },
  {
    golpe: "Poop Spd Toss",
    id: "FILTH",
    poder: 122,
    mp: 96,
    brnchance: ["22%", "11%", "7%"],
    btlchance: ["23%", "13%", "8%"],
    range: "Large",
    efeito: "poison",
    inimigos: ["Geremon"],
  },
  {
    golpe: "Big Poop Toss",
    id: "FILTH",
    poder: 211,
    mp: 192,
    brnchance: ["15%", "7%", "0%"],
    btlchance: ["15%", "10%", "5%"],
    range: "Large",
    efeito: "confuse",
    inimigos: ["PlatinumSukamon"],
  },
  {
    golpe: "Big Rnd Toss",
    id: "FILTH",
    poder: 211,
    mp: 282,
    brnchance: ["12%", "6%", "0%"],
    btlchance: ["11%", "8%", "0%"],
    range: "Wide",
    efeito: "confuse",
    inimigos: ["PlatinumSukamon"],
  },
  {
    golpe: "Poop Rnd Toss",
    id: "FILTH",
    poder: 75,
    mp: 120,
    brnchance: ["20%", "9%", "5%"],
    btlchance: ["21%", "12%", "7%"],
    range: "Wide",
    efeito: "poison",
    inimigos: ["Geremon"],
  },
  {
    golpe: "Rnd Spd Toss",
    id: "FILTH",
    poder: 122,
    mp: 216,
    brnchance: ["18%", "8%", "2%"],
    btlchance: ["20%", "11%", "6%"],
    range: "Wide",
    efeito: "poison",
    inimigos: ["Geremon", "PlatinumSukamon"],
  },
  {
    golpe: "Horizontal Kick",
    id: "FILTH",
    poder: 53,
    mp: 24,
    brnchance: ["0%", "15%", "10%"],
    btlchance: ["25%", "16%", "10%"],
    range: "Short",
    efeito: null,
    inimigos: ["Geremon"],
  },
  {
    golpe: "Ult Poop Hell",
    id: "FILTH",
    poder: 333,
    mp: 333,
    brnchance: ["10%", "5%", "0%"],
    btlchance: ["9%", "7%", "0%"],
    range: "Wide",
    efeito: "flat",
    inimigos: ["Numemon", "PlatinumSukamon"],
  },
];

const enemyMoveMapFilter = {
  Agumon: {
    "Fire Tower": [
      "GCAN05",
      "GCAN08_1",
      "OGRE01",
      "OGRE02",
      "OGRE03",
      "TUNN02",
    ],
    "Heat Laser": ["GCAN05", "GCAN08_1", "OGRE01", "OGRE02", "OGRE03"],
    "Magma Bomb": ["GCAN05", "GCAN08_1", "OGRE01", "OGRE02", "OGRE03"],
    "Sonic Jab": ["MAYO00"],
  },
  Aruraumon: {
    "Poison Claw": ["MAYO04A", "MAYO08B", "TROP00"],
    "Poison Powder": ["MAYO04A", "MAYO08B", "MIHA00", "MIHA04B"],
    "Water Blit": ["MIHA00", "MIHA04B", "TROP00"],
  },
  BlueMeramon: {
    Counter: ["ICSA02", "ICSA05"],
  },
  Darkrizamon: {
    "Giga Freeze": ["MIST01", "MIST02", "MIST06"],
    "Heat Laser": ["DGHA01", "KODA04", "KODA08", "SAIB02"],
    "Ice Needle": ["DGHA01", "KODA04", "KODA08"],
    "Red Inferno": ["DGHA01", "KODA04", "KODA08"],
    "Winter Blast": ["MIST01", "MIST02", "MIST06"],
  },
  Devimon: {
    "Electric Cloud": ["YAKA11A"],
    "Megalo Spark": ["MGEN06"],
    "Muscle Charge": ["MGEN06"],
    "Sonic Jab": ["YAKA11A"],
    "War Cry": ["MGEN06"],
  },
  Dokunemon: {
    "Mass Morph": ["BETL01"],
    "Poison Claw": ["MAYO00", "MAYO01", "MAYO02"],
    "Poison Powder": ["BETL01"],
  },
  Gabumon: {
    Tremar: ["OGRE00", "OGRE01"],
  },
  Geremon: {
    "Horizontal Kick": ["GOMI01"],
    "Rnd Spd Toss": ["FACT02", "FACT03", "FACT04", "FACT07", "FACT09"],
  },
  Goburimon: {
    "Giga Freeze": ["MIST03", "MIST04", "MIST06", "MIST07"],
    "Magma Bomb": [
      "MAYO03",
      "MAYO04A",
      "MIHA00",
      "MIHA02",
      "MIHA04B",
      "TUNN01",
      "TUNN02",
    ],
    "Megaton Punch": [
      "GCAN01",
      "GCAN02",
      "GCAN04",
      "GCAN06",
      "GCAN08_1",
      "MIHA00",
      "MIHA02",
      "MIHA04B",
      "MIST03",
      "MIST04",
      "MIST06",
      "MIST07",
    ],
    "Sonic Jab": [
      "MAYO03",
      "MAYO04A",
      "MIHA00",
      "MIHA02",
      "MIHA04B",
      "MIST03",
      "MIST04",
      "MIST06",
      "MIST07",
      "TUNN01",
      "TUNN02",
    ],
    "Spit Fire": [
      "GCAN01",
      "GCAN02",
      "GCAN04",
      "GCAN06",
      "GCAN08_1",
      "MAYO03",
      "MAYO04A",
      "TUNN01",
      "TUNN02",
    ],
    "War Cry": [
      "GCAN01",
      "GCAN02",
      "GCAN04",
      "GCAN06",
      "GCAN08_1",
      "MIHA00",
      "MIHA02",
      "MIHA04B",
    ],
    "Winter Blast": [
      "GCAN01",
      "GCAN02",
      "GCAN04",
      "GCAN06",
      "GCAN08_1",
      "MIST03",
      "MIST04",
      "MIST06",
      "MIST07",
    ],
  },
  Gotsumon: {
    "Buster Dive": ["GCAN01", "GCAN03", "GCAN07", "GCAN09"],
    Tremar: ["KODA04"],
  },
  Guardromon: {
    "All Range Beam": ["FACT09", "FACT10"],
    "Power Crane": ["FACT01", "FACT02", "FACT03", "FACT04", "FACT07"],
  },
  Gururumon: {
    "Buster Dive": ["MGEN02", "MGEN04", "MGEN08", "MGEN10"],
    "Giga Freeze": ["ICSA04", "ICSA07", "MGEN02", "MGEN04", "MGEN08", "MGEN10"],
    "Ice Statue": ["ICSA04", "ICSA07", "MGEN02", "MGEN04", "MGEN08", "MGEN10"],
    "Megaton Punch": ["GCAN07", "GCAN09", "ICSA04", "ICSA07"],
    "War Cry": ["GCAN07", "GCAN09"],
  },
  IceDevimon: {
    "Sonic Jab": [
      "FRZL01",
      "FRZL02",
      "FRZL04",
      "FRZL06",
      "FRZL07",
      "FRZL13",
      "FRZL16",
    ],
    "War Cry": [
      "FRZL01",
      "FRZL02",
      "FRZL04",
      "FRZL06",
      "FRZL07",
      "FRZL13",
      "FRZL16",
    ],
  },
  "J-Mojyamon": {
    "Dynamite Kick": ["TROP01", "TROP02", "TROP03", "TROP05"],
    "Green Trap": ["TROP04"],
    "Mass Morph": ["TROP04"],
    "Megaton Punch": ["TROP01", "TROP02", "TROP03", "TROP05"],
  },
  Machinedramon: {
    "Full Potential": ["CHKA01", "ICSA08", "OGRE02"],
    "Megaton Punch": ["MGEN99"],
  },
  ModokiBetamon: {
    "Aqua Magic": ["TROP04"],
    "Water Blit": ["MAYO00", "MAYO01"],
  },
  Muchomon: {
    "Giga Freeze": ["GCAN06", "OGRE02"],
  },
  Ogremon: {
    "Dynamite Kick": ["OGRE03"],
    "Magma Bomb": ["GCAN08_1", "OGRE11", "TUNN02"],
  },
  PlatinumSukamon: {
    "Big Poop Toss": ["FACT01", "FACT03", "FACT04"],
    "Big Rnd Toss": ["FACT09"],
    "Odor Spray": ["FACT01", "FACT03", "FACT04"],
    "Ult Poop Hell": ["FACT09"],
  },
  Psychemon: {
    Tremar: ["GOMI01"],
    "War Cry": ["GIAS01", "GIAS02", "GIAS05"],
  },
  RedVegiemon: {
    "Charm Perfume": ["TROP03"],
  },
  Rockmon: {
    "Aurora Freeze": [
      "MGEN01",
      "MGEN03",
      "MGEN05",
      "MGEN07",
      "MGEN09",
      "MGEN13",
    ],
    "Sonic Jab": ["YAKA02"],
  },
  Saberdramon: {
    Hurricane: ["KODA06", "MIST04"],
    "Prominence Beam": ["KODA06", "MIST04"],
    "Red Inferno": ["KODA06", "MIST04"],
    "Spinning Shot": ["KODA04", "KODA08"],
    "Spit Fire": ["KODA04", "KODA08"],
  },
  Soulmon: {
    "Giga Freeze": ["YAKA14"],
    "Static Elect": ["DGHA02"],
    "Thunder Justice": ["YAKA14"],
  },
  Tekkamon: {
    "Full Potential": ["SAIB02"],
    "Reverse Prog": ["SAIB02"],
  },
  Tsukaimon: {
    "Buster Dive": ["MIST01", "MIST06", "MIST07"],
    "Dynamite Kick": [
      "DGHA01",
      "DGHA02",
      "GIAS00",
      "GIAS04",
      "GIAS05",
      "MAYO08B",
      "MIHA04B",
      "MIST01",
      "MIST06",
      "MIST07",
      "TROP00",
      "TROP02",
      "TROP03",
      "TROP04",
    ],
    "Sonic Jab": [
      "MAYO08B",
      "TROP00",
      "TROP02",
      "TROP03",
      "TROP04",
      "YAKA16",
      "YAKA17",
    ],
    "Spinning Shot": [
      "DGHA01",
      "DGHA02",
      "GIAS00",
      "GIAS04",
      "GIAS05",
      "MIHA04B",
      "MIST01",
      "MIST06",
      "MIST07",
      "TROP00",
      "TROP02",
      "TROP03",
      "TROP04",
      "YAKA16",
      "YAKA17",
    ],
    "War Cry": [
      "DGHA01",
      "DGHA02",
      "GIAS00",
      "GIAS04",
      "GIAS05",
      "MAYO08B",
      "MIHA04B",
      "YAKA16",
      "YAKA17",
    ],
    "Wind Cutter": [
      "DGHA01",
      "DGHA02",
      "GIAS00",
      "GIAS04",
      "GIAS05",
      "MIHA04B",
      "MIST01",
      "MIST06",
      "MIST07",
      "TROP00",
      "TROP02",
      "TROP03",
      "TROP04",
    ],
  },
  Vermilimon: {
    Counter: ["KODA00", "KODA01"],
    "Heat Laser": ["KODA00", "KODA01"],
    "Megaton Punch": ["KODA00", "KODA01"],
    Meltdown: ["MGEN01", "MGEN04", "MGEN05", "MGEN06", "MGEN08"],
    "Prominence Beam": ["KODA00", "KODA01"],
    "Red Inferno": ["MGEN01", "MGEN04", "MGEN05", "MGEN06", "MGEN08"],
    Tremar: ["MGEN01", "MGEN04", "MGEN05", "MGEN06", "MGEN08"],
  },
  Yanmamon: {
    "Electric Cloud": ["KODA00", "KODA01", "TROP02", "TROP05"],
    "Insect Plague": ["STIC01", "STIC02"],
    "Spinning Shot": ["STIC01", "STIC02"],
  },
};

const enemyData = {
  Agumon: {
    maps: [
      "GCAN05",
      "GCAN08_1",
      "MAYO00",
      "OGRE01",
      "OGRE02",
      "OGRE03",
      "TUNN02",
    ],
    moves: ["Fire Tower", "Heat Laser", "Magma Bomb", "Sonic Jab", "Spit Fire"],
  },
  Airdramon: {
    maps: ["TEND01"],
    moves: ["Confused Storm", "Hurricane", "Megalo Spark"],
  },
  Akatorimon: {
    maps: ["GIAS02", "GIAS04", "GIAS05"],
    moves: ["Dynamite Kick", "Electric Cloud", "Static Elect", "Wind Cutter"],
  },
  Aruraumon: {
    maps: ["MAYO04A", "MAYO08B", "MIHA00", "MIHA04B", "TROP00"],
    moves: ["Poison Claw", "Poison Powder", "Tear Drop", "Water Blit"],
  },
  Birdramon: { maps: ["GCAN10"], moves: ["Prominence Beam"] },
  BlueMeramon: {
    maps: ["ICSA02", "ICSA05", "MGEN12"],
    moves: ["Counter", "Giga Freeze", "Ice Statue", "Prominence Beam"],
  },
  ClearAgumon: {
    maps: ["OMOC07"],
    moves: ["Fire Tower", "Magma Bomb", "Red Inferno", "Sonic Jab"],
  },
  Darkrizamon: {
    maps: [
      "DGHA01",
      "KODA04",
      "KODA08",
      "MIST01",
      "MIST02",
      "MIST06",
      "SAIB02",
    ],
    moves: [
      "Giga Freeze",
      "Heat Laser",
      "Ice Needle",
      "Magma Bomb",
      "Red Inferno",
      "Winter Blast",
    ],
  },
  Devimon: {
    maps: ["MGEN06", "YAKA11A"],
    moves: [
      "Electric Cloud",
      "Megalo Spark",
      "Megaton Punch",
      "Muscle Charge",
      "Sonic Jab",
      "War Cry",
    ],
  },
  Digitamamon: {
    maps: ["MGEN99"],
    moves: ["Confused Storm", "Meltdown", "Thunder Justice"],
  },
  Dokunemon: {
    maps: ["BETL01", "MAYO00", "MAYO01", "MAYO02"],
    moves: ["Danger Sting", "Mass Morph", "Poison Claw", "Poison Powder"],
  },
  Drimogemon: {
    maps: ["TUNN04"],
    moves: ["Dynamite Kick", "Megaton Punch", "Sonic Jab"],
  },
  Etemon: {
    maps: ["MAYO04A"],
    moves: ["Buster Dive", "Dynamite Kick", "Spinning Shot", "War Cry"],
  },
  Flarerizamon: {
    maps: ["MIHA04B"],
    moves: ["Fire Tower", "Heat Laser", "Magma Bomb", "Spit Fire"],
  },
  Fugamon: {
    maps: ["MIST01", "MIST02", "MIST04", "MIST07"],
    moves: ["Magma Bomb", "Megaton Punch", "Static Elect", "Wind Cutter"],
  },
  Gabumon: {
    maps: ["MIST06", "OGRE00", "OGRE01", "OGRE11"],
    moves: ["Dynamite Kick", "Megaton Punch", "Tremar", "War Cry"],
  },
  Garurumon: {
    maps: ["FRZL08"],
    moves: ["Giga Freeze", "Ice Statue", "War Cry"],
  },
  Gekomon: {
    maps: ["STIC01", "STIC02"],
    moves: ["Giga Freeze", "Tear Drop", "Water Blit", "Winter Blast"],
  },
  Geremon: {
    maps: ["FACT02", "FACT03", "FACT04", "FACT07", "FACT09", "GOMI01"],
    moves: [
      "Horizontal Kick",
      "Odor Spray",
      "Poop Rnd Toss",
      "Poop Spd Toss",
      "Rnd Spd Toss",
    ],
  },
  Giromon: {
    maps: ["FACT08B"],
    moves: ["DG Dimension", "Delete Program", "Reverse Prog"],
  },
  Goburimon: {
    maps: [
      "GCAN01",
      "GCAN02",
      "GCAN04",
      "GCAN06",
      "GCAN08_1",
      "MAYO03",
      "MAYO04A",
      "MIHA00",
      "MIHA02",
      "MIHA04B",
      "MIST03",
      "MIST04",
      "MIST06",
      "MIST07",
      "TUNN01",
      "TUNN02",
    ],
    moves: [
      "Giga Freeze",
      "Magma Bomb",
      "Megaton Punch",
      "Sonic Jab",
      "Spit Fire",
      "War Cry",
      "Winter Blast",
    ],
  },
  Gotsumon: {
    maps: [
      "GCAN01",
      "GCAN03",
      "GCAN07",
      "GCAN09",
      "KODA04",
      "MIHA00",
      "MIHA02",
    ],
    moves: ["Buster Dive", "Megaton Punch", "Tremar"],
  },
  Greymon: { maps: ["TEND01"], moves: ["Magma Bomb"] },
  Guardromon: {
    maps: [
      "FACT01",
      "FACT02",
      "FACT03",
      "FACT04",
      "FACT07",
      "FACT09",
      "FACT10",
    ],
    moves: [
      "All Range Beam",
      "Full Potential",
      "Megaton Punch",
      "Power Crane",
      "Prominence Beam",
    ],
  },
  Gururumon: {
    maps: [
      "GCAN07",
      "GCAN09",
      "ICSA04",
      "ICSA07",
      "MGEN02",
      "MGEN04",
      "MGEN08",
      "MGEN10",
    ],
    moves: [
      "Buster Dive",
      "Giga Freeze",
      "Ice Statue",
      "Megaton Punch",
      "War Cry",
      "Winter Blast",
    ],
  },
  Hyogamon: {
    maps: [
      "FRZL02",
      "FRZL04",
      "FRZL06",
      "FRZL08",
      "FRZL13",
      "ICSA04",
      "ICSA06",
    ],
    moves: ["Buster Dive", "Giga Freeze", "Ice Needle", "Sonic Jab"],
  },
  IceDevimon: {
    maps: [
      "FRZL01",
      "FRZL02",
      "FRZL04",
      "FRZL06",
      "FRZL07",
      "FRZL13",
      "FRZL16",
      "MGEN11",
    ],
    moves: ["Giga Freeze", "Ice Statue", "Sonic Jab", "War Cry"],
  },
  Icemon: {
    maps: ["ICSA02", "ICSA05", "ICSA06"],
    moves: ["Giga Freeze", "Ice Needle", "Megaton Punch"],
  },
  "J-Mojyamon": {
    maps: ["TROP01", "TROP02", "TROP03", "TROP04", "TROP05"],
    moves: [
      "Dynamite Kick",
      "Green Trap",
      "Mass Morph",
      "Megaton Punch",
      "Water Blit",
    ],
  },
  Kokatorimon: {
    maps: ["MIST03"],
    moves: ["Dynamite Kick", "Megalo Spark", "War Cry"],
  },
  Kunemon: {
    maps: ["MAYO02"],
    moves: ["Danger Sting", "Electric Cloud", "Static Elect"],
  },
  Machinedramon: {
    maps: ["MGEN99", "CHKA01", "ICSA08", "OGRE02"],
    moves: [
      "All Range Beam",
      "Full Potential",
      "Infinity Cannon",
      "Megaton Punch",
      "Thunder Justice",
    ],
  },
  Mamemon: {
    maps: ["MIHA01"],
    moves: ["Buster Dive", "Full Potential", "Megaton Punch"],
  },
  Megadramon: {
    maps: ["MGEN10"],
    moves: ["DG Dimension", "Giga Freeze", "Megaton Punch"],
  },
  Meramon: {
    maps: ["TUNN08"],
    moves: ["Dynamite Kick", "Heat Laser", "Magma Bomb"],
  },
  MetalGreymon: {
    maps: ["MGEN98"],
    moves: ["Buster Dive", "Inifinity Burn", "Meltdown"],
  },
  MetalMamemon: {
    maps: ["FACT02"],
    moves: ["All Range Beam", "Metal Sprinter", "Pulse Laser"],
  },
  Meteormon: {
    maps: ["KODA07"],
    moves: ["Magma Bomb", "Megaton Punch", "Meltdown", "Tremar"],
  },
  ModokiBetamon: {
    maps: ["MAYO00", "MAYO01", "TROP04"],
    moves: ["Aqua Magic", "Electric Cloud", "Static Elect", "Water Blit"],
  },
  MoriShellmon: {
    maps: ["MIST01", "MIST02", "MIST03", "MIST04"],
    moves: ["Aqua Magic", "Charm Perfume", "Ice Statue", "Water Blit"],
  },
  Muchomon: {
    maps: ["GCAN06", "OGRE02", "TROP01", "TROP05"],
    moves: ["Giga Freeze", "Ice Needle", "Poison Claw"],
  },
  MudFrigimon: {
    maps: ["MIHA01"],
    moves: ["Muscle Charge", "Sonic Jab", "Tear Drop", "Water Blit"],
  },
  Ninjamon: {
    maps: ["MAYO08B"],
    moves: ["Charm Perfume", "Dynamite Kick", "Magma Bomb"],
  },
  NiseDrimogemon: {
    maps: ["GIAS00", "GIAS01", "GIAS08"],
    moves: ["Counter", "Dynamite Kick", "Sonic Jab"],
  },
  Numemon: { maps: ["FACT11B"], moves: ["Odor Spray", "Ult Poop Hell"] },
  Ogremon: {
    maps: ["GCAN08_1", "OGRE03", "OGRE11", "TUNN02"],
    moves: ["Dynamite Kick", "Magma Bomb", "Tremar"],
  },
  Otamamon: { maps: ["STIC02"], moves: ["Tear Drop", "Water Blit"] },
  Palmon: {
    maps: ["MAYO03"],
    moves: ["Poison Claw", "Poison Powder", "Water Blit"],
  },
  Patamon: {
    maps: ["GIAS03"],
    moves: ["Buster Dive", "Dynamite Kick", "Spinning Shot", "Wind Cutter"],
  },
  Piddomon: {
    maps: ["MGEN02", "MGEN03", "MGEN06", "MGEN09", "MGEN10", "MGEN11"],
    moves: ["Confused Storm", "Hurricane", "Megalo Spark", "Spinning Shot"],
  },
  Piximon: {
    maps: ["TROP01"],
    moves: ["Bug", "Confused Storm", "Danger Sting"],
  },
  PlatinumSukamon: {
    maps: ["FACT01", "FACT03", "FACT04", "FACT09"],
    moves: [
      "Big Poop Toss",
      "Big Rnd Toss",
      "Odor Spray",
      "Rnd Spd Toss",
      "Ult Poop Hell",
    ],
  },
  Psychemon: {
    maps: ["GIAS01", "GIAS02", "GIAS05", "GOMI01"],
    moves: ["Dynamite Kick", "Megaton Punch", "Sonic Jab", "Tremar", "War Cry"],
  },
  RedVegiemon: {
    maps: ["MAYO01", "MAYO02", "TROP03"],
    moves: ["Charm Perfume", "Danger Sting", "Poison Claw", "Poison Powder"],
  },
  Rockmon: {
    maps: [
      "MGEN01",
      "MGEN03",
      "MGEN05",
      "MGEN07",
      "MGEN09",
      "MGEN13",
      "YAKA02",
    ],
    moves: [
      "Aurora Freeze",
      "Ice Statue",
      "Muscle Charge",
      "Sonic Jab",
      "Winter Blast",
    ],
  },
  Saberdramon: {
    maps: ["KODA04", "KODA06", "KODA08", "MIST04"],
    moves: [
      "Hurricane",
      "Prominence Beam",
      "Red Inferno",
      "Spinning Shot",
      "Spit Fire",
      "Wind Cutter",
    ],
  },
  SandYanmamon: {
    maps: ["GCAN03", "GCAN07"],
    moves: ["Hurricane", "Spinning Shot", "Spit Fire"],
  },
  Sharmamon: {
    maps: [
      "GIAS01",
      "GIAS02",
      "GIAS03",
      "GIAS04",
      "GIAS05",
      "GIAS07",
      "GIAS08",
    ],
    moves: ["Magma Bomb", "Megaton Punch", "Sonic Jab", "War Cry"],
  },
  ShimaUnimon: {
    maps: ["GIAS00", "GIAS01", "GIAS03", "GIAS04", "GIAS08"],
    moves: ["Counter", "Dynamite Kick", "Megalo Spark", "War Cry"],
  },
  SkullGreymon: {
    maps: ["SAIB03"],
    moves: ["Buster Dive", "Dynamite Kick", "War Cry"],
  },
  SnowAgumon: {
    maps: ["FRZL01", "FRZL03", "FRZL08", "FRZL12"],
    moves: [
      "Ice Needle",
      "Ice Statue",
      "Muscle Charge",
      "Sonic Jab",
      "Winter Blast",
    ],
  },
  SnowGoburimon: {
    maps: ["FRZL01", "FRZL03", "FRZL04", "FRZL07", "FRZL12", "FRZL16"],
    moves: ["Giga Freeze", "Megaton Punch", "Sonic Jab", "Winter Blast"],
  },
  Soulmon: {
    maps: ["DGHA02", "YAKA14"],
    moves: [
      "Electric Cloud",
      "Giga Freeze",
      "Megalo Spark",
      "Static Elect",
      "Thunder Justice",
    ],
  },
  Sukamon: {
    maps: ["GOMI02"],
    moves: ["Big Poop Toss", "Poop Rnd Toss", "Rnd Spd Toss"],
  },
  Tankmon: {
    maps: ["MGEN13", "OMOC06"],
    moves: ["Buster Dive", "Megaton Punch", "Red Inferno", "Spit Fire"],
  },
  Tekkamon: {
    maps: ["MGEN12", "SAIB02"],
    moves: ["Buster Dive", "Full Potential", "Megaton Punch", "Reverse Prog"],
  },
  Tentomon: {
    maps: ["BETL01"],
    moves: ["Bug", "Charm Perfume", "Insect Plague", "Mass Morph"],
  },
  ToyAgumon: {
    maps: ["OMOC05"],
    moves: ["Fire Tower", "Magma Bomb", "Muscle Charge", "Red Inferno"],
  },
  Tsukaimon: {
    maps: [
      "DGHA01",
      "DGHA02",
      "GIAS00",
      "GIAS04",
      "GIAS05",
      "MAYO08B",
      "MIHA04B",
      "MIST01",
      "MIST06",
      "MIST07",
      "TROP00",
      "TROP02",
      "TROP03",
      "TROP04",
      "YAKA16",
      "YAKA17",
    ],
    moves: [
      "Buster Dive",
      "Dynamite Kick",
      "Sonic Jab",
      "Spinning Shot",
      "War Cry",
      "Wind Cutter",
    ],
  },
  Tyrannomon: {
    maps: ["KODA00"],
    moves: ["Buster Dive", "Megaton Punch", "Tremar", "War Cry"],
  },
  Vermilimon: {
    maps: [
      "KODA00",
      "KODA01",
      "MGEN01",
      "MGEN04",
      "MGEN05",
      "MGEN06",
      "MGEN08",
    ],
    moves: [
      "Counter",
      "Heat Laser",
      "Megaton Punch",
      "Meltdown",
      "Prominence Beam",
      "Red Inferno",
      "Tremar",
    ],
  },
  WaruMonzaemon: {
    maps: ["OMOC08"],
    moves: ["Buster Dive", "Megaton Punch", "Muscle Charge", "Thunder Justice"],
  },
  WaruSeadramon: {
    maps: ["OGRE11"],
    moves: ["Aurora Freeze", "Giga Freeze", "Winter Blast"],
  },
  Weedmon: {
    maps: ["GCAN02", "GCAN03", "GCAN06", "GCAN07", "GCAN09"],
    moves: ["Danger Sting", "Green Trap", "Mass Morph", "Poison Claw"],
  },
  Yanmamon: {
    maps: ["KODA00", "KODA01", "STIC01", "STIC02", "TROP02", "TROP05"],
    moves: [
      "Danger Sting",
      "Electric Cloud",
      "Insect Plague",
      "Spinning Shot",
      "Wind Cutter",
    ],
  },
};

const digimonDATA = [
  {
    id: "botamon",
    idle: "sprites/botamon.webp",
    anim: "sprites/botamon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    golpes: ["Bubble"],
    pre: ["verde"],
    evo: ["koromon"],
  },
  {
    id: "poyomon",
    idle: "sprites/poyomon.webp",
    anim: "sprites/poyomon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    golpes: ["Bubble"],
    pre: ["laranja"],
    evo: ["tokomon"],
  },
  {
    id: "punimon",
    idle: "sprites/punimon.webp",
    anim: "sprites/punimon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    golpes: ["Bubble"],
    pre: ["azul"],
    evo: ["tsunomon"],
  },
  {
    id: "yuramon",
    idle: "sprites/yuramon.webp",
    anim: "sprites/yuramon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    golpes: ["Bubble"],
    pre: ["rosa"],
    evo: ["tanemon"],
  },
  {
    id: "koromon",
    idle: "sprites/koromon.webp",
    anim: "sprites/koromon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    golpes: ["Bubble"],
    pre: ["botamon"],
    evo: ["agumon", "gabumon"],
  },
  {
    id: "tokomon",
    idle: "sprites/tokomon.webp",
    anim: "sprites/tokomon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    golpes: ["Bubble"],
    pre: ["poyomon"],
    evo: ["patamon", "piyomon"],
  },
  {
    id: "tsunomon",
    idle: "sprites/tsunomon.webp",
    anim: "sprites/tsunomon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    golpes: ["Bubble"],
    pre: ["punimon"],
    evo: ["elecmon", "penguinmon"],
  },
  {
    id: "tanemon",
    idle: "sprites/tanemon.webp",
    anim: "sprites/tanemon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    golpes: ["Bubble"],
    pre: ["yuramon"],
    evo: ["palmon", "betamon"],
  },
  {
    id: "agumon",
    idle: "sprites/agumon.webp",
    anim: "sprites/agumon2.webp",
    hp: 100,
    mp: 100,
    off: 10,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: "±15",
    tecs: 0,
    lutas: 0,
    golpes: [
      "Spit Fire",
      "Fire Tower",
      "Magma Bomb",
      "Heat Laser",
      "Red Inferno",
      "Sonic Jab",
      "Muscle Charge",
    ],
    pre: ["koromon"],
    evo: [
      "greymon",
      "meramon",
      "birdramon",
      "centarumon",
      "monochromon",
      "tyrannomon",
    ],
  },
  {
    id: "gabumon",
    idle: "sprites/gabumon.webp",
    anim: "sprites/gabumon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 10,
    spd: 10,
    brn: 10,
    desc: "≥0",
    peso: "±15",
    tecs: 0,
    lutas: 0,
    golpes: [
      "Fire Tower",
      "Heat Laser",
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Tremar",
      "War Cry",
    ],
    pre: ["koromon"],
    evo: [
      "centarumon",
      "monochromon",
      "drimogemon",
      "tyrannomon",
      "ogremon",
      "garurumon",
    ],
  },
  {
    id: "patamon",
    idle: "sprites/patamon.webp",
    anim: "sprites/patamon2.webp",
    hp: 100,
    mp: 0,
    off: 10,
    def: 0,
    spd: 0,
    brn: 10,
    desc: 0,
    peso: "±15",
    tecs: 0,
    lutas: 0,
    golpes: [
      "Sonic Jab",
      "Dynamite Kick",
      "Buster Dive",
      "War Cry",
      "Wind Cutter",
      "Spinning Shot",
      "Confused Storm",
    ],
    pre: ["tokomon"],
    evo: ["drimogemon", "tyrannomon", "ogremon", "leomon", "angemon", "unimon"],
  },
  {
    id: "elecmon",
    idle: "sprites/elecmon.webp",
    anim: "sprites/elecmon2.webp",
    hp: 100,
    mp: 0,
    off: 10,
    def: 0,
    spd: 10,
    brn: 0,
    desc: "≥0",
    peso: "±15",
    tecs: 0,
    lutas: 0,
    golpes: [
      "Dynamite Kick",
      "Counter",
      "Muscle Charge",
      "Static Elect",
      "Megalo Spark",
      "Electric Cloud",
      "Wind Cutter",
    ],
    pre: ["tsunomon"],
    evo: ["leomon", "angemon", "bakemon", "kokatorimon"],
  },
  {
    id: "piyomon",
    idle: "sprites/piyomon.webp",
    anim: "sprites/piyomon2.webp",
    hp: 0,
    mp: 100,
    off: 0,
    def: 10,
    spd: 10,
    brn: 0,
    desc: 0,
    peso: "±15",
    tecs: 0,
    lutas: 0,
    golpes: [
      "Spit Fire",
      "Heat Laser",
      "Electric Cloud",
      "Wind Cutter",
      "Spinning Shot",
      "Confused Storm",
      "Hurricane",
    ],
    pre: ["tokomon"],
    evo: ["birdramon", "airdramon", "kokatorimon", "unimon", "kabuterimon"],
  },
  {
    id: "kunemon",
    idle: "sprites/kunemon.webp",
    anim: "sprites/kunemon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    info: "50% de chance de digievoluir dormindo em Kunemon's Bed com qualquer Digimon Criança.",
    info_en:
      "There is a 50% chance of digivolving while sleeping in Kunemon's Bed with any Rookie Digimon.",
    golpes: [
      "Static Elect",
      "Megalo Spark",
      "Electric Cloud",
      "Poison Claw",
      "Danger Sting",
      "Poison Powder",
      "Mass Morph",
    ],
    pre: [""],
    evo: ["bakemon", "kabuterimon", "kuwagamon", "vegiemon"],
  },
  {
    id: "palmon",
    idle: "sprites/palmon.webp",
    anim: "sprites/palmon2.webp",
    hp: 0,
    mp: 100,
    off: 0,
    def: 0,
    spd: 10,
    brn: 10,
    desc: 0,
    peso: "±15",
    tecs: 0,
    lutas: 0,
    golpes: [
      "Poison Claw",
      "Charm Perfume",
      "Poison Powder",
      "Mass Morph",
      "Tear Drop",
      "Water Blit",
      "Aqua Magic",
    ],
    pre: ["tanemon"],
    evo: ["kuwagamon", "vegiemon", "ninjamon", "whamon", "coelamon"],
  },
  {
    id: "betamon",
    idle: "sprites/betamon.webp",
    anim: "sprites/betamon2.webp",
    hp: 100,
    mp: 100,
    off: 0,
    def: 10,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: "±15",
    tecs: 0,
    lutas: 0,
    golpes: [
      "Static Elect",
      "Electric Cloud",
      "Giga Freeze",
      "Ice Needle",
      "Water Blit",
      "Winter Blast",
      "Aqua Magic",
    ],
    pre: ["tanemon"],
    evo: ["seadramon", "whamon", "shellmon", "coelamon"],
  },
  {
    id: "penguinmon",
    idle: "sprites/penguinmon.webp",
    anim: "sprites/penguinmon2.webp",
    hp: 0,
    mp: 10,
    off: 0,
    def: 1,
    spd: 0,
    brn: 1,
    desc: "≥0",
    peso: "±15",
    tecs: 0,
    lutas: 2,
    golpes: [
      "Poison Claw",
      "Charm Perfume",
      "Giga Freeze",
      "Ice Needle",
      "Water Blit",
      "Winter Blast",
      "Aqua Magic",
    ],
    pre: ["tsunomon"],
    evo: ["whamon", "shellmon", "garurumon", "frigimon", "mojyamon"],
  },
  {
    id: "greymon",
    idle: "sprites/greymon.webp",
    anim: "sprites/greymon2.webp",
    hp: 0,
    mp: 0,
    off: 100,
    def: 100,
    spd: 100,
    brn: 100,
    desc: "≤1",
    peso: "±30",
    tecs: 35,
    lutas: 0,
    disc: 90,
    golpes: [
      "Spit Fire",
      "Fire Tower",
      "Magma Bomb",
      "Prominence Beam",
      "Heat Laser",
      "Red Inferno",
      "Meltdown",
      "Dynamite Kick",
      "Counter",
      "Muscle Charge",
      "Megalo Spark",
      "Spinning Shot",
    ],
    pre: ["agumon"],
    evo: ["metalGreymon", "skullGreymon"],
  },
  {
    id: "monochromon",
    idle: "sprites/monochromon.webp",
    anim: "sprites/monochromon2.webp",
    hp: 1000,
    mp: 0,
    off: 0,
    def: 100,
    spd: 0,
    brn: 100,
    desc: "≤3",
    peso: "±40",
    tecs: 35,
    lutas: "≤5",
    golpes: [
      "Spit Fire",
      "Prominence Beam",
      "Heat Laser",
      "Red Inferno",
      "Meltdown",
      "Megaton Punch",
      "Counter",
      "Tremar",
      "Green Trap",
      "Insect Plague",
      "Mass Morph",
    ],
    pre: ["agumon", "gabumon"],
    evo: ["metalGreymon", "metalMamemon"],
  },
  {
    id: "ogremon",
    idle: "sprites/ogremon.webp",
    anim: "sprites/ogremon2.webp",
    hp: 1000,
    mp: 0,
    off: 100,
    def: 0,
    spd: 0,
    brn: 0,
    desc: "≥5",
    peso: "±30",
    tecs: 35,
    lutas: "≥15",
    golpes: [
      "Spit Fire",
      "Magma Bomb",
      "Red Inferno",
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Buster Dive",
      "Tremar",
      "War Cry",
      "Poison Claw",
      "Insect Plague",
    ],
    pre: ["gabumon", "patamon"],
    evo: ["andromon", "giromon"],
  },
  {
    id: "airdramon",
    idle: "sprites/airdramon.webp",
    anim: "sprites/airdramon2.webp",
    hp: 0,
    mp: 1000,
    off: 0,
    def: 0,
    spd: 100,
    brn: 100,
    desc: "≤1",
    peso: "±30",
    tecs: 35,
    lutas: 0,
    disc: 90,
    golpes: [
      "Spit Fire",
      "Prominence Beam",
      "Heat Laser",
      "Static Elect",
      "Megalo Spark",
      "Electric Cloud",
      "Wind Cutter",
      "Spinning Shot",
      "Confused Storm",
      "Hurricane",
    ],
    pre: ["piyomon"],
    evo: ["megadramon", "phoenixmon"],
  },
  {
    id: "kuwagamon",
    idle: "sprites/kuwagamon.webp",
    anim: "sprites/kuwagamon2.webp",
    hp: 1000,
    mp: 1000,
    off: 100,
    def: 0,
    spd: 100,
    brn: 0,
    desc: "≥5",
    peso: "±30",
    tecs: 28,
    lutas: 0,
    golpes: [
      "Sonic Jab",
      "Muscle Charge",
      "Wind Cutter",
      "Spinning Shot",
      "Poison Claw",
      "Danger Sting",
      "Green Trap",
      "Charm Perfume",
      "Poison Powder",
      "Mass Morph",
    ],
    pre: ["kunemon", "palmon"],
    evo: ["h. Kabuterimon", "piximon"],
  },
  {
    id: "whamon",
    idle: "sprites/whamon.webp",
    anim: "sprites/whamon2.webp",
    hp: 1000,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 100,
    desc: "≤5",
    peso: "±40",
    tecs: 28,
    lutas: 0,
    disc: 60,
    golpes: [
      "Charm Perfume",
      "Poison Powder",
      "Tear Drop",
      "Giga Freeze",
      "Ice Needle",
      "Water Blit",
      "Ice Statue",
      "Winter Blast",
      "Aurora Freeze",
      "Aqua Magic",
    ],
    pre: ["palmon", "betamon", "penguinmon"],
    evo: ["megaSeadramon", "mamemon"],
  },
  {
    id: "frigimon",
    idle: "sprites/frigimon.webp",
    anim: "sprites/frigimon2.webp",
    hp: 0,
    mp: 1000,
    off: 0,
    def: 0,
    spd: 0,
    brn: 100,
    desc: "≤5",
    peso: "±30",
    tecs: 28,
    lutas: 0,
    feliz: 50,
    golpes: [
      "Sonic Jab",
      "Muscle Charge",
      "Tear Drop",
      "Giga Freeze",
      "Ice Needle",
      "Water Blit",
      "Ice Statue",
      "Winter Blast",
      "Aurora Freeze",
      "Aqua Magic",
    ],
    pre: ["penguinmon"],
    evo: ["metalMamemon", "mamemon"],
  },
  {
    id: "nanimon",
    idle: "sprites/nanimon.webp",
    anim: "sprites/nanimon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    feliz: -100,
    disc: 0,
    info: "Brigue com qualquer Digimon Novato quando as barras de Felicidade e Disciplina estiverem zeradas.",
    info_en:
      "Scold any Rookie Digimon when your Happiness and Discipline bars are at zero.",
    golpes: [
      "Dynamite Kick",
      "Megaton Punch",
      "Counter",
      "Horizontal Kick",
      "Odor Spray",
      "Poop Spd Toss",
      "Big Poop Toss",
      "Poop Rnd Toss",
      "Rnd Spd Toss",
      "Big Rnd Toss",
    ],
    pre: [""],
    evo: ["digitamamon"],
  },
  {
    id: "meramon",
    idle: "sprites/meramon.webp",
    anim: "sprites/meramon2.webp",
    hp: 0,
    mp: 0,
    off: 100,
    def: 0,
    spd: 0,
    brn: 0,
    desc: "≥5",
    peso: "±20",
    tecs: 28,
    lutas: "≥10",
    golpes: [
      "Spit Fire",
      "Fire Tower",
      "Magma Bomb",
      "Prominence Beam",
      "Heat Laser",
      "Red Inferno",
      "Inifinity Burn",
      "Dynamite Kick",
      "Counter",
      "War Cry",
    ],
    pre: ["agumon"],
    evo: ["metalGreymon", "andromon"],
  },
  {
    id: "drimogemon",
    idle: "sprites/drimogemon.webp",
    anim: "sprites/drimogemon2.webp",
    hp: 0,
    mp: 0,
    off: 100,
    def: 0,
    spd: 0,
    brn: 0,
    desc: "≥3",
    peso: "±40",
    tecs: 28,
    lutas: 0,
    feliz: 50,
    golpes: [
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Counter",
      "Buster Dive",
      "Tremar",
      "War Cry",
      "Muscle Charge",
      "Green Trap",
      "Charm Perfume",
    ],
    pre: ["gabumon", "patamon"],
    evo: ["metalGreymon"],
  },
  {
    id: "leomon",
    idle: "sprites/leomon.webp",
    anim: "sprites/leomon2.webp",
    hp: 0,
    mp: 0,
    off: 100,
    def: 0,
    spd: 100,
    brn: 100,
    desc: "≤1",
    peso: "±20",
    tecs: 35,
    lutas: "≥10",
    golpes: [
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Counter",
      "Buster Dive",
      "Tremar",
      "War Cry",
      "Muscle Charge",
      "Static Elect",
      "Megalo Spark",
    ],
    pre: ["patamon", "elecmon"],
    evo: ["andromon", "mamemon"],
  },
  {
    id: "kokatorimon",
    idle: "sprites/kokatorimon.webp",
    anim: "sprites/kokatorimon2.webp",
    hp: 1000,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: "≥3",
    peso: "±30",
    tecs: 28,
    lutas: 0,
    golpes: [
      "Dynamite Kick",
      "Tremar",
      "War Cry",
      "Static Elect",
      "Megalo Spark",
      "Electric Cloud",
      "Wind Cutter",
      "Spinning Shot",
      "Confused Storm",
      "Hurricane",
    ],
    pre: ["elecmon", "piyomon"],
    evo: ["phoenixmon", "piximon"],
  },
  {
    id: "vegiemon",
    idle: "sprites/vegiemon.webp",
    anim: "sprites/vegiemon2.webp",
    hp: 0,
    mp: 1000,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: "≥5",
    peso: "±10",
    tecs: 21,
    lutas: 0,
    feliz: 50,
    golpes: [
      "Poison Claw",
      "Danger Sting",
      "Green Trap",
      "Charm Perfume",
      "Poison Powder",
      "Mass Morph",
      "Water Blit",
      "Aqua Magic",
    ],
    pre: ["kunemon", "palmon"],
    evo: ["piximon"],
  },
  {
    id: "shellmon",
    idle: "sprites/shellmon.webp",
    anim: "sprites/shellmon2.webp",
    hp: 1000,
    mp: 0,
    off: 0,
    def: 100,
    spd: 0,
    brn: 0,
    desc: "≥5",
    peso: "±40",
    tecs: 35,
    lutas: 0,
    golpes: [
      "Charm Perfume",
      "Poison Powder",
      "Tear Drop",
      "Giga Freeze",
      "Ice Needle",
      "Water Blit",
      "Ice Statue",
      "Winter Blast",
      "Aurora Freeze",
      "Aqua Magic",
    ],
    pre: ["betamon", "penguinmon"],
    evo: ["h. Kabuterimon", "megaSeadramon"],
  },
  {
    id: "mojyamon",
    idle: "sprites/mojyamon.webp",
    anim: "sprites/mojyamon2.webp",
    hp: 1000,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: "≥5",
    peso: "±20",
    tecs: 28,
    lutas: "≤5",
    golpes: [
      "Dynamite Kick",
      "Megaton Punch",
      "Giga Freeze",
      "Ice Needle",
      "Water Blit",
      "Winter Blast",
      "Aurora Freeze",
      "Aqua Magic",
      "Green Trap",
      "Mass Morph",
    ],
    pre: ["penguinmon"],
    evo: ["skullGreymon", "mamemon"],
  },
  {
    id: "birdramon",
    idle: "sprites/birdramon.webp",
    anim: "sprites/birdramon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 100,
    brn: 0,
    desc: "≥3",
    peso: "±20",
    tecs: 35,
    lutas: 0,
    golpes: [
      "Spit Fire",
      "Fire Tower",
      "Magma Bomb",
      "Prominence Beam",
      "Heat Laser",
      "Red Inferno",
      "Meltdown",
      "Wind Cutter",
      "Spinning Shot",
      "Hurricane",
    ],
    pre: ["agumon", "piyomon"],
    evo: ["phoenixmon"],
  },
  {
    id: "tyrannomon",
    idle: "sprites/tyrannomon.webp",
    anim: "sprites/tyrannomon2.webp",
    hp: 1000,
    mp: 0,
    off: 0,
    def: 100,
    spd: 0,
    brn: 0,
    desc: "≤5",
    peso: "±30",
    tecs: 28,
    lutas: "≤5",
    golpes: [
      "Spit Fire",
      "Prominence Beam",
      "Red Inferno",
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Buster Dive",
      "Tremar",
      "War Cry",
      "Muscle Charge",
    ],
    pre: ["agumon", "gabumon", "patamon"],
    evo: ["metalGreymon", "megadramon"],
  },
  {
    id: "angemon",
    idle: "sprites/angemon.webp",
    anim: "sprites/angemon2.webp",
    hp: 0,
    mp: 1000,
    off: 0,
    def: 0,
    spd: 0,
    brn: 100,
    desc: "≤0",
    peso: "±20",
    tecs: 35,
    lutas: 0,
    golpes: [
      "Dynamite Kick",
      "Counter",
      "War Cry",
      "Static Elect",
      "Megalo Spark",
      "Electric Cloud",
      "Wind Cutter",
      "Spinning Shot",
      "Confused Storm",
      "Hurricane",
    ],
    pre: ["patamon", "elecmon"],
    evo: ["andromon", "phoenixmon"],
  },
  {
    id: "unimon",
    idle: "sprites/unimon.webp",
    anim: "sprites/unimon2.webp",
    hp: 1000,
    mp: 0,
    off: 0,
    def: 0,
    spd: 100,
    brn: 0,
    desc: "≤3",
    peso: "±30",
    tecs: 35,
    lutas: "≥10",
    golpes: [
      "Dynamite Kick",
      "Counter",
      "War Cry",
      "Static Elect",
      "Megalo Spark",
      "Electric Cloud",
      "Wind Cutter",
      "Spinning Shot",
      "Confused Storm",
      "Hurricane",
    ],
    pre: ["patamon", "piyomon"],
    evo: ["giromon", "phoenixmon"],
  },
  {
    id: "ninjamon",
    idle: "sprites/ninjamon.webp",
    anim: "sprites/ninjamon2.webp",
    hp: 0,
    mp: 1000,
    off: 100,
    def: 0,
    spd: 100,
    brn: 0,
    desc: "≤1",
    peso: "±10",
    tecs: 35,
    lutas: "≥15",
    golpes: [
      "Fire Tower",
      "Magma Bomb",
      "Sonic Jab",
      "Dynamite Kick",
      "Counter",
      "War Cry",
      "Danger Sting",
      "Charm Perfume",
      "Poison Powder",
      "Mass Morph",
    ],
    pre: ["palmon"],
    evo: ["piximon", "metalMamemon", "mamemon"],
  },
  {
    id: "coelamon",
    idle: "sprites/coelamon.webp",
    anim: "sprites/coelamon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 100,
    spd: 0,
    brn: 0,
    desc: "≥3",
    peso: "±30",
    tecs: 35,
    lutas: "≤5",
    golpes: [
      "Tear Drop",
      "Giga Freeze",
      "Ice Needle",
      "Water Blit",
      "Ice Statue",
      "Winter Blast",
      "Aqua Magic",
      "Poison Claw",
      "Danger Sting",
      "Insect Plague",
    ],
    pre: ["palmon", "betamon"],
    evo: ["megaSeadramon"],
  },
  {
    id: "numemon",
    idle: "sprites/numemon.webp",
    anim: "sprites/numemon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    info: "Quando o tempo limite para Digievoluir chegar ao fim, qualquer digimon Novato digievolui para Numemon caso não tenha alcançado nenhuma outra condição de digievolução.",
    info_en:
      "When the time limit for Digivolution expires, any Rookie Digimon will Digivolve into Numemon if it has not met any other Digivolution conditions.",
    golpes: [
      "Horizontal Kick",
      "Odor Spray",
      "Poop Spd Toss",
      "Big Poop Toss",
      "Poop Rnd Toss",
      "Rnd Spd Toss",
      "Big Rnd Toss",
      "Ult Poop Hell",
    ],
    pre: [""],
    evo: ["monzaemon"],
  },
  {
    id: "centarumon",
    idle: "sprites/centarumon.webp",
    anim: "sprites/centarumon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 100,
    desc: "≤3",
    peso: "±30",
    tecs: 28,
    lutas: 0,
    disc: 60,
    golpes: [
      "Spit Fire",
      "Fire Tower",
      "Magma Bomb",
      "Prominence Beam",
      "Heat Laser",
      "Red Inferno",
      "Meltdown",
      "Dynamite Kick",
      "Counter",
      "Muscle Charge",
    ],
    pre: ["agumon", "gabumon"],
    evo: ["andromon", "giromon"],
  },
  {
    id: "devimon",
    idle: "sprites/devimon.webp",
    anim: "sprites/devimon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    disc: 50,
    info: "Angemon tem 50% de chance de digievoluir para Devimon apos perder uma vida com 50% ou menos de disciplina.",
    info_en:
      "Angemon has a 50% chance of Digivolving into Devimon after losing a life with its Discipline bar at 50% or less.",
    golpes: [
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Counter",
      "War Cry",
      "Muscle Charge",
      "Megalo Spark",
      "Electric Cloud",
      "Spinning Shot",
      "Thunder Justice",
      "Giga Freeze",
      "Ice Statue",
    ],
    pre: [""],
    evo: ["skullgryemon", "megadramon"],
  },
  {
    id: "bakemon",
    idle: "sprites/bakemon.webp",
    anim: "sprites/bakemon2.webp",
    hp: 0,
    mp: 1000,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: "≥3",
    peso: "±20",
    tecs: 28,
    lutas: 0,
    feliz: 50,
    golpes: [
      "Static Elect",
      "Megalo Spark",
      "Electric Cloud",
      "Wind Cutter",
      "Spinning Shot",
      "Thunder Justice",
      "Hurricane",
      "Giga Freeze",
      "Winter Blast",
      "Aqua Magic",
    ],
    pre: ["elecmon", "kunemon"],
    evo: ["skullGreymon", "giromon"],
  },
  {
    id: "kabuterimon",
    idle: "sprites/kabuterimon.webp",
    anim: "sprites/kabuterimon2.webp",
    hp: 1000,
    mp: 1000,
    off: 100,
    def: 0,
    spd: 100,
    brn: 0,
    desc: "≤1",
    peso: "±30",
    tecs: 35,
    lutas: 0,
    golpes: [
      "Spit Fire",
      "Prominence Beam",
      "Red Inferno",
      "Wind Cutter",
      "Hurricane",
      "Poison Claw",
      "Danger Sting",
      "Green Trap",
      "Charm Perfume",
      "Poison Powder",
      "Mass Morph",
    ],
    pre: ["piyomon", "kunemon"],
    evo: ["h. Kabuterimon", "metalMamemon"],
  },
  {
    id: "seadramon",
    idle: "sprites/seadramon.webp",
    anim: "sprites/seadramon2.webp",
    hp: 1000,
    mp: 1000,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: "≥3",
    peso: "±30",
    tecs: 28,
    lutas: "≤5",
    golpes: [
      "Spit Fire",
      "Magma Bomb",
      "Danger Sting",
      "Charm Perfume",
      "Poison Powder",
      "Tear Drop",
      "Giga Freeze",
      "Ice Needle",
      "Water Blit",
      "Winter Blast",
      "Aqua Magic",
    ],
    pre: ["betamon"],
    evo: ["megadramon", "megaSeadramon"],
  },
  {
    id: "garurumon",
    idle: "sprites/garurumon.webp",
    anim: "sprites/garurumon2.webp",
    hp: 0,
    mp: 1000,
    off: 0,
    def: 0,
    spd: 100,
    brn: 0,
    desc: "≤1",
    peso: "±30",
    tecs: 28,
    lutas: 0,
    disc: 90,
    golpes: [
      "Spit Fire",
      "Fire Tower",
      "Magma Bomb",
      "Megaton Punch",
      "Buster Dive",
      "War Cry",
      "Giga Freeze",
      "Ice Needle",
      "Ice Statue",
      "Winter Blast",
      "Aqua Magic",
    ],
    pre: ["gabumon", "penguinmon"],
    evo: ["skullGreymon", "megaSeadramon"],
  },
  {
    id: "sukamon",
    idle: "sprites/sukamon.webp",
    anim: "sprites/sukamon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    info: "Deixe qualquer digimon fazer coco no chao 16 vezes.",
    info_en: "Have any Digimon poop on the floor 16 times.",
    golpes: [
      "Horizontal Kick",
      "Odor Spray",
      "Poop Spd Toss",
      "Big Poop Toss",
      "Poop Rnd Toss",
      "Rnd Spd Toss",
      "Big Rnd Toss",
      "Ult Poop Hell",
    ],
    pre: [""],
    evo: ["etemon"],
  },
  {
    id: "metalGreymon",
    idle: "sprites/metalgreymon.webp",
    anim: "sprites/metalgreymon2.webp",
    hp: 4000,
    mp: 3000,
    off: 500,
    def: 500,
    spd: 300,
    brn: 300,
    desc: "≤10",
    peso: "±65",
    tecs: 30,
    lutas: "≥30",
    disc: 95,
    golpes: [
      "Heat Laser",
      "Inifinity Burn",
      "Meltdown",
      "Megaton Punch",
      "Buster Dive",
      "Tremar",
      "Power Crane",
      "Delete Program",
      "Pulse Laser",
      "Reverse Prog",
      "Metal Sprinter",
      "All Range Beam",
      "DG Dimension",
      "Full Potential",
    ],
    pre: ["greymon", "meramon", "monochromon", "drimogemon", "tyrannomon"],
    evo: [""],
  },
  {
    id: "skullGreymon",
    idle: "sprites/skullgreymon.webp",
    anim: "sprites/skullgreymon2.webp",
    hp: 4000,
    mp: 6000,
    off: 400,
    def: 400,
    spd: 200,
    brn: 500,
    desc: "≥10",
    peso: "±30",
    tecs: 45,
    lutas: "≥40",
    golpes: [
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Counter",
      "Buster Dive",
      "Tremar",
      "War Cry",
      "Muscle Charge",
      "Giga Freeze",
      "Ice Statue",
      "Winter Blast",
      "Pulse Laser",
      "All Range Beam",
    ],
    pre: ["greymon", "devimon", "bakemon", "garurumon", "mojyamon"],
    evo: [""],
  },
  {
    id: "giromon",
    idle: "sprites/giromon.webp",
    anim: "sprites/giromon2.webp",
    hp: 0,
    mp: 0,
    off: 400,
    def: 0,
    spd: 300,
    brn: 400,
    desc: "≥15",
    peso: "±5",
    tecs: 35,
    lutas: "≥100",
    feliz: 95,
    golpes: [
      "Megaton Punch",
      "Buster Dive",
      "Megalo Spark",
      "Electric Cloud",
      "Thunder Justice",
      "Power Crane",
      "Delete Program",
      "Pulse Laser",
      "Reverse Prog",
      "Metal Sprinter",
      "All Range Beam",
      "DG Dimension",
      "Full Potential",
    ],
    pre: ["centarumon", "ogremon", "bakemon", "unimon"],
    evo: [""],
  },
  {
    id: "h. Kabuterimon",
    idle: "sprites/hkabuterimon.webp",
    anim: "sprites/hkabuterimon2.webp",
    hp: 7000,
    mp: 0,
    off: 400,
    def: 600,
    spd: 400,
    brn: 0,
    desc: "≤5",
    peso: "±55",
    tecs: 40,
    lutas: "≤0",
    golpes: [
      "Prominence Beam",
      "Red Inferno",
      "Megaton Punch",
      "Counter",
      "Buster Dive",
      "Muscle Charge",
      "Poison Claw",
      "Danger Sting",
      "Green Trap",
      "Insect Plague",
      "Bug",
      "Charm Perfume",
      "Poison Powder",
      "Mass Morph",
    ],
    pre: ["kabuterimon", "kuwagamon", "shellmon"],
    evo: [""],
  },
  {
    id: "metalMamemon",
    idle: "sprites/metalmamemon.webp",
    anim: "sprites/metalmamemon2.webp",
    hp: 0,
    mp: 0,
    off: 500,
    def: 400,
    spd: 400,
    brn: 400,
    desc: "≤15",
    peso: "±10",
    tecs: 30,
    lutas: 0,
    feliz: 95,
    golpes: [
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Counter",
      "Buster Dive",
      "Tremar",
      "War Cry",
      "Muscle Charge",
      "Delete Program",
      "Pulse Laser",
      "Reverse Prog",
      "Metal Sprinter",
      "All Range Beam",
    ],
    pre: ["monochromon", "kabuterimon", "ninjamon", "frigimon"],
    evo: [""],
  },
  {
    id: "megaSeadramon",
    idle: "sprites/megaseadramon.webp",
    anim: "sprites/megaseadramon2.webp",
    hp: 0,
    mp: 4000,
    off: 500,
    def: 400,
    spd: 0,
    brn: 400,
    desc: "≤5",
    peso: "±30",
    tecs: 40,
    lutas: "≤0",
    golpes: [
      "Tear Drop",
      "Giga Freeze",
      "Ice Needle",
      "Water Blit",
      "Ice Statue",
      "Winter Blast",
      "Aurora Freeze",
      "Aqua Magic",
      "Wind Cutter",
      "Confused Storm",
      "Hurricane",
    ],
    pre: ["seadramon", "whamon", "shellmon", "coelamon", "garurumon"],
    evo: [""],
  },
  {
    id: "vademon",
    idle: "sprites/vademon.webp",
    anim: "sprites/vademon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    info: "Elogie um Digimon Campeo apos 240 horas com ele. Ao atingir 360 horas, ele tera 50% de chance de digievoluir.",
    info_en:
      "Praise a Champion Digimon after spending 240 hours with it. Once you reach 360 hours, it will have a 50% chance of Digivolving.",
    golpes: [
      "Green Trap",
      "Bug",
      "Charm Perfume",
      "Power Crane",
      "Delete Program",
      "Pulse Laser",
      "Reverse Prog",
      "Metal Sprinter",
      "All Range Beam",
      "DG Dimension",
      "Full Potential",
    ],
    pre: [""],
    evo: [""],
  },
  {
    id: "etemon",
    idle: "sprites/etemon.webp",
    anim: "sprites/etemon2.webp",
    hp: 2000,
    mp: 3000,
    off: 400,
    def: 200,
    spd: 400,
    brn: 300,
    desc: "≤0",
    peso: "±15",
    tecs: 49,
    lutas: "≥50",
    golpes: [
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Counter",
      "Buster Dive",
      "Tremar",
      "War Cry",
      "Muscle Charge",
      "Megalo Spark",
      "Spinning Shot",
      "Thunder Justice",
      "Horizontal Kick",
      "Ult Poop Hell",
    ],
    pre: ["sukamon"],
    evo: [""],
  },
  {
    id: "andromon",
    idle: "sprites/andromon.webp",
    anim: "sprites/andromon2.webp",
    hp: 2000,
    mp: 4000,
    off: 200,
    def: 400,
    spd: 200,
    brn: 400,
    desc: "≤5",
    peso: "±40",
    tecs: 30,
    lutas: "≥30",
    disc: 95,
    golpes: [
      "Megaton Punch",
      "Counter",
      "Buster Dive",
      "Tremar",
      "Static Elect",
      "Megalo Spark",
      "Power Crane",
      "Delete Program",
      "Pulse Laser",
      "Reverse Prog",
      "Metal Sprinter",
      "All Range Beam",
      "DG Dimension",
      "Full Potential",
    ],
    pre: ["meramon", "centarumon", "ogremon", "leomon", "angemon"],
    evo: [""],
  },
  {
    id: "megadramon",
    idle: "sprites/megadramon.webp",
    anim: "sprites/megadramon2.webp",
    hp: 3000,
    mp: 5000,
    off: 500,
    def: 300,
    spd: 400,
    brn: 400,
    desc: "≤10",
    peso: "±55",
    tecs: 30,
    lutas: "≥30",
    golpes: [
      "Dynamite Kick",
      "Megaton Punch",
      "Giga Freeze",
      "Winter Blast",
      "Ice Statue",
      "Power Crane",
      "Delete Program",
      "Pulse Laser",
      "Reverse Prog",
      "Metal Sprinter",
      "All Range Beam",
      "DG Dimension",
      "Full Potential",
    ],
    pre: ["tyrannomon", "devimon", "airdramon", "seadramon"],
    evo: [""],
  },
  {
    id: "phoenixmon",
    idle: "sprites/phoenixmon.webp",
    anim: "sprites/phoenixmon2.webp",
    hp: 4000,
    mp: 4000,
    off: 0,
    def: 0,
    spd: 400,
    brn: 600,
    desc: "≤3",
    peso: "±30",
    tecs: 40,
    lutas: "≤0",
    disc: 100,
    golpes: [
      "Magma Bomb",
      "Prominence Beam",
      "Red Inferno",
      "Inifinity Burn",
      "Meltdown",
      "Static Elect",
      "Megalo Spark",
      "Electric Cloud",
      "Wind Cutter",
      "Spinning Shot",
      "Thunder Justice",
      "Confused Storm",
      "Hurricane",
    ],
    pre: ["birdramon", "angemon", "airdramon", "kokatorimon", "unimon"],
    evo: [""],
  },
  {
    id: "piximon",
    idle: "sprites/piximon.webp",
    anim: "sprites/piximon2.webp",
    hp: 0,
    mp: 0,
    off: 300,
    def: 300,
    spd: 400,
    brn: 400,
    desc: "≥15",
    peso: "±5",
    tecs: 25,
    lutas: 0,
    feliz: 95,
    golpes: [
      "Poison Claw",
      "Danger Sting",
      "Green Trap",
      "Insect Plague",
      "Bug",
      "Charm Perfume",
      "Poison Powder",
      "Mass Morph",
      "Wind Cutter",
      "Spinning Shot",
      "Confused Storm",
      "Hurricane",
    ],
    pre: ["kokatorimon", "kuwagamon", "vegiemon", "ninjamon"],
    evo: [""],
  },
  {
    id: "mamemon",
    idle: "sprites/mamemon.webp",
    anim: "sprites/mamemon2.webp",
    hp: 0,
    mp: 0,
    off: 400,
    def: 300,
    spd: 400,
    brn: 400,
    desc: "≥15",
    peso: "±5",
    tecs: 25,
    lutas: 0,
    feliz: 90,
    golpes: [
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Counter",
      "Buster Dive",
      "Tremar",
      "War Cry",
      "Muscle Charge",
      "Power Crane",
      "Pulse Laser",
      "Reverse Prog",
      "Metal Sprinter",
      "Full Potential",
    ],
    pre: ["leomon", "ninjamon", "whamon", "frigimon", "mojyamon"],
    evo: [""],
  },
  {
    id: "monzaemon",
    idle: "sprites/monzaemon.webp",
    anim: "sprites/monzaemon2.webp",
    hp: 3000,
    mp: 3000,
    off: 300,
    def: 300,
    spd: 300,
    brn: 300,
    desc: "≤0",
    peso: "±40",
    tecs: 49,
    lutas: "≥50",
    golpes: [
      "Sonic Jab",
      "Dynamite Kick",
      "Megaton Punch",
      "Counter",
      "Buster Dive",
      "Tremar",
      "War Cry",
      "Muscle Charge",
      "Static Elect",
      "Megalo Spark",
      "Electric Cloud",
      "Thunder Justice",
      "Confused Storm",
    ],
    pre: ["numemon"],
    evo: [""],
  },
  {
    id: "digitamamon",
    idle: "sprites/digitamamon.webp",
    anim: "sprites/digitamamon2.webp",
    hp: 3000,
    mp: 3000,
    off: 400,
    def: 400,
    spd: 400,
    brn: 300,
    desc: "≤0",
    peso: "±10",
    tecs: 49,
    lutas: "≥100",
    golpes: [
      "Spit Fire",
      "Fire Tower",
      "Magma Bomb",
      "Prominence Beam",
      "Heat Laser",
      "Red Inferno",
      "Inifinity Burn",
      "Meltdown",
      "Megalo Spark",
      "Spinning Shot",
      "Thunder Justice",
      "Confused Storm",
      "Hurricane",
      "Tear Drop",
      "Aqua Magic",
    ],
    pre: ["nanimon"],
    evo: [""],
  },
  {
    id: "panjyamon",
    idle: "sprites/panjyamon.webp",
    anim: "sprites/panjyamon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    info: "Digievolui apenas com cheats usando o item Noble Mane.",
    info_en: "It can only Digivolve using cheats with the Noble Mane item.",
    pre: [""],
    evo: [""],
  },
  {
    id: "gigadramon",
    idle: "sprites/gigadramon.webp",
    anim: "sprites/gigadramon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    info: "Digievolui apenas com cheats usando o item Giga Hand.",
    info_en: "It can only Digivolve using cheats with the Giga Hand item.",
    pre: [""],
    evo: [""],
  },
  {
    id: "metalEtemon",
    idle: "sprites/metaletemon.webp",
    anim: "sprites/metaletemon2.webp",
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    info: "Digievolui apenas com cheats usando o item Metal Banana.",
    info_en: "It can only Digivolve using cheats with the Metal Banana item.",
    pre: [""],
    evo: [""],
  },
  {
    id: "verde",
    idle: "sprites/verde.webp",
    anim: null,
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    pre: [""],
    evo: ["botamon"],
  },
  {
    id: "azul",
    idle: "sprites/azul.webp",
    anim: null,
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    pre: [""],
    evo: ["punimon"],
  },
  {
    id: "laranja",
    idle: "sprites/laranja.webp",
    anim: null,
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    pre: [""],
    evo: ["poyomon"],
  },
  {
    id: "rosa",
    idle: "sprites/rosa.webp",
    anim: null,
    hp: 0,
    mp: 0,
    off: 0,
    def: 0,
    spd: 0,
    brn: 0,
    desc: 0,
    peso: 0,
    tecs: 0,
    lutas: 0,
    pre: [""],
    evo: ["yuramon"],
  },
];

const mapsName = {
  BETL01: "Beetle Land",
  CHKA01: "Mansion Basement",
  DGHA01: "Overdell",
  DGHA02: "Overdell Cemetery",
  FACT01: "Factorial Town",
  FACT02: "Factorial Town",
  FACT03: "Factorial Town",
  FACT04: "Factorial Town",
  FACT07: "Factorial Town",
  FACT08B: "Factorial Town",
  FACT09: "Factorial Town",
  FACT10: "Factorial Town",
  FACT11B: "Sewer",
  FRZL01: "Freezeland",
  FRZL02: "Freezeland",
  FRZL03: "Freezeland",
  FRZL04: "Freezeland",
  FRZL06: "Freezeland",
  FRZL07: "Freezeland",
  FRZL08: "Freezeland",
  FRZL12: "Freezeland",
  FRZL13: "Freezeland",
  FRZL16: "Freezeland",
  GCAN01: "Great Canyon Entrance",
  GCAN02: "Great Canyon Top Area",
  GCAN03: "Great Canyon Top Area",
  GCAN04: "Great Canyon Bridge",
  GCAN05: "Fortress Entrance",
  GCAN06: "Great Canyon Bot. Area",
  GCAN07: "Great Canyon Bot. Area",
  GCAN08_1: "Great Canyon Top Area",
  GCAN09: "Great Canyon Top Area",
  GCAN10: "Great Canyon",
  GIAS00: "Gear Savanna",
  GIAS01: "Gear Savanna",
  GIAS02: "Gear Savanna",
  GIAS03: "Gear Savanna",
  GIAS04: "Gear Savanna",
  GIAS05: "Gear Savanna",
  GIAS07: "Gear Savanna",
  GIAS08: "Gear Savanna",
  GOMI01: "Trash Mountain",
  ICSA02: "Ice Sanctuary",
  ICSA04: "Ice Sanctuary",
  ICSA05: "Ice Sanctuary",
  ICSA06: "Ice Sanctuary",
  ICSA07: "Ice Sanctuary",
  ICSA08: "Ice Sanctuary",
  KODA00: "Ancient Dino Region",
  KODA01: "Ancient Glacial Region",
  KODA04: "Ancient Speedy Region",
  KODA06: "Ancient Speedy Region",
  KODA07: "Ancient Speedy Region",
  KODA08: "Ancient Speedy Region",
  MAYO00: "Native Forest",
  MAYO01: "Native Forest",
  MAYO02: "Native Forest",
  MAYO03: "Native Forest",
  MAYO04A: "Native Forest",
  MAYO08B: "Digimon Bridge",
  MGEN01: "Mt. Infinity",
  MGEN02: "Mt. Infinity",
  MGEN03: "Mt. Infinity",
  MGEN04: "Mt. Infinity",
  MGEN05: "Mt. Infinity",
  MGEN06: "Mt. Infinity",
  MGEN07: "Mt. Infinity",
  MGEN08: "Mt. Infinity",
  MGEN09: "Mt. Infinity",
  MGEN10: "Mt. Infinity",
  MGEN11: "Back Dimension",
  MGEN12: "Back Dimension",
  MGEN13: "Back Dimension",
  MGEN98: "Mt. Infinity",
  MGEN99: "Mt. Infinity",
  MIHA00: "Path Thru Mt. Panorama",
  MIHA01: "Mt. Panorama Plains",
  MIHA02: "Path Thru Mt. Panorama",
  MIHA04B: "Foot of Mt. Panorama",
  MIST01: "Misty Trees",
  MIST02: "Misty Trees",
  MIST03: "Misty Trees",
  MIST04: "Misty Trees",
  MIST06: "Misty Trees",
  MIST07: "Misty Trees",
  OGRE00: "Ogre Fortress",
  OGRE01: "Ogre Fortress",
  OGRE02: "Ogre Fortress",
  OGRE03: "Ogre Fortress",
  OGRE11: "Secret Beach Cave",
  OMOC05: "Toy Mansion",
  OMOC06: "Toy Mansion",
  OMOC07: "Toy Mansion",
  OMOC08: "Toy Mansion",
  SAIB02: "Underground Lab",
  SAIB03: "Underground Lab",
  STIC01: "Geko Swamp",
  STIC02: "Geko Swamp",
  TEND01: "File City",
  TROP00: "Tropical Jungle",
  TROP01: "Tropical Jungle",
  TROP02: "Tropical Jungle",
  TROP03: "Tropical Jungle",
  TROP04: "Mangrove Region",
  TROP05: "Mangrove Region",
  TUNN01: "Drill Tunnel",
  TUNN02: "Drill Tunnel 2nd Floor",
  TUNN04: "Residential Area",
  TUNN08: "Lava Cave",
  YAKA02: "Grey Lord's Mansion",
  YAKA11A: "Grey Lord's Mansion",
  YAKA14: "Grey Lord's Mansion",
  YAKA16: "Grey Lord's Mansion",
  YAKA17: "Grey Lord's Mansion",
};

const digimonById = Object.fromEntries(digimonDATA.map((d) => [d.id, d]));

class DigimonChart {
  constructor() {
    this.active = true;
    this.CHART_BASE_WIDTH = 1458;
    this.SLOT_BASE_SIZE = 94;
    this.CURSOR_BASE_SIZE = 94;

    this.currentIndex = 0;
    this.cursorAtivo = false;
    this.animInterval = null;
    this.lastWidth = null;

    this.evoAnimInterval = null;
    this.inTransition = false;

    this.moveSound = new Audio("sounds/blop.ogg");
    this.moveSound.volume = 0.4;
    this.selectSound = new Audio("sounds/click.ogg");
    this.selectSound.volume = 0.5;
    this.closeSound = new Audio("sounds/close.ogg");
    this.closeSound.volume = 0.5;
    this.soundEnabled = localStorage.getItem("soundEnabled") !== "false";
    this.inContent2 = false;

    this.evoIndex = 0;
    this.evoSide = "right";
    this.evoCenterID = null;
    this.inEvoSelect = false;
    this.currentDigimon = null;
    this.currentLayout = null;
    this.currentPreLayout = null;

    this.expandRect = document.getElementById("expand-rect");
    this.closeButton = document.getElementById("close-button");
    this.chart = document.querySelector(".chart");
    this.container = document.getElementById("slots-container");
    this.cursor = document.getElementById("cursor");
    this.evoUI = document.getElementById("evo-ui");
    this.statusBar = document.getElementById("status-bar");
    this.infoBar = document.getElementById("info-bar");
    this.moodBar = document.getElementById("mood-bar");
    this.centerDigimonImg = document.getElementById("center-digimon");
    this.evoInfoText = document.getElementById("evo-info-text");
    this.nameBar = document.getElementById("name-bar");

    this.slotImages = [];
    this.slots = [];
    this.nav = {
      0: { w: 63, a: 54, s: 1, d: 4 },
      1: { w: 0, a: 56, s: 2, d: 5 },
      2: { w: 1, a: 58, s: 3, d: 6 },
      3: { w: 2, a: 60, s: 4, d: 7 },
      4: { w: 3, a: 0, s: 5, d: 8 },
      5: { w: 4, a: 1, s: 6, d: 10 },
      6: { w: 5, a: 2, s: 7, d: 12 },
      7: { w: 6, a: 3, s: 8, d: 14 },
      8: { w: 7, a: 4, s: 9, d: 17 },
      9: { w: 8, a: 4, s: 10, d: 18 },
      10: { w: 9, a: 5, s: 11, d: 19 },
      11: { w: 10, a: 5, s: 12, d: 20 },
      12: { w: 11, a: 6, s: 13, d: 21 },
      13: { w: 12, a: 6, s: 14, d: 22 },
      14: { w: 13, a: 7, s: 15, d: 23 },
      15: { w: 14, a: 7, s: 16, d: 24 },
      16: { w: 15, a: 7, s: 17, d: 24 },
      17: { w: 16, a: 8, s: 18, d: 25 },
      18: { w: 17, a: 9, s: 19, d: 26 },
      19: { w: 18, a: 10, s: 20, d: 27 },
      20: { w: 19, a: 11, s: 21, d: 28 },
      21: { w: 20, a: 12, s: 22, d: 29 },
      22: { w: 21, a: 13, s: 23, d: 30 },
      23: { w: 22, a: 14, s: 24, d: 31 },
      24: { w: 23, a: 15, s: 61, d: 61 },
      25: { w: 24, a: 17, s: 26, d: 32 },
      26: { w: 25, a: 18, s: 27, d: 33 },
      27: { w: 26, a: 19, s: 28, d: 34 },
      28: { w: 27, a: 20, s: 29, d: 35 },
      29: { w: 28, a: 21, s: 30, d: 36 },
      30: { w: 29, a: 22, s: 31, d: 37 },
      31: { w: 30, a: 23, s: 24, d: 38 },
      32: { w: 31, a: 25, s: 33, d: 39 },
      33: { w: 32, a: 26, s: 34, d: 40 },
      34: { w: 33, a: 27, s: 35, d: 41 },
      35: { w: 34, a: 28, s: 36, d: 42 },
      36: { w: 35, a: 29, s: 37, d: 43 },
      37: { w: 36, a: 30, s: 38, d: 44 },
      38: { w: 37, a: 31, s: 61, d: 45 },
      39: { w: 38, a: 32, s: 40, d: 46 },
      40: { w: 39, a: 33, s: 41, d: 47 },
      41: { w: 40, a: 34, s: 42, d: 48 },
      42: { w: 41, a: 35, s: 43, d: 49 },
      43: { w: 42, a: 36, s: 44, d: 50 },
      44: { w: 43, a: 37, s: 45, d: 51 },
      45: { w: 44, a: 38, s: 61, d: 52 },
      46: { w: 45, a: 39, s: 47, d: 54 },
      47: { w: 46, a: 40, s: 48, d: 55 },
      48: { w: 47, a: 41, s: 49, d: 56 },
      49: { w: 48, a: 42, s: 50, d: 57 },
      50: { w: 49, a: 43, s: 51, d: 58 },
      51: { w: 50, a: 44, s: 52, d: 59 },
      52: { w: 51, a: 45, s: 53, d: 60 },
      53: { w: 52, a: 45, s: 63, d: 60 },
      54: { w: 53, a: 46, s: 55, d: 0 },
      55: { w: 54, a: 47, s: 56, d: 0 },
      56: { w: 55, a: 48, s: 57, d: 1 },
      57: { w: 56, a: 49, s: 58, d: 1 },
      58: { w: 57, a: 50, s: 59, d: 2 },
      59: { w: 58, a: 51, s: 60, d: 2 },
      60: { w: 59, a: 52, s: 53, d: 3 },
      61: { w: 45, a: 24, s: 0, d: 62 },
      62: { w: 53, a: 61, s: 0, d: 63 },
      63: { w: 53, a: 62, s: 0, d: 0 },
    };
    this.init();
  }

  init() {
    if (this.chart.complete) {
      this.setup();
    } else {
      this.chart.addEventListener("load", () => this.setup());
    }
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.onResize(), 150);
    });
    document.addEventListener("keydown", (e) => this.onKey(e));
  }

  setup() {
    this.setupSoundButton();
    this.createSlots();
    this.updateLayout();
    this.updateCursor();
    this.updateAnimation();
    this.closeButton.addEventListener("click", () => this.closeContent());
  }

  setupSoundButton() {
    const btn = document.getElementById("soundToggle");
    const icon = document.getElementById("soundIcon");
    const updateIcon = () => {
      icon.src = this.soundEnabled ? "images/som.webp" : "images/som2.webp";
    };
    updateIcon();
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.soundEnabled = !this.soundEnabled;
      localStorage.setItem("soundEnabled", this.soundEnabled);
      updateIcon();
      btn.blur();
    });
  }

  createSlots() {
    this.container.innerHTML = "";
    this.slotImages = [];
    this.slots = [];

    slotsData.forEach((slot, index) => {
      const div = document.createElement("div");
      div.className = "slot";

      const img = document.createElement("img");
      img.alt = "";
      const sprite = digimonDATA[index] || {};
      img.src = sprite.idle || "";
      img.dataset.idle = sprite.idle || "";
      img.dataset.anim = sprite.anim || "";
      div.appendChild(img);

      div.addEventListener("mouseenter", () => {
        if (this.currentIndex !== index) {
          this.currentIndex = index;
          this.playMoveSound();
        }
        this.activateCursor();
        this.updateCursor();
        this.updateAnimation();
      });
      div.addEventListener("click", () => {
        this.playSelectSound();
        this.select();
      });

      this.container.appendChild(div);
      this.slots.push(div);
      this.slotImages.push(img);
    });
  }

  updateCenterDigimon() {
    const sprite = digimonDATA[this.currentIndex];
    if (sprite) this.centerDigimonImg.src = sprite.idle;
  }

  updateLayout() {
    const rect = this.chart.getBoundingClientRect();
    const scale = rect.width / this.CHART_BASE_WIDTH;
    const closeSize = Math.round(40 * scale);

    this.closeButton.style.width = closeSize + "px";
    this.closeButton.style.height = closeSize + "px";
    this.closeButton.style.right = Math.round(30 * scale) + "px";
    this.closeButton.style.top = Math.round(30 * scale) + "px";

    const size = Math.round(this.SLOT_BASE_SIZE * scale);
    this.slots.forEach((div, i) => {
      const s = slotsData[i];
      div.style.width = size + "px";
      div.style.height = size + "px";
      div.style.left = s.x * rect.width + "px";
      div.style.top = s.y * rect.height + "px";
    });
  }

  activateCursor() {
    if (!this.cursorAtivo) {
      this.cursor.style.opacity = 1;
      this.cursorAtivo = true;
    }
  }

  updateCursor() {
    const chartRect = this.chart.getBoundingClientRect();
    const panelRect = this.chart.parentElement.getBoundingClientRect();
    const scale = chartRect.width / this.CHART_BASE_WIDTH;
    const size = Math.round(this.CURSOR_BASE_SIZE * scale);
    const slot = slotsData[this.currentIndex];
    const width = Math.round(size * 1.15);

    this.cursor.style.width = width + "px";
    this.cursor.style.height = size + "px";
    this.cursor.style.left =
      chartRect.left -
      panelRect.left +
      Math.round(slot.x * chartRect.width) -
      (width - size) / 2 +
      "px";
    this.cursor.style.top =
      chartRect.top -
      panelRect.top +
      Math.round(slot.y * chartRect.height) +
      "px";

    this.updateCenterDigimon();
  }

  updateAnimation() {
    this.slotImages.forEach((img) => {
      img.src = img.dataset.idle;
    });
    if (this.animInterval) clearInterval(this.animInterval);

    const img = this.slotImages[this.currentIndex];
    if (!img) return;

    let frame = true;
    img.src = img.dataset.anim;
    this.animInterval = setInterval(() => {
      img.src = frame ? img.dataset.idle : img.dataset.anim;
      frame = !frame;
    }, 400);
  }

  select() {
    this.playExpandAnimation();
  }

  _getChartMetrics() {
    const chartRect = this.chart.getBoundingClientRect();
    const panelRect = this.chart.parentElement.getBoundingClientRect();
    return { chartRect, panelRect };
  }

  playExpandAnimation() {
    if (this.inTransition) return;
    this.inTransition = true;

    const { chartRect, panelRect } = this._getChartMetrics();
    const slotRect = this.slots[this.currentIndex].getBoundingClientRect();
    const expand = this.expandRect;

    const startX = slotRect.left + slotRect.width / 2 - panelRect.left;
    const startY = slotRect.top + slotRect.height / 2 - panelRect.top;

    expand.style.transition = "none";
    expand.style.left = startX + "px";
    expand.style.top = startY + "px";
    expand.style.width = "0px";
    expand.style.height = "0px";
    expand.style.opacity = "1";
    expand.offsetHeight;

    expand.style.transition =
      "left .2s ease, top .2s ease, width .2s ease, height .2s ease";
    expand.style.left = chartRect.left - panelRect.left + "px";
    expand.style.top = chartRect.top - panelRect.top + "px";
    expand.style.width = chartRect.width + "px";
    expand.style.height = chartRect.height + "px";

    setTimeout(() => {
      this.expandRect.style.opacity = "0";
      this.openContent2();
    }, 200);
  }

  playCollapseAnimation() {
    if (this.inTransition) return;
    this.inTransition = true;

    this.evoUI.style.display = "none";
    if (this.nameBar) this.nameBar.style.display = "none";
    this.chart.src = "images/chart.webp";
    this.container.style.display = "block";
    this.cursor.style.display = "none";

    this.expandRect.offsetHeight;

    const { chartRect, panelRect } = this._getChartMetrics();
    const slotRect = this.slots[this.currentIndex].getBoundingClientRect();
    const expand = this.expandRect;

    const endX = slotRect.left + slotRect.width / 2 - panelRect.left;
    const endY = slotRect.top + slotRect.height / 2 - panelRect.top;

    expand.style.transition = "none";
    expand.style.left = chartRect.left - panelRect.left + "px";
    expand.style.top = chartRect.top - panelRect.top + "px";
    expand.style.width = chartRect.width + "px";
    expand.style.height = chartRect.height + "px";
    expand.style.opacity = "1";
    expand.offsetHeight;

    expand.style.transition =
      "left .2s ease, top .2s ease, width .2s ease, height .2s ease";
    expand.style.left = endX + "px";
    expand.style.top = endY + "px";
    expand.style.width = "0px";
    expand.style.height = "0px";

    setTimeout(() => {
      this.expandRect.style.opacity = 0;
      this.returnToChart();
      this.inTransition = false;
    }, 200);
  }

  openContent2() {
    this.container.style.display = "none";
    this.cursor.style.display = "none";
    this.chart.src = "images/conteudo2.webp";
    this.evoUI.style.display = "flex";

    const centerDigimon = digimonDATA[this.currentIndex];
    this.evoCenterID = centerDigimon ? centerDigimon.id : null;
    this.currentDigimon = centerDigimon || null;

    this.updateStats(centerDigimon || null);
    this.updateInfo(centerDigimon || null);
    this.updateInfoText(centerDigimon || null);

    this.statusBar.style.display = "flex";
    this.infoBar.style.display = "grid";

    if (centerDigimon) this.centerDigimonImg.src = centerDigimon.idle;

    this.updateNameBar(centerDigimon || null);
    this.nameBar.style.display = "flex";

    this.inContent2 = true;
    this.inTransition = false;
    this.active = false;

    this.closeButton.style.opacity = "1";
    this.closeButton.style.pointerEvents = "auto";

    this.createRightEvoSlots();
    this.createLeftEvoSlots();
    setTimeout(() => this.drawEvoLines(this.currentLayout), 50);
    setTimeout(() => this.drawPreLines(this.currentPreLayout), 50);

    setTimeout(() => {
      this.evoSide = "right";
      this.evoIndex = 0;
      this.inEvoSelect = true;
      const rightSlots = document.querySelectorAll(
        "#evo-slots-right .evo-slot-inner",
      );
      const leftSlots = document.querySelectorAll(
        "#evo-slots-left .evo-slot-inner",
      );
      if (rightSlots.length) {
        this.evoSide = "right";
        this.updateEvoCursor();
      } else if (leftSlots.length) {
        this.evoSide = "left";
        this.updateEvoCursor();
      }
      this._startEvoAnim();
    }, 60);

    setTimeout(() => {
      this.scaleStatusBar();
      this.scaleInfoBar();
      this.scaleNameBar();
      this.updateMood(centerDigimon || null);
      this.scaleMoodBar();
    }, 60);
  }

  scaleStatusBar() {
    const bar = this.statusBar;
    const ui = this.evoUI;
    const main = document.querySelector(".left-panel");
    if (!bar || !ui || !main) return;

    bar.style.transform = "translateX(-50%) scale(1)";
    bar.style.transformOrigin = "top center";

    const uiRect = ui.getBoundingClientRect();
    const mainRect = main.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();

    const barTop = barRect.top - uiRect.top;
    const availableH = uiRect.height - barTop - uiRect.height * 0.02;
    const availableW = mainRect.width * 0.44;

    const scale = Math.min(
      availableH / barRect.height,
      availableW / barRect.width,
      1,
    );
    bar.style.transform = `translateX(-50%) scale(${scale})`;
  }

  scaleInfoBar() {
    const bar = this.infoBar;
    const ui = this.evoUI;
    const leftBox = document.querySelector(".evo-box");
    if (!bar || !ui || !leftBox) return;

    bar.style.transform = "scale(1)";
    bar.style.left = "0px";
    bar.style.top = "0px";

    const uiRect = ui.getBoundingClientRect();
    const leftRect = leftBox.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();

    bar.style.left = Math.round(leftRect.left - uiRect.left) + "px";
    bar.style.top =
      Math.round(leftRect.bottom - uiRect.top + uiRect.height * 0.01) + "px";

    const availableW = leftRect.width;
    const availableH = uiRect.bottom - leftRect.bottom - uiRect.height * 0.02;
    const scale = Math.min(
      availableW / barRect.width,
      availableH / barRect.height,
      1,
    );
    bar.style.transform = `scale(${scale})`;
  }

  updateNameBar(digimon) {
    const el = document.getElementById("name-bar-text");
    if (!el) return;
    const raw = digimon?.id || "";
    const hidden = ["verde", "azul", "rosa", "laranja"];
    if (!raw || hidden.includes(raw)) {
      el.textContent = "";
      this.nameBar.style.display = "none";
      return;
    }
    this.nameBar.style.display = "flex";
    el.textContent = raw.charAt(0).toUpperCase() + raw.slice(1);
  }

  scaleNameBar() {
    const bar = this.nameBar;
    const ui = this.evoUI;
    if (!bar || !ui) return;

    const leftBox = document.querySelector(".evo-box");
    const centerBox = document.querySelector(".center-box");
    if (!leftBox || !centerBox) return;

    const uiRect = ui.getBoundingClientRect();
    const leftRect = leftBox.getBoundingClientRect();
    const centerRect = centerBox.getBoundingClientRect();

    const barW = centerRect.width * 2.2;
    const barLeft =
      centerRect.left - uiRect.left + (centerRect.width - barW) / 2;
    const barTop = centerRect.top - uiRect.top - centerRect.height * 1.42;

    bar.style.width = barW + "px";
    bar.style.left = barLeft + "px";
    bar.style.top = barTop + "px";
  }

  updateInfo(digimon) {
    const d = digimon || { desc: 0, peso: 0, lutas: 0, tecs: 0 };
    document.getElementById("info-desc").textContent = String(d.desc ?? 0);
    document.getElementById("info-peso").textContent = String(d.peso ?? 0);
    document.getElementById("info-lutas").textContent = String(d.lutas ?? 0);
    document.getElementById("info-tecs").textContent = String(d.tecs ?? 0);
  }

  updateInfoText(digimon) {
    const el = this.evoInfoText;
    if (!el) return;
    if (digimon && digimon.info) {
      el.textContent =
        currentLang === "en" ? digimon.info_en || digimon.info : digimon.info;
      el.style.display = "flex";
      this.fitInfoText(el);
    } else {
      el.style.display = "none";
      el.textContent = "";
    }
  }

  fitInfoText(el) {
    const maxH = el.parentElement.clientHeight;
    let min = 1,
      max = 45,
      best = 1;
    while (min <= max) {
      const mid = (min + max) >> 1;
      el.style.fontSize = mid + "px";
      void el.offsetWidth;
      if (el.scrollHeight <= maxH) {
        best = mid;
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    el.style.fontSize = best + "px";
  }

  updateMood(digimon) {
    const d = digimon || {};
    const felizBlock = document.getElementById("mood-feliz");
    const discBlock = document.getElementById("mood-disc");

    if (d.feliz !== undefined) {
      document.getElementById("mood-icon-feliz").src =
        `images/feliz${d.feliz}.webp`;
      document.getElementById("mood-icon-feliz").style.display = "block";
      felizBlock.style.display = "flex";
    } else {
      felizBlock.style.display = "none";
    }

    if (d.disc !== undefined) {
      document.getElementById("mood-icon-disc").src =
        `images/disc${d.disc}.webp`;
      document.getElementById("mood-icon-disc").style.display = "block";
      discBlock.style.display = "flex";
    } else {
      discBlock.style.display = "none";
    }

    this.moodBar.style.display =
      d.feliz !== undefined || d.disc !== undefined ? "flex" : "none";
  }

  scaleMoodBar() {
    const imgs = this.moodBar.querySelectorAll("img");
    const pending = [...imgs].filter((img) => !img.complete);
    if (pending.length > 0) {
      Promise.all(
        pending.map(
          (img) =>
            new Promise((res) => {
              img.onload = res;
              img.onerror = res;
            }),
        ),
      ).then(() => this._doScaleMoodBar());
    } else {
      this._doScaleMoodBar();
    }
  }

  _doScaleMoodBar() {
    const bar = this.moodBar;
    const ui = this.evoUI;
    const rightBox = document.querySelectorAll(".evo-box")[1];

    bar.style.transform = "scale(1)";
    bar.style.transformOrigin = "top left";
    void bar.offsetWidth;

    const uiRect = ui.getBoundingClientRect();
    const rightRect = rightBox.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();

    bar.style.left = rightRect.left - uiRect.left + "px";
    bar.style.top = rightRect.bottom - uiRect.top + uiRect.height * 0.01 + "px";

    const availableW = rightRect.width;
    const availableH = uiRect.bottom - rightRect.bottom - uiRect.height * 0.02;
    const scale = Math.min(
      availableW / barRect.width,
      availableH / barRect.height,
      1,
    );
    bar.style.transform = `scale(${scale})`;
  }

  _getSlotDigimon(side, index) {
    const digimon = digimonById[this.evoCenterID];
    if (!digimon) return null;
    const ids = side === "right" ? digimon.evo : digimon.pre;
    if (!ids) return null;
    const validIDs = ids.filter((id) => digimonById[id]);
    return digimonById[validIDs[index]] || null;
  }

  _stopEvoAnim() {
    if (this.evoAnimInterval) {
      clearInterval(this.evoAnimInterval);
      this.evoAnimInterval = null;
    }
  }

  _startEvoAnim() {
    this._stopEvoAnim();
    const centerDigimon = digimonById[this.evoCenterID];
    if (this.centerDigimonImg && centerDigimon && centerDigimon.anim) {
      let frame = true;
      this.centerDigimonImg.src = centerDigimon.anim;
      this.evoAnimInterval = setInterval(() => {
        this.centerDigimonImg.src = frame
          ? centerDigimon.idle
          : centerDigimon.anim;
        frame = !frame;
      }, 400);
    }
  }

  _resetAllSlotSprites() {
    ["#evo-slots-right", "#evo-slots-left"].forEach((sel, si) => {
      const side = si === 0 ? "right" : "left";
      document.querySelectorAll(`${sel} .evo-slot-inner`).forEach((s, i) => {
        const d = this._getSlotDigimon(side, i);
        const img = s.querySelector("img");
        if (img && d) img.src = d.idle;
      });
    });
  }

  moveEvoCursor(index) {
    const sel =
      this.evoSide === "right"
        ? "#evo-slots-right .evo-slot-inner"
        : "#evo-slots-left .evo-slot-inner";
    const slots = document.querySelectorAll(sel);
    if (!slots.length) return;
    this.evoIndex = Math.max(0, Math.min(index, slots.length - 1));
    this.updateEvoCursor();
  }

  switchEvoSide(side) {
    const rightSlots = document.querySelectorAll(
      "#evo-slots-right .evo-slot-inner",
    );
    const leftSlots = document.querySelectorAll(
      "#evo-slots-left .evo-slot-inner",
    );
    if (side === "right" && !rightSlots.length) return;
    if (side === "left" && !leftSlots.length) return;

    this._stopEvoAnim();
    this._resetAllSlotSprites();

    const old = document.getElementById("evo-cursor");
    if (old) old.remove();

    const slots = document.querySelectorAll(
      side === "right"
        ? "#evo-slots-right .evo-slot-inner"
        : "#evo-slots-left .evo-slot-inner",
    );
    if (!slots.length) return;

    this.evoSide = side;
    this.evoIndex = 0;
    this.updateEvoCursor();
    this._startEvoAnim();
    this.playMoveSound();
  }

  confirmEvoSlot() {
    const selected = this._getSlotDigimon(this.evoSide, this.evoIndex);
    if (!selected) return;

    if (this.soundEnabled) {
      const s = this.selectSound.cloneNode();
      s.volume = this.selectSound.volume;
      s.play();
    }

    this.evoCenterID = selected.id;
    this.updateNameBar(selected);
    this._stopEvoAnim();
    if (this.centerDigimonImg) this.centerDigimonImg.src = selected.idle;

    this.updateStats(selected);
    this.updateInfo(selected);
    this.currentDigimon = selected;
    this.updateInfoText(selected);
    this.clearEvoLines();
    this.clearPreLines();
    this.createRightEvoSlots();
    this.createLeftEvoSlots();
    setTimeout(() => this.drawEvoLines(this.currentLayout), 50);
    setTimeout(() => this.drawPreLines(this.currentPreLayout), 50);

    this.evoIndex = 0;
    setTimeout(() => {
      this.updateMood(selected);
      this.scaleMoodBar();
      const rightSlots = document.querySelectorAll(
        "#evo-slots-right .evo-slot-inner",
      );
      const leftSlots = document.querySelectorAll(
        "#evo-slots-left .evo-slot-inner",
      );
      const old = document.getElementById("evo-cursor");
      if (old) old.remove();
      if (rightSlots.length) {
        this.evoSide = "right";
        this.updateEvoCursor();
      } else if (leftSlots.length) {
        this.evoSide = "left";
        this.updateEvoCursor();
      }
      this._startEvoAnim();
    }, 60);
  }

  updateEvoCursor() {
    const sel =
      this.evoSide === "right"
        ? "#evo-slots-right .evo-slot"
        : "#evo-slots-left .evo-slot";
    const slots = document.querySelectorAll(sel);
    if (!slots.length) return;

    let cursor = document.getElementById("evo-cursor");
    if (!cursor) {
      cursor = document.createElement("img");
      cursor.id = "evo-cursor";
      cursor.src = "images/cursor.webp";
      cursor.style.cssText =
        "position:absolute;pointer-events:none;image-rendering:pixelated;z-index:30;";
      this.evoUI.appendChild(cursor);
    }

    const slot = slots[this.evoIndex];
    if (!slot) return;
    const uiRect = this.evoUI.getBoundingClientRect();
    const slotRect = slot.getBoundingClientRect();
    const width = slotRect.width * 1.15;

    cursor.style.width = width + "px";
    cursor.style.height = slotRect.height + "px";
    cursor.style.left =
      slotRect.left - uiRect.left - (width - slotRect.width) / 2 + "px";
    cursor.style.top = slotRect.top - uiRect.top + "px";
  }

  closeContent() {
    if (!this.inContent2 || this.inTransition) return;

    this.closeButton.style.opacity = "0";
    this.closeButton.style.pointerEvents = "none";
    this.playCloseSound();

    this.statusBar.style.display = "none";
    this.infoBar.style.display = "none";
    this.moodBar.style.display = "none";
    this.clearEvoLines();
    this.clearPreLines();

    this.inEvoSelect = false;
    this._stopEvoAnim();
    const evoCursor = document.getElementById("evo-cursor");
    if (evoCursor) evoCursor.remove();
    document.querySelectorAll(".evo-slot-inner").forEach((el) => {
      el.style.pointerEvents = "none";
    });

    this.inContent2 = false;
    this.playCollapseAnimation();
  }

  returnToChart() {
    this.statusBar.style.display = "none";
    this.infoBar.style.display = "none";
    this.moodBar.style.display = "none";
    this.clearEvoLines();
    this.clearPreLines();
    document.querySelectorAll(".evo-slot-inner").forEach((el) => {
      el.style.pointerEvents = "none";
    });

    this.evoUI.style.display = "none";
    this.container.style.display = "block";
    this.cursor.style.display = "block";

    const evoCursor = document.getElementById("evo-cursor");
    if (evoCursor) evoCursor.remove();

    this.chart.src = "images/chart.webp";
    this.expandRect.style.opacity = 0;

    this.inEvoSelect = false;
    this.inContent2 = false;
    this.active = true;
    this._stopEvoAnim();

    this.closeButton.style.opacity = "0";
    this.closeButton.style.pointerEvents = "none";
    this.updateCursor();
  }

  onResize() {
    const rect = this.chart.getBoundingClientRect();
    if (rect.width === this.lastWidth) return;
    this.lastWidth = rect.width;

    requestAnimationFrame(() => {
      this.updateLayout();
      this.updateCursor();
      if (this.inContent2) {
        this.drawEvoLines(this.currentLayout);
        this.drawPreLines(this.currentPreLayout);
        this.updateEvoCursor();
        requestAnimationFrame(() => {
          this.scaleStatusBar();
          this.scaleInfoBar();
          this.updateMood(this.currentDigimon);
          this.scaleMoodBar();
          const el = this.evoInfoText;
          if (el && el.style.display !== "none") this.fitInfoText(el);
        });
      }
    });
  }

  onKey(e) {
    if (window.techSystem?.active) {
      window.techSystem.onKey(e);
      return;
    }
    if (e.key === "Escape" && this.inContent2) {
      this.closeContent();
      return;
    }

    if (this.inEvoSelect) {
      const sel =
        this.evoSide === "right"
          ? "#evo-slots-right .evo-slot-inner"
          : "#evo-slots-left .evo-slot-inner";
      const slots = document.querySelectorAll(sel);

      if (
        ["ArrowUp", "w", "W"].includes(e.key) &&
        slots.length &&
        this.evoIndex > 0
      ) {
        this.moveEvoCursor(this.evoIndex - 1);
        this.playMoveSound();
      }
      if (
        ["ArrowDown", "s", "S"].includes(e.key) &&
        slots.length &&
        this.evoIndex < slots.length - 1
      ) {
        this.moveEvoCursor(this.evoIndex + 1);
        this.playMoveSound();
      }
      if (
        ["ArrowRight", "d", "D"].includes(e.key) &&
        document.querySelectorAll("#evo-slots-right .evo-slot-inner").length &&
        this.evoSide !== "right"
      )
        this.switchEvoSide("right");
      if (
        ["ArrowLeft", "a", "A"].includes(e.key) &&
        document.querySelectorAll("#evo-slots-left .evo-slot-inner").length &&
        this.evoSide !== "left"
      )
        this.switchEvoSide("left");
      if (e.key === "Enter") {
        e.preventDefault();
        this.confirmEvoSlot();
      }
      return;
    }

    if (!this.active) return;
    const dirMap = {
      ArrowUp: "up",
      w: "up",
      W: "up",
      ArrowDown: "down",
      s: "down",
      S: "down",
      ArrowLeft: "left",
      a: "left",
      A: "left",
      ArrowRight: "right",
      d: "right",
      D: "right",
    };
    const direction = dirMap[e.key];

    if (direction) {
      const prev = this.currentIndex;
      this.moveCursor(direction);
      if (this.currentIndex !== prev) this.playMoveSound();
      this.activateCursor();
      this.updateCursor();
      this.updateAnimation();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      this.playSelectSound();
      this.select();
    }
  }

  moveCursor(direction) {
    const keyMap = { up: "w", down: "s", left: "a", right: "d" };
    const next = this.nav[this.currentIndex][keyMap[direction]];
    if (next !== undefined) this.currentIndex = next;
  }

  _playClone(sound) {
    if (!this.soundEnabled) return;
    const s = sound.cloneNode();
    s.volume = sound.volume;
    s.play();
  }

  playMoveSound() {
    const now = Date.now();
    if (now - (this._lastMove || 0) < 80) return;
    this._lastMove = now;
    this._playClone(this.moveSound);
  }
  playSelectSound() {
    if (this.active) this._playClone(this.selectSound);
  }
  playCloseSound() {
    this._playClone(this.closeSound);
  }

  _makeSVG(id) {
    const old = document.getElementById(id);
    if (old) old.remove();

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = id;
    svg.style.cssText =
      "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;overflow:visible;";
    this.evoUI.insertBefore(svg, this.evoUI.firstChild);
    return svg;
  }

  _addPolyline(svg, points, stroke, width) {
    const pl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polyline",
    );
    pl.setAttribute("points", points);
    pl.setAttribute("stroke", stroke);
    pl.setAttribute("stroke-width", width);
    pl.setAttribute("fill", "none");
    pl.setAttribute("stroke-linecap", "round");
    pl.setAttribute("stroke-linejoin", "miter");
    svg.appendChild(pl);
  }

  drawEvoLines(layouts) {
    const svg = this._makeSVG("evo-lines");
    const center = document.querySelector(".center-slot");
    const targets = document.querySelectorAll("#evo-slots-right .evo-slot");
    if (!center || !targets.length) return;

    const parentRect = this.evoUI.getBoundingClientRect();
    const cRect = center.getBoundingClientRect();
    const scale = parentRect.width / 936;
    const lineSpacing = 8 * scale;

    targets.forEach((target, i) => {
      const inner = target.querySelector(".evo-slot-inner");
      const iRect = (inner || target).getBoundingClientRect();
      if (!iRect.width) return;

      const color = layouts?.colors?.[i] ?? "#ffffff";
      const outline = layouts?.outlines?.[i] ?? color;
      const cfg = layouts?.lines?.[i] ?? { h: 0, d: 0 };

      const startX = cRect.right - parentRect.left;
      const startY =
        cRect.top +
        cRect.height / 2 -
        (targets.length / 2) * lineSpacing +
        i * lineSpacing -
        parentRect.top;
      const endX = iRect.left + iRect.width * 0.75 - parentRect.left;
      const endY = iRect.top + iRect.height / 2 - parentRect.top;
      const midX = startX + cfg.h * scale;
      const diagX = midX + (cfg.d || 0) * scale;
      const pts = `${startX},${startY} ${midX},${startY} ${diagX},${endY} ${endX},${endY}`;

      this._addPolyline(svg, pts, outline, 8 * scale);
      this._addPolyline(svg, pts, color, 4 * scale);
    });
  }

  clearEvoLines() {
    const s = document.getElementById("evo-lines");
    if (s) s.remove();
  }

  drawPreLines(layout) {
    const svg = this._makeSVG("pre-lines");
    const center = document.querySelector(".center-slot");
    const targets = document.querySelectorAll("#evo-slots-left .evo-slot");
    if (!center || !targets.length) return;

    const parentRect = this.evoUI.getBoundingClientRect();
    const cRect = center.getBoundingClientRect();
    const scale = parentRect.width / 936;
    const lineSpacing = 8 * scale;

    targets.forEach((target, i) => {
      const inner = target.querySelector(".evo-slot-inner");
      const iRect = (inner || target).getBoundingClientRect();
      if (!iRect.width) return;

      const cfg = layout?.lines?.[i] ?? { h: 60, d: 0 };
      const startX = cRect.left - parentRect.left;
      const startY =
        cRect.top +
        cRect.height / 2 -
        (targets.length / 2) * lineSpacing +
        i * lineSpacing -
        parentRect.top;
      const endX = iRect.left + iRect.width * 0.75 - parentRect.left;
      const endY = iRect.top + iRect.height / 2 - parentRect.top;
      const midX = startX - cfg.h * scale;
      const diagX = midX - (cfg.d || 0) * scale;
      const pts = `${startX},${startY} ${midX},${startY} ${diagX},${endY} ${endX},${endY}`;

      this._addPolyline(svg, pts, "#DB6500", 8 * scale);
      this._addPolyline(svg, pts, "#E39407", 4 * scale);
    });
  }

  clearPreLines() {
    const s = document.getElementById("pre-lines");
    if (s) s.remove();
  }

  createRightEvoSlots() {
    const evoLayouts = {
      1: {
        offsetX: 5,
        colors: ["#00AEB8"],
        outlines: ["#006F8E"],
        lines: [{ h: 300, offsetX: 7 }],
      },
      2: {
        gap: 15,
        offsetX: 5,
        colors: ["#00AEB8", "#003CC8"],
        outlines: ["#006F8E", "#001E8C"],
        lines: [
          { h: 170, d: 30, offsetX: 7 },
          { h: 170, d: 30, offsetX: 7 },
        ],
      },
      3: {
        gap: 15,
        offsetX: 5,
        colors: ["#00B600", "#00AEB8", "#003CC8"],
        outlines: ["#006400", "#006F8E", "#001E8C"],
        lines: [
          { h: 70, d: 100, offsetX: 31 },
          { h: 300, offsetX: 7 },
          { h: 70, d: 100, offsetX: 31 },
        ],
      },
      4: {
        gap: 15,
        offsetX: 5,
        colors: ["#00B600", "#00AEB8", "#003CC8", "#BE00A0"],
        outlines: ["#006400", "#006F8E", "#001E8C", "#6E006E"],
        lines: [
          { h: 70, d: 100, offsetX: 31 },
          { h: 170, d: 30, offsetX: 7 },
          { h: 170, d: 30, offsetX: 7 },
          { h: 70, d: 100, offsetX: 31 },
        ],
      },
      5: {
        gap: 15,
        offsetX: 5,
        colors: ["#FBE802", "#00B600", "#00AEB8", "#003CC8", "#BE00A0"],
        outlines: ["#EC9A00", "#006400", "#006F8E", "#001E8C", "#6E006E"],
        lines: [
          { h: 0, d: 160, offsetX: 55 },
          { h: 70, d: 100, offsetX: 31 },
          { h: 300, offsetX: 7 },
          { h: 70, d: 100, offsetX: 31 },
          { h: 0, d: 160, offsetX: 55 },
        ],
      },
      6: {
        gap: 15,
        offsetX: 5,
        colors: [
          "#FBE802",
          "#00B600",
          "#00AEB8",
          "#003CC8",
          "#BE00A0",
          "#BE001E",
        ],
        outlines: [
          "#EC9A00",
          "#006400",
          "#006F8E",
          "#001E8C",
          "#6E006E",
          "#821E1E",
        ],
        lines: [
          { h: 0, d: 160, offsetX: 55 },
          { h: 70, d: 100, offsetX: 31 },
          { h: 170, d: 30, offsetX: 7 },
          { h: 170, d: 30, offsetX: 7 },
          { h: 70, d: 100, offsetX: 31 },
          { h: 0, d: 160, offsetX: 55 },
        ],
      },
    };

    const container = document.getElementById("evo-slots-right");
    if (!container) return;
    container.innerHTML = "";

    const digimon =
      digimonById[this.evoCenterID] || digimonDATA[this.currentIndex];
    if (!digimon?.evo) return;

    const total = digimon.evo.filter((id) => digimonById[id]).length;
    const layout = evoLayouts[total];
    this.currentLayout = layout;
    if (layout?.gap) container.style.gap = `${(layout.gap / 936) * 100}vw`;

    let count = 0;
    digimon.evo.forEach((evoID) => {
      const evo = digimonById[evoID];
      if (!evo) return;

      const slot = document.createElement("div");
      slot.className = "evo-slot";
      const inner = document.createElement("div");
      inner.className = "evo-slot-inner";
      const img = document.createElement("img");
      img.src = evo.idle;
      img.style.cssText =
        "width:80%;height:auto;image-rendering:pixelated;pointer-events:none;";

      if (layout?.lines?.[count]) {
        slot.style.marginRight = `${(layout.lines[count].offsetX || 0) + (layout.offsetX || 0)}%`;
      }

      inner.appendChild(img);
      inner.style.cursor = "pointer";
      inner.style.pointerEvents = "auto";
      const slotIndex = count;
      inner.addEventListener("mouseenter", () => {
        const changed = this.evoSide !== "right" || this.evoIndex !== slotIndex;
        this.evoSide = "right";
        this.moveEvoCursor(slotIndex);
        if (changed) this.playMoveSound();
      });
      inner.addEventListener("click", () => {
        this.evoSide = "right";
        this.moveEvoCursor(slotIndex);
        this.confirmEvoSlot();
      });
      slot.appendChild(inner);
      container.appendChild(slot);
      count++;
    });

    setTimeout(() => this.drawEvoLines(layout), 50);
  }

  createLeftEvoSlots() {
    const preLayouts = {
      1: { gap: 0, offsetX: 5, lines: [{ h: 300, offsetX: 7 }] },
      2: {
        gap: 15,
        offsetX: 5,
        lines: [
          { h: 170, d: 30, offsetX: 7 },
          { h: 170, d: 30, offsetX: 7 },
        ],
      },
      3: {
        gap: 15,
        offsetX: 5,
        lines: [
          { h: 70, d: 100, offsetX: 31 },
          { h: 300, offsetX: 7 },
          { h: 70, d: 100, offsetX: 31 },
        ],
      },
      4: {
        gap: 15,
        offsetX: 5,
        lines: [
          { h: 70, d: 100, offsetX: 31 },
          { h: 170, d: 30, offsetX: 7 },
          { h: 170, d: 30, offsetX: 7 },
          { h: 70, d: 100, offsetX: 31 },
        ],
      },
      5: {
        gap: 15,
        offsetX: 5,
        lines: [
          { h: 0, d: 160, offsetX: 55 },
          { h: 70, d: 100, offsetX: 31 },
          { h: 300, offsetX: 7 },
          { h: 70, d: 100, offsetX: 31 },
          { h: 0, d: 160, offsetX: 55 },
        ],
      },
    };

    const container = document.getElementById("evo-slots-left");
    if (!container) return;
    container.innerHTML = "";

    const digimon =
      digimonById[this.evoCenterID] || digimonDATA[this.currentIndex];
    if (!digimon?.pre) return;

    const total = digimon.pre.filter((id) => digimonById[id]).length;
    if (!total) return;

    const layout = preLayouts[total];
    this.currentPreLayout = layout;
    if (layout?.gap !== undefined)
      container.style.gap = `${(layout.gap / 936) * 100}vw`;

    let count = 0;
    digimon.pre.forEach((preID) => {
      const pre = digimonById[preID];
      if (!pre) return;

      const slot = document.createElement("div");
      slot.className = "evo-slot";
      const inner = document.createElement("div");
      inner.className = "evo-slot-inner";
      const img = document.createElement("img");
      img.src = pre.idle;
      img.style.cssText =
        "width:80%;height:auto;image-rendering:pixelated;pointer-events:none;";

      if (layout?.lines?.[count]) {
        slot.style.marginLeft = `${(layout.lines[count].offsetX || 0) + (layout.offsetX || 0)}%`;
      }

      inner.appendChild(img);
      inner.style.cursor = "pointer";
      inner.style.pointerEvents = "auto";
      const slotIndex = count;
      inner.addEventListener("mouseenter", () => {
        const changed = this.evoSide !== "left" || this.evoIndex !== slotIndex;
        this.evoSide = "left";
        this.moveEvoCursor(slotIndex);
        if (changed) this.playMoveSound();
      });
      inner.addEventListener("click", () => {
        this.evoSide = "left";
        this.moveEvoCursor(slotIndex);
        this.confirmEvoSlot();
      });
      slot.appendChild(inner);
      container.appendChild(slot);
      count++;
    });

    setTimeout(() => this.drawPreLines(layout), 50);
  }

  updateStats(digimon) {
    const d = digimon || { hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0 };
    [
      { id: "hp", val: d.hp, max: 9999 },
      { id: "mp", val: d.mp, max: 9999 },
      { id: "off", val: d.off, max: 999 },
      { id: "def", val: d.def, max: 999 },
      { id: "spd", val: d.spd, max: 999 },
      { id: "brn", val: d.brn, max: 999 },
    ].forEach((s) => {
      const num = document.getElementById(`stat-${s.id}`);
      const fill = document.getElementById(`fill-${s.id}`);
      if (num) num.textContent = String(s.val);
      if (fill) fill.style.width = `${(s.val / s.max) * 100}%`;
    });
  }
}

const techSlotsData = (() => {
  const cols = 8,
    rows = 7;
  const slots = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) slots.push({ col: c, row: r });
  return slots;
})();

class TechChart {
  constructor() {
    this.enemyContainer = document.getElementById("tech-enemy-container");
    this.enemySlots = [];
    this.enemyCursor = null;
    this.enemyIndex = 0;
    this.inEnemySelect = false;
    this.currentIndex = 0;
    this.container = document.getElementById("tech-slots-container");
    this.slots = [];
    this.SLOT_W_CQW = 5.4;
    this.SLOT_H_CQW = 5;
    this.GAP_CQW = 0.5;
    this.nav = this._buildNav(8, 7);
    this.active = false;
    this.init();
  }

  _buildNav(cols, rows) {
    const nav = {};
    for (let i = 0; i < cols * rows; i++) {
      const r = Math.floor(i / cols);
      const c = i % cols;
      nav[i] = {
        w: r > 0 ? i - cols : i,
        s: r < rows - 1 ? i + cols : i,
        a: c > 0 ? i - 1 : i,
        d: c < cols - 1 ? i + 1 : i,
      };
    }
    return nav;
  }

  init() {
    this.createSlots();
    window.addEventListener("resize", () => {
      if (this.active) {
        this.updateLayout();
        this.rebuildPartnerSprites();
        if (this._lastTech) this.buildEnemySlots(this._lastTech);
      }
    });
  }

  rebuildPartnerSprites() {
    if (this._lastGolpe) this.buildPartnerSprites(this._lastGolpe);
  }

  createSlots() {
    this.container.innerHTML = "";
    this.slots = [];
    this.animIntervals = [];

    techSlotsData.forEach((_, index) => {
      const tech = techs[index] || null;

      const div = document.createElement("div");
      div.className = "tech-slot";

      const img = document.createElement("img");
      img.alt = "";
      if (tech) {
        img.src = `sprites/${tech.id}.webp`;
        img.dataset.idle = `sprites/${tech.id}.webp`;
        img.dataset.anim = `sprites/${tech.id}2.webp`;
      }
      div.appendChild(img);

      const overlay = document.createElement("div");
      overlay.className = "tech-slot-overlay";
      overlay.style.display = "block";
      div.appendChild(overlay);

      div.addEventListener("click", () => {
        if (window.chartSystem?.soundEnabled) {
          const s = new Audio("sounds/blop2.ogg");
          s.volume = 0.5;
          s.play();
        }
        this.selectSlot(index);
      });
      div.addEventListener("dblclick", () => {
        const ov = div.querySelector(".tech-slot-overlay");
        const isUnlocked = ov.style.display === "none";
        ov.style.display = isUnlocked ? "block" : "none";
        localStorage.setItem(
          `tech-slot-${index}`,
          isUnlocked ? "locked" : "unlocked",
        );
      });
      div.addEventListener("mouseenter", () => {
        this.currentIndex = index;
        this.updateCursor();
        if (window.chartSystem?.soundEnabled)
          window.chartSystem.playMoveSound();
        this.showTechSlotTooltip(techs[index] || null, div);
      });
      div.addEventListener("mouseleave", () => this.hideTooltip());
      this.container.appendChild(div);
      this.slots.push(div);
    });

    this.startAllAnims();
  }

  restoreState() {
    this.slots.forEach((div, index) => {
      const ov = div.querySelector(".tech-slot-overlay");
      if (!ov) return;
      const saved = localStorage.getItem(`tech-slot-${index}`);
      ov.style.display = saved === "unlocked" ? "none" : "block";
    });
  }

  startAllAnims() {
    if (this.animIntervals) this.animIntervals.forEach(clearInterval);
    this.animIntervals = [];

    this.slots.forEach((div) => {
      const img = div.querySelector("img");
      if (!img || !img.dataset.anim) return;
      let frame = true;
      const interval = setInterval(() => {
        img.src = frame ? img.dataset.idle : img.dataset.anim;
        frame = !frame;
      }, 400);
      this.animIntervals.push(interval);
    });
  }

  updateLayout() {
    const page = document.querySelector(".page");
    const cqw = page.offsetWidth / 100;
    const slotW = this.SLOT_W_CQW * cqw;
    const slotH = this.SLOT_H_CQW * cqw;
    const gap = this.GAP_CQW * cqw;
    this.slots.forEach((div, i) => {
      const c = i % 8;
      const r = Math.floor(i / 8);
      div.style.width = slotW + "px";
      div.style.height = slotH + "px";
      div.style.left = c * (slotW + gap) + "px";
      div.style.top = r * (slotH + gap) + "px";
    });
    this.updateCursor();
  }

  updateCursor() {
    if (!this.slots[this.currentIndex]) return;
    let cursor = document.getElementById("tech-cursor");
    if (!cursor) {
      cursor = document.createElement("img");
      cursor.id = "tech-cursor";
      cursor.src = "images/cursor2.webp";
      cursor.style.cssText =
        "position:absolute;pointer-events:none;image-rendering:pixelated;z-index:30;";
      this.container.appendChild(cursor);
    }
    const uiRect = this.container.getBoundingClientRect();
    const slotRect = this.slots[this.currentIndex].getBoundingClientRect();
    const width = slotRect.width * 1.18;
    const height = slotRect.height * 1.18;

    cursor.style.width = width + "px";
    cursor.style.height = height + "px";
    cursor.style.left = slotRect.right - uiRect.left - width + 3 + "px";
    cursor.style.top =
      slotRect.top - uiRect.top - (height - slotRect.height) / 2 + "px";
  }

  removeCursor() {
    const c = document.getElementById("tech-cursor");
    if (c) c.remove();
  }

  moveCursor(dir) {
    const map = { up: "w", down: "s", left: "a", right: "d" };
    const next = this.nav[this.currentIndex][map[dir]];

    if (
      dir === "up" &&
      Math.floor(this.currentIndex / 8) === 0 &&
      this.enemySlots.length
    ) {
      this.inEnemySelect = true;
      const col = this.currentIndex % 8;
      const lastRow = Math.floor((this.enemySlots.length - 1) / 8);
      this.enemyIndex = Math.min(lastRow * 8 + col, this.enemySlots.length - 1);
      this.updateEnemyCursor();
      return;
    }

    if (next !== undefined) this.currentIndex = next;
  }

  selectSlot(index) {
    this.currentIndex = index;
    this.updateCursor();

    const tech = techs[index];
    if (!tech) return;

    this._lastGolpe = tech.golpe;
    this._lastTech = tech;
    this.buildPartnerSprites(tech.golpe);
    this.buildEnemySlots(tech);
    this.buildChanceTable(tech);
  }

  buildPartnerSprites(golpe) {
    let container = document.getElementById("tech-partner-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "tech-partner-container";
      document.querySelector(".chart-wrap").appendChild(container);
    }
    container.innerHTML = "";

    const label = document.getElementById("tech-label-partner");

    const matches = digimonDATA.filter(
      (d) => d.golpes && d.golpes.includes(golpe),
    );
    if (!matches.length) {
      container.style.display = "none";
      if (label) label.style.display = "none";
      return;
    }

    const page = document.querySelector(".page");
    const cqw = page.offsetWidth / 100;
    const slotW = this.SLOT_W_CQW * cqw;
    const slotH = this.SLOT_H_CQW * cqw;
    const gap = this.GAP_CQW * cqw;

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(8, ${slotW}px)`;
    container.style.gap = gap + "px";

    matches.forEach((d) => {
      const wrap = document.createElement("div");
      wrap.className = "tech-slot tech-enemy-slot";
      wrap.style.cssText = `width:${slotW}px; height:${slotH}px; position:relative;`;

      const img = document.createElement("img");
      img.src = `sprites/${d.id.toLowerCase()}3.webp`;
      img.alt = "";
      wrap.appendChild(img);
      container.appendChild(wrap);
    });

    if (label) {
      const chartWrap = document.querySelector(".chart-wrap");
      const chartRect = chartWrap.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      label.textContent = currentLang === "en" ? "Learned by" : "Aprende com";
      label.style.display = "block";
      label.style.left = containerRect.left - chartRect.left / 2 + "px";
      label.style.top = containerRect.top - chartRect.top + "px";
    }
  }
  buildMapSprites(nome) {
    let container = document.getElementById("tech-map-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "tech-map-container";
      document.querySelector(".chart-wrap").appendChild(container);
    }
    container.innerHTML = "";

    const allMaps = enemyData[nome]?.maps ?? [];
    const moveFilter = enemyMoveMapFilter[nome]?.[this._lastGolpe];
    const mapas = moveFilter
      ? allMaps.filter((m) => moveFilter.includes(m))
      : allMaps;
    if (!mapas?.length) {
      container.style.display = "none";
      return;
    }

    const page = document.querySelector(".page");
    const cqw = page.offsetWidth / 100;
    const size = 5.7 * cqw;

    container.style.cssText = `position:absolute; display:grid; grid-template-columns: repeat(7, ${size}px); gap:${0.9 * cqw}px; z-index:25; pointer-events:auto;`;

    mapas.forEach((mapa) => {
      const img = document.createElement("img");
      img.src = `images mapa/${mapa}.png`;
      img.style.cssText = `width:${size}px; height:${size}px; object-fit:cover; image-rendering:pixelated; cursor:pointer;`;

      const wrap = document.createElement("div");
      wrap.style.cssText = "position:relative;display:inline-block;";
      wrap.appendChild(img);

      const icon = document.createElement("div");
      icon.style.cssText =
        "position:absolute;bottom:2px;right:2px;pointer-events:none;";
      const iconSize = Math.round(1.5 * cqw);
icon.innerHTML = `<svg width="${iconSize}" height="${iconSize}" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" overflow="visible">
  <polyline points="1,3 1,1 3,1" fill="none" stroke="black" stroke-width="5" stroke-linecap="square"/>
  <polyline points="7,1 9,1 9,3" fill="none" stroke="black" stroke-width="5" stroke-linecap="square"/>
  <polyline points="9,7 9,9 7,9" fill="none" stroke="black" stroke-width="5" stroke-linecap="square"/>
  <polyline points="3,9 1,9 1,7" fill="none" stroke="black" stroke-width="5" stroke-linecap="square"/>
  <polyline points="1,3 1,1 3,1" fill="none" stroke="#84EFFF" stroke-width="1.5" stroke-linecap="square"/>
  <polyline points="7,1 9,1 9,3" fill="none" stroke="#84EFFF" stroke-width="1.5" stroke-linecap="square"/>
  <polyline points="9,7 9,9 7,9" fill="none" stroke="#84EFFF" stroke-width="1.5" stroke-linecap="square"/>
  <polyline points="3,9 1,9 1,7" fill="none" stroke="#84EFFF" stroke-width="1.5" stroke-linecap="square"/>
</svg>`;
      wrap.appendChild(icon);
      wrap.addEventListener("mouseenter", () => {
        this.showTooltip(mapa, wrap);
      });
      wrap.addEventListener("mouseleave", () => this.hideTooltip());
      wrap.addEventListener("click", () => {
        if (window.chartSystem?.soundEnabled) {
          const s = new Audio("sounds/blop2.ogg");
          s.volume = 0.5;
          s.play();
        }

        const allMapas = mapas;
        let currentIdx = allMapas.indexOf(mapa);

        const makePixelArrow = (dir) => {
          const pxLocal = Math.max(3, Math.round(document.querySelector(".page").offsetWidth / 100 * 0.5));
          const gridRight = [
            "....##....",
            "....#D#...",
            "#####CD#..",
            "#DDDDCCD#.",
            "#CCCCCCCD#",
            "#DDDDCCD#.",
            "#####CD#..",
            "....#D#...",
            "....##....",
          ];
          const colorMap = { "#": "#080808", C: "#84efff", D: "#00a5ce" };
          const AW = 10 * pxLocal, AH = 9 * pxLocal;
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("width", AW);
          svg.setAttribute("height", AH);
          svg.style.cssText = "display:block;image-rendering:pixelated;cursor:pointer;flex-shrink:0;";
          if (dir === "left") svg.style.transform = "scaleX(-1)";
          gridRight.forEach((row, by) => {
            [...row].forEach((ch, bx) => {
              if (ch === ".") return;
              const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              r.setAttribute("x", bx * pxLocal);
              r.setAttribute("y", by * pxLocal);
              r.setAttribute("width", pxLocal);
              r.setAttribute("height", pxLocal);
              r.setAttribute("fill", colorMap[ch]);
              svg.appendChild(r);
            });
          });
          return svg;
        };

        const overlay = document.createElement("div");
        overlay.style.cssText =
          "position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;";

        const topArea = document.createElement("div");
        topArea.style.cssText =
          "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;min-height:0;";

        const big = document.createElement("img");
        big.style.cssText =
          "max-width:80vw;max-height:70vh;image-rendering:pixelated;display:block;";

const cqwLocal = document.querySelector(".page").offsetWidth / 100;
const p2 = Math.max(1, Math.round(0.3 * cqwLocal));
const NW = Math.round(30 * cqwLocal / 3) * 3;
const NH = Math.round(6  * cqwLocal / 3) * 3;

const mapNameWrap = document.createElement("div");
mapNameWrap.style.cssText = `position:relative;width:${NW}px;height:${NH}px;flex-shrink:0;`;

const nmSvg = (() => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", NW); svg.setAttribute("height", NH);
  svg.style.cssText = "position:absolute;inset:0;pointer-events:none;";
  const ar = (x,y,w,h,f) => {
    const r = document.createElementNS("http://www.w3.org/2000/svg","rect");
    r.setAttribute("x",x); r.setAttribute("y",y);
    r.setAttribute("width",w); r.setAttribute("height",h);
    r.setAttribute("fill",f); svg.appendChild(r);
  };
  const W=NW, H=NH;
  ar(3*p2,3*p2,W-6*p2,H-6*p2,"#313183");
  ar(4*p2,2*p2,W-8*p2,p2,"#080808");
  ar(4*p2,H-3*p2,W-8*p2,p2,"#080808");
  ar(2*p2,3*p2,p2,H-6*p2,"#080808");
  ar(W-3*p2,3*p2,p2,H-6*p2,"#080808");
  ar(3*p2,3*p2,p2,p2,"#080808");
  ar(W-4*p2,3*p2,p2,p2,"#080808");
  ar(4*p2,1*p2,W-8*p2,p2,"#84efff");
  ar(2*p2,2*p2,2*p2,p2,"#84efff");
  ar(W-4*p2,2*p2,2*p2,p2,"#84efff");
  ar(2*p2,3*p2,p2,p2,"#84efff");
  ar(W-3*p2,3*p2,p2,p2,"#84efff");
  ar(4*p2,H-2*p2,W-8*p2,p2,"#84efff");
  ar(1*p2,4*p2,p2,H-8*p2,"#84efff");
  ar(2*p2,4*p2,p2,H-8*p2,"#080808");
  ar(W-3*p2,4*p2,p2,H-8*p2,"#080808");
  ar(W-2*p2,4*p2,p2,H-8*p2,"#84efff");
  ar(2*p2,H-4*p2,p2,p2,"#84efff");
  ar(2*p2,H-3*p2,2*p2,p2,"#84efff");
  ar(W-3*p2,H-4*p2,p2,p2,"#84efff");
  ar(W-4*p2,H-3*p2,2*p2,p2,"#84efff");
  ar(2*p2,1*p2,2*p2,p2,"#00a5ce");
  ar(W-4*p2,1*p2,2*p2,p2,"#00a5ce");
  ar(1*p2,2*p2,p2,2*p2,"#00a5ce");
  ar(W-2*p2,2*p2,p2,2*p2,"#00a5ce");
  ar(2*p2,H-2*p2,2*p2,p2,"#00a5ce");
  ar(W-4*p2,H-2*p2,2*p2,p2,"#00a5ce");
  ar(1*p2,H-4*p2,p2,2*p2,"#00a5ce");
  ar(W-2*p2,H-4*p2,p2,2*p2,"#00a5ce");
  ar(1*p2,0,W-2*p2,p2,"#080808");
  ar(1*p2,1*p2,p2,p2,"#080808");
  ar(W-2*p2,1*p2,p2,p2,"#080808");
  ar(1*p2,H-p2,W-2*p2,p2,"#080808");
  ar(0,1*p2,p2,H-2*p2,"#080808");
  ar(W-p2,1*p2,p2,H-2*p2,"#080808");
  ar(1*p2,H-2*p2,p2,p2,"#080808");
  ar(W-2*p2,H-2*p2,p2,p2,"#080808");
  ar(3*p2,H-4*p2,p2,p2,"#080808");
  ar(W-4*p2,H-4*p2,p2,p2,"#080808");
  return svg;
})();
mapNameWrap.appendChild(nmSvg);

const mapName = document.createElement("span");
mapName.style.cssText = `position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:0 16px;box-sizing:border-box;font-family:digimon,sans-serif;font-size:3cqw;color:#D6D6D6;white-space:nowrap;z-index:1;`;
mapNameWrap.appendChild(mapName);

        topArea.appendChild(big);
        topArea.appendChild(mapNameWrap);

        const bottomBar = document.createElement("div");
        bottomBar.style.cssText =
          "width:100%;display:flex;align-items:center;justify-content:center;gap:10px;padding:10px 16px;box-sizing:border-box;background:rgba(0,0,0,0.6);flex-shrink:0;";

        const arrowPrev = makePixelArrow("left");
        const arrowNext = makePixelArrow("right");

        const thumbScroll = document.createElement("div");
        thumbScroll.style.cssText =
          "display:flex;gap:6px;overflow-x:auto;max-width:80vw;padding:4px;scrollbar-width:thin;";

        const thumbs = allMapas.map((m, i) => {
          const t = document.createElement("img");
          t.src = `images mapa/${m}.png`;
          t.style.cssText =
            "width:48px;height:48px;object-fit:cover;image-rendering:pixelated;cursor:pointer;flex-shrink:0;outline:2px solid transparent;opacity:0.5;";
          t.addEventListener("click", (e) => { e.stopPropagation(); updateImage(i); });
          thumbScroll.appendChild(t);
          return t;
        });

        const updateImage = (idx) => {
  currentIdx = (idx + allMapas.length) % allMapas.length;
  big.src = `images mapa/${allMapas[currentIdx]}.png`;
  mapName.textContent = mapsName[allMapas[currentIdx]] ?? allMapas[currentIdx];

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const fontSize = Math.round(3 * cqwLocal);
  ctx.font = `${fontSize}px digimon, sans-serif`;
  const textW = ctx.measureText(mapName.textContent).width;
  const newW = Math.round((textW + 8 * p2 + 160) / 3) * 3;
  mapNameWrap.style.width = newW + "px";
  nmSvg.setAttribute("width", newW);
  mapNameWrap.querySelectorAll("rect").forEach(r => r.remove());
  const W = newW, H = NH;
  const ar = (x,y,w,h,f) => {
    const r = document.createElementNS("http://www.w3.org/2000/svg","rect");
    r.setAttribute("x",x); r.setAttribute("y",y);
    r.setAttribute("width",w); r.setAttribute("height",h);
    r.setAttribute("fill",f); nmSvg.appendChild(r);
  };
  ar(3*p2,3*p2,W-6*p2,H-6*p2,"#313183");
  ar(4*p2,2*p2,W-8*p2,p2,"#080808"); ar(4*p2,H-3*p2,W-8*p2,p2,"#080808");
  ar(2*p2,3*p2,p2,H-6*p2,"#080808"); ar(W-3*p2,3*p2,p2,H-6*p2,"#080808");
  ar(3*p2,3*p2,p2,p2,"#080808"); ar(W-4*p2,3*p2,p2,p2,"#080808");
  ar(4*p2,1*p2,W-8*p2,p2,"#84efff"); ar(2*p2,2*p2,2*p2,p2,"#84efff");
  ar(W-4*p2,2*p2,2*p2,p2,"#84efff"); ar(2*p2,3*p2,p2,p2,"#84efff");
  ar(W-3*p2,3*p2,p2,p2,"#84efff"); ar(4*p2,H-2*p2,W-8*p2,p2,"#84efff");
  ar(1*p2,4*p2,p2,H-8*p2,"#84efff"); ar(2*p2,4*p2,p2,H-8*p2,"#080808");
  ar(W-3*p2,4*p2,p2,H-8*p2,"#080808"); ar(W-2*p2,4*p2,p2,H-8*p2,"#84efff");
  ar(2*p2,H-4*p2,p2,p2,"#84efff"); ar(2*p2,H-3*p2,2*p2,p2,"#84efff");
  ar(W-3*p2,H-4*p2,p2,p2,"#84efff"); ar(W-4*p2,H-3*p2,2*p2,p2,"#84efff");
  ar(2*p2,1*p2,2*p2,p2,"#00a5ce"); ar(W-4*p2,1*p2,2*p2,p2,"#00a5ce");
  ar(1*p2,2*p2,p2,2*p2,"#00a5ce"); ar(W-2*p2,2*p2,p2,2*p2,"#00a5ce");
  ar(2*p2,H-2*p2,2*p2,p2,"#00a5ce"); ar(W-4*p2,H-2*p2,2*p2,p2,"#00a5ce");
  ar(1*p2,H-4*p2,p2,2*p2,"#00a5ce"); ar(W-2*p2,H-4*p2,p2,2*p2,"#00a5ce");
  ar(1*p2,0,W-2*p2,p2,"#080808"); ar(1*p2,1*p2,p2,p2,"#080808");
  ar(W-2*p2,1*p2,p2,p2,"#080808"); ar(1*p2,H-p2,W-2*p2,p2,"#080808");
  ar(0,1*p2,p2,H-2*p2,"#080808"); ar(W-p2,1*p2,p2,H-2*p2,"#080808");
  ar(1*p2,H-2*p2,p2,p2,"#080808"); ar(W-2*p2,H-2*p2,p2,p2,"#080808");
  ar(3*p2,H-4*p2,p2,p2,"#080808"); ar(W-4*p2,H-4*p2,p2,p2,"#080808");

  thumbs.forEach((t, i) => {
    t.style.outline = i === currentIdx ? "2px solid #52def7" : "2px solid transparent";
    t.style.opacity = i === currentIdx ? "1" : "0.5";
  });
  thumbs[currentIdx]?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
};

        arrowPrev.addEventListener("click", (e) => { e.stopPropagation(); updateImage(currentIdx - 1); });
        arrowNext.addEventListener("click", (e) => { e.stopPropagation(); updateImage(currentIdx + 1); });

        bottomBar.appendChild(arrowPrev);
        bottomBar.appendChild(thumbScroll);
        bottomBar.appendChild(arrowNext);

        overlay.appendChild(topArea);
        overlay.appendChild(bottomBar);

        overlay.addEventListener("click", () => { overlay.remove(); document.removeEventListener("keydown", onKey); });
        big.addEventListener("click", (e) => e.stopPropagation());
        bottomBar.addEventListener("click", (e) => e.stopPropagation());

        const onKey = (e) => {
          if (e.key === "ArrowLeft")  updateImage(currentIdx - 1);
          if (e.key === "ArrowRight") updateImage(currentIdx + 1);
          if (e.key === "Escape") { overlay.remove(); document.removeEventListener("keydown", onKey); }
        };
        document.addEventListener("keydown", onKey);

        document.body.appendChild(overlay);
        updateImage(currentIdx);
      });

      container.appendChild(wrap);
    });

    const chartRect = document
      .querySelector(".chart-wrap")
      .getBoundingClientRect();
    const techRect = this.container.getBoundingClientRect();
    container.style.top = "25cqw";
    container.style.left = "51.8cqw";
  }

  showTechSlotTooltip(tech, slotEl) {
    if (!tech) return;
    let tip = document.getElementById("tech-slot-tooltip");
    if (!tip) {
      tip = document.createElement("div");
      tip.id = "tech-slot-tooltip";
      tip.style.cssText = "position:absolute;z-index:50;pointer-events:none;";
      document.querySelector(".chart-wrap").appendChild(tip);
    }

    tip.innerHTML = "";

    const makeSvgBorderTop = (w, h) => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", w);
      svg.setAttribute("height", h);
      svg.style.cssText = "position:absolute;inset:0;pointer-events:none;";
      const addRect = (x, y, rw, rh, fill) => {
        const r = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect",
        );
        r.setAttribute("x", x);
        r.setAttribute("y", y);
        r.setAttribute("width", rw);
        r.setAttribute("height", rh);
        r.setAttribute("fill", fill);
        svg.appendChild(r);
      };
      const cqwLocal = document.querySelector(".page").offsetWidth / 100;
      const p = Math.max(1, Math.round(0.3 * cqwLocal)),
        W = w,
        H = h;

      addRect(3 * p, 3 * p, W - 6 * p, H - 6 * p, "#313183");

      // borda interna
      addRect(4 * p, 2 * p, W - 8 * p, p, "#080808"); // topo
      addRect(4 * p, H - 3 * p, W - 7 * p, p, "#080808"); // base linha continua
      addRect(2 * p, 3 * p, p, H - 6 * p, "#080808"); // esq
      addRect(3 * p, H - 4 * p, p, p, "#080808"); // linha 7 esq
      addRect(W - 3 * p, 3 * p, p, H - 3 * p, "#080808"); // dir vai ate o fim
      addRect(3 * p, 3 * p, p, p, "#080808"); // canto interno topo esq
      addRect(W - 4 * p, 3 * p, p, p, "#080808"); // canto interno topo dir

      addRect(4 * p, 1 * p, W - 8 * p, p, "#84efff"); // linha 1 meio
      addRect(2 * p, 2 * p, 2 * p, p, "#84efff"); // linha 2 esq
      addRect(W - 4 * p, 2 * p, 2 * p, p, "#84efff"); // linha 2 dir
      addRect(2 * p, 3 * p, p, p, "#84efff"); // linha 3 esq
      addRect(W - 3 * p, 3 * p, p, p, "#84efff"); // linha 3 dir
      addRect(4 * p, H - 2 * p, W - 7 * p, p, "#84efff"); // base meio linha continua
      addRect(1 * p, 4 * p, p, H - 8 * p, "#84efff"); // esq -
      addRect(2 * p, 4 * p, p, H - 8 * p, "#080808"); // esq #
      addRect(W - 3 * p, 4 * p, p, H - 4 * p, "#080808"); // dir # continua ate o fim
      addRect(W - 2 * p, 4 * p, p, H - 4 * p, "#84efff"); // dir - continua ate o fim
      addRect(2 * p, H - 4 * p, p, p, "#84efff"); // linha 7 esq
      addRect(2 * p, H - 3 * p, 2 * p, p, "#84efff"); // linha 8 esq

      addRect(2 * p, 1 * p, 2 * p, p, "#00a5ce"); // topo esq
      addRect(W - 4 * p, 1 * p, 2 * p, p, "#00a5ce"); // topo dir
      addRect(1 * p, 2 * p, p, 2 * p, "#00a5ce"); // linhas 2-3 esq
      addRect(W - 2 * p, 2 * p, p, 2 * p, "#00a5ce"); // linhas 2-3 dir
      addRect(2 * p, H - 2 * p, 2 * p, p, "#00a5ce"); // base esq linha continua
      addRect(1 * p, H - 4 * p, p, 2 * p, "#00a5ce"); // linhas 7-8 esq

      // borda externa
      addRect(1 * p, 0, W - 2 * p, p, "#080808"); // linha 0
      addRect(1 * p, 1 * p, p, p, "#080808"); // ## esq
      addRect(W - 2 * p, 1 * p, p, p, "#080808"); // ## dir
      addRect(1 * p, H - p, W - 3 * p, p, "#080808"); // base linha continua
      addRect(0, 1 * p, p, H - 2 * p, "#080808"); // col esq
      addRect(W - p, 1 * p, p, H - p, "#080808"); // col dir vai ate o fim

      addRect(1 * p, H - 2 * p, p, p, "#080808");

      return svg;
    };

    const makeSvgBorderBot = (w, h) => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", w);
      svg.setAttribute("height", h);
      svg.style.cssText = "position:absolute;inset:0;pointer-events:none;";
      const addRect = (x, y, rw, rh, fill) => {
        const r = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect",
        );
        r.setAttribute("x", x);
        r.setAttribute("y", y);
        r.setAttribute("width", rw);
        r.setAttribute("height", rh);
        r.setAttribute("fill", fill);
        svg.appendChild(r);
      };
      const cqwLocal = document.querySelector(".page").offsetWidth / 100;
      const p = Math.max(1, Math.round(0.3 * cqwLocal)),
        W = w,
        H = h;

      addRect(3 * p, 0, W - 6 * p, H - 3 * p, "#313183");

      // borda interna
      addRect(4 * p, H - 3 * p, W - 8 * p, p, "#080808"); // base
      addRect(2 * p, 0, p, H - 3 * p, "#080808"); // esq
      addRect(W - 3 * p, 0, p, H - 3 * p, "#080808"); // dir

      addRect(4 * p, H - 2 * p, W - 8 * p, p, "#84efff"); // base meio
      addRect(1 * p, 0, p, H - 3 * p, "#84efff"); // esq -
      addRect(2 * p, 0, p, H - 3 * p, "#080808"); // esq #
      addRect(W - 3 * p, 0, p, H - 4 * p, "#080808"); // dir #
      addRect(W - 2 * p, 0, p, H - 4 * p, "#84efff"); // dir -
      addRect(2 * p, H - 4 * p, p, p, "#84efff"); // linha 7 esq
      addRect(W - 3 * p, H - 4 * p, p, p, "#84efff"); // linha 7 dir
      addRect(2 * p, H - 3 * p, 2 * p, p, "#84efff"); // linha 8 esq
      addRect(W - 4 * p, H - 3 * p, 2 * p, p, "#84efff"); // linha 8 dir

      addRect(2 * p, H - 2 * p, 2 * p, p, "#00a5ce"); // base esq
      addRect(W - 4 * p, H - 2 * p, 2 * p, p, "#00a5ce"); // base dir
      addRect(1 * p, H - 4 * p, p, 2 * p, "#00a5ce"); // linhas 7-8 esq
      addRect(W - 2 * p, H - 4 * p, p, 2 * p, "#00a5ce"); // linhas 7-8 dir

      // borda externa
      addRect(1 * p, H - p, W - 2 * p, p, "#080808"); // base
      addRect(0, 0, p, H - p, "#080808"); // col esq
      addRect(W - p, 0, p, H - p, "#080808"); // col dir

      addRect(1 * p, H - 2 * p, p, p, "#080808");
      addRect(W - 2 * p, H - 2 * p, p, p, "#080808");

      addRect(3 * p, H - 4 * p, p, p, "#080808");
      addRect(W - 4 * p, H - 4 * p, p, p, "#080808");

      return svg;
    };

    const makeSvgArrow = (p) => {
      const gridMap = [
        "....##....",
        "....#D#...",
        "#####CD#..",
        "#DDDDCCD#.",
        "#CCCCCCCD#",
        "#DDDDCCD#.",
        "#####CD#..",
        "....#D#...",
        "....##....",
      ];
      const colorMap = { "#": "#080808", C: "#84efff", D: "#00a5ce" };
      const AW = 10 * p,
        AH = 9 * p;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", AW);
      svg.setAttribute("height", AH);
      svg.style.cssText =
        "display:block;image-rendering:pixelated;flex-shrink:0;";
      gridMap.forEach((row, by) => {
        [...row].forEach((ch, bx) => {
          if (ch === ".") return;
          const r = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect",
          );
          r.setAttribute("x", bx * p);
          r.setAttribute("y", by * p);
          r.setAttribute("width", p);
          r.setAttribute("height", p);
          r.setAttribute("fill", colorMap[ch]);
          svg.appendChild(r);
        });
      });
      return svg;
    };

    const cqw = document.querySelector(".page").offsetWidth / 100;
    const p = Math.max(1, Math.round(0.3 * cqw));
    const W = Math.round((42 * cqw) / 3) * 3;
    const H1 = Math.round((8 * cqw) / 3) * 3;
    const H2 = Math.round((26 * cqw) / 3) * 3;
    const offset = Math.round((W * 0.3) / 3) * 3;

    const svgTop = makeSvgBorderTop(W, H1);
    svgTop.style.cssText =
      "position:absolute;top:0;left:0;pointer-events:none;";
    tip.appendChild(svgTop);

    const svgBot = makeSvgBorderBot(W - offset, H2);
    svgBot.style.cssText = `position:absolute;top:${H1}px;left:${offset}px;pointer-events:none;`;
    tip.appendChild(svgBot);

    const nameEl = document.createElement("span");
    nameEl.style.cssText = [
      "position:absolute",
      "top:0",
      "left:0",
      `width:${W}px`,
      `height:${H1}px`,
      "display:flex",
      "align-items:center",
      "padding:0 16px",
      "box-sizing:border-box",
      "font-family:digimon,sans-serif",
      "font-size:5cqw",
      "color:#D6D6D6",
      "text-shadow:0.25cqw 0.25cqw 0 #000",
      "white-space:nowrap",
      "z-index:1",
    ].join(";");
    nameEl.textContent = tech.golpe;
    tip.appendChild(nameEl);

    const fields = [
      { label: currentLang === "en" ? "Power" : "Poder", val: tech.poder },
      { label: "MP", val: tech.mp },
      { label: "Range", val: tech.range },
      { label: currentLang === "en" ? "Effect" : "Efeito", val: tech.efeito },
    ];

    const grid = document.createElement("div");
    grid.style.cssText = [
      "position:absolute",
      `top:${H1 + Math.round(1.5 * cqw)}px`,
      `left:${offset + Math.round(1.5 * cqw)}px`,
      `width:${W - offset - Math.round(3 * cqw)}px`,
      `height:${H2 - Math.round(3 * cqw)}px`,
      "display:grid",
      `grid-template-columns:${Math.round(6 * cqw)}px ${Math.round(3 * cqw)}px ${Math.round(8 * cqw)}px`,
      "align-content:start",
      `column-gap:${Math.round(1.5 * cqw)}px`,
      `row-gap:${Math.round(1.2 * cqw)}px`,
      "z-index:1",
      "box-sizing:border-box",
    ].join(";");

    fields.forEach(({ label, val }) => {
      if (val === undefined) return;
      const lbl = document.createElement("span");
      lbl.style.cssText =
        "font-family:dwfont2,sans-serif;font-size:2cqw;color:#848484;text-transform:uppercase;-webkit-text-stroke:0.7cqw #080808;paint-order:stroke fill;align-self:center;";
      lbl.textContent = label;
      grid.appendChild(lbl);

      const arrow = makeSvgArrow(p);
      arrow.style.alignSelf = "center";
      grid.appendChild(arrow);

      const vEl = document.createElement("span");
      const isFirst =
        label === (currentLang === "en" ? "Power" : "Poder") || label === "MP";
      vEl.style.cssText = `font-family:digimon,sans-serif;font-size:5cqw;color:#D6D6D6;${isFirst ? "" : "text-shadow:0.25cqw 0.25cqw 0 #000;"}align-self:center;`;
      vEl.textContent = val ?? "";
      grid.appendChild(vEl);
    });

    tip.appendChild(grid);

    tip.style.cssText = `position:absolute;z-index:50;pointer-events:none;width:${W}px;height:${H1 + H2}px;`;
    tip.style.visibility = "hidden";
    tip.style.display = "block";

    requestAnimationFrame(() => {
      const pageRect = document
        .querySelector(".chart-wrap")
        .getBoundingClientRect();
      const slotRect = slotEl.getBoundingClientRect();
      const totalH = H1 + H2;

      let top = slotRect.bottom - pageRect.top + 4;

      top = Math.min(top, pageRect.height - totalH);

      const spaceRight = pageRect.right - slotRect.right;
      const spaceLeft = slotRect.left - pageRect.left;
      let left;
      if (spaceRight >= W) {
        left = slotRect.right - pageRect.left;
      } else if (spaceLeft >= W) {
        left = slotRect.left - pageRect.left - W;
      } else {
        left = spaceRight >= spaceLeft ? pageRect.width - W : 0;
      }
      left = Math.max(0, Math.min(left, pageRect.width - W));

      tip.style.left = left + Math.round(0.5 * cqw) + "px";
      tip.style.top = top - Math.round(1.5 * cqw) + "px";
      tip.style.visibility = "visible";
    });
  }

  hideTooltip() {
    const tip = document.getElementById("tech-tooltip");
    if (tip) tip.style.display = "none";
    const tip2 = document.getElementById("tech-slot-tooltip");
    if (tip2) tip2.style.display = "none";
    const tip3 = document.getElementById("tech-enemy-tooltip");
    if (tip3) tip3.style.display = "none";
  }

  showEnemyTooltip(nome, slotEl) {
    if (!nome) return;
    let tip = document.getElementById("tech-enemy-tooltip");
    if (!tip) {
      tip = document.createElement("div");
      tip.id = "tech-enemy-tooltip";
      tip.style.cssText = "position:absolute;z-index:50;pointer-events:none;";
      document.querySelector(".chart-wrap").appendChild(tip);
    }

    tip.innerHTML = "";

    const cqw = document.querySelector(".page").offsetWidth / 100;
    const p = Math.max(1, Math.round(0.3 * cqw));
    const W = Math.round((22 * cqw) / 3) * 3;
    const H = Math.round((5 * cqw) / 3) * 3;

    const addRect = (svg, x, y, rw, rh, fill) => {
      const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      r.setAttribute("x", x);
      r.setAttribute("y", y);
      r.setAttribute("width", rw);
      r.setAttribute("height", rh);
      r.setAttribute("fill", fill);
      svg.appendChild(r);
    };

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", W);
    svg.setAttribute("height", H);
    svg.style.cssText = "position:absolute;inset:0;pointer-events:none;";

    addRect(svg, 3 * p, 3 * p, W - 6 * p, H - 6 * p, "#313183");
    addRect(svg, 4 * p, 2 * p, W - 8 * p, p, "#080808");
    addRect(svg, 4 * p, H - 3 * p, W - 8 * p, p, "#080808");
    addRect(svg, 2 * p, 3 * p, p, H - 6 * p, "#080808");
    addRect(svg, W - 3 * p, 3 * p, p, H - 6 * p, "#080808");
    addRect(svg, 3 * p, 3 * p, p, p, "#080808");
    addRect(svg, W - 4 * p, 3 * p, p, p, "#080808");
    addRect(svg, 4 * p, 1 * p, W - 8 * p, p, "#84efff");
    addRect(svg, 2 * p, 2 * p, 2 * p, p, "#84efff");
    addRect(svg, W - 4 * p, 2 * p, 2 * p, p, "#84efff");
    addRect(svg, 2 * p, 3 * p, p, p, "#84efff");
    addRect(svg, W - 3 * p, 3 * p, p, p, "#84efff");
    addRect(svg, 4 * p, H - 2 * p, W - 8 * p, p, "#84efff");
    addRect(svg, 1 * p, 4 * p, p, H - 8 * p, "#84efff");
    addRect(svg, 2 * p, 4 * p, p, H - 8 * p, "#080808");
    addRect(svg, W - 3 * p, 4 * p, p, H - 8 * p, "#080808");
    addRect(svg, W - 2 * p, 4 * p, p, H - 8 * p, "#84efff");
    addRect(svg, 2 * p, H - 4 * p, p, p, "#84efff");
    addRect(svg, 2 * p, H - 3 * p, 2 * p, p, "#84efff");
    addRect(svg, W - 3 * p, H - 4 * p, p, p, "#84efff");
    addRect(svg, W - 4 * p, H - 3 * p, 2 * p, p, "#84efff");
    addRect(svg, 2 * p, 1 * p, 2 * p, p, "#00a5ce");
    addRect(svg, W - 4 * p, 1 * p, 2 * p, p, "#00a5ce");
    addRect(svg, 1 * p, 2 * p, p, 2 * p, "#00a5ce");
    addRect(svg, W - 2 * p, 2 * p, p, 2 * p, "#00a5ce");
    addRect(svg, 2 * p, H - 2 * p, 2 * p, p, "#00a5ce");
    addRect(svg, W - 4 * p, H - 2 * p, 2 * p, p, "#00a5ce");
    addRect(svg, 1 * p, H - 4 * p, p, 2 * p, "#00a5ce");
    addRect(svg, W - 2 * p, H - 4 * p, p, 2 * p, "#00a5ce");
    addRect(svg, 1 * p, 0, W - 2 * p, p, "#080808");
    addRect(svg, 1 * p, 1 * p, p, p, "#080808");
    addRect(svg, W - 2 * p, 1 * p, p, p, "#080808");
    addRect(svg, 1 * p, H - p, W - 2 * p, p, "#080808");
    addRect(svg, 0, 1 * p, p, H - 2 * p, "#080808");
    addRect(svg, W - p, 1 * p, p, H - 2 * p, "#080808");
    addRect(svg, 1 * p, H - 2 * p, p, p, "#080808");
    addRect(svg, W - 2 * p, H - 2 * p, p, p, "#080808");
    addRect(svg, 3 * p, H - 4 * p, p, p, "#080808");
    addRect(svg, W - 4 * p, H - 4 * p, p, p, "#080808");

    tip.appendChild(svg);

    const nameEl = document.createElement("span");
    nameEl.style.cssText = [
      "position:absolute",
      "top:0",
      "left:0",
      `width:${W}px`,
      `height:${H}px`,
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "box-sizing:border-box",
      "font-family:digimon,sans-serif",
      "font-size:3cqw",
      "color:#D6D6D6",
      "text-shadow:0.25cqw 0.25cqw 0 #000",
      "white-space:nowrap",
      "z-index:1",
    ].join(";");
    nameEl.textContent = nome;
    tip.appendChild(nameEl);

    tip.style.cssText = `position:absolute;z-index:50;pointer-events:none;width:${W}px;height:${H}px;`;
    tip.style.visibility = "hidden";
    tip.style.display = "block";

    requestAnimationFrame(() => {
      const pageRect = document
        .querySelector(".chart-wrap")
        .getBoundingClientRect();
      const slotRect = slotEl.getBoundingClientRect();

      let top = slotRect.bottom - pageRect.top + 4;
      top = Math.min(top, pageRect.height - H);

      const spaceRight = pageRect.right - slotRect.right;
      const spaceLeft = slotRect.left - pageRect.left;
      let left;
      if (spaceRight >= W) {
        left = slotRect.right - pageRect.left;
      } else if (spaceLeft >= W) {
        left = slotRect.left - pageRect.left - W;
      } else {
        left = spaceRight >= spaceLeft ? pageRect.width - W : 0;
      }
      left = Math.max(0, Math.min(left, pageRect.width - W));

      tip.style.left = left + Math.round(1 * cqw) + "px";
      tip.style.top = top - Math.round(1 * cqw) + "px";
      tip.style.visibility = "visible";
    });
  }

  buildEnemySlots(tech) {
    this.enemyContainer.innerHTML = "";
    this.enemySlots = [];
    this.inEnemySelect = false;

    const label = document.getElementById("tech-label-enemy");

    const inimigos = tech?.inimigos || [];
    if (!inimigos.length) {
      this.enemyContainer.style.display = "none";
      if (label) label.style.display = "none";
      return;
    }

    const page = document.querySelector(".page");
    const cqw = page.offsetWidth / 100;
    const slotW = this.SLOT_W_CQW * cqw;
    const slotH = this.SLOT_H_CQW * cqw;
    const gap = this.GAP_CQW * cqw;
    const cols = 8;

    inimigos.forEach((nome, i) => {
      const div = document.createElement("div");
      div.className = "tech-slot tech-enemy-slot";
      div.style.width = slotW + "px";
      div.style.height = slotH + "px";
      div.style.left = (i % cols) * (slotW + gap) + "px";
      div.style.top = Math.floor(i / cols) * (slotH + gap) + "px";

      const img = document.createElement("img");
      img.src = `sprites/${nome.toLowerCase()}3.webp`;
      img.alt = "";
      div.appendChild(img);

      div.addEventListener("click", () => {
        if (window.chartSystem?.soundEnabled) {
          const s = new Audio("sounds/blop2.ogg");
          s.volume = 0.5;
          s.play();
        }
        this.selectEnemy(i, nome);
      });
      div.addEventListener("mouseenter", () => {
        this.enemyIndex = i;
        this.updateEnemyCursor();
        if (window.chartSystem?.soundEnabled)
          window.chartSystem.playMoveSound();
        this.showEnemyTooltip(nome, div);
      });
      div.addEventListener("mouseleave", () => this.hideTooltip());

      this.enemyContainer.appendChild(div);
      this.enemySlots.push(div);
    });

    this.enemyContainer.style.display = "block";

    if (label) {
      const chartWrap = document.querySelector(".chart-wrap");
      const chartRect = chartWrap.getBoundingClientRect();
      const contRect = this.enemyContainer.getBoundingClientRect();
      label.textContent = currentLang === "en" ? "Enemies" : "Inimigos";
      label.style.display = "block";
      label.style.left = contRect.left - chartRect.left / 2 + "px";
      label.style.top = contRect.top - chartRect.top + "px";
    }

    this.inEnemySelect = true;
    this.enemyIndex = 0;
    this.updateEnemyCursor();
    if (inimigos[0]) this.buildMapSprites(inimigos[0]);
  }

  buildChanceTable(tech) {
    this.selectedTech = tech;
    let wrapper = document.getElementById("tech-chance-wrapper");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.id = "tech-chance-wrapper";
      document.querySelector(".chart-wrap").appendChild(wrapper);
    }
    wrapper.innerHTML = "";
    wrapper.style.cssText =
      "width:47.4cqw;height:18.6cqw;position:absolute;top:46.6cqw;left:50.5cqw;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;z-index:25;padding:4px;";

    const title = document.createElement("div");
    title.textContent =
      currentLang === "en" ? "Learning chance" : "Chance de aprender";
    title.style.cssText =
      "font-family:digimon,sans-serif;font-size:4cqw;color:#FFFA75;text-shadow:0.25cqw 0.25cqw 0 #000;white-space:nowrap;margin-bottom:4cqw;";
    wrapper.appendChild(title);

    const label = document.getElementById("tech-label-chance");

    const colLabels =
      currentLang === "en"
        ? ["Training", "In Battle"]
        : ["Treinando", "Batalhando"];
    const natLabels =
      currentLang === "en"
        ? ["1st Nature", "2nd Nature", "3rd Nature"]
        : ["1ª Natureza", "2ª Natureza", "3ª Natureza"];

    const brnchance = tech.brnchance || ["—", "—", "—"];
    const btlchance = tech.btlchance || ["—", "—", "—"];

    const tbl = document.createElement("table");
    tbl.style.cssText =
      "border-collapse:collapse;table-layout:auto;margin:0 auto;";
    tbl.style.marginTop = "-3cqw";

    const thead = document.createElement("thead");
    const hrow = document.createElement("tr");
    ["", ...colLabels].forEach((txt) => {
      const th = document.createElement("th");
      th.textContent = txt;
      th.style.cssText =
        "font-family:digimon,sans-serif;font-size:3cqw;color:#fff974;text-shadow:0.25cqw 0.25cqw 0 #000;text-align:center;white-space:nowrap;font-weight:normal;padding:0 1.5cqw;";
      hrow.appendChild(th);
    });
    thead.appendChild(hrow);
    tbl.appendChild(thead);

    const tbody = document.createElement("tbody");
    natLabels.forEach((nat, i) => {
      const tr = document.createElement("tr");

      const tdLbl = document.createElement("td");
      tdLbl.textContent = nat;
      tdLbl.style.cssText =
        "text-align:right;font-family:digimon,sans-serif;font-size:3cqw;color:#fff974;letter-spacing:0.1cqw;text-shadow:0.2cqw 0.2cqw 0 #000;white-space:nowrap;padding-right:1.5cqw;";
      tr.appendChild(tdLbl);

      [brnchance[i], btlchance[i]].forEach((val) => {
        const td = document.createElement("td");
        td.textContent = val;
        td.style.cssText =
          "font-family:digimon,sans-serif;font-size:3.5cqw;color:#d5d5d5;text-align:center;padding:0.2cqw 1.5cqw;white-space:nowrap;";
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    wrapper.appendChild(tbl);

    if (label) label.style.display = "none";
  }

  updateEnemyCursor() {
    if (!this.enemySlots[this.enemyIndex]) return;
    let cursor = document.getElementById("tech-cursor");
    if (!cursor) return;

    const uiRect = this.container.getBoundingClientRect();
    const slotRect = this.enemySlots[this.enemyIndex].getBoundingClientRect();
    const width = slotRect.width * 1.18;
    const height = slotRect.height * 1.18;

    cursor.style.width = width + "px";
    cursor.style.height = height + "px";
    cursor.style.left = slotRect.right - uiRect.left - width + 3 + "px";
    cursor.style.top =
      slotRect.top - uiRect.top - (height - slotRect.height) / 2 + "px";
  }

  selectEnemy(index, nome) {
    this.enemyIndex = index;
    this.updateEnemyCursor();
    this.buildMapSprites(nome);
  }

  onKey(e) {
    if (!this.active) return;

    if (this.inEnemySelect) {
      const cols = 8;
      const len = this.enemySlots.length;

      if (["ArrowUp", "w", "W"].includes(e.key)) {
        e.preventDefault();
        const next = this.enemyIndex - cols;
        if (next < 0) {
          this.inEnemySelect = false;
          this.currentIndex = this.enemyIndex % cols;
          this.updateCursor();
        } else {
          this.enemyIndex = next;
          this.updateEnemyCursor();
        }
      }
      if (["ArrowDown", "s", "S"].includes(e.key)) {
        e.preventDefault();
        const next = this.enemyIndex + cols;
        if (next >= len) {
          this.inEnemySelect = false;
          this.currentIndex = this.enemyIndex % cols;
          this.updateCursor();
        } else {
          this.enemyIndex = next;
          this.updateEnemyCursor();
        }
      }
      if (["ArrowRight", "d", "D"].includes(e.key)) {
        e.preventDefault();
        this.enemyIndex = Math.min(len - 1, this.enemyIndex + 1);
        this.updateEnemyCursor();
      }
      if (["ArrowLeft", "a", "A"].includes(e.key)) {
        e.preventDefault();
        this.enemyIndex = Math.max(0, this.enemyIndex - 1);
        this.updateEnemyCursor();
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const t = techs.find((t) => t.golpe === this._lastGolpe);
        this.selectEnemy(this.enemyIndex, t?.inimigos[this.enemyIndex]);
      }
      return;
    }

    const dirMap = {
      ArrowUp: "up",
      w: "up",
      W: "up",
      ArrowDown: "down",
      s: "down",
      S: "down",
      ArrowLeft: "left",
      a: "left",
      A: "left",
      ArrowRight: "right",
      d: "right",
      D: "right",
    };
    const dir = dirMap[e.key];
    if (dir) {
      e.preventDefault();
      this.moveCursor(dir);
      if (!this.inEnemySelect) {
        this.updateCursor();
      }
    }
    if (e.key === "Enter") {
      e.preventDefault();
      this.selectSlot(this.currentIndex);
    }
  }
}

window.techSystem = new TechChart();
window.chartSystem = new DigimonChart();

/* ========================= TECH UI HELPER ========================= */

function hideTechUI() {
  window.techSystem.active = false;
  window.techSystem.container.style.display = "none";
  window.techSystem.removeCursor();
  const mc = document.getElementById("tech-map-container");
  if (mc) mc.style.display = "none";
  const lp = document.getElementById("tech-label-partner");
  const le = document.getElementById("tech-label-enemy");
  const ec = document.getElementById("tech-enemy-container");
  if (lp) lp.style.display = "none";
  if (le) le.style.display = "none";
  if (ec) ec.style.display = "none";
  const cc = document.getElementById("tech-chance-container");
  if (cc) cc.style.display = "none";
  const cw = document.getElementById("tech-chance-wrapper");
  if (cw) cw.style.display = "none";
  const lc = document.getElementById("tech-label-chance");
  if (lc) lc.style.display = "none";
}

function showContentPage(page) {
  document.querySelectorAll(".deto-content").forEach((el) => {
    el.style.display = "none";
  });

  if (page === "deto" || page === "creditos" || page === "tech") {
    const id = `${page}-content${currentLang === "en" ? "-en" : ""}`;
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
    if (page === "tech") {
      window.techSystem.container.style.display = "block";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => window.techSystem.updateLayout()),
      );
      window.techSystem.restoreState();
    }
  }
}

let currentMenuPage = "inicio";

function setupMenuSystem() {
  const buttons = document.querySelectorAll(".menu-btn");
  const chart = document.querySelector(".chart");
  const slots = document.getElementById("slots-container");
  const cursor = document.getElementById("cursor");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.page === currentMenuPage) return;
      window.chartSystem?.returnToChart();

      const tip = document.getElementById("tech-tooltip");
      if (tip) tip.style.display = "none";

      if (window.chartSystem?.soundEnabled) {
        const s = new Audio("sounds/blop2.ogg");
        s.volume = 0.5;
        s.play();
      }

      buttons.forEach((b) => {
        b.classList.remove("active");
        b.querySelector("img").src = "images/menu_escuro.webp";
      });
      btn.classList.add("active");
      btn.querySelector("img").src = "images/menu_claro.webp";

      const page = btn.dataset.page;
      currentMenuPage = page;

      if (page === "inicio") {
        hideTechUI();
        const pc = document.getElementById("tech-partner-container");
        if (pc) pc.style.display = "none";
        window.chartSystem.active = true;
        chart.src = "images/chart.webp";
        slots.style.display = "block";
        cursor.style.display = "block";
        showContentPage(null);
      } else {
        window.chartSystem.active = false;
        slots.style.display = "none";
        cursor.style.display = "none";
        chart.src =
          page === "tech" ? "images/conteudo3.webp" : "images/conteudo.webp";
        const pc = document.getElementById("tech-partner-container");
        if (pc) pc.style.display = "none";
        showContentPage(page);
        if (page === "tech") {
          window.techSystem.active = true;
          window.techSystem.container.style.display = "block";
          window.techSystem.updateLayout();
          window.techSystem.restoreState();
          requestAnimationFrame(() =>
            requestAnimationFrame(() => window.techSystem.updateLayout()),
          );
        } else {
          hideTechUI();
        }
        if (window.chartSystem) {
          window.chartSystem.expandRect.style.opacity = 0;
          window.chartSystem.inContent2 = false;
          window.chartSystem.inTransition = false;
        }
      }
    });
  });
}

window.addEventListener("load", setupMenuSystem);

function autoResizeMenuText() {
  document.querySelectorAll(".menu-btn span").forEach((span) => {
    const maxW = span.clientWidth;
    const maxH = span.clientHeight;
    let min = 0,
      max = 200,
      best = 0;

    while (min <= max) {
      const mid = (min + max) >> 1;
      span.style.fontSize = mid + "px";
      if (span.scrollWidth <= maxW && span.scrollHeight <= maxH) {
        best = mid;
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    const len = span.textContent.trim().length;
    let scale;
    if (len <= 7) scale = 1.8;
    else if (len <= 9) scale = 1.4;
    else scale = 1.1;

    span.style.fontSize = Math.min(best * scale, best * 1.8) + "px";

    while (span.scrollWidth > maxW || span.scrollHeight > maxH) {
      const current = parseFloat(span.style.fontSize);
      span.style.fontSize = current - 1 + "px";
    }
  });
}

window.addEventListener("load", autoResizeMenuText);
window.addEventListener("resize", autoResizeMenuText);

const i18n = {
  pt: {
    "menu-deto": "Detonado",
    "menu-creditos": "Créditos",
    "info-desc": "DESC.",
    "info-peso": "PESO",
    "info-lutas": "LUTAS",
    "info-tecs": "TECS.",
  },
  en: {
    "menu-deto": "Walkthrough",
    "menu-creditos": "Credits",
    "info-desc": "CARE M.",
    "info-peso": "WEIGHT",
    "info-lutas": "BATTLES",
    "info-tecs": "TECH.",
  },
};

function applyLang(lang) {
  storageSet("lang", lang);
  const lp = document.getElementById("tech-label-partner");
  const le = document.getElementById("tech-label-enemy");
  const lc = document.getElementById("tech-label-chance");
  if (lp && lp.style.display !== "none")
    lp.textContent = lang === "en" ? "Learned by" : "Aprende com";
  if (le && le.style.display !== "none")
    le.textContent = lang === "en" ? "Enemies" : "Inimigos";
  if (lc && lc.style.display !== "none")
    lc.textContent = lang === "en" ? "Learning chance" : "Chance de aprender";
  currentLang = lang;
  const strings = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (strings[key] !== undefined) el.textContent = strings[key];
  });

  document
    .getElementById("info-bar")
    .classList.toggle("lang-en", lang === "en");
  document.getElementById("langIcon").src =
    lang === "pt" ? "images/us.webp" : "images/br.webp";

  if (
    currentMenuPage === "deto" ||
    currentMenuPage === "creditos" ||
    currentMenuPage === "tech"
  )
    showContentPage(currentMenuPage);

  if (window.chartSystem) {
    const d =
      digimonById[window.chartSystem.evoCenterID] ||
      digimonDATA[window.chartSystem.currentIndex];
    window.chartSystem.updateInfoText(d || null);
  }

  autoResizeMenuText();
  if (window.techSystem?.selectedTech) {
    window.techSystem.buildChanceTable(window.techSystem.selectedTech);
  }
}

function setupLangButton() {
  const btn = document.getElementById("langToggle");
  if (!btn) return;

  const savedLang = storageGet("lang");
  if (savedLang && savedLang !== currentLang) applyLang(savedLang);
  btn.addEventListener("click", () =>
    applyLang(currentLang === "pt" ? "en" : "pt"),
  );
  btn.blur();
}

window.addEventListener("load", setupLangButton);
