document.querySelector("button").onclick = mySlider;

let sliderImages = document.querySelectorAll(".slider img");
let count = 0;

function mySlider() {
  if (count < sliderImages.length) {
    let img = sliderImages[count];
    img.style.display = "block";
    img.classList.add("animate__animated", "animate__fadeInTopRight");
    img.addEventListener("animationend", () => {
      img.classList.add(
        "animate__animated",
        "animate__fadeOutTopLeft",
        "animate__delay-2s"
      );
    });
    count++;
  } else {
    startNewSlider();
  }
}

function startNewSlider() {
  sliderImages.forEach((element) => {
    element.classList.remove(
      "animate__animated",
      "animate__fadeOutTopLeft",
      "animate__fadeInTopRight"
    );
    element.style.display = "none";
  });
  count = 0;
  mySlider();
}
