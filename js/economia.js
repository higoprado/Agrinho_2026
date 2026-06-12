function calcularEconomia(){

let consumo =
parseFloat(
document.getElementById("aguaAtual").value
);

if(isNaN(consumo)) return;

let economia = consumo * 0.30;

document.getElementById("economiaResultado")
.innerHTML =

`🌱 Economia estimada:
<b>${economia.toFixed(0)} litros por mês</b>`;
}