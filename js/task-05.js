let input = document.getElementById("name-input")
let spanText = document.getElementById("name-output");

input.addEventListener("input", () => {
    // console.log(input.value.length);
    if (input.value.length < 1) {
        // console.log("empty");
        spanText.innerText = "Anonymous"
    } else {
        spanText.innerText = input.value;
    }

})
