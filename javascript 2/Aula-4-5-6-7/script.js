let disciplinas = [];
let cursos = [];

let nextId = 0;

let divDisciplinas = document.getElementById("div-disciplinas");
divDisciplinas.style.display = "none";

inclusaoCurso("Computação", document.getElementById("curso"));
inclusaoCurso("Engenharia", document.getElementById("curso"));
inclusaoCurso("Eng. Comp", document.getElementById("curso"));
inclusaoCurso("Programação Web", document.getElementById("curso"));

inclusaoCurso("Computação", document.getElementById("curso-filtro"));
inclusaoCurso("Engenharia", document.getElementById("curso-filtro"));
inclusaoCurso("Eng. Comp", document.getElementById("curso-filtro"));
inclusaoCurso("Programação Web", document.getElementById("curso-filtro"));

function filtrarPorCurso() {
  let curso = document.getElementById("curso-filtro").value;

  if (curso == "") {
    atualizarTable();
  } else {
    let disciplinasFilter = disciplinas.filter(
      (disciplina) => curso == disciplina.curso
    );

    atualizarTable(disciplinasFilter);
  }
}

function inclusaoCurso(oCurso, oSelect) {
  cursos.push(oCurso);

  let option = document.createElement("option");
  option.text = oCurso;
  option.value = oCurso;
  oSelect.add(option);
}

function inclusao() {
  let nome = document.getElementById("nome").value;
  let professor = document.getElementById("professor").value;
  let curso =
    document.getElementById("curso").options[
      document.getElementById("curso").selectedIndex
    ].value;

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

function alteracao(oIndex) {
  let novoNome = prompt(
    "Informe o novo nome da disciplina",
    disciplinas[oIndex].nome
  );
  let novoProfessor = prompt(
    "Informe o novo professor da disciplina",
    disciplinas[oIndex].professor
  );
  let novoCurso = prompt(
    "Informe o novo curso da disciplina",
    disciplinas[oIndex].curso
  );

  disciplinas[oIndex].nome = novoNome;
  disciplinas[oIndex].professor = novoProfessor;
  disciplinas[oIndex].curso = novoCurso;

  atualizarTable();
}

function exclusao(oIndex) {
  excluir(oIndex);

  atualizarTable();
}

function excluir(oIndex) {
  disciplinas.splice(oIndex, 1);
}

function obterLista() {
  disciplinas.forEach((disciplina) => {
    console.log(
      `${disciplina.id} | ${disciplina.nome} | ${disciplina.professor} | ${disciplina.curso}`
    );
  });
}

function atualizarTable(disciplinasFiltradas = null) {
  let disciplinasExibir;

  if (disciplinasFiltradas == null) {
    disciplinasExibir = disciplinas;
  } else {
    disciplinasExibir = disciplinasFiltradas;
  }

  let tbody = document.querySelector("#tabela-disciplinas tbody");

  divDisciplinas.style.display = "none";

  tbody.innerHTML = "";

  disciplinasExibir.forEach((disciplina, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${disciplina.id}</td>
      <td>${disciplina.nome}</td>
      <td>${disciplina.professor}</td>
      <td>${disciplina.curso}</td>
      <td><button type="button" class="btn btn-link" onclick="alteracao(${index})">Alterar</button></td>
      <td><button type="button" class="btn btn-link" onclick="exclusao(${index})">Excluir</button></td>
    `;
    tbody.appendChild(tr);
  });

  if (disciplinas.length > 0) {
    divDisciplinas.style.display = "block";
  }
}
