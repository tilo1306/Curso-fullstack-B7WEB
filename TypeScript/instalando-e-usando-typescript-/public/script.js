var numero1 = document.getElementById("number1");
var numero2 = document.getElementById("number2");
var button = document.getElementById("cal");
var res = document.getElementById("result");
function calcular(n1, n2) {
    return n1 + n2;
}
button.addEventListener("click", function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
