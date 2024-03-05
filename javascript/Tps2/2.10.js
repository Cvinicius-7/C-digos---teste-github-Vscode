lado1 = Number(prompt("Digite o lado 1: "));
lado2 = Number(prompt("Digite o lado 2: "));
lado3 = Number(prompt("Digite o lado 3: "));

if(lado1 + lado2 > lado3 && lado1+ lado3 > lado2 && lado2 + lado3 > lado1){
  alert("Os valores informados podem formar um triângulo.")
}else{
  alert("Os valores informados não podem formar um triângulo.")
}