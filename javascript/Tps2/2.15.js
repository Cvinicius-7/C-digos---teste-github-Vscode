var ano = prompt("Digite um ano:");

if (Number.isInteger(parseInt(ano)) && parseInt(ano) > 0 && ano.toString().length === 4) {
  ano = parseInt(ano);

  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    alert("O ano é bissexto");
  } else {
    alert("O ano não é bissexto");
  }
} else {
  alert("Por favor, insira um ano válido com 4 dígitos e positivo.");
}
