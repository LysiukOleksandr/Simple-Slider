let sliderImages = document.querySelectorAll(".slider img");
let count = 0;
let timer;

function mySlider() {
  timerId = setTimeout(function slider() {
    if (count < sliderImages.length) {
      let img = sliderImages[count];
      img.style.display = "block";
      img.classList.add("animate__animated", "animate__fadeInTopRight");
      img.addEventListener("animationend", () => {
        img.classList.add("animate__animated", "animate__fadeOutTopLeft");
      });
      count++;
    } else {
      sliderImages.forEach((element) => {
        element.classList.remove(
          "animate__animated",
          "animate__fadeOutTopLeft",
          "animate__fadeInTopRight"
        );
        element.style.display = "none";
      });
      count = 0;
    }
    console.log(count);
    timerId = setTimeout(slider, 4000);
  }, 1000);
}

mySlider();
