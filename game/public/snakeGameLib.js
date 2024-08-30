class SnakeGameLib {
    constructor(containerId) {
        // Initialize the game library with a canvas container
        this.container = document.getElementById(containerId);
        this.ctx = this.#createCanvas(this.container);
    }

    /**
     * Create and set up the canvas for drawing the game
     * @param {HTMLElement} container - The container element where the canvas will be added
     * @returns {CanvasRenderingContext2D} - The 2D drawing context of the canvas
     */
    #createCanvas(container) {
        const canvas = document.createElement('canvas');
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        container.appendChild(canvas);
        return canvas.getContext('2d');
    }

    /**
     * Clear the canvas screen
     * @private
     */
    #clearScreen() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    /**
     * Draw the snake on the canvas
     * @param {Array<{x: number, y: number}>} snakeArray - An array of segments representing the snake's position
     */
    drawSnake(snakeArray) {
        this.#clearScreen(); // Clear the previous drawing
        snakeArray.forEach(segment => {
            this.ctx.fillStyle = 'green'; // Set color for the snake
            this.ctx.fillRect(segment.x, segment.y, 20, 20); // Draw each segment of the snake
        });
    }

    /**
     * Draw the food on the canvas
     * @param {{x: number, y: number}} foodPosition - The position {x, y} where the food should be drawn
     */
    drawFood(foodPosition) {
        this.ctx.fillStyle = 'red'; // Set color for the food
        this.ctx.fillRect(foodPosition.x, foodPosition.y, 20, 20); // Draw the food piece
    }

    /**
     * Update the score display on the webpage
     * @param {number} score - The current score to be displayed
     */
    updateScore(score) {
        document.getElementById('score').innerText = `Score: ${score}`; // Update the score element
    }

    /**
     * Display a game over alert
     */
    endGame() {
        alert('Game Over'); // Alert the player that the game has ended
    }
}
