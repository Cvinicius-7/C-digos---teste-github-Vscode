let disciplinas = [];

let nextId = 0;

function inclusao() {
  let nome = document.getElementById("nome").value;
  let professor = document.getElementById("professor").value;
  let curso = document.getElementById("curso").value;

  incluir(nome, professor, curso);

  atualizarTable();
}

function incluir(nome, professor, curso) {
  nextId++;

  let disciplina = {
    id: nextId,
    nome: nome,
    professor: professor,
    curso: curso,
  };

  disciplinas.push(disciplina);
}

function excluir(oIndex) {
  disciplinas.splice(oIndex, 1);
  atualizarTable();
}

function obterLista() {
  disciplinas.forEach((disciplina) => {
    alert(
      `${disciplina.id} | ${disciplina.nome} | ${disciplina.professor} | ${disciplina.curso}`
    );
  });
}

function atualizarTable() {
  let tbody = document.querySelector("#main-table tbody");
  let divDisciplinas = document.getElementById("div-disciplinas");

  divDisciplinas.style.display = "none";

  tbody.innerHTML = "";
  disciplinas.forEach((disciplina, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${disciplina.id}</td>
        <td>${disciplina.nome}</td>
        <td>${disciplina.professor}</td>
        <td>${disciplina.curso}</td>
        <td><button type="button" class="btn btn-link" onclick="alterar(${index})">Alterar</button></td>
<td><button type="button" class="btn btn-link" onclick="excluir(${index})">Excluir</button></td>
        `;
    tbody.appendChild(tr);
  });
  if (disciplinas.length > 0) {
    divDisciplinas.style.display = "block";
  }
}

obterLista();
