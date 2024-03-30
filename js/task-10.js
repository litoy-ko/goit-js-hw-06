function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


let input = document.querySelector("[type='number']");
let btncreate = document.querySelector("[data-create]")
let btndestroy = document.querySelector("[data-destroy]")
let boxes = document.getElementById("boxes");

// console.log(btncreate);

btncreate.addEventListener("click", () => {
  // console.log(input.value);
  let amount = input.value;
  createBoxes(amount);
})

btndestroy.addEventListener("click", () => {
  // boxes.innerHTML = "";
  // input.value = ""
  location.reload();
})

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    let color = getRandomHexColor();
    let box = document.createElement("div");
    box.id = "box" + i;
    box.style.backgroundColor = color;
    box.style.width = "30px";
    box.style.height = "30px";
    boxes.appendChild(box);
  }
}