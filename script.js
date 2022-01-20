let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow');

//cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1);
  }
}

//acende a próxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  //vai acender,rodar por um tempo e tirar de novo
  setTimeout(() => {
    element.classList.remove('selected');
  }, 25)
}

//comparar se a ordem que a gente clicou é a mesma ordem que o jogo passou
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score} \nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  } //compara com 2 sinais de igual pq ela não é exatamente do mesmo tipo pois vem de outro array,se fosse do mesmo poderíamos comparar usando 3 sinais de igual
}

//função para o click do usuário 
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250)

}

//criar função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  }
  else if (color == 1) {
    return red;
  }
  else if (color == 2) {
    return yellow;
  }
  else if (color == 3) {
    return blue;
  }
}

//função para o próximo nível do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//função para o game over
let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
  order = [];
  clickedOrder = []

  playGame()
}

let playGame = () => {
  alert('Bem Vindo ao Genius! Iniciando um novo jogo!');
  score = 0

  nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3)

//Início do jogo
playGame();



