let disciplinas = [];
let cursos = [];

let nextId = 0;

let divDisciplinas = document.getElementById("div-disciplinas");
divDisciplinas.style.display = "none";

inclusaoCurso("Computação", document.getElementById("curso"));
inclusaoCurso("Engenharia", document.getElementById("curso"));
inclusaoCurso("Odontologia", document.getElementById("curso"));
inclusaoCurso("Veterinária", document.getElementById("curso"));

inclusaoCurso("Computação", document.getElementById("curso-filtro"));
inclusaoCurso("Engenharia", document.getElementById("curso-filtro"));
inclusaoCurso("Odontologia", document.getElementById("curso-filtro"));
inclusaoCurso("Veterinária", document.getElementById("curso-filtro"));

//slice(posInicial,posFinal) - retorna uma cópia de uma parte de um array, sem alterar o array original
//posInicial = (paginaAtual-1) x disciplinasPorPagina
//posFinal = posInicial+disciplinasPorPagina
// paginaAtual - inicio..fim
// 1 - 0..2   >>>>>> paginaAtual-1=0xdisciplinasPorPagina=0   .. posInicial+disciplinasPorPagina=0+3=3 (0,1,2)  
// 2 - 3..5   >>>>>> paginaAtual-1=1xdisciplinasPorPagina=3   .. posInicial+disciplinasPorPagina=3+3=6 (3,4,5)
// 3 - 6..8   >>>>>> paginaAtual-1=2xdisciplinasPorPagina=6   ..
// 4 - 9..11  >>>>>> paginaAtual-1=3xdisciplinasPorPagina=9   ..
// 5 - 12..14 >>>>>> paginaAtual-1=4xdisciplinasPorPagina=12  .. posInicial+disciplinasPorPagina=12+3=15 (12,13,14)
let paginaAtual = 1;
const disciplinasPorPagina = 3;

function anterior() {
  if (paginaAtual > 1) {
    paginaAtual--;
    atualizarTable();
  }
}

function proximo() {
  let totalPaginas = Math.ceil(disciplinas.length / disciplinasPorPagina);
  if (paginaAtual < totalPaginas) {
    paginaAtual++;
    atualizarTable();
  }
}

function pesquisarDisciplinas() {
  let campo = document.getElementById("pesquisaInput").value;
  campo = campo.trim();
  campo = campo.toLowerCase();

  let disciplinasFilter = disciplinas.filter(disciplina => disciplina.nome.toLowerCase().includes(campo));

  atualizarTable(disciplinasFilter);
}

function filtrarPorCurso() {
  let curso = document.getElementById("curso-filtro").value;

  if (curso == "") {
    atualizarTable();
  } else {

    let disciplinasFilter = disciplinas.filter(disciplina => curso == disciplina.curso)

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
    curso: curso
  };

  disciplinas.push(disciplina);
}

function alteracao(oIndex) {

  let novoNome = prompt("Informe o novo nome da disciplina", disciplinas[oIndex].nome);
  let novoProfessor = prompt("Informe o novo professor da disciplina", disciplinas[oIndex].professor);
  let novoCurso = prompt("Informe o novo curso da disciplina", disciplinas[oIndex].curso);

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
    console.log(`${disciplina.id} | ${disciplina.nome} | ${disciplina.professor} | ${disciplina.curso}`);
  });
}

function paginarDisciplinas(asDisciplinasExibir) {
  let posInicial = (paginaAtual - 1) * disciplinasPorPagina;
  let posFinal = posInicial + disciplinasPorPagina;

  return asDisciplinasExibir.slice(posInicial, posFinal);
}

function atualizarTable(disciplinasFiltradas = null) {

  let disciplinasExibir = (disciplinasFiltradas == null) ? disciplinas : disciplinasFiltradas;

  let disciplinasPaginadas = paginarDisciplinas(disciplinasExibir);

  let tbody = document.querySelector("#tabela-disciplinas tbody");

  divDisciplinas.style.display = "none";

  tbody.innerHTML = "";

  disciplinasPaginadas.forEach((disciplina, index) => {
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
