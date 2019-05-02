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
