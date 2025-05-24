let gameSeq = [];
let userSeq = [];
let boxes = ["box-one", "box-two", "box-three", "box-four"];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function levelUp() {
    userSeq = []
    level++;
    h3.innerText = `Level ${level}`;
    let randIndex = Math.floor(Math.random() * boxes.length);
    let randBox = boxes[randIndex];
    let randBtn = document.querySelector(`#${randBox}`);
    gameSeq.push(randBox);
    btnFlash(randBtn);
}

function checkAns(index) {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        h3.innerHTML = `Game Over! <b>Your Score is ${level}<br>Press any key to start again.`
        document.body.style.backgroundColor = "red"
        setTimeout(function () {
            document.body.style.backgroundColor = "white"
        }, 200)
        reset();
    }
}
function pressBtn() {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {
    btn.addEventListener("click", pressBtn);
}
function reset() {
    started = false
    userSeq = []
    gameSeq = []
    level = 0
}