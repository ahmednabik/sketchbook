document.getElementById("select-squares").addEventListener("input", generateBoxes);
document.getElementById("select-squares").addEventListener("input", displayCurrentGridSelection);

function generateBoxes() {
    let rangeSelector = document.getElementById("select-squares");
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
function displayCurrentGridSelection() {
    let rangeSelector = document.getElementById("select-squares");
    let numberOfSquares = rangeSelector.value;
    let displayDiv = document.getElementById("selected-squares");
    displayDiv.textContent = numberOfSquares + " x " + numberOfSquares;

}