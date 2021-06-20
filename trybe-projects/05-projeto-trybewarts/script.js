function verificaLogin() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const botaoLogar = document.getElementById('logar');
  botaoLogar.addEventListener('click', () => {
    if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}

function submeteFormulario() {
  const concorda = document.getElementById('agreement');
  const botaoEnviar = document.getElementById('submit-btn');
  concorda.addEventListener('click', () => {
    if (concorda.checked === true) {
      botaoEnviar.disabled = false;
    } else {
      botaoEnviar.disabled = true;
    }
  });
}

function contaCaracteres() {
  const contador = document.getElementById('counter');
  const textArea = document.getElementById('textarea');
  textArea.addEventListener('keyup', () => {
    contador.innerText = `${500 - textArea.value.length} caracteres restantes.`;
  });
}

function criaParagrafo(text) {
  const containerInfos = document.getElementById('container-informacoes');
  const paragrafo = document.createElement('p');
  paragrafo.innerText = text;
  containerInfos.appendChild(paragrafo);
}

function mostraNome() {
  const inputName = document.getElementById('input-name');
  const inputLastname = document.getElementById('input-lastname');
  criaParagrafo(`Nome: ${inputName.value} ${inputLastname.value}`);
}

function mostraEmail() {
  const inputEmail = document.getElementById('input-email');
  criaParagrafo(`Email: ${inputEmail.value}`);
}

function mostraCasa() {
  const inputCasa = document.getElementById('house');
  criaParagrafo(`Casa: ${inputCasa.value}`);
}

function mostraFamilia() {
  const inputFamilia = document.getElementsByClassName('familia');
  for (let i = 0; i < inputFamilia.length; i += 1) {
    if (inputFamilia[i].checked) {
      criaParagrafo(`Família: ${inputFamilia[i].value}`);
    }
  }
}

function preencheMaterias() {
  const inputMaterias = document.getElementsByClassName('subject');
  const materias = [];
  for (let i = 0; i < inputMaterias.length; i += 1) {
    if (inputMaterias[i].checked) {
      materias.push(inputMaterias[i].value);
    }
  }
  return materias.join(', ');
}

function mostraMaterias() {
  criaParagrafo(`Matérias: ${preencheMaterias()}`);
}

function mostraAvaliacao() {
  const inputAvaliacao = document.getElementsByClassName('rate');
  for (let i = 0; i < inputAvaliacao.length; i += 1) {
    if (inputAvaliacao[i].checked) {
      criaParagrafo(`Avaliação: ${inputAvaliacao[i].value}`);
    }
  }
}

function mostraObservacoes() {
  const inputTextarea = document.getElementById('textarea');
  criaParagrafo(`Observações: ${inputTextarea.value}`);
}

function exibeDados() {
  const botaoEnviar = document.getElementById('submit-btn');
  const containerFormulario = document.getElementById('container-forms');
  const containerInfos = document.getElementById('container-informacoes');
  botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    containerFormulario.style.display = 'none';
    containerInfos.style.display = 'flex';
    mostraNome();
    mostraEmail();
    mostraCasa();
    mostraFamilia();
    mostraMaterias();
    mostraAvaliacao();
    mostraObservacoes();
  });
}

window.onload = function load() {
  verificaLogin();
  submeteFormulario();
  contaCaracteres();
  exibeDados();
};
