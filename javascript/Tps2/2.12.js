function impressao() {
  alert(
    "Valor R$" +
      valorFinal.toFixed(2) +
      "; forma de pagamento " +
      formaPgto +
      "; parcelas " +
      parcelas +
      "x"
  );
}

valTotal = Number(prompt("Digite o total da compra:"));
formaPgto = prompt(
  "Digite a forma de pagamento \nDinheiro\nDébito\nCrédito\nAté 3x\nAcima de 3x"
).toLowerCase();
let valorFinal = 0;
let parcelas = 1;

if (formaPgto == "dinheiro") {
  valorFinal = valTotal * 0.9;
  impressao();
} else if (formaPgto == "débito") {
  valorFinal = valTotal * 0.92;
  impressao();
} else if (formaPgto == "crédito") {
  valorFinal = valTotal * 0.95;
  impressao();
} else if (formaPgto == "até 3x") {
  parcelas = Number(prompt("Digite a quantidade de parcelas:"));
  if (parcelas <= 1 || parcelas > 3) {
    alert("Quantidade de parcelas inválida!");
  } else valorFinal = valTotal / parcelas;
  impressao();
} else if (formaPgto == "acima de 3x") {
  parcelas = Number(prompt("Digite a quantidade de parcelas:"));
  if (parcelas <= 3) {
    alert("Quantidade de parcelas inválida!");
  } else valorFinal = (valTotal * 1.04) / parcelas;
  impressao();
}
