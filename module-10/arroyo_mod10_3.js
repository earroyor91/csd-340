function superman() {
    if (document.getElementById("clark").src.match("clark.jpeg")) {
        document.getElementById("clark").src = "superman.jpg";
    }
    else {
        document.getElementById("clark").src = "clark.jpeg";
    }
}

function batman() {
    if (document.getElementById("bruce").src.match("bruce.jpg")) {
        document.getElementById("bruce").src = "batman.jpeg";
    }
    else {
        document.getElementById("bruce").src = "bruce.jpg";
    }
}