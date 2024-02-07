nomeFunc = prompt("Qual é o nome do funconário?");
anoContrato = prompt("Qual o ano de contratação dele?");
anoAtual = new Date().getFullYear();
anoEmpre= anoAtual - anoContrato;
salBruto = parseFloat(prompt("Qual é o salário Bruto dele?"));
gratifica = parseFloat(prompt("Qual são as bonificações dele?"));
descontos = parseFloat(prompt("Qual são os descontos dele?"));

salLiq = (salBruto + gratifica - descontos)*1.20 + anoEmpre *150;
mensagem = "O funcionario " + nomeFunc + " recebe um salário líquido de R$"+salLiq;

console.log(mensagem);
alert(mensagem)