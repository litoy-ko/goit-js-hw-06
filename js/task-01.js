let categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length} \n\n`);

for (let category of categories) {
    console.log(`Category: ${category.getElementsByTagName("h2")[0].innerText} \nElements: ${category.querySelectorAll("ul li").length}\n\n`);
}