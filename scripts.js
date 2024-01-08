// console.log(x)
// input.oninput = () => {
//     row.style.backgroundColor = input.value;
// };
// console.log(input);

function changeColor() {
    console.log("Hello");
    var x = document.getElementById("color-cl").value;
    var row = document.querySelector(".row");
    row.style.backgroundColor = x;
}



x=6;
console.log(x);
var x;


console.log(x);

(function() {
    console.log("hello");
}) ();

var c=4;
var d=5;

(function(x, y) {
    console.log(x+y);
}) (c, d);

function calc() {
    var x = document.querySelector(".valX").value;
    var y = document.querySelector(".valY").value;

    document.querySelector("#result").textContent = ans(x,y);

    const ans = function(x, y) {
        return x * y;
    }
}

