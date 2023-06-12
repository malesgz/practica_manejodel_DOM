let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operation = document.getElementById("operation");
let btn = document.getElementById("RESOLVER");
let resultado = document.getElementById("RESULTADO");

btn.addEventListener("click", () => {
    let numero1 = parseInt(num1.value);
    let numero2 = parseInt(num2.value);
    if (operation.value === "+") {
        resultado.innerHTML = `RESULTADO: ${numero1 + numero2}`
    }
    if (operation.value === "-") {
        resultado.innerHTML = `RESULTADO: ${numero1 - numero2}`
    }
    if (operation.value === ".") {
        resultado.innerHTML = `RESULTADO: ${numero1 * numero2}`
    }
    if (operation.value === ":") {
        resultado.innerHTML = `RESULTADO: ${numero1 / numero2}`
    }
})