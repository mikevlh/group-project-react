const images = [
  "./img/swiss2.jpeg",
  "./img/japan1.jpeg",
  "./img/maldives3.jpeg",
  "./img/australia4.jpeg",
];

var currentImageIndex = 0;

const elementsArray = document.querySelectorAll(".circle");

//initialize header with image
elementsArray.forEach(function (elem) {
  elem.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
});

const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  button.classList.add("btn-animate");

  currentImageIndex += 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;

  //Start animation
  elementsArray.forEach(function (elem) {
    elem.classList.add("circle-animate");
  });
});

button.addEventListener("animationend", function () {
  button.classList.remove("btn-animate");
});

//Register circle animationEnd event
elementsArray.forEach(function (elem) {
  elem.addEventListener("animationend", function () {
    elem.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
    elem.classList.remove("circle-animate");
    console.log("test");
  });
});
