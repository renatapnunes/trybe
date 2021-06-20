let listaTarefas = document.getElementById('lista-tarefas');
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let caixaEntrada = document.getElementById('texto-tarefa');
let botaoApagarLista = document.getElementById('apaga-tudo');
let botaoApagarCompletadas = document.getElementById('remover-finalizados');
let botaoSalvar = document.getElementById('salvar-tarefas');
let botaoApagarSelecionada = document.getElementById('remover-selecionado');
let botaoMoverCima = document.getElementById('mover-cima');
let botaoMoverBaixo = document.getElementById('mover-baixo');

// adiciona tarefa ao clicar no botão Adicionar
botaoCriarTarefa.addEventListener('click', adicionarTarefa);

// adiciona tarefa com Enter
caixaEntrada.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    adicionarTarefa();
  }
});

// seleciona tarefa
listaTarefas.addEventListener('click', function (e) {
  let tarefas = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = 'rgba(255, 255, 255, 1)';
  }
  if (
    e.target.className === 'tarefa' ||
    e.target.className === 'tarefa completed'
  ) {
    e.target.style.backgroundColor = 'rgba(188, 186, 214, 0.4)';
  }
});

// marca tarefa como completa
listaTarefas.addEventListener('dblclick', function (e) {
  if (e.target.className === 'tarefa completed') {
    e.target.className = 'tarefa';
  } else {
    e.target.className = 'tarefa completed';
  }
});

// apaga lista
botaoApagarLista.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    listaTarefas.removeChild(tarefas[i]);
  }
});

// apaga tarefas completas
botaoApagarCompletadas.addEventListener('click', function () {
  let tarefasCompletadas = document.querySelectorAll('.completed');
  for (let i = 0; i < tarefasCompletadas.length; i += 1) {
    listaTarefas.removeChild(tarefasCompletadas[i]);
  }
});

// salva tarefas
botaoSalvar.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  let arrayInfoTarefas = [];
  for (let i = 0; i < tarefas.length; i += 1) {
    let objInfoTarefas = {
      valor: '',
      classe: '',
    };
    objInfoTarefas.valor = tarefas[i].innerText;
    objInfoTarefas.classe = tarefas[i].className;
    arrayInfoTarefas[i] = objInfoTarefas;
  }
  localStorage.setItem('infoLista', JSON.stringify(arrayInfoTarefas));
});

// recupera tarefas salvas
window.onload = function () {
  if (localStorage.length !== 0) {
    let stringInfoSalva = localStorage.getItem('infoLista');
    let arrayInfoSalva = JSON.parse(stringInfoSalva);
    for (let i = 0; i < arrayInfoSalva.length; i += 1) {
      let elementoItemLista = document.createElement('li');
      elementoItemLista.innerHTML = arrayInfoSalva[i].valor;
      elementoItemLista.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      elementoItemLista.className = arrayInfoSalva[i].classe;
      listaTarefas.appendChild(elementoItemLista);
    }
  }
};

// apaga tarefa selecionada
botaoApagarSelecionada.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    let corBg = tarefas[i].style.backgroundColor;
    if (corBg === 'rgba(188, 186, 214, 0.4)') {
      listaTarefas.removeChild(tarefas[i]);
    }
  }
});

// move tarefa para cima
botaoMoverCima.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    let corBg = tarefas[i].style.backgroundColor;
    if (corBg === 'rgba(188, 186, 214, 0.4)') {
      if (i !== 0) {
        let tarefaSelecionada = tarefas[i];
        let tarefaSubstituta = tarefaSelecionada.previousElementSibling;
        moverTarefa(tarefaSelecionada, tarefaSubstituta);
      } else {
        alert('Esta tarefa já ocupa a primeira posição da lista');
      }
    }
  }
});

// move tarefa para baixo
botaoMoverBaixo.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let i = tarefas.length - 1; i >= 0; i -= 1) {
    let corBg = tarefas[i].style.backgroundColor;
    console.log(corBg);
    if (corBg === 'rgba(188, 186, 214, 0.4)') {
      if (i !== tarefas.length - 1) {
        let tarefaSelecionada = tarefas[i];
        let tarefaSubstituta = tarefaSelecionada.nextElementSibling;
        moverTarefa(tarefaSelecionada, tarefaSubstituta);
      } else {
        alert('Esta tarefa já ocupa a última posição da lista');
      }
    }
  }
});
// funcao que adiciona tarefa na lista
function adicionarTarefa() {
  let entrada = document.getElementById('texto-tarefa');
  if (entrada.value !== '') {
    let elementoItemLista = document.createElement('li');
    elementoItemLista.innerHTML = entrada.value;
    elementoItemLista.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    elementoItemLista.className = 'tarefa';
    listaTarefas.appendChild(elementoItemLista);
    entrada.value = '';
  } else {
    alert('Insira uma tarefa válida antes de adiciná-la à lista');
  }
}
// funcao que move tarefa
function moverTarefa(tarefaSelecionada, tarefaSubstituta) {
  let objInfo = {};
  objInfo = {
    valorSelecionada: tarefaSelecionada.innerText,
    classeSelecionada: tarefaSelecionada.className,
    valorSubstituta: tarefaSubstituta.innerText,
    classeSubstituta: tarefaSubstituta.className,
  };
  tarefaSelecionada.innerText = objInfo.valorSubstituta;
  tarefaSelecionada.className = objInfo.classeSubstituta;
  tarefaSelecionada.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  tarefaSubstituta.innerText = objInfo.valorSelecionada;
  tarefaSubstituta.className = objInfo.classeSelecionada;
  tarefaSubstituta.style.backgroundColor = 'rgba(188, 186, 214, 0.4)';
}
