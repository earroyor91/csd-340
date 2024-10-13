function initialize() {
    const init = document.getElementById("topButton");
    init.disabled = true;
}


function ascending() {

    const ol = document.getElementById("list");
    const arr = Array.from(ol.children);

    ol.innerHTML = "";

    ol.reversed = false;

    for (let i = arr.length - 1; i >= 0; i--) {
        ol.appendChild(arr[i]);
    }


    document.getElementById("topButton").disabled = true;
    document.getElementById("bottomButton").disabled = false;
}

function descending() {

    const ol = document.getElementById("list");
    const arr = Array.from(ol.children);

    ol.innerHTML = "";

    ol.reversed = true;

    for (let i = arr.length - 1; i >= 0; i--) {
        ol.appendChild(arr[i]);
    }

    document.getElementById("bottomButton").disabled = true;
    document.getElementById("topButton").disabled = false;

}

window.onload = initialize;