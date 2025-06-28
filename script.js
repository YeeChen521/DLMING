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

window.addEventListener("DOMContentLoaded", () => {
  const identity = sessionStorage.getItem("identity");
  if (identity === "fan" || identity === "ming") {
    const letterContent = document.getElementById("letterContent");
    const envelopeCover = document.getElementById("envelopeCover");

    // 写信内容
    if (identity === "fan") {
      letterContent.innerHTML = `
        亲爱的小困熊： 🌟💖<br><br>
        🎉✨ 欢迎回到小困熊之家~ ✨🎉<br><br>
        🐻💕 （熊爪挥舞中...）<br><br>
        🎂 恭喜你又陪DL明度过了一个生日！ 🎊<br><br>
        ✨ 超级开心能遇见你们呀~ 🤗💞<br><br>
        🌙 我们明天见，<br><br>
        ☀️ 我们天天见，<br><br>
        🌸 岁岁年年都要见！ 🌈💫<br><br>
        🐾 （附赠一个软乎乎的熊抱~）
      `;
    } else if (identity === "ming") {
      letterContent.innerHTML = `
        DL.明：<br><br>
        🎉✨ 欢迎回到小困熊之家~ ✨🎉<br><br>
        首先呢，祝你生日快乐鸭！ 🎂🎁 愿你每一天都被快乐包围，被温柔以待，接住满满的福气与好运～💖<br><br>
        如果“天天开心”对你来说有点难，那就先祝你身体健康，告别脆皮鸭，做一只健康快乐的小鸭！🦆💪<br><br>
        小困熊永远是你最坚实的后盾，因为我们的爱是双向奔赴的浪漫呀～🌟<br><br>
        无论风雨晴空，我们都在这里，陪你一路同行。<br><br>
        我们明天见，我们天天见，岁岁年年都要见！ 🌈💕
      `;
    }

    // 显示信封封面按钮
    envelopeCover.style.display = "block";
  }
});


function closeLetter(){
  const dialog = document.getElementById("letterDialog");
  dialog.close();
  sessionStorage.removeItem("identity");
}

function openEnvelope() {
  document.getElementById("envelopeCover").style.display = "none";
  const dialog = document.getElementById("letterDialog");
  dialog.showModal();

  document.getElementById("closeButton").style.display = "inline-block";

}

