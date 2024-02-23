let salario = 1000; //rico(>=1000), pobre(<500) e classe média(>=500 e <1000)
let idade = 45;
let status = "meu status"; 
let situacao = "minha situacao";

if (salario >= 1000) {
    status ="Rico";
} else if (salario <= 500) {
    status = "Pobre";
}else {
    status = "Classe média";
}


if (idade >= 60) {
    situacao = "Idoso";
}else {
    situacao = 'jovem';
}

alert(status + " " + situacao);

//casos de teste:
//salario = 1000 , esperado: Rico
//salario = 500, esperado: Classe média
//salario = 0, esperado: Pobre
//idade = 60,salario = 500 esperado: Idoso Classe média
//idade = 59, salario = 1000, esperado: Rico jovem
