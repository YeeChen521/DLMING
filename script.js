let currentSlide = 0;
const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery .img");

const imageWidth = images[0].clientWidth + 20; // 图片宽度 + margin（10px * 2）
const imagesPerView = Math.floor(window.innerWidth / imageWidth);
const totalSlides = Math.ceil(images.length / imagesPerView);

function goToSlide(index) {
  currentSlide = index;
  gallery.style.transform = `translateX(-${imageWidth * imagesPerView * index}px)`;
}

function goLeft() {
  const newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  goToSlide(newIndex);
}

function goRight() {
  const newIndex = (currentSlide + 1) % totalSlides;
  goToSlide(newIndex);
}

document.querySelector(".left").addEventListener("click", goLeft);
document.querySelector(".right").addEventListener("click", goRight);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goLeft();
  if (e.key === "ArrowRight") goRight();
});

setInterval(goRight, 5000);
