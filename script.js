/* =========================
   DADOS (TEM QUE VIR PRIMEIRO)
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
  { idle: "sprites/botamon.webp", anim: "sprites/botamon2.webp" },
  { idle: "sprites/poyomon.webp", anim: "sprites/poyomon2.webp" },
  { idle: "sprites/punimon.webp", anim: "sprites/punimon2.webp" },
  { idle: "sprites/yuramon.webp", anim: "sprites/yuramon2.webp" },
  { idle: "sprites/koromon.webp", anim: "sprites/koromon2.webp" },
  { idle: "sprites/tokomon.webp", anim: "sprites/tokomon2.webp" },
  { idle: "sprites/tsunomon.webp", anim: "sprites/tsunomon2.webp" },
  { idle: "sprites/tanemon.webp", anim: "sprites/tanemon2.webp" },
  { idle: "sprites/agumon.webp", anim: "sprites/agumon2.webp" },
  { idle: "sprites/gabumon.webp", anim: "sprites/gabumon2.webp" },
  { idle: "sprites/patamon.webp", anim: "sprites/patamon2.webp" },
  { idle: "sprites/elecmon.webp", anim: "sprites/elecmon2.webp" },
  { idle: "sprites/piyomon.webp", anim: "sprites/piyomon2.webp" },
  { idle: "sprites/kunemon.webp", anim: "sprites/kunemon2.webp" },
  { idle: "sprites/palmon.webp", anim: "sprites/palmon2.webp" },
  { idle: "sprites/betamon.webp", anim: "sprites/betamon2.webp" },
  { idle: "sprites/penguinmon.webp", anim: "sprites/penguinmon2.webp" },
  { idle: "sprites/greymon.webp", anim: "sprites/greymon2.webp" },
  { idle: "sprites/monochromon.webp", anim: "sprites/monochromon2.webp" },
  { idle: "sprites/ogremon.webp", anim: "sprites/ogremon2.webp" },
  { idle: "sprites/airdramon.webp", anim: "sprites/airdramon2.webp" },
  { idle: "sprites/kuwagamon.webp", anim: "sprites/kuwagamon2.webp" },
  { idle: "sprites/whamon.webp", anim: "sprites/whamon2.webp" },
  { idle: "sprites/frigimon.webp", anim: "sprites/frigimon2.webp" },
  { idle: "sprites/nanimon.webp", anim: "sprites/nanimon2.webp" },
  { idle: "sprites/meramon.webp", anim: "sprites/meramon2.webp" },
  { idle: "sprites/drimogemon.webp", anim: "sprites/drimogemon2.webp" },
  { idle: "sprites/leomon.webp", anim: "sprites/leomon2.webp" },
  { idle: "sprites/kokatorimon.webp", anim: "sprites/kokatorimon2.webp" },
  { idle: "sprites/vegiemon.webp", anim: "sprites/vegiemon2.webp" },
  { idle: "sprites/shellmon.webp", anim: "sprites/shellmon2.webp" },
  { idle: "sprites/mojyamon.webp", anim: "sprites/mojyamon2.webp" },
  { idle: "sprites/birdramon.webp", anim: "sprites/birdramon2.webp" },
  { idle: "sprites/tyrannomon.webp", anim: "sprites/tyrannomon2.webp" },
  { idle: "sprites/angemon.webp", anim: "sprites/angemon2.webp" },
  { idle: "sprites/unimon.webp", anim: "sprites/unimon2.webp" },
  { idle: "sprites/ninjamon.webp", anim: "sprites/ninjamon2.webp" },
  { idle: "sprites/coelamon.webp", anim: "sprites/coelamon2.webp" },
  { idle: "sprites/numemon.webp", anim: "sprites/numemon2.webp" },
  { idle: "sprites/centarumon.webp", anim: "sprites/centarumon2.webp" },
  { idle: "sprites/devimon.webp", anim: "sprites/devimon2.webp" },
  { idle: "sprites/bakemon.webp", anim: "sprites/bakemon2.webp" },
  { idle: "sprites/kabuterimon.webp", anim: "sprites/kabuterimon2.webp" },
  { idle: "sprites/seadramon.webp", anim: "sprites/seadramon2.webp" },
  { idle: "sprites/garurumon.webp", anim: "sprites/garurumon2.webp" },
  { idle: "sprites/sukamon.webp", anim: "sprites/sukamon2.webp" },
  { idle: "sprites/metalgreymon.webp", anim: "sprites/metalgreymon2.webp" },
  { idle: "sprites/skullgreymon.webp", anim: "sprites/skullgreymon2.webp" },
  { idle: "sprites/giromon.webp", anim: "sprites/giromon2.webp" },
  { idle: "sprites/hkabuterimon.webp", anim: "sprites/hkabuterimon2.webp" },
  { idle: "sprites/metalmamemon.webp", anim: "sprites/metalmamemon2.webp" },
  { idle: "sprites/megaseadramon.webp", anim: "sprites/megaseadramon2.webp" },
  { idle: "sprites/vademon.webp", anim: "sprites/vademon2.webp" },
  { idle: "sprites/etemon.webp", anim: "sprites/etemon2.webp" },
  { idle: "sprites/andromon.webp", anim: "sprites/andromon2.webp" },
  { idle: "sprites/megadramon.webp", anim: "sprites/megadramon2.webp" },
  { idle: "sprites/phoenixmon.webp", anim: "sprites/phoenixmon2.webp" },
  { idle: "sprites/piximon.webp", anim: "sprites/piximon2.webp" },
  { idle: "sprites/mamemon.webp", anim: "sprites/mamemon2.webp" },
  { idle: "sprites/monzaemon.webp", anim: "sprites/monzaemon2.webp" },
  { idle: "sprites/digitamamon.webp", anim: "sprites/digitamamon2.webp" },
  { idle: "sprites/panjyamon.webp", anim: "sprites/panjyamon2.webp" },
  { idle: "sprites/gigadramon.webp", anim: "sprites/gigadramon2.webp" },
  { idle: "sprites/metaletemon.webp", anim: "sprites/metaletemon2.webp" },
  // continue na ordem dos slots...
];

/* =========================
   CLASSE
========================= */

class DigimonChart {
  constructor() {
    this.active = true;
    this.CHART_BASE_WIDTH = 1458;
    this.SLOT_BASE_SIZE = 94;
    this.CURSOR_BASE_SIZE = 94;
    this.TOL = 0.06;

    this.currentIndex = 0;
    this.cursorAtivo = false;
    this.animInterval = null;
    this.lastWidth = null;

    this.moveSound = new Audio("sounds/blop.ogg");
    this.moveSound.volume = 0.4; // ajuste se quiser
    this.selectSound = new Audio("sounds/click.ogg");
    this.selectSound.volume = 0.5; // ajuste se quiser
    this.soundEnabled = localStorage.getItem("soundEnabled") !== "false";
    
    this.chart = document.querySelector(".chart");
    this.container = document.getElementById("slots-container");
    this.cursor = document.getElementById("cursor");

    this.slotImages = [];
    this.slots = [];
    this.nav = [];
    this.columns = [
  [0,1,2,3],          // 1–4
  [4,5,6,7],          // 5–8
  [8,9,10,11,12,13,14,15,16], // 9–17
  [17,18,19,20,21,22,23,24],  // 18–25
  [25,26,27,28,29,30,31],     // 26–32
  [32,33,34,35,36,37,38],     // 33–39
  [39,40,41,42,43,44,45],     // 40–46
  [46,47,48,49,50,51,52,53],  // 47–54
  [54,55,56,57,58,59,60],     // 55–61
  [61,62,63]                  // 62–64
];
this.nav = {
  0:{w:63,a:54,s:1,d:4},
  1:{w:0,a:56,s:2,d:5},
  2:{w:1,a:58,s:3,d:6},
  3:{w:2,a:60,s:4,d:7},
  4:{w:3,a:0,s:5,d:8},
  5:{w:4,a:1,s:6,d:10},
  6:{w:5,a:2,s:7,d:12},
  7:{w:6,a:3,s:8,d:14},
  8:{w:7,a:4,s:9,d:17},
  9:{w:8,a:4,s:10,d:18},
  10:{w:9,a:5,s:11,d:19},
  11:{w:10,a:5,s:12,d:20},
  12:{w:11,a:6,s:13,d:21},
  13:{w:12,a:6,s:14,d:22},
  14:{w:13,a:7,s:15,d:23},
  15:{w:14,a:7,s:16,d:24},
  16:{w:15,a:7,s:17,d:24},
  17:{w:16,a:8,s:18,d:25},
  18:{w:17,a:9,s:19,d:26},
  19:{w:18,a:10,s:20,d:27},
  20:{w:19,a:11,s:21,d:28},
  21:{w:20,a:12,s:22,d:29},
  22:{w:21,a:13,s:23,d:30},
  23:{w:22,a:14,s:24,d:31},
  24:{w:23,a:15,s:61,d:61},
  25:{w:24,a:17,s:26,d:32},
  26:{w:25,a:18,s:27,d:33},
  27:{w:26,a:19,s:28,d:34},
  28:{w:27,a:20,s:29,d:35},
  29:{w:28,a:21,s:30,d:36},
  30:{w:29,a:22,s:31,d:37},
  31:{w:30,a:23,s:24,d:38},
  32:{w:31,a:25,s:33,d:39},
  33:{w:32,a:26,s:34,d:40},
  34:{w:33,a:27,s:35,d:41},
  35:{w:34,a:28,s:36,d:42},
  36:{w:35,a:29,s:37,d:43},
  37:{w:36,a:30,s:38,d:44},
  38:{w:37,a:31,s:61,d:45},
  39:{w:38,a:32,s:40,d:46},
  40:{w:39,a:33,s:41,d:47},
  41:{w:40,a:34,s:42,d:48},
  42:{w:41,a:35,s:43,d:49},
  43:{w:42,a:36,s:44,d:50},
  44:{w:43,a:37,s:45,d:51},
  45:{w:44,a:38,s:61,d:52},
  46:{w:45,a:39,s:47,d:54},
  47:{w:46,a:40,s:48,d:55},
  48:{w:47,a:41,s:49,d:56},
  49:{w:48,a:42,s:50,d:57},
  50:{w:49,a:43,s:51,d:58},
  51:{w:50,a:44,s:52,d:59},
  52:{w:51,a:45,s:53,d:60},
  53:{w:52,a:45,s:63,d:60},
  54:{w:53,a:46,s:55,d:0},
  55:{w:54,a:47,s:56,d:0},
  56:{w:55,a:48,s:57,d:1},
  57:{w:56,a:49,s:58,d:1},
  58:{w:57,a:50,s:59,d:2},
  59:{w:58,a:51,s:60,d:2},
  60:{w:59,a:52,s:53,d:3},
  61:{w:45,a:24,s:0,d:62},
  62:{w:53,a:61,s:0,d:63},
  63:{w:53,a:62,s:0,d:0}
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
  resizeTimer = setTimeout(() => {
    this.onResize();
  }, 50);
});

    document.addEventListener("keydown", (e) => this.onKey(e));
  }

  setup() {
    this.setupSoundButton();
    this.createSlots();
    this.updateLayout();
    this.updateCursor();
    this.updateAnimation();
  }
  
setupSoundButton() {
  const btn = document.getElementById("soundToggle");

const icon = document.getElementById("soundIcon");

const updateIcon = () => {
  icon.src = this.soundEnabled
    ? "images/som.png"
    : "images/som2.png";
};

  updateIcon();

  btn.addEventListener("click", () => {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem("soundEnabled", this.soundEnabled);
    updateIcon();
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

      div.addEventListener("click", () => {
  this.playSelectSound();
  this.select();
});

      this.container.appendChild(div);

      this.slots.push(div);
      this.slotImages.push(img);
    });
  }



  updateLayout() {
    const rect = this.chart.getBoundingClientRect();
    const scale = rect.width / this.CHART_BASE_WIDTH;
    const size = Math.round(this.SLOT_BASE_SIZE * scale);

    this.slots.forEach((div, index) => {
      const slot = slotsData[index];

      div.style.width = size + "px";
      div.style.height = size + "px";
      div.style.left = Math.round(slot.x * rect.width) + "px";
      div.style.top = Math.round(slot.y * rect.height) + "px";
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
    const offsetX = chartRect.left - panelRect.left;
    const offsetY = chartRect.top - panelRect.top;

const width = Math.round(size * 1.15);
const height = size;

this.cursor.style.width = width + "px";
this.cursor.style.height = height + "px";

this.cursor.style.left =
  offsetX +
  Math.round(slot.x * chartRect.width) -
  (width - size) / 2 + "px";

    this.cursor.style.top =
      offsetY + Math.round(slot.y * chartRect.height) + "px";
  }

  updateAnimation() {
    this.slotImages.forEach(img => {
  if (img.src !== img.dataset.idle) {
    img.src = img.dataset.idle;
  }
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
  }

onResize() {

  const rect = this.chart.getBoundingClientRect();

  if (rect.width === this.lastWidth) return;

  this.lastWidth = rect.width;

  requestAnimationFrame(() => {
    this.updateLayout();
    this.updateCursor();
  });
}

onKey(e) {
  if (!this.active) return;
  let direction = null;

  if (["ArrowUp", "w", "W"].includes(e.key)) direction = "up";
  if (["ArrowDown", "s", "S"].includes(e.key)) direction = "down";
  if (["ArrowLeft", "a", "A"].includes(e.key)) direction = "left";
  if (["ArrowRight", "d", "D"].includes(e.key)) direction = "right";

if (direction) {
  const prevIndex = this.currentIndex;

  this.moveCursor(direction);

  if (this.currentIndex !== prevIndex) {
    this.playMoveSound();
  }

  this.activateCursor();
  this.updateCursor();
  this.updateAnimation();
}

  if (e.key === "Enter") {
    this.playSelectSound();
    this.select();
  }
}
moveCursor(direction) {
  const keyMap = {
    up: "w",
    down: "s",
    left: "a",
    right: "d"
  };

  const dirKey = keyMap[direction];
  const next = this.nav[this.currentIndex][dirKey];

  if (next !== undefined) {
    this.currentIndex = next;
  }
}
playMoveSound() {
  if (!this.soundEnabled || !this.active) return;

  const sound = this.moveSound.cloneNode();
  sound.volume = this.moveSound.volume;
  sound.play();
}

playSelectSound() {
  if (!this.soundEnabled || !this.active) return;

  const sound = this.selectSound.cloneNode();
  sound.volume = this.selectSound.volume;
  sound.play();
}
}

window.chartSystem = new DigimonChart();

/* =========================
   MENU SYSTEM
========================= */

function setupMenuSystem() {
  const menuSound = new Audio("sounds/blop2.ogg");
  menuSound.volume = 0.5;
  const detoContent = document.getElementById("deto-content");
  const buttons = document.querySelectorAll(".menu-btn");
  const chart = document.querySelector(".chart");
  const slots = document.getElementById("slots-container");
  const cursor = document.getElementById("cursor");
  const soundBtn = document.getElementById("soundToggle");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

// 🔊 som de menu
if (window.chartSystem && window.chartSystem.soundEnabled) {
  const menuSound = new Audio("sounds/click.ogg");
  menuSound.volume = 0.5;
  menuSound.play();
}

      // 🔄 Troca botão claro/escuro
      buttons.forEach(b => {
        b.classList.remove("active");
        b.querySelector("img").src = "images/menu_escuro.png";
      });

      btn.classList.add("active");
      btn.querySelector("img").src = "images/menu_claro.png";

      const page = btn.dataset.page;

if (page === "inicio") {

  window.chartSystem.active = true; 

  chart.src = "images/chart.png";
  slots.style.display = "block";
  cursor.style.display = "block";
  detoContent.style.display = "none";
}

if (page === "deto") {

  window.chartSystem.active = false; // 👈 desativa sistema

  slots.style.display = "none";
  cursor.style.display = "none";
  chart.src = "images/conteudo.png";
  detoContent.style.display = "block";
}

    });
  });
}

window.addEventListener("load", setupMenuSystem);

function autoResizeMenuText() {
  const spans = document.querySelectorAll(".menu-btn span");

  spans.forEach(span => {

    const maxWidth = span.clientWidth;
    const maxHeight = span.clientHeight;

    let min = 0;
    let max = 200; // limite alto seguro
    let best = 0;

    while (min <= max) {

      let mid = Math.floor((min + max) / 2);
      span.style.fontSize = mid + "px";

      if (
        span.scrollWidth <= maxWidth &&
        span.scrollHeight <= maxHeight
      ) {
        best = mid;
        min = mid + 1;
      } else {
        max = mid - 1;
      }

    }

    span.style.fontSize = best + "px";

  });
}

window.addEventListener("load", autoResizeMenuText);
window.addEventListener("resize", autoResizeMenuText);


/* =========================
   detonado
========================= */