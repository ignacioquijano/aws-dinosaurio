let gameArea = document.getElementById('gameArea');
let dino = document.getElementById('dino');
let scoreElement = document.getElementById('score');
let gameOverElement = document.getElementById('gameOver');
let finalScoreElement = document.getElementById('finalScore');

let isJumping = false;
let gameRunning = false;
let score = 0;
let gameSpeed = 1000;
let obstacleInterval;
let scoreInterval;

function startGame() {
    gameRunning = true;
    score = 0;
    gameSpeed = 1000;
    scoreElement.textContent = score;
    gameOverElement.style.display = 'none';
    
    // Crear primer obstáculo después de 400ms, luego continuar con el intervalo normal
    setTimeout(() => {
        createObstacle();
        obstacleInterval = setInterval(createObstacle, gameSpeed);
    }, 400);
    
    // Incrementar puntuación
    scoreInterval = setInterval(() => {
        score += 10;
        scoreElement.textContent = score;
        
        // Aumentar velocidad gradualmente
        if (score % 100 === 0 && gameSpeed > 600) {
            gameSpeed -= 50;
            clearInterval(obstacleInterval);
            obstacleInterval = setInterval(createObstacle, gameSpeed);
        }
    }, 100);
}

function createObstacle() {
    if (!gameRunning) return;
    
    let obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    
    // Tipos de obstáculos aleatorios
    let obstacleTypes = ['cactus', 'rock', 'bird'];
    let randomType = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
    obstacle.classList.add(randomType);
    
    gameArea.appendChild(obstacle);
    
    // Remover obstáculo después de la animación
    setTimeout(() => {
        if (obstacle.parentNode) {
            obstacle.parentNode.removeChild(obstacle);
        }
    }, 2000);
    
    // Verificar colisión
    let collisionCheck = setInterval(() => {
        let dinoRect = dino.getBoundingClientRect();
        let obstacleRect = obstacle.getBoundingClientRect();
        
        if (dinoRect.right > obstacleRect.left &&
            dinoRect.left < obstacleRect.right &&
            dinoRect.bottom > obstacleRect.top &&
            dinoRect.top < obstacleRect.bottom) {
            gameOver();
            clearInterval(collisionCheck);
        }
        
        if (obstacleRect.right < 0) {
            clearInterval(collisionCheck);
        }
    }, 10);
}

function jump() {
    if (isJumping || !gameRunning) return;
    
    isJumping = true;
    dino.classList.add('jump');
    
    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 500);
}

function gameOver() {
    gameRunning = false;
    clearInterval(obstacleInterval);
    clearInterval(scoreInterval);
    
    finalScoreElement.textContent = score;
    gameOverElement.style.display = 'block';
    
    // Remover todos los obstáculos
    let obstacles = document.querySelectorAll('.obstacle');
    obstacles.forEach(obstacle => obstacle.remove());
}

function restartGame() {
    // Remover todos los obstáculos existentes
    let obstacles = document.querySelectorAll('.obstacle');
    obstacles.forEach(obstacle => obstacle.remove());
    
    startGame();
}

// Event listeners
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        if (!gameRunning) {
            startGame();
        } else {
            jump();
        }
    }
});

document.addEventListener('click', () => {
    if (!gameRunning) {
        startGame();
    } else {
        jump();
    }
});

// Inicializar mensaje
document.addEventListener('DOMContentLoaded', () => {
    scoreElement.textContent = '0';
});