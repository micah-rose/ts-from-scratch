var button = document.querySelector("button") as HTMLButtonElement;
var inputA = document.getElementById("num1")! as HTMLInputElement;
var inputB = document.getElementById("num2")! as HTMLInputElement;

const add = (num1: number, num2: number) => {
    return num1 + num2;
};

button.addEventListener("click", function() {
    console.log(add(+inputA.value, +inputB.value));
});

console.log(add(+inputA.value, +inputB.value));