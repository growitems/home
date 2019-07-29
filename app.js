var home = document.getElementById("home");
var shop = document.getElementById("shop");
var isShopping = false;
if (document.URL.endsWith("shop.html")) {isShopping = true};

var items = [
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"]
]

home.addEventListener("click", () => {
    document.location.href = "./index.html";
})

shop.addEventListener("click", () => {
    document.location.href = "./shop.html";
})

if (isShopping) {
    for (let i = 0;i < items.length;i++) {
        for (let x = 0;x < items[i].length;x++) {
            let newItem = document.createElement("button");
            newItem.classList.add("item");
            newItem.innerText = items[i][x];
            let itemHolder = document.getElementById("item-holder");
            itemHolder.appendChild(newItem);
        }
        let emptyBr = document.createElement("br");
        let itemHolder = document.getElementById("item-holder");
        itemHolder.appendChild(emptyBr);
    }
    let itemHolder = document.getElementById("item-holder");
    let warnText = document.createElement("p");
    warnText.classList.add("text-small");
    warnText.innerText = "My Discord (for purchases): iThatNUB#6156";
    itemHolder.appendChild(warnText);
}