let salario = 1000; //rico(>=1000), pobre(<500) e classe média(>=500 e <1000)

if (salario >= 1000) {
  alert("Rico");
} else if (salario <= 500) {
  alert("Pobre");
}else {
  alert("Classe média");
}
 //casos de teste:
 //salario = 1000, esperado: Rico
 //salario = 500, esperado: Classe média
 //salario = 0, esperado: Pobre
 //salario = 499, esperado: Pobre
 //salario = 999, esperado: Classe média