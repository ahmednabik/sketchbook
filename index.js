generateBoxes();
let resolutionSelector = document.querySelectorAll('input[name = "radio-btn"]');
console.log (resolutionSelector);
resolutionSelector.forEach(rs => { rs.addEventListener("change", generateBoxes); 
});

document.getElementById("clear-btn").addEventListener("click", function () {
    let container = document.querySelector(".play-area");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    generateBoxes();
})

function generateBoxes() {
    let rangeSelector = document.querySelector('input[name = "radio-btn"]:checked');
    let numberOfSquares = rangeSelector.value;
    let container = document.querySelector(".play-area");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (i = 1; i <= (numberOfSquares * numberOfSquares); i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = (768 / numberOfSquares) + "px";
        box.style.height = (768 / numberOfSquares) + "px";
        box.addEventListener("mouseenter", paintBoxes)
        container.appendChild(box);
    }


}
function paintBoxes(event) {
    event.target.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +")";
}