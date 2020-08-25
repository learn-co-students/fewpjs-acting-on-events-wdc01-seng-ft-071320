// Your code here

let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)

    if (left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}

function moveDodgerUp() {
    let upNumbers = dodger.style.up.replace("px", "")
    let up = parseInt(upNumbers, 10)

    if (up < 380) {
        dodger.style.up = `${up + 1}px`
    }
}

function moveDodgerDown() {
    let downNumbers = dodger.style.up.replace("px", "")
    let down = parseInt(udownNumbers, 10)

    if (down > 0) {
        dodger.style.up = `${up + 1}px`
    }
}


document.addEventListener("keyword", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
    if (e.key === "ArrowUp") {
        moveDodgerUp()
    }
    if (e.key === "ArrowDown") {
        moveDodgerDown()
    }
})