function add(a, b) { return (a+b).toString(); }

function sub(a, b) { return (a-b).toString(); }

function mul(a, b) { return (a*b).toString(); }

function div(a, b) {
    if (b != 0) {
        return (a/b).toString();
    } else {
        return "ERROR";
    }
}

function operate(a, op, b) {
    if (op == "plus") {
        return (add(a, b));
    } else if (op == "substract") {
        return (sub(a, b));
    } else if (op == "times") {
        return (mul(a, b));
    } else if (op == "divide") {
        return (div(a, b));
    }
}

let firstNum = 0;
let comma = 0;

const container = document.querySelector(".calculator");
const buttons = container.querySelectorAll("div");
buttons.forEach(button => button.addEventListener("click", function(e) {
    let display = "";
    // NUMBERS
    if (Array.from(e.target.classList).includes("zero")) {
        firstNum = firstNum * 10 + 0;
    } else if (Array.from(e.target.classList).includes("one")) {
        firstNum = firstNum * 10 + 1;
    } else if (Array.from(e.target.classList).includes("two")) {
        firstNum = firstNum * 10 + 2;
    } else if (Array.from(e.target.classList).includes("three")) {
        firstNum = firstNum * 10 + 3;
    } else if (Array.from(e.target.classList).includes("four")) {
        firstNum = firstNum * 10 + 4;
    } else if (Array.from(e.target.classList).includes("five")) {
        firstNum = firstNum * 10 + 5;
    } else if (Array.from(e.target.classList).includes("six")) {
        firstNum = firstNum * 10 + 6;
    } else if (Array.from(e.target.classList).includes("seven")) {
        firstNum = firstNum * 10 + 7;
    } else if (Array.from(e.target.classList).includes("eight")) {
        firstNum = firstNum * 10 + 8;
    } else if (Array.from(e.target.classList).includes("nine")) {
        firstNum = firstNum * 10 + 9;
    } // POINT
    else if (Array.from(e.target.classList).includes("point")) {
        comma += 1;
    } // OPERAND
    else if (Array.from(e.target.classList).includes("plus")) {
        display = 
    } else if (Array.from(e.target.classList).includes("plus")) {

    } else if (Array.from(e.target.classList).includes("plus")) {

    } else if (Array.from(e.target.classList).includes("plus")) {

    }
    if (comma == 2) {
        display = "ERROR 2 COMMAS";
        comma = 0;
        firstNum = 0;
    }
    console.log(firstNum);
    console.log(display);
}));
