const gameBoard = document.getElementById("game-board");
const snake = document.getElementById("snake");
const food = document.getElementById("food");

let x = 0;
let y = 0;
let foodX;
let foodY;

const init = () => {
  x = 0;
  y = 0;
  snake.style.left = x + "px";
  snake.style.top = y + "px";
  foodX = Math.floor(Math.random() * gameBoard.offsetWidth / 10) * 10;
  foodY = Math.floor(Math.random() * gameBoard.offsetHeight / 10) * 10;
  food.style.left = foodX + "px";
  food.style.top = foodY + "px";
};

const move = () => {
  x += 10;
  snake.style.left = x + "px";
  if (x === foodX && y === foodY) {
    init();
  }
};

init();
setInterval(move, 1000);
