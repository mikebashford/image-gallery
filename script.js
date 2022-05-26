const current = document.querySelector("#current");
const images = document.querySelector(".imgs");
const image = document.querySelectorAll(".imgs img");
const opacity = 0.6;

image[0].style.opacity = opacity;

images.addEventListener("click", imgClick);

function imgClick(event) {
  //reset opacity to default
  image.forEach((image) => (image.style.opacity = 1));
  //changes current image to source of clicked image
  current.src = event.target.src;

  //add fade in class to current image
  current.classList.add("fade-in");

  //remove the fade in class after half a second
  setTimeout(() => current.classList.remove("fade-in"), 500);

  //change current thumb opacity
  event.target.style.opacity = opacity;
}
