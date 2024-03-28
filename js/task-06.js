let input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
    let inputVal = input.value;
    // console.log(inputVal.length);
    // console.log(input.getAttribute("data-length"))
     if (parseInt(inputVal.length) !== parseInt(input.getAttribute("data-length"))) {
            // input.classList.add("invalid");
            input.className = "invalid"
        } else {
            // input.classList.add("valid");
            input.className = "valid"
        }
})
// input.addEventListener("focus", () => {
//     input.removeAttribute("class");
// })
