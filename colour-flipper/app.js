const colour = document.getElementById("colourbox");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let randomColour = `rgb(${r}, ${g}, ${b})`;
  let bgc = (colour.style.backgroundColor = randomColour);

  // * change text as background color changes
  let colourText = document.querySelector("h2");

  colourText.textContent = `background-color: ${bgc}`;
  colourText.style.backgroundColor = black;
});

console.log(colour.classList);
