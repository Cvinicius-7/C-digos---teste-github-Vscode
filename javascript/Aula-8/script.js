//entrada
let idade = number(prompt("Digite a idade do funcionário: "));
let msg = "O funcionário é menor de idade(" + idade + ")";

//processamento
if (idade >= 18) {
  msg = "O funcionário é maior de idade(" + idade + ")";
}
//saída
alert(msg);