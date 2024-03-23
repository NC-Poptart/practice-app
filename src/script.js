function updateHeading(newHeading) {
  let heading = document.querySelector("h2");
  heading.innerHTML = newHeading;
}

function changeCity() {
  let city = prompt("Which city do you live in?");
  let temp = prompt("What is the current temperature?");
  if (temp <= 23) {
    updateHeading(`Currently ${temp}&deg; 🥶 in ${city}`);
  } else {
    updateHeading(`Currently ${temp}&deg; 🥵 in ${city}`);
  }
}
let cityButton = document.querySelector("button");
cityButton.addEventListener("click", changeCity);
