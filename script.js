const slides = [
  {
    title: "Reveal Your<br>True Glow",
    description: "First-Time Beauty? Get 15% Off Your First Visit!",
    image: "img/model.jpeg"
  }
  // {
  //   title: "Embrace Your<br>Natural Beauty",
  //   description: "Shop our exclusive summer skincare collection!",
  //   image: "img/"
  // }
];

let currentSlide = 0;

const heroText = document.querySelector(".hero-text h1");
const heroDesc = document.querySelector(".hero-text p");
const heroImg = document.querySelector(".hero-image img");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  const slide = slides[index];
  heroText.innerHTML = slide.title;
  heroDesc.textContent = slide.description;
  heroImg.src = slide.image;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

document.querySelector(".nav-arrow.left").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.querySelector(".nav-arrow.right").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

// Optional: auto-slide every 6 seconds
// setInterval(() => {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }, 6000);

showSlide(currentSlide);

const tabs = document.querySelectorAll(".tab");
const productSections = document.querySelectorAll(".products");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    productSections.forEach(section => section.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Script ini aktif ketika halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded.");

  const readButtons = document.querySelectorAll(".article button");

  readButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      alert(`Opening article #${index + 1}...`);
    });
  });

  console.log("Banner loaded successfully.");
});

