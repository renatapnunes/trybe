function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  /* Exercicio 1

   O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
     - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
     - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
     - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */


  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDays(dezDaysList) {
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let listElement = document.createElement('li');
        listElement.innerHTML = dezDaysList[i];
        if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            listElement.className = 'day holiday';
        } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
            listElement.className = 'day friday';
        } else if (dezDaysList[i] === 25) {
            listElement.className = 'day holiday friday';
        } else {
            listElement.className = 'day';
        }
        document.querySelector('#days').appendChild(listElement);
      }    
  }

  createDays(dezDaysList);

  /* Exercicio 2
  
  Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    - Adicione a este botão a ID "btn-holiday" .
    - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/

  function createButton(string, nameId) {
    let button = document.createElement('button');
    button.innerHTML = string;
    button.id = nameId;
    document.querySelector('.buttons-container').appendChild(button);
  }

  createButton('Feriados', 'btn-holiday');

  /* Exercicio 3
  
  Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
    - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
  */
  
    let buttonHoliday = document.querySelector('#btn-holiday')
    let selectedHolidays = false;
    buttonHoliday.addEventListener('click', function () {
        let arrayHolidays = document.querySelectorAll('.holiday');
        selectedHolidays = !selectedHolidays;

        if (selectedHolidays) {
            for (let i = 0; i < arrayHolidays.length; i += 1) {
                arrayHolidays[i].style.backgroundColor = 'rgb(218, 247, 166)';
            }
        } else {
            for (let i = 0; i < arrayHolidays.length; i += 1) {
                arrayHolidays[i].style.backgroundColor = 'rgb(238,238,238)';
            }
        }
    });

  /* Exercicio 4
  
  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
    - Adicione a este botão o ID "btn-friday" .
    - Adicione este botão como filho/filha da tag <div> com classe "buttons-container". */

    createButton('Sexta-feira', 'btn-friday');

  /* Exercicio 5
  
  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

    let buttonFriday = document.querySelector('#btn-friday')
    let selectedFriday = false;
    buttonFriday.addEventListener('click', function () {
        let arrayFriday = document.querySelectorAll('.friday');
        let fridays = [4, 11, 18, 25];
        selectedFriday = !selectedFriday;

        if (selectedFriday) {
            for (let i = 0; i < arrayFriday.length; i += 1) {
                arrayFriday[i].innerHTML = 'SEXTOU';
            }
        } else {
            for (let i = 0; i < arrayFriday.length; i += 1) {
                arrayFriday[i].innerHTML = fridays[i];
            }
        }
    });

  /* Exercicio 6
  
  Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
    - Dica - Propriedade: event.target. */
    
    let arrayDays = document.querySelectorAll('.day');
    
    for (let i = 0; i < arrayDays.length; i += 1) {
        arrayDays[i].addEventListener('mouseover', function (eventOrigin) {
            eventOrigin.target.style.fontSize = '28px';
        });
        
        arrayDays[i].addEventListener('mouseleave', function (eventOrigin) {
            eventOrigin.target.style.fontSize = '20px';
        });
    }

  /* Exercicio 7

  Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
    - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

    function addTask(task) {
        let spanElement = document.createElement('span');
        spanElement.innerHTML = task;
        document.querySelector('.my-tasks').appendChild(spanElement);
    }

    addTask('estudar');

  /* Exercicio 8

  Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
    - O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
    - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

    function addSubtitle(color) {
        let divElement = document.createElement('div');
        divElement.className = 'task';
        divElement.style.backgroundColor = color;
        document.querySelector('.my-tasks').appendChild(divElement);
    }

    addSubtitle('rgb(127,255,0)');

  /* Exercicio 9

  Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
    - Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */

    let arrayTaskSubtitle = document.querySelectorAll('.task');
    let selectedTask = false;
    
    for (let i = 0; i < arrayTaskSubtitle.length; i += 1) {
        arrayTaskSubtitle[i].addEventListener('click', function (eventOrigin) {
            selectedTask = !selectedTask;

            if (selectedTask) {
                eventOrigin.target.className = 'task selected';
            } else {
                eventOrigin.target.className = 'task';
            }
        });
    }

  /* Exercicio 10

  Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
    - Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .*/
    
    let selectedDay = false;

    for (let i = 0; i < arrayDays.length; i += 1) {
        arrayDays[i].addEventListener('click', function (eventOrigin) {
            let selectedTaskColor = document.querySelector('.selected');
            selectedDay = !selectedDay;

            if (selectedDay) {
                eventOrigin.target.style.backgroundColor = selectedTaskColor.style.backgroundColor;
            } else {
                eventOrigin.target.style.backgroundColor = 'rgb(238,238,238)';
            }
        });
    }

  /* BONUS

  Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
    - Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
    - Ao pressionar a tecla "enter" o evento também deverá ser disparado.
    - Dica -> Propriedade: keyCode */

    id="task-input"
    id="btn-add"

    let buttonAdd = document.querySelector('#btn-add');
    let inputBox = document.querySelector('#task-input');

    buttonAdd.addEventListener('click', add);

    inputBox.addEventListener('keyup', function (eventOrigin) {
        if (eventOrigin.keyCode === 13) { // 13 eh o codigo da tecla Enter
            add();
        }
    });

    function add() {
        let itemList = document.createElement('li');
        let stringInput = document.querySelector('#task-input').value;

        if (stringInput !== '') {
            itemList.innerHTML = stringInput;
            document.querySelector('.task-list').appendChild(itemList);
            inputBox.value = ''; // limpa a caixa de input
        } else {
            alert('Insira um compromisso válido!');
        }
    }
