let nomeAluno = prompt("Digite o nome do aluno: ");
let nomeDisciplina = prompt("Digite qual disciplina:");
let qtdProvas = parseInt(prompt("Digite a quantidade de provas:"));

let notas = [];

for(let i = 0; i<qtdProvas; i++){
    notas.push(parseFloat(prompt("Digite a nota da prova")));

 }
 for(let i; i<notas.length; i++){
     alert(notas[i]);
 }

alert(nomeAluno + "..." + nomeDisciplina + "..." + qtdProvas);