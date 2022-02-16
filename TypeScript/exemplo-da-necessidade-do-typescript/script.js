let numero1 = document.getElementById("number1");
let numero2 = document.getElementById("number2");
let button = document.getElementById("cal");
let res = document.getElementById("result");
function calcular(n1, n2) {
  return n1 + n2;
}

button.addEventListener("click", () => {
  res.innerHTML = calcular(numero1.value, numero2.value);
});
