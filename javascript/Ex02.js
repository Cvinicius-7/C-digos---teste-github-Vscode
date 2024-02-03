nome = prompt('Digite seu nome');
altura = parseFloat(prompt('Qual a sua altura?'));
peso = parseFloat(prompt('Qual é o seu peso?'));
imc = peso/(altura*altura);
imcTot= imc.toFixed(1);
cond = 'normal' 
