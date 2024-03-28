function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let colorText = document.querySelector(".color");
let btn = document.querySelector(".change-color");

btn.addEventListener("click", () => {
  let color = getRandomHexColor();
  colorText.innerText = color;
  document.body.style.backgroundColor = color;
  // btn.style.background = color;
})