let inputval = document.getElementById("font-size-control");
let text = document.getElementById("text");

inputval.addEventListener("input", (e) => {
    // console.log(e.target.value);
    text.style.fontSize = e.target.value + "px";

})