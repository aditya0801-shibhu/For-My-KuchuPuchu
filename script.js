// Intro Start
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";
});

// Slideshow Auto-play
let slides = document.querySelectorAll(".slide");
let index = 0;
function showSlides() {
  slides.forEach((slide, i) => slide.classList.remove("active"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
setInterval(showSlides, 3000); // every 3 sec

// Final Surprise Confetti
document.getElementById("surpriseBtn").addEventListener("click", () => {
  confetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.7 }
  });
  alert("Forever Yours ❤️ KuchuPuchu 💕");
});
