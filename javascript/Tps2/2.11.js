let lado1 = Number(prompt("Informe o tamanho do primeiro lado do triângulo:"))
let lado2 = Number(prompt("Informe o tamanho do segundo lado do triângulo:"))
let lado3 = Number(prompt("Informe o tamanho do terceiro lado do triângulo:"))

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 == lado2 && lado1 == lado3) {
    console.log("Triângulo Equilátero")
  } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("Triângulo Isósceles")
  } else {
    console.log("Triângulo Escaleno")
  }
}