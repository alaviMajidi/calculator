let powFlag = false;
let rootFlag = false;

function addToScrn(value) {
    document.getElementById("screen1").innerHTML += value;
    if (powFlag) {
        var numbers = document.getElementById("screen1").innerHTML.split("^");
        document.getElementById("screen2").value = Math.pow(numbers[0], numbers[1]);
    }
    if (rootFlag) {
        var numbers = document.getElementById("screen1").innerHTML.split("√");
        document.getElementById("screen1").innerHTML = numbers[1].sup() + "√" + numbers[0];
        document.getElementById("screen2").value = Math.pow(numbers[0], rvrsNum(numbers[1]));
    }
}

function subToScrn() {
    let val = document.getElementById("screen1").innerHTML;
    document.getElementById("screen1").innerHTML = val.substr(0, val.length - 1);
}

function dsplyRslt() {
    if (powFlag && rootFlag) {
        document.getElementById("screen2").value = eval(document.getElementById("screen1").innerHTML);
    }
}

function reset() {
    document.getElementById("screen1").innerHTML = "";
    document.getElementById("screen2").value = "";
}
function triangle(tri) {
    let val = document.getElementById("screen1").innerHTML;
    document.getElementById("screen1").innerHTML = `${tri}(${val})`;
    document.getElementById("screen2").value = Math[tri](val*Math.PI/180);
}

function power(pow) {
    powFlag = true;
    document.getElementById("screen1").innerHTML += "^";
}

function rvrsNum(x) {
    return 1 / x;
}

function root(root) {
    rootFlag = true;
    document.getElementById("screen1").innerHTML += "√";
}

