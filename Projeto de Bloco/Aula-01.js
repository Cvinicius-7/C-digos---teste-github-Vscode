//IMC = PESO/ALTURA*ALTURA / PESO EM KG E ALTURA EM METROS
let peso = 80;
let altura = 1.80;

let imc = peso / altura ** 2;

console.log("O seu IMC é de " + imc.toFixed(2));

//mostrar se a pessoa está dentro do peso ou não 
if(imc>=18.5 && imc<=25){
    //Se a condição for verdadeira
    console.log("Você está no peso ideal!");
}else{
    //Se a condição for falsa
    console.log("Você não está no peso ideal!");
}
