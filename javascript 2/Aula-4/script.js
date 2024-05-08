let disciplinas = [];

function inclusao(){
    let nome = document.getElementById("nome").value;
    let professor = document.getElementById("professor").value;
    let curso = document.getElementById("curso").value;

    incluir(nome, professor, curso);
}

function incluir(disciplina, professor, curso){

    let disciplina = {
        id: disciplinas.length +1,
        nome: nome,
        professor: professor,
        curso: curso
    };

    disciplinas.push(disciplina);
}
function obterLista(){
    disciplinas.forEach(disciplina => {
        alert (`${disciplina.id} | ${disciplina.nome} | ${disciplina.professor} | ${disciplina.curso}`);
    });
}

function atualizarTable(){
    let tbody = document.querySelector("#main-table tbody");
}


obterLista();