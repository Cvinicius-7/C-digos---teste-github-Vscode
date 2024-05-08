let disciplinas = [];

function incluir(disciplina, professor){

    let disciplina = {
        id: disciplinas.length +1,
        nome: nome,
        professor: professor
    };

    disciplinas.push(disciplina);
}
function obterLista(){
    disciplinas.forEach(disciplina => {
        alert (`${disciplina.id} | ${disciplina.nome} | ${disciplina.professor}`);
    });
}
incluir(teste)

obterLista();