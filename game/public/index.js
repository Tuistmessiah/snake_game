let PORT_BACKEND = 3010;

const scoresApi = 'http://localhost:' + PORT_BACKEND;
const gameLib = new SnakeGameLib('game-container');

let snake = [{ x: 200, y: 200 }];
let food = { x: 100, y: 100 };
let direction = { x: 20, y: 0 };
let score = 0;
let isGameOver = false;
let intervalId;

startGame();

// TODO: Create and a button to start the game
// const startButton = document.createElement('button');
// ...

// Start the game and begin the game loop
function startGame() {
    resetGame();
    isGameOver = false;

    if (intervalId) {
        clearInterval(intervalId);
    }
 
    intervalId = setInterval(gameLoop, 100);  // Start a new game loop
}

// TODO: Reset game
function resetGame() {
   
}

// TODO: Add an event listener to change the direction the snake is travelling
// ...

// TODO: Main Loop where we can controll what happens to the snake
function gameLoop() {
    if (snake[0].x > 300) {
        direction.x = -20;
    } 
    
    if (snake[0].x < 100) {
        direction.x = 20;
    }

    snake[0].x += direction.x;
    gameLib.drawSnake(snake);
    console.log(snake)
}

// TODO: Call this to add new user score in the backend
async function postScore() {
  
}
