window.onload = () => {
  const gallery = document.getElementById("gallery");

  if (!gallery) {
    console.error("Gallery element not found!");
    return;
  }

  // 复制内容实现无缝循环
  gallery.innerHTML += gallery.innerHTML;

  let position = 0;
  let direction = 0; // 1 表示右，-1 表示左，0 表示停止
  const speed = 5; // 速度调节，值越小越慢

  const galleryWidth = gallery.scrollWidth / 2;

  function scrollGallery() {
    if (direction !== 0) {
      position -= direction * speed;

      if (position <= -galleryWidth) {
        position += galleryWidth;
      } else if (position >= 0) {
        position -= galleryWidth;
      }

      gallery.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(scrollGallery);
  }

  // 监听键盘按下，控制方向
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      direction = 1;
    } else if (event.key === "ArrowLeft") {
      direction = -1;
    }
  });

  // 监听键盘松开，停止移动
  document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      direction = 0;
    }
  });

  scrollGallery();
};
