nome = prompt('Digite seu nome');
altura = parseFloat(prompt('Qual a sua altura?'));
peso = parseFloat(prompt('Qual é o seu peso?'));
imc = peso/(altura*altura);
imcTot= imc.toFixed(1);
cond = 'normal' 
if(imcTot>40.0){
    cond = 'Obesidade Grau 3'
}
if(imcTot>35.0 && imcTot<39.9){
    cond = 'Obesidade Grau 2'
}
if(imcTot>30.0 && imcTot<34.9){
    cond = 'Obesidade Grau 1'
}
if(imcTot>25.0 && imcTot<29.9){
    cond = 'Sobrepeso'
}
if(imcTot>18.6 && imcTot<24.9){
    cond = 'Normal'
}
if(imcTot<18.5){
    cond = 'Abaixo do Normal'
}
