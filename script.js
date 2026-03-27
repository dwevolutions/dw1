let currentLang = "pt";

/* =========================
   DADOS
========================= */

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
  { x: 0.5161, y: 0.3420 },
  { x: 0.5161, y: 0.4381 },
  { x: 0.5161, y: 0.5342 },
  { x: 0.5161, y: 0.6303 },
  { x: 0.5967, y: 0.0537 },
  { x: 0.5967, y: 0.1498 },
  { x: 0.5967, y: 0.2459 },
  { x: 0.5967, y: 0.3420 },
  { x: 0.5967, y: 0.4381 },
  { x: 0.5967, y: 0.5342 },
  { x: 0.5967, y: 0.6303 },
  { x: 0.6772, y: 0.0537 },
  { x: 0.6772, y: 0.1498 },
  { x: 0.6772, y: 0.2459 },
  { x: 0.6772, y: 0.3420 },
  { x: 0.6772, y: 0.4381 },
  { x: 0.6772, y: 0.5342 },
  { x: 0.6772, y: 0.6303 },
  { x: 0.7980, y: 0.0537 },
  { x: 0.7980, y: 0.1496 },
  { x: 0.7980, y: 0.2455 },
  { x: 0.7980, y: 0.3414 },
  { x: 0.7980, y: 0.4373 },
  { x: 0.7980, y: 0.5332 },
  { x: 0.7980, y: 0.6291 },
  { x: 0.7980, y: 0.7251 },
  { x: 0.8786, y: 0.0537 },
  { x: 0.8786, y: 0.1498 },
  { x: 0.8786, y: 0.2459 },
  { x: 0.8786, y: 0.3420 },
  { x: 0.8786, y: 0.4381 },
  { x: 0.8786, y: 0.5342 },
  { x: 0.8786, y: 0.6303 },
  { x: 0.6560, y: 0.8610 },
  { x: 0.7461, y: 0.8610 },
  { x: 0.8340, y: 0.8610 },
];

const digimonSprites = [
  { id: "botamon", idle: "sprites/botamon.webp", anim: "sprites/botamon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: ["verde"], evo: ["koromon"] },
  { id: "poyomon", idle: "sprites/poyomon.webp", anim: "sprites/poyomon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: ["laranja"], evo: ["tokomon"] },
  { id: "punimon", idle: "sprites/punimon.webp", anim: "sprites/punimon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: ["azul"], evo: ["tsunomon"] },
  { id: "yuramon", idle: "sprites/yuramon.webp", anim: "sprites/yuramon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: ["rosa"], evo: ["tanemon"] },
  { id: "koromon", idle: "sprites/koromon.webp", anim: "sprites/koromon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: ["botamon"], evo: ["agumon", "gabumon"] },
  { id: "tokomon", idle: "sprites/tokomon.webp", anim: "sprites/tokomon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: ["poyomon"], evo: ["patamon", "piyomon"] },
  { id: "tsunomon", idle: "sprites/tsunomon.webp", anim: "sprites/tsunomon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: ["punimon"], evo: ["elecmon", "penguinmon"] },
  { id: "tanemon", idle: "sprites/tanemon.webp", anim: "sprites/tanemon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: ["yuramon"], evo: ["palmon", "betamon"] },
  { id: "agumon", idle: "sprites/agumon.webp", anim: "sprites/agumon2.webp", hp: 100, mp: 100, off: 10, def: 0, spd: 0, brn: 0, desc: 0, peso: 15, tecs: 0, lutas: 0, pre: ["koromon"], evo: ["greymon", "meramon", "birdramon", "centarumon", "monochromon", "tyrannomon"] },
  { id: "gabumon", idle: "sprites/gabumon.webp", anim: "sprites/gabumon2.webp", hp: 0, mp: 0, off: 0, def: 10, spd: 10, brn: 10, desc: 0, peso: 15, tecs: 0, lutas: 2, pre: ["koromon"], evo: ["centarumon", "monochromon", "drimogemon", "tyrannomon", "ogremon", "garurumon"] },
  { id: "patamon", idle: "sprites/patamon.webp", anim: "sprites/patamon2.webp", hp: 100, mp: 0, off: 10, def: 0, spd: 0, brn: 10, desc: 0, peso: 15, tecs: 0, lutas: 2, pre: ["tokomon"], evo: ["drimogemon", "tyrannomon", "ogremon", "leomon", "angemon", "unimon"] },
  { id: "elecmon", idle: "sprites/elecmon.webp", anim: "sprites/elecmon2.webp", hp: 100, mp: 0, off: 10, def: 0, spd: 10, brn: 0, desc: 0, peso: 15, tecs: 0, lutas: 2, pre: ["tsunomon"], evo: ["leomon", "angemon", "bakemon", "kokatorimon"] },
  { id: "piyomon", idle: "sprites/piyomon.webp", anim: "sprites/piyomon2.webp", hp: 0, mp: 100, off: 0, def: 10, spd: 10, brn: 0, desc: 0, peso: 15, tecs: 0, lutas: 2, pre: ["tokomon"], evo: ["birdramon", "airdramon", "kokatorimon", "unimon", "kabuterimon"] },
  {
    id: "kunemon", idle: "sprites/kunemon.webp", anim: "sprites/kunemon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0,
    info: "50% de chance de digievoluir dormindo em Kunemon's Bed com qualquer Digimon Criança.",
    info_en: "There is a 50% chance of digivolving while sleeping in Kunemon's Bed with any Rookie Digimon.",
    pre: [""], evo: ["bakemon", "kabuterimon", "kuwagamon", "vegiemon"]
  },
  { id: "palmon", idle: "sprites/palmon.webp", anim: "sprites/palmon2.webp", hp: 0, mp: 100, off: 0, def: 0, spd: 10, brn: 10, desc: 0, peso: 15, tecs: 0, lutas: 2, pre: ["tanemon"], evo: ["kuwagamon", "vegiemon", "ninjamon", "whamon", "coelamon"] },
  { id: "betamon", idle: "sprites/betamon.webp", anim: "sprites/betamon2.webp", hp: 100, mp: 100, off: 0, def: 10, spd: 0, brn: 0, desc: 0, peso: 15, tecs: 0, lutas: 2, pre: ["tanemon"], evo: ["seadramon", "whamon", "shellmon", "coelamon"] },
  { id: "penguinmon", idle: "sprites/penguinmon.webp", anim: "sprites/penguinmon2.webp", hp: 0, mp: 10, off: 0, def: 1, spd: 0, brn: 1, desc: 0, peso: 15, tecs: 0, lutas: 2, pre: ["tsunomon"], evo: ["whamon", "shellmon", "garurumon", "frigimon", "mojyamon"] },
  { id: "greymon", idle: "sprites/greymon.webp", anim: "sprites/greymon2.webp", hp: 0, mp: 0, off: 100, def: 100, spd: 100, brn: 100, desc: 1, peso: 30, tecs: 35, lutas: 0, disc: 90, pre: ["agumon"], evo: ["metalgreymon", "skullgreymon"] },
  { id: "monochromon", idle: "sprites/monochromon.webp", anim: "sprites/monochromon2.webp", hp: 1000, mp: 0, off: 0, def: 100, spd: 0, brn: 100, desc: 3, peso: 40, tecs: 35, lutas: 5, pre: ["agumon", "gabumon"], evo: ["metalgreymon", "metalmamemon"] },
  { id: "ogremon", idle: "sprites/ogremon.webp", anim: "sprites/ogremon2.webp", hp: 1000, mp: 0, off: 100, def: 0, spd: 0, brn: 0, desc: 5, peso: 30, tecs: 35, lutas: 15, pre: ["gabumon", "patamon"], evo: ["andromon", "giromon"] },
  { id: "airdramon", idle: "sprites/airdramon.webp", anim: "sprites/airdramon2.webp", hp: 0, mp: 1000, off: 0, def: 0, spd: 100, brn: 100, desc: 1, peso: 30, tecs: 35, lutas: 0, disc: 90, pre: ["piyomon"], evo: ["megadramon", "phoenixmon"] },
  { id: "kuwagamon", idle: "sprites/kuwagamon.webp", anim: "sprites/kuwagamon2.webp", hp: 1000, mp: 1000, off: 100, def: 0, spd: 100, brn: 0, desc: 5, peso: 30, tecs: 28, lutas: 0, pre: ["kunemon", "palmon"], evo: ["hkabuterimon", "piximon"] },
  { id: "whamon", idle: "sprites/whamon.webp", anim: "sprites/whamon2.webp", hp: 1000, mp: 0, off: 0, def: 0, spd: 0, brn: 100, desc: 5, peso: 40, tecs: 28, lutas: 0, disc: 60, pre: ["palmon", "betamon", "penguinmon"], evo: ["megaseadramon", "mamemon"] },
  { id: "frigimon", idle: "sprites/frigimon.webp", anim: "sprites/frigimon2.webp", hp: 0, mp: 1000, off: 0, def: 0, spd: 0, brn: 100, desc: 5, peso: 30, tecs: 28, lutas: 0, feliz: 50, pre: ["penguinmon"], evo: ["metalmamemon", "mamemon"] },
  {
    id: "nanimon", idle: "sprites/nanimon.webp", anim: "sprites/nanimon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, feliz: -100, disc: 0,
    info: "Brigue com qualquer Digimon Novato quando as barras de Felicidade e Disciplina estiverem zeradas.",
    info_en: "Scold any Rookie Digimon when your Happiness and Discipline bars are at zero.",
    pre: [""], evo: ["digitamamon"]
  },
  { id: "meramon", idle: "sprites/meramon.webp", anim: "sprites/meramon2.webp", hp: 0, mp: 0, off: 100, def: 0, spd: 0, brn: 0, desc: 5, peso: 20, tecs: 28, lutas: 10, pre: ["agumon"], evo: ["metalgreymon", "andromon"] },
  { id: "drimogemon", idle: "sprites/drimogemon.webp", anim: "sprites/drimogemon2.webp", hp: 0, mp: 0, off: 100, def: 0, spd: 0, brn: 0, desc: 3, peso: 40, tecs: 28, lutas: 0, feliz: 50, pre: ["gabumon", "patamon"], evo: ["metalgreymon"] },
  { id: "leomon", idle: "sprites/leomon.webp", anim: "sprites/leomon2.webp", hp: 0, mp: 0, off: 100, def: 0, spd: 100, brn: 100, desc: 1, peso: 20, tecs: 35, lutas: 10, pre: ["patamon", "elecmon"], evo: ["andromon", "mamemon"] },
  { id: "kokatorimon", idle: "sprites/kokatorimon.webp", anim: "sprites/kokatorimon2.webp", hp: 1000, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 3, peso: 30, tecs: 28, lutas: 0, pre: ["elecmon", "piyomon"], evo: ["phoenixmon", "piximon"] },
  { id: "vegiemon", idle: "sprites/vegiemon.webp", anim: "sprites/vegiemon2.webp", hp: 0, mp: 1000, off: 0, def: 0, spd: 0, brn: 0, desc: 5, peso: 10, tecs: 21, lutas: 0, feliz: 50, pre: ["kunemon", "palmon"], evo: ["piximon"] },
  { id: "shellmon", idle: "sprites/shellmon.webp", anim: "sprites/shellmon2.webp", hp: 1000, mp: 0, off: 0, def: 100, spd: 0, brn: 0, desc: 5, peso: 40, tecs: 35, lutas: 0, pre: ["betamon", "penguinmon"], evo: ["hkabuterimon", "megaseadramon"] },
  { id: "mojyamon", idle: "sprites/mojyamon.webp", anim: "sprites/mojyamon2.webp", hp: 1000, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 5, peso: 20, tecs: 28, lutas: 5, pre: ["penguinmon"], evo: ["skullgreymon", "mamemon"] },
  { id: "birdramon", idle: "sprites/birdramon.webp", anim: "sprites/birdramon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 100, brn: 0, desc: 3, peso: 20, tecs: 35, lutas: 0, pre: ["agumon", "piyomon"], evo: ["phoenixmon"] },
  { id: "tyrannomon", idle: "sprites/tyrannomon.webp", anim: "sprites/tyrannomon2.webp", hp: 1000, mp: 0, off: 0, def: 100, spd: 0, brn: 0, desc: 5, peso: 30, tecs: 28, lutas: 5, pre: ["agumon", "gabumon", "patamon"], evo: ["metalgreymon", "megadramon"] },
  { id: "angemon", idle: "sprites/angemon.webp", anim: "sprites/angemon2.webp", hp: 0, mp: 1000, off: 0, def: 0, spd: 0, brn: 100, desc: 0, peso: 20, tecs: 35, lutas: 0, pre: ["patamon", "elecmon"], evo: ["andromon", "phoenixmon"] },
  { id: "unimon", idle: "sprites/unimon.webp", anim: "sprites/unimon2.webp", hp: 1000, mp: 0, off: 0, def: 0, spd: 100, brn: 0, desc: 3, peso: 30, tecs: 35, lutas: 10, pre: ["patamon", "piyomon"], evo: ["giromon", "phoenixmon"] },
  { id: "ninjamon", idle: "sprites/ninjamon.webp", anim: "sprites/ninjamon2.webp", hp: 0, mp: 1000, off: 100, def: 0, spd: 100, brn: 0, desc: 1, peso: 10, tecs: 35, lutas: 15, pre: ["palmon"], evo: ["piximon", "metalmamemon", "mamemon"] },
  { id: "coelamon", idle: "sprites/coelamon.webp", anim: "sprites/coelamon2.webp", hp: 0, mp: 0, off: 0, def: 100, spd: 0, brn: 0, desc: 3, peso: 30, tecs: 35, lutas: 5, pre: ["palmon", "betamon"], evo: ["megaseadramon"] },
  {
    id: "numemon", idle: "sprites/numemon.webp", anim: "sprites/numemon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0,
    info: "Quando o tempo limite para Digievoluir chegar ao fim, qualquer digimon Novato digievolui para Numemon caso não tenha alcançado nenhuma outra condição de digievolução.",
    info_en: "When the time limit for Digivolution expires, any Rookie Digimon will Digivolve into Numemon if it has not met any other Digivolution conditions.",
    pre: [""], evo: ["monzaemon"]
  },
  { id: "centarumon", idle: "sprites/centarumon.webp", anim: "sprites/centarumon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 100, desc: 3, peso: 30, tecs: 28, lutas: 0, disc: 60, pre: ["agumon", "gabumon"], evo: ["andromon", "giromon"] },
  {
    id: "devimon", idle: "sprites/devimon.webp", anim: "sprites/devimon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, disc: 50,
    info: "Angemon tem 50% de chance de digievoluir para Devimon após perder uma vida com 50% ou menos de disciplina.",
    info_en: "Angemon has a 50% chance of Digivolving into Devimon after losing a life with its Discipline bar at 50% or less.",
    pre: [""], evo: ["skullgryemon", "megadramon"]
  },
  { id: "bakemon", idle: "sprites/bakemon.webp", anim: "sprites/bakemon2.webp", hp: 0, mp: 1000, off: 0, def: 0, spd: 0, brn: 0, desc: 3, peso: 20, tecs: 28, lutas: 0, feliz: 50, pre: ["elecmon", "kunemon"], evo: ["skullgreymon", "giromon"] },
  { id: "kabuterimon", idle: "sprites/kabuterimon.webp", anim: "sprites/kabuterimon2.webp", hp: 1000, mp: 1000, off: 100, def: 0, spd: 100, brn: 0, desc: 1, peso: 30, tecs: 35, lutas: 0, pre: ["piyomon", "kunemon"], evo: ["hkabuterimon", "metalmamemon"] },
  { id: "seadramon", idle: "sprites/seadramon.webp", anim: "sprites/seadramon2.webp", hp: 1000, mp: 1000, off: 0, def: 0, spd: 0, brn: 0, desc: 3, peso: 30, tecs: 28, lutas: 5, pre: ["betamon"], evo: ["megadramon", "megaseadramon"] },
  { id: "garurumon", idle: "sprites/garurumon.webp", anim: "sprites/garurumon2.webp", hp: 0, mp: 1000, off: 0, def: 0, spd: 100, brn: 0, desc: 1, peso: 30, tecs: 28, lutas: 0, disc: 90, pre: ["gabumon", "penguinmon"], evo: ["skullgreymon", "megaseadramon"] },
  {
    id: "sukamon", idle: "sprites/sukamon.webp", anim: "sprites/sukamon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0,
    info: "Deixe qualquer digimon fazer cocô no chão 16 vezes.",
    info_en: "Have any Digimon poop on the floor 16 times.",
    pre: [""], evo: ["etemon"]
  },
  { id: "metalgreymon", idle: "sprites/metalgreymon.webp", anim: "sprites/metalgreymon2.webp", hp: 4000, mp: 3000, off: 500, def: 500, spd: 300, brn: 300, desc: 10, peso: 65, tecs: 30, lutas: 30, disc: 95, pre: ["greymon", "meramon", "monochromon", "drimogemon", "tyrannomon"], evo: [""] },
  { id: "skullgreymon", idle: "sprites/skullgreymon.webp", anim: "sprites/skullgreymon2.webp", hp: 4000, mp: 6000, off: 400, def: 400, spd: 200, brn: 500, desc: 10, peso: 30, tecs: 45, lutas: 40, pre: ["greymon", "devimon", "bakemon", "garurumon", "mojyamon"], evo: [""] },
  { id: "giromon", idle: "sprites/giromon.webp", anim: "sprites/giromon2.webp", hp: 0, mp: 0, off: 400, def: 0, spd: 300, brn: 400, desc: 15, peso: 5, tecs: 35, lutas: 100, feliz: 95, pre: ["centarumon", "ogremon", "bakemon", "unimon"], evo: [""] },
  { id: "hkabuterimon", idle: "sprites/hkabuterimon.webp", anim: "sprites/hkabuterimon2.webp", hp: 7000, mp: 0, off: 400, def: 600, spd: 400, brn: 0, desc: 5, peso: 55, tecs: 40, lutas: 0, pre: ["kabuterimon", "kuwagamon", "shellmon"], evo: [""] },
  { id: "metalmamemon", idle: "sprites/metalmamemon.webp", anim: "sprites/metalmamemon2.webp", hp: 0, mp: 0, off: 500, def: 400, spd: 400, brn: 400, desc: 15, peso: 10, tecs: 30, lutas: 0, feliz: 95, pre: ["monochromon", "kabuterimon", "ninjamon", "frigimon"], evo: [""] },
  { id: "megaseadramon", idle: "sprites/megaseadramon.webp", anim: "sprites/megaseadramon2.webp", hp: 0, mp: 4000, off: 500, def: 400, spd: 0, brn: 400, desc: 5, peso: 30, tecs: 40, lutas: 0, pre: ["seadramon", "whamon", "shellmon", "coelamon", "garurumon"], evo: [""] },
  {
    id: "vademon", idle: "sprites/vademon.webp", anim: "sprites/vademon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0,
    info: "Elogie um Digimon Campeão após 240 horas com ele. Ao atingir 360 horas, ele terá 50% de chance de digievoluir.",
    info_en: "Praise a Champion Digimon after spending 240 hours with it. Once you reach 360 hours, it will have a 50% chance of Digivolving.",
    pre: [""], evo: [""]
  },
  { id: "etemon", idle: "sprites/etemon.webp", anim: "sprites/etemon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 49, lutas: 50, pre: ["sukamon"], evo: [""] },
  { id: "andromon", idle: "sprites/andromon.webp", anim: "sprites/andromon2.webp", hp: 2000, mp: 4000, off: 200, def: 400, spd: 200, brn: 400, desc: 5, peso: 40, tecs: 30, lutas: 30, disc: 95, pre: ["meramon", "centarumon", "ogremon", "leomon", "angemon"], evo: [""] },
  { id: "megadramon", idle: "sprites/megadramon.webp", anim: "sprites/megadramon2.webp", hp: 3000, mp: 5000, off: 500, def: 300, spd: 400, brn: 400, desc: 10, peso: 55, tecs: 30, lutas: 30, pre: ["tyrannomon", "devimon", "airdramon", "seadramon"], evo: [""] },
  { id: "phoenixmon", idle: "sprites/phoenixmon.webp", anim: "sprites/phoenixmon2.webp", hp: 4000, mp: 4000, off: 0, def: 0, spd: 400, brn: 600, desc: 3, peso: 30, tecs: 40, lutas: 0, disc: 100, pre: ["birdramon", "angemon", "airdramon", "kokatorimon", "unimon"], evo: [""] },
  { id: "piximon", idle: "sprites/piximon.webp", anim: "sprites/piximon2.webp", hp: 0, mp: 0, off: 300, def: 300, spd: 400, brn: 400, desc: 15, peso: 5, tecs: 25, lutas: 0, feliz: 95, pre: ["kokatorimon", "kuwagamon", "vegiemon", "ninjamon"], evo: [""] },
  { id: "mamemon", idle: "sprites/mamemon.webp", anim: "sprites/mamemon2.webp", hp: 0, mp: 0, off: 400, def: 300, spd: 400, brn: 400, desc: 15, peso: 5, tecs: 25, lutas: 0, feliz: 90, pre: ["leomon", "ninjamon", "whamon", "frigimon", "mojyamon"], evo: [""] },
  { id: "monzaemon", idle: "sprites/monzaemon.webp", anim: "sprites/monzaemon2.webp", hp: 3000, mp: 3000, off: 300, def: 300, spd: 300, brn: 300, desc: 0, peso: 40, tecs: 49, lutas: 50, pre: ["numemon"], evo: [""] },
  { id: "digitamamon", idle: "sprites/digitamamon.webp", anim: "sprites/digitamamon2.webp", hp: 3000, mp: 3000, off: 400, def: 400, spd: 400, brn: 300, desc: 0, peso: 10, tecs: 49, lutas: 100, pre: ["nanimon"], evo: [""] },
  {
    id: "panjyamon", idle: "sprites/panjyamon.webp", anim: "sprites/panjyamon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0,
    info: "Digievolui apenas com cheats usando o item Noble Mane.",
    info_en: "It can only Digivolve using cheats with the Noble Mane item.",
    pre: [""], evo: [""]
  },
  {
    id: "gigadramon", idle: "sprites/gigadramon.webp", anim: "sprites/gigadramon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0,
    info: "Digievolui apenas com cheats usando o item Giga Hand.",
    info_en: "It can only Digivolve using cheats with the Giga Hand item.",
    pre: [""], evo: [""]
  },
  {
    id: "metaletemon", idle: "sprites/metaletemon.webp", anim: "sprites/metaletemon2.webp", hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0,
    info: "Digievolui apenas com cheats usando o item Metal Banana.",
    info_en: "It can only Digivolve using cheats with the Metal Banana item.",
    pre: [""], evo: [""]
  },
  { id: "verde", idle: "sprites/verde.webp", anim: null, hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: [""], evo: ["botamon"] },
  { id: "azul", idle: "sprites/azul.webp", anim: null, hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: [""], evo: ["punimon"] },
  { id: "laranja", idle: "sprites/laranja.webp", anim: null, hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: [""], evo: ["poyomon"] },
  { id: "rosa", idle: "sprites/rosa.webp", anim: null, hp: 0, mp: 0, off: 0, def: 0, spd: 0, brn: 0, desc: 0, peso: 0, tecs: 0, lutas: 0, pre: [""], evo: ["yuramon"] },
];

/* build a lookup map once so every find() is O(1) */
const digimonById = Object.fromEntries(digimonSprites.map(d => [d.id, d]));

/* =========================
   CLASSE
========================= */

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

    /* cached DOM refs */
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

    this.slotImages = [];
    this.slots = [];
    this.nav = {
      0: { w: 63, a: 54, s: 1, d: 4 }, 1: { w: 0, a: 56, s: 2, d: 5 }, 2: { w: 1, a: 58, s: 3, d: 6 },
      3: { w: 2, a: 60, s: 4, d: 7 }, 4: { w: 3, a: 0, s: 5, d: 8 }, 5: { w: 4, a: 1, s: 6, d: 10 },
      6: { w: 5, a: 2, s: 7, d: 12 }, 7: { w: 6, a: 3, s: 8, d: 14 }, 8: { w: 7, a: 4, s: 9, d: 17 },
      9: { w: 8, a: 4, s: 10, d: 18 }, 10: { w: 9, a: 5, s: 11, d: 19 }, 11: { w: 10, a: 5, s: 12, d: 20 },
      12: { w: 11, a: 6, s: 13, d: 21 }, 13: { w: 12, a: 6, s: 14, d: 22 }, 14: { w: 13, a: 7, s: 15, d: 23 },
      15: { w: 14, a: 7, s: 16, d: 24 }, 16: { w: 15, a: 7, s: 17, d: 24 }, 17: { w: 16, a: 8, s: 18, d: 25 },
      18: { w: 17, a: 9, s: 19, d: 26 }, 19: { w: 18, a: 10, s: 20, d: 27 }, 20: { w: 19, a: 11, s: 21, d: 28 },
      21: { w: 20, a: 12, s: 22, d: 29 }, 22: { w: 21, a: 13, s: 23, d: 30 }, 23: { w: 22, a: 14, s: 24, d: 31 },
      24: { w: 23, a: 15, s: 61, d: 61 }, 25: { w: 24, a: 17, s: 26, d: 32 }, 26: { w: 25, a: 18, s: 27, d: 33 },
      27: { w: 26, a: 19, s: 28, d: 34 }, 28: { w: 27, a: 20, s: 29, d: 35 }, 29: { w: 28, a: 21, s: 30, d: 36 },
      30: { w: 29, a: 22, s: 31, d: 37 }, 31: { w: 30, a: 23, s: 24, d: 38 }, 32: { w: 31, a: 25, s: 33, d: 39 },
      33: { w: 32, a: 26, s: 34, d: 40 }, 34: { w: 33, a: 27, s: 35, d: 41 }, 35: { w: 34, a: 28, s: 36, d: 42 },
      36: { w: 35, a: 29, s: 37, d: 43 }, 37: { w: 36, a: 30, s: 38, d: 44 }, 38: { w: 37, a: 31, s: 61, d: 45 },
      39: { w: 38, a: 32, s: 40, d: 46 }, 40: { w: 39, a: 33, s: 41, d: 47 }, 41: { w: 40, a: 34, s: 42, d: 48 },
      42: { w: 41, a: 35, s: 43, d: 49 }, 43: { w: 42, a: 36, s: 44, d: 50 }, 44: { w: 43, a: 37, s: 45, d: 51 },
      45: { w: 44, a: 38, s: 61, d: 52 }, 46: { w: 45, a: 39, s: 47, d: 54 }, 47: { w: 46, a: 40, s: 48, d: 55 },
      48: { w: 47, a: 41, s: 49, d: 56 }, 49: { w: 48, a: 42, s: 50, d: 57 }, 50: { w: 49, a: 43, s: 51, d: 58 },
      51: { w: 50, a: 44, s: 52, d: 59 }, 52: { w: 51, a: 45, s: 53, d: 60 }, 53: { w: 52, a: 45, s: 63, d: 60 },
      54: { w: 53, a: 46, s: 55, d: 0 }, 55: { w: 54, a: 47, s: 56, d: 0 }, 56: { w: 55, a: 48, s: 57, d: 1 },
      57: { w: 56, a: 49, s: 58, d: 1 }, 58: { w: 57, a: 50, s: 59, d: 2 }, 59: { w: 58, a: 51, s: 60, d: 2 },
      60: { w: 59, a: 52, s: 53, d: 3 }, 61: { w: 45, a: 24, s: 0, d: 62 }, 62: { w: 53, a: 61, s: 0, d: 63 },
      63: { w: 53, a: 62, s: 0, d: 0 }
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
    document.addEventListener("keydown", e => this.onKey(e));
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
    const updateIcon = () => { icon.src = this.soundEnabled ? "images/som.webp" : "images/som2.webp"; };
    updateIcon();
    btn.addEventListener("click", e => {
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
      const sprite = digimonSprites[index] || {};
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
      div.addEventListener("click", () => { this.playSelectSound(); this.select(); });

      this.container.appendChild(div);
      this.slots.push(div);
      this.slotImages.push(img);
    });
  }

  updateCenterDigimon() {
    const sprite = digimonSprites[this.currentIndex];
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
    this.cursor.style.left = (chartRect.left - panelRect.left) + Math.round(slot.x * chartRect.width) - (width - size) / 2 + "px";
    this.cursor.style.top = (chartRect.top - panelRect.top) + Math.round(slot.y * chartRect.height) + "px";

    this.updateCenterDigimon();
  }

  updateAnimation() {
    this.slotImages.forEach(img => { img.src = img.dataset.idle; });
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

  select() { this.playExpandAnimation(); }

  /* ---- expand / collapse animations ---- */

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
    expand.offsetHeight; // force reflow

    expand.style.transition = "left .2s ease, top .2s ease, width .2s ease, height .2s ease";
    expand.style.left = (chartRect.left - panelRect.left) + "px";
    expand.style.top = (chartRect.top - panelRect.top) + "px";
    expand.style.width = chartRect.width + "px";
    expand.style.height = chartRect.height + "px";

    setTimeout(() => { this.expandRect.style.opacity = "0"; this.openContent2(); }, 200);
  }

  playCollapseAnimation() {
    if (this.inTransition) return;
    this.inTransition = true;

    const { chartRect, panelRect } = this._getChartMetrics();
    const slotRect = this.slots[this.currentIndex].getBoundingClientRect();
    const expand = this.expandRect;

    const endX = slotRect.left + slotRect.width / 2 - panelRect.left;
    const endY = slotRect.top + slotRect.height / 2 - panelRect.top;

    expand.style.transition = "none";
    expand.style.left = (chartRect.left - panelRect.left) + "px";
    expand.style.top = (chartRect.top - panelRect.top) + "px";
    expand.style.width = chartRect.width + "px";
    expand.style.height = chartRect.height + "px";
    expand.style.opacity = "1";
    expand.offsetHeight;

    expand.style.transition = "left .2s ease, top .2s ease, width .2s ease, height .2s ease";
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

  /* ---- content2 (digimon detail view) ---- */

  openContent2() {
    this.container.style.display = "none";
    this.cursor.style.display = "none";
    this.chart.src = "images/conteudo2.webp";
    this.evoUI.style.display = "flex";

    const centerDigimon = digimonSprites[this.currentIndex];
    this.evoCenterID = centerDigimon ? centerDigimon.id : null;
    this.currentDigimon = centerDigimon || null;

    this.updateStats(centerDigimon || null);
    this.updateInfo(centerDigimon || null);
    this.updateInfoText(centerDigimon || null);

    this.statusBar.style.display = "flex";
    this.infoBar.style.display = "grid";

    if (centerDigimon) this.centerDigimonImg.src = centerDigimon.idle;

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
      const rightSlots = document.querySelectorAll("#evo-slots-right .evo-slot-inner");
      const leftSlots = document.querySelectorAll("#evo-slots-left .evo-slot-inner");
      if (rightSlots.length) { this.evoSide = "right"; this.updateEvoCursor(); }
      else if (leftSlots.length) { this.evoSide = "left"; this.updateEvoCursor(); }
      this._startEvoAnim();
    }, 60);

    setTimeout(() => {
      this.scaleStatusBar();
      this.scaleInfoBar();
      this.updateMood(centerDigimon || null);
      this.scaleMoodBar();
    }, 60);
  }

  /* ---- scaling helpers ---- */

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

    const scale = Math.min(availableH / barRect.height, availableW / barRect.width, 1);
    bar.style.transform = `translateX(-50%) scale(${scale})`;
  }

  scaleInfoBar() {
    const bar = this.infoBar;
    const ui = this.evoUI;
    const leftBox = document.querySelector(".evo-box");
    if (!bar || !ui || !leftBox) return;

    bar.style.transform = "scale(1)";

    const uiRect = ui.getBoundingClientRect();
    const leftRect = leftBox.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();

    bar.style.left = (leftRect.left - uiRect.left) + "px";
    bar.style.top = (leftRect.bottom - uiRect.top + uiRect.height * 0.01) + "px";

    const availableW = leftRect.width;
    const availableH = uiRect.bottom - leftRect.bottom - uiRect.height * 0.02;
    const scale = Math.min(availableW / barRect.width, availableH / barRect.height, 1);
    bar.style.transform = `scale(${scale})`;
  }

  /* ---- data update helpers ---- */

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
      el.textContent = currentLang === "en" ? (digimon.info_en || digimon.info) : digimon.info;
      el.style.display = "flex";
      this.fitInfoText(el);
    } else {
      el.style.display = "none";
      el.textContent = "";
    }
  }

  fitInfoText(el) {
    const maxH = el.parentElement.clientHeight;
    let min = 1, max = 45, best = 1;
    while (min <= max) {
      const mid = (min + max) >> 1;
      el.style.fontSize = mid + "px";
      void el.offsetWidth;
      if (el.scrollHeight <= maxH) { best = mid; min = mid + 1; }
      else { max = mid - 1; }
    }
    el.style.fontSize = best + "px";
  }

  updateMood(digimon) {
    const d = digimon || {};
    const felizBlock = document.getElementById("mood-feliz");
    const discBlock = document.getElementById("mood-disc");

    if (d.feliz !== undefined) {
      document.getElementById("mood-icon-feliz").src = `images/feliz${d.feliz}.webp`;
      document.getElementById("mood-icon-feliz").style.display = "block";
      felizBlock.style.display = "flex";
    } else {
      felizBlock.style.display = "none";
    }

    if (d.disc !== undefined) {
      document.getElementById("mood-icon-disc").src = `images/disc${d.disc}.webp`;
      document.getElementById("mood-icon-disc").style.display = "block";
      discBlock.style.display = "flex";
    } else {
      discBlock.style.display = "none";
    }

    this.moodBar.style.display = (d.feliz !== undefined || d.disc !== undefined) ? "flex" : "none";
  }

  scaleMoodBar() {
    const imgs = this.moodBar.querySelectorAll("img");
    const pending = [...imgs].filter(img => !img.complete);
    if (pending.length > 0) {
      Promise.all(pending.map(img => new Promise(res => { img.onload = res; img.onerror = res; })))
        .then(() => this._doScaleMoodBar());
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

    bar.style.left = (rightRect.left - uiRect.left) + "px";
    bar.style.top = (rightRect.bottom - uiRect.top + uiRect.height * 0.01) + "px";

    const availableW = rightRect.width;
    const availableH = uiRect.bottom - rightRect.bottom - uiRect.height * 0.02;
    const scale = Math.min(availableW / barRect.width, availableH / barRect.height, 1);
    bar.style.transform = `scale(${scale})`;
  }

  /* ---- evo slot helpers ---- */

  _getSlotDigimon(side, index) {
    const digimon = digimonById[this.evoCenterID];
    if (!digimon) return null;
    const ids = side === "right" ? digimon.evo : digimon.pre;
    if (!ids) return null;
    const validIDs = ids.filter(id => digimonById[id]);
    return digimonById[validIDs[index]] || null;
  }

  _stopEvoAnim() {
    if (this.evoAnimInterval) { clearInterval(this.evoAnimInterval); this.evoAnimInterval = null; }
  }

  _startEvoAnim() {
    this._stopEvoAnim();
    const centerDigimon = digimonById[this.evoCenterID];
    if (this.centerDigimonImg && centerDigimon && centerDigimon.anim) {
      let frame = true;
      this.centerDigimonImg.src = centerDigimon.anim;
      this.evoAnimInterval = setInterval(() => {
        this.centerDigimonImg.src = frame ? centerDigimon.idle : centerDigimon.anim;
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
    const sel = this.evoSide === "right" ? "#evo-slots-right .evo-slot-inner" : "#evo-slots-left .evo-slot-inner";
    const slots = document.querySelectorAll(sel);
    if (!slots.length) return;
    this.evoIndex = Math.max(0, Math.min(index, slots.length - 1));
    this.updateEvoCursor();
  }

  switchEvoSide(side) {
    const rightSlots = document.querySelectorAll("#evo-slots-right .evo-slot-inner");
    const leftSlots = document.querySelectorAll("#evo-slots-left .evo-slot-inner");
    if (side === "right" && !rightSlots.length) return;
    if (side === "left" && !leftSlots.length) return;

    this._stopEvoAnim();
    this._resetAllSlotSprites();

    const old = document.getElementById("evo-cursor");
    if (old) old.remove();

    const slots = document.querySelectorAll(side === "right" ? "#evo-slots-right .evo-slot-inner" : "#evo-slots-left .evo-slot-inner");
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
      const rightSlots = document.querySelectorAll("#evo-slots-right .evo-slot-inner");
      const leftSlots = document.querySelectorAll("#evo-slots-left .evo-slot-inner");
      const old = document.getElementById("evo-cursor");
      if (old) old.remove();
      if (rightSlots.length) { this.evoSide = "right"; this.updateEvoCursor(); }
      else if (leftSlots.length) { this.evoSide = "left"; this.updateEvoCursor(); }
      this._startEvoAnim();
    }, 60);
  }

  updateEvoCursor() {
    const sel = this.evoSide === "right" ? "#evo-slots-right .evo-slot" : "#evo-slots-left .evo-slot";
    const slots = document.querySelectorAll(sel);
    if (!slots.length) return;

    let cursor = document.getElementById("evo-cursor");
    if (!cursor) {
      cursor = document.createElement("img");
      cursor.id = "evo-cursor";
      cursor.src = "images/cursor.webp";
      cursor.style.cssText = "position:absolute;pointer-events:none;image-rendering:pixelated;z-index:30;";
      this.evoUI.appendChild(cursor);
    }

    const slot = slots[this.evoIndex];
    if (!slot) return;
    const uiRect = this.evoUI.getBoundingClientRect();
    const slotRect = slot.getBoundingClientRect();
    const width = slotRect.width * 1.15;

    cursor.style.width = width + "px";
    cursor.style.height = slotRect.height + "px";
    cursor.style.left = (slotRect.left - uiRect.left - (width - slotRect.width) / 2) + "px";
    cursor.style.top = (slotRect.top - uiRect.top) + "px";
  }

  /* ---- close / return ---- */

  closeContent() {
    if (!this.inContent2 || this.inTransition) return;

    this.evoUI.style.display = "none";
    this.chart.src = "images/chart.webp";
    this.container.style.display = "block";
    this.cursor.style.display = "block";

    this.inEvoSelect = false;
    this._stopEvoAnim();
    const evoCursor = document.getElementById("evo-cursor");
    if (evoCursor) evoCursor.remove();

    document.querySelectorAll(".evo-slot-inner").forEach(el => { el.style.pointerEvents = "none"; });

    this.closeButton.style.opacity = "0";
    this.closeButton.style.pointerEvents = "none";
    this.playCloseSound();

    this.statusBar.style.display = "none";
    this.infoBar.style.display = "none";
    this.moodBar.style.display = "none";
    this.clearEvoLines();
    this.clearPreLines();
    this.inContent2 = false;
    this.active = true;
  }

  returnToChart() {
    this.statusBar.style.display = "none";
    this.infoBar.style.display = "none";
    this.moodBar.style.display = "none";
    this.clearEvoLines();
    this.clearPreLines();
    document.querySelectorAll(".evo-slot-inner").forEach(el => { el.style.pointerEvents = "none"; });

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
    if (e.key === "Escape" && this.inContent2) { this.closeContent(); return; }

    if (this.inEvoSelect) {
      const sel = this.evoSide === "right" ? "#evo-slots-right .evo-slot-inner" : "#evo-slots-left .evo-slot-inner";
      const slots = document.querySelectorAll(sel);

      if (["ArrowUp", "w", "W"].includes(e.key) && slots.length && this.evoIndex > 0) { this.moveEvoCursor(this.evoIndex - 1); this.playMoveSound(); }
      if (["ArrowDown", "s", "S"].includes(e.key) && slots.length && this.evoIndex < slots.length - 1) { this.moveEvoCursor(this.evoIndex + 1); this.playMoveSound(); }
      if (["ArrowRight", "d", "D"].includes(e.key) && document.querySelectorAll("#evo-slots-right .evo-slot-inner").length && this.evoSide !== "right") this.switchEvoSide("right");
      if (["ArrowLeft", "a", "A"].includes(e.key) && document.querySelectorAll("#evo-slots-left .evo-slot-inner").length && this.evoSide !== "left") this.switchEvoSide("left");
      if (e.key === "Enter") { e.preventDefault(); this.confirmEvoSlot(); }
      return;
    }

    if (!this.active) return;
    const dirMap = { ArrowUp: "up", w: "up", W: "up", ArrowDown: "down", s: "down", S: "down", ArrowLeft: "left", a: "left", A: "left", ArrowRight: "right", d: "right", D: "right" };
    const direction = dirMap[e.key];

    if (direction) {
      const prev = this.currentIndex;
      this.moveCursor(direction);
      if (this.currentIndex !== prev) this.playMoveSound();
      this.activateCursor();
      this.updateCursor();
      this.updateAnimation();
    }
    if (e.key === "Enter") { e.preventDefault(); this.playSelectSound(); this.select(); }
  }

  moveCursor(direction) {
    const keyMap = { up: "w", down: "s", left: "a", right: "d" };
    const next = this.nav[this.currentIndex][keyMap[direction]];
    if (next !== undefined) this.currentIndex = next;
  }

  /* ---- sound ---- */

  _playClone(sound) {
    if (!this.soundEnabled) return;
    const s = sound.cloneNode();
    s.volume = sound.volume;
    s.play();
  }

  playMoveSound() { this._playClone(this.moveSound); }
  playSelectSound() { if (this.active) this._playClone(this.selectSound); }
  playCloseSound() { this._playClone(this.closeSound); }

  /* ---- SVG lines (shared helper) ---- */

  _makeSVG(id) {
    const old = document.getElementById(id);
    if (old) old.remove();

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = id;
    svg.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;overflow:visible;";
    this.evoUI.insertBefore(svg, this.evoUI.firstChild);
    return svg;
  }

  _addPolyline(svg, points, stroke, width) {
    const pl = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
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
      const startY = (cRect.top + cRect.height / 2 - targets.length / 2 * lineSpacing + i * lineSpacing) - parentRect.top;
      const endX = iRect.left - parentRect.left;
      const endY = iRect.top + iRect.height / 2 - parentRect.top;
      const midX = startX + cfg.h * scale;
      const diagX = midX + (cfg.d || 0) * scale;
      const pts = `${startX},${startY} ${midX},${startY} ${diagX},${endY} ${endX},${endY}`;

      this._addPolyline(svg, pts, outline, 8 * scale);
      this._addPolyline(svg, pts, color, 4 * scale);
    });
  }

  clearEvoLines() { const s = document.getElementById("evo-lines"); if (s) s.remove(); }

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
      const startY = (cRect.top + cRect.height / 2 - targets.length / 2 * lineSpacing + i * lineSpacing) - parentRect.top;
      const endX = iRect.left + iRect.width * 0.75 - parentRect.left;
      const endY = iRect.top + iRect.height / 2 - parentRect.top;
      const midX = startX - cfg.h * scale;
      const diagX = midX - (cfg.d || 0) * scale;
      const pts = `${startX},${startY} ${midX},${startY} ${diagX},${endY} ${endX},${endY}`;

      this._addPolyline(svg, pts, "#DB6500", 8 * scale);
      this._addPolyline(svg, pts, "#E39407", 4 * scale);
    });
  }

  clearPreLines() { const s = document.getElementById("pre-lines"); if (s) s.remove(); }

  /* ---- evo slot creators ---- */

  createRightEvoSlots() {
    const evoLayouts = {
      1: { offsetX: 5, colors: ["#00AEB8"], outlines: ["#006F8E"], lines: [{ h: 300, offsetX: 7 }] },
      2: { gap: 15, offsetX: 5, colors: ["#00AEB8", "#003CC8"], outlines: ["#006F8E", "#001E8C"], lines: [{ h: 170, d: 30, offsetX: 7 }, { h: 170, d: 30, offsetX: 7 }] },
      3: { gap: 15, offsetX: 5, colors: ["#00B600", "#00AEB8", "#003CC8"], outlines: ["#006400", "#006F8E", "#001E8C"], lines: [{ h: 70, d: 100, offsetX: 31 }, { h: 300, offsetX: 7 }, { h: 70, d: 100, offsetX: 31 }] },
      4: { gap: 15, offsetX: 5, colors: ["#00B600", "#00AEB8", "#003CC8", "#BE00A0"], outlines: ["#006400", "#006F8E", "#001E8C", "#6E006E"], lines: [{ h: 70, d: 100, offsetX: 31 }, { h: 170, d: 30, offsetX: 7 }, { h: 170, d: 30, offsetX: 7 }, { h: 70, d: 100, offsetX: 31 }] },
      5: { gap: 15, offsetX: 5, colors: ["#FBE802", "#00B600", "#00AEB8", "#003CC8", "#BE00A0"], outlines: ["#EC9A00", "#006400", "#006F8E", "#001E8C", "#6E006E"], lines: [{ h: 0, d: 160, offsetX: 55 }, { h: 70, d: 100, offsetX: 31 }, { h: 300, offsetX: 7 }, { h: 70, d: 100, offsetX: 31 }, { h: 0, d: 160, offsetX: 55 }] },
      6: { gap: 15, offsetX: 5, colors: ["#FBE802", "#00B600", "#00AEB8", "#003CC8", "#BE00A0", "#BE001E"], outlines: ["#EC9A00", "#006400", "#006F8E", "#001E8C", "#6E006E", "#821E1E"], lines: [{ h: 0, d: 160, offsetX: 55 }, { h: 70, d: 100, offsetX: 31 }, { h: 170, d: 30, offsetX: 7 }, { h: 170, d: 30, offsetX: 7 }, { h: 70, d: 100, offsetX: 31 }, { h: 0, d: 160, offsetX: 55 }] }
    };

    const container = document.getElementById("evo-slots-right");
    if (!container) return;
    container.innerHTML = "";

    const digimon = digimonById[this.evoCenterID] || digimonSprites[this.currentIndex];
    if (!digimon?.evo) return;

    const total = digimon.evo.filter(id => digimonById[id]).length;
    const layout = evoLayouts[total];
    this.currentLayout = layout;
    if (layout?.gap) container.style.gap = `${layout.gap / 936 * 100}vw`;

    let count = 0;
    digimon.evo.forEach(evoID => {
      const evo = digimonById[evoID];
      if (!evo) return;

      const slot = document.createElement("div");
      slot.className = "evo-slot";
      const inner = document.createElement("div");
      inner.className = "evo-slot-inner";
      const img = document.createElement("img");
      img.src = evo.idle;
      img.style.cssText = "width:80%;height:auto;image-rendering:pixelated;pointer-events:none;";

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
      inner.addEventListener("click", () => { this.evoSide = "right"; this.moveEvoCursor(slotIndex); this.confirmEvoSlot(); });
      slot.appendChild(inner);
      container.appendChild(slot);
      count++;
    });

    setTimeout(() => this.drawEvoLines(layout), 50);
  }

  createLeftEvoSlots() {
    const preLayouts = {
      1: { gap: 0, offsetX: 5, lines: [{ h: 300, offsetX: 7 }] },
      2: { gap: 15, offsetX: 5, lines: [{ h: 170, d: 30, offsetX: 7 }, { h: 170, d: 30, offsetX: 7 }] },
      3: { gap: 15, offsetX: 5, lines: [{ h: 70, d: 100, offsetX: 31 }, { h: 300, offsetX: 7 }, { h: 70, d: 100, offsetX: 31 }] },
      4: { gap: 15, offsetX: 5, lines: [{ h: 70, d: 100, offsetX: 31 }, { h: 170, d: 30, offsetX: 7 }, { h: 170, d: 30, offsetX: 7 }, { h: 70, d: 100, offsetX: 31 }] },
      5: { gap: 15, offsetX: 5, lines: [{ h: 0, d: 160, offsetX: 55 }, { h: 70, d: 100, offsetX: 31 }, { h: 300, offsetX: 7 }, { h: 70, d: 100, offsetX: 31 }, { h: 0, d: 160, offsetX: 55 }] }
    };

    const container = document.getElementById("evo-slots-left");
    if (!container) return;
    container.innerHTML = "";

    const digimon = digimonById[this.evoCenterID] || digimonSprites[this.currentIndex];
    if (!digimon?.pre) return;

    const total = digimon.pre.filter(id => digimonById[id]).length;
    if (!total) return;

    const layout = preLayouts[total];
    this.currentPreLayout = layout;
    if (layout?.gap !== undefined) container.style.gap = `${layout.gap / 936 * 100}vw`;

    let count = 0;
    digimon.pre.forEach(preID => {
      const pre = digimonById[preID];
      if (!pre) return;

      const slot = document.createElement("div");
      slot.className = "evo-slot";
      const inner = document.createElement("div");
      inner.className = "evo-slot-inner";
      const img = document.createElement("img");
      img.src = pre.idle;
      img.style.cssText = "width:80%;height:auto;image-rendering:pixelated;pointer-events:none;";

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
      inner.addEventListener("click", () => { this.evoSide = "left"; this.moveEvoCursor(slotIndex); this.confirmEvoSlot(); });
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
    ].forEach(s => {
      const num = document.getElementById(`stat-${s.id}`);
      const fill = document.getElementById(`fill-${s.id}`);
      if (num) num.textContent = String(s.val);
      if (fill) fill.style.width = `${(s.val / s.max) * 100}%`;
    });
  }
}

window.chartSystem = new DigimonChart();

/* =========================
   MENU SYSTEM
========================= */

function showContentPage(page) {
  ["deto-content", "deto-content-en", "creditos-content", "creditos-content-en"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  if (page === "deto" || page === "creditos") {
    const id = `${page}-content${currentLang === "en" ? "-en" : ""}`;
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
  }
}

let currentMenuPage = "inicio";

function setupMenuSystem() {
  const buttons = document.querySelectorAll(".menu-btn");
  const chart = document.querySelector(".chart");
  const slots = document.getElementById("slots-container");
  const cursor = document.getElementById("cursor");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      window.chartSystem?.returnToChart();

      if (window.chartSystem?.soundEnabled) {
        const s = new Audio("sounds/blop2.ogg");
        s.volume = 0.5;
        s.play();
      }

      buttons.forEach(b => { b.classList.remove("active"); b.querySelector("img").src = "images/menu_escuro.webp"; });
      btn.classList.add("active");
      btn.querySelector("img").src = "images/menu_claro.webp";

      const page = btn.dataset.page;
      currentMenuPage = page;

      if (page === "inicio") {
        window.chartSystem.active = true;
        chart.src = "images/chart.webp";
        slots.style.display = "block";
        cursor.style.display = "block";
        showContentPage(null);
      } else {
        window.chartSystem.active = false;
        slots.style.display = "none";
        cursor.style.display = "none";
        chart.src = "images/conteudo.webp";
        showContentPage(page);
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
  document.querySelectorAll(".menu-btn span").forEach(span => {
    const maxW = span.clientWidth;
    const maxH = span.clientHeight;
    let min = 0, max = 200, best = 0;
    while (min <= max) {
      const mid = (min + max) >> 1;
      span.style.fontSize = mid + "px";
      if (span.scrollWidth <= maxW && span.scrollHeight <= maxH) { best = mid; min = mid + 1; }
      else { max = mid - 1; }
    }
    span.style.fontSize = best + "px";
  });
}

window.addEventListener("load", autoResizeMenuText);
window.addEventListener("resize", autoResizeMenuText);

/* =========================
   I18N / IDIOMA
========================= */

const i18n = {
  pt: { "menu-deto": "DETONADO", "menu-creditos": "CRÉDITOS", "info-desc": "DESC.", "info-peso": "PESO", "info-lutas": "LUTAS", "info-tecs": "TECS." },
  en: { "menu-deto": "WALKTHROUGH", "menu-creditos": "CREDITS", "info-desc": "CARE M.", "info-peso": "WEIGHT", "info-lutas": "BATTLES", "info-tecs": "TECH." }
};

function applyLang(lang) {
  currentLang = lang;
  const strings = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (strings[key] !== undefined) el.textContent = strings[key];
  });

  document.getElementById("info-bar").classList.toggle("lang-en", lang === "en");
  document.getElementById("langIcon").src = lang === "pt" ? "images/us.webp" : "images/br.webp";

  if (currentMenuPage === "deto" || currentMenuPage === "creditos") showContentPage(currentMenuPage);

  if (window.chartSystem) {
    const d = digimonById[window.chartSystem.evoCenterID] || digimonSprites[window.chartSystem.currentIndex];
    window.chartSystem.updateInfoText(d || null);
  }

  autoResizeMenuText();
}

function setupLangButton() {
  const btn = document.getElementById("langToggle");
  if (!btn) return;
  btn.addEventListener("click", () => applyLang(currentLang === "pt" ? "en" : "pt"));
  btn.blur();
}

window.addEventListener("load", setupLangButton);