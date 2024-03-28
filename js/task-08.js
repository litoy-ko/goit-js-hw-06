let form = document.querySelector(".login-form");
let inputs = document.querySelectorAll("input");
let person = new Object();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(inputs.length);
    for (let input of inputs) {
        if (input.value === "") {
            alert("All fields must be filled in.")
            return;
        }
        else {
            let prop = input.getAttribute("name");
            person[prop] = input.value;
        }
    }
    console.log(person);
    e.target.reset();
})

