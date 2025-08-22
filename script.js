// Confetti on main button
document.getElementById("loveBtn").addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.7 }
  });
  alert("I Love You So Much 😘💖 — Your Baby ❤️");
});

// Secret Letter Reveal
document.getElementById("revealBtn").addEventListener("click", () => {
  document.getElementById("secretText").classList.toggle("hidden");
});

// Floating Hearts
const heartsContainer = document.querySelector('.hearts');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heart.style.animationDuration = (6 + Math.random() * 4) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 10000);
}
setInterval(createHeart, 500);

// Floating Stars
const starsContainer = document.querySelector('.stars');
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.innerHTML = '✨';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.fontSize = Math.random() * 10 + 10 + 'px';
  star.style.animationDuration = (4 + Math.random() * 4) + 's';
  starsContainer.appendChild(star);
  setTimeout(() => { star.remove(); }, 7000);
}
setInterval(createStar, 800);
