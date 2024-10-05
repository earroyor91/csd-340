const userArray = [];

function add() {
    const userInput = document.getElementById("userInput");
    const value = userInput.value;

    if (value) {
        userArray.push(value);
        userInput.value = "";
        alert(value + " has been added at index " + userArray.length);
    } else {
        alert("There is nothing to add.")
    }
}

function remove() {
    const userInput = document.getElementById("userInput");
    const value = userInput.value;
    const index = userArray.indexOf(value);

    if (index > -1) {
        userArray.splice(index, 1);
        userInput.value = "";
        alert(value + " has been removed at index " + index);
    } else {
        alert(value + " was not found");
    }
}

function removeLast() {
    userArray.pop();
}

function display() {
    const output = document.getElementById("outputArray");
    output.innerHTML = "";

    for (let i = 0; i < userArray.length; i++) {
        output.innerHTML += "Item " + (i + 1) + " = " + userArray[i] + "<br/>";
    }
}