var button = document.querySelector("button");
var inputA = document.getElementById("num1");
var inputB = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
;
button.addEventListener("click", function () {
    console.log(add(+inputA.value, +inputB.value));
});
console.log(add(+inputA.value, +inputB.value));
