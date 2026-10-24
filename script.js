const deskripsi = document.querySelector("#deskripsi");
const tombolTeks = document.querySelector("#tombolTeks");
const tombolTema = document.querySelector("#tombolTema");

const daftarTeks = [
  "Halo! Aku Alexa, mahasiswa semester 1 Teknik Informatika yang baru mulai belajar membangun website. Aku selalu antusias mencoba hal-hal baru, khususnya di bidang teknologi, karena perkembangannya selalu menarik dan tidak pernah berhenti.",
  "Hai, Aku Alexa! Saat ini aku sedang menjalani semester pertama di jurusan Teknik Informatika dan mulai mendalami dunia pembuatan website. Bagiku, mencoba hal baru adalah sesuatu yang menyenangkan, terutama dalam dunia teknologi yang selalu berkembang dan menghadirkan banyak hal menarik untuk dipelajari.",
  "Hai! Aku Alexa, mahasiswa semester 1 Teknik Informatika yang sedang belajar membuat website. Aku suka mencoba hal-hal baru, terutama yang berkaitan dengan teknologi, karena dunia teknologi terus berkembang pesat setiap harinya."
];

let nomor = 0;

tombolTeks.addEventListener("click", function () {
  nomor = nomor + 1;

  if (nomor === daftarTeks.length) {
    nomor = 0;
  }

  deskripsi.textContent = daftarTeks[nomor];
});

tombolTema.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("gelap");
});

const dekorasi = ["♡", "✧", "୨୧", "✿", "☆"];

dekorasi.forEach((simbol, index) => {
  const elemen = document.createElement("div");

  elemen.className = "cute-float";
  elemen.textContent = simbol;

  elemen.style.top = `${15 + index * 15}%`;
  elemen.style.left = index % 2 === 0 ? "3%" : "94%";
  elemen.style.animationDelay = `${index * 0.5}s`;

  document.body.appendChild(elemen);
});

document.addEventListener("mousemove", function(e) {
  if (Math.random() > 0.92) {
    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";
    sparkle.textContent = "✦";

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);
  }
});

function buatHeart() {
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent = ["♡", "♥", "ღ"][
    Math.floor(Math.random() * 3)
  ];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 15) + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(buatHeart, 1800);

const pesanLucu = [
  "Keep shining, Everyone! ♡",
  "You are doing amazing! ✨",
  "Little steps still move you forward 🌷",
  "Coding with love and coffee ☕",
  "Stay calm, stay curious! 🎀",
  "Dream big and keep learning! ♡"
];

function pesanRandom() {
  const pesan = document.querySelector("#pesanCute");

  pesan.textContent =
    pesanLucu[Math.floor(Math.random() * pesanLucu.length)];
}
function bukaSurat() {
  document.querySelector("#surat")
    .classList.toggle("aktif");
}
function petMe() {
  const messages = [
    "Meowww! ฅ^•ﻌ•^ฅ",
    "Semangat yaaa! ♡",
    "Jangan lupa istirahat!",
    "You are amazing! ✨",
    "Psst... Helloww!"
  ];

  document.querySelector("#petBubble").textContent =
    messages[Math.floor(Math.random() * messages.length)];
}

// ===== REVEAL ON SCROLL =====

const revealElements = document.querySelectorAll(
  ".profil, .judul-bagian, .kartu, footer"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});
