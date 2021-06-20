let pallete = document.getElementById('color-palette');
let arrayRandomColors = generateArrayRandomColors();
let board = document.getElementById('pixel-board');
let inputBoardSize = document.getElementById('board-size');
let generateButton = document.getElementById('generate-board');
let clearButton = document.getElementById('clear-board');
let refreshButton = document.getElementById('refresh');
let eraseButton = document.getElementById('erase');
let stringInput;
let size;
let erase = false;
let arrayPixelLine = [];

// cria e adiciona paleta de cores
for (let i = 0; i < 4; i += 1) {
  let color = document.createElement('div');
  color.className = 'color';
  color.style.backgroundColor = arrayRandomColors[i];
  pallete.appendChild(color);
}
// define cor preta como cor inicial selecioanda
let blackColor = document.querySelector('.color');
blackColor.className = 'color selected';
// tamanho do quadro de pixel inicial
generateBoard(5);
// define tamanho do quadro de pixel com base no input da pessoa usuaria
generateButton.addEventListener('click', function () {
  removeBoard();
  stringInput = inputBoardSize.value;
  if (stringInput !== '') {
    size = parseInt(stringInput);
    if (size < 5) {
      size = 5;
    } else if (size > 50) {
      size = 50;
    }
  } else {
    alert('Board inválido!');
    size = 5;
  }
  inputBoardSize.value = '';
  console.log(size);
  return generateBoard(size);
});
// seleciona cor a partir do clique do mouse
pallete.addEventListener('click', function (e) {
  erase = false;
  let selected = document.querySelector('.selected');
  selected.className = 'color';
  e.target.className = 'color selected';
});
// seleciona borracha
eraseButton.addEventListener('click', function () {
  erase = true;
});
// preenche pixel com a cor selecionada
board.addEventListener('click', function (e) {
  if (erase) {
    e.target.style.backgroundColor = 'rgb(255, 255, 255)';
  } else {
    let selected = document.getElementsByClassName('selected');
    e.target.style.backgroundColor = selected[0].style.backgroundColor;
  }
});
// deixa branco todos os pixels
clearButton.addEventListener('click', function () {
  let arrayPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < arrayPixels.length; i += 1) {
    arrayPixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
});
// gera uma nova paleta de cores aleatorias
refreshButton.addEventListener('click', function () {
  let colors = document.getElementsByClassName('color');
  let newArrayColors = generateArrayRandomColors();
  for (let i = 0; i < 4; i += 1) {
    colors[i].style.backgroundColor = newArrayColors[i];
  }
});
// gera rgb aleatorio
function generateRandomColors() {
  let r = Math.ceil(Math.random() * 254);
  let g = Math.ceil(Math.random() * 254);
  let b = Math.ceil(Math.random() * 254);
  let rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  return rgb;
}
// gera array de 4 cores
function generateArrayRandomColors() {
  let colorsArray = [];
  let rgb;
  colorsArray[0] = 'rgb(0, 0, 0)';
  for (let i = 1; i < 4; i += 1) {
    rgb = generateRandomColors();
    colorsArray[i] = rgb;
  }
  for (let i = 1; i < colorsArray - 1; i += 1) {
    if (colorsArray[i] === colorsArray[i + 1]) {
      rgb = generateRandomColors();
      colorsArray[i + 1] = rgb;
    }
  }
  return colorsArray;
}
// gera quadro de pixels com tamanho variado
function generateBoard(size) {
  board.style.width = 42 * size + 'px';
  for (let i = 0; i < size; i += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    board.appendChild(pixelLine);
  }
  arrayPixelLine = document.getElementsByClassName('pixel-line');
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'rgb(255, 255, 255)';
      arrayPixelLine[i].appendChild(pixel);
    }
  }
}
// apaga a board já existente
function removeBoard() {
  for (let i = 0; i < arrayPixelLine.length; i += 0) {
    board.removeChild(arrayPixelLine[i]);
  }
}
