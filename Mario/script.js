var playerImg = document.getElementById("bhavyaImg");
var obstacle = document.getElementById("obstacle");
var startBtn = document.getElementById("startBtn");
var scoreText = document.getElementById("scoreText");
var finalScore = document.getElementById("finalScore");
var gameOverModal = document.getElementById("gameOverModal");

var isGameRunning = false;
var score = 0;
var scoreInterval = null;
var collisionCheckId = null;

function startGame(event) {
  if (event) event.stopPropagation();
  if (isGameRunning) return;

  isGameRunning = true;
  startBtn.style.display = "none";
  gameOverModal.style.display = "none";
  
  score = 0;
  scoreText.innerText = score;

  // Start Obstacle Animation
  obstacle.classList.add("moveObstacle");

  // Score Loop
  scoreInterval = setInterval(function() {
    if (isGameRunning) {
      score++;
      scoreText.innerText = score;
    }
  }, 100);

  // Collision Detection Loop
  checkCollision();
}

function jump() {
  if (!isGameRunning) return;
  if (!playerImg.classList.contains("jumpUp")) {
    playerImg.classList.add("jumpUp");
    setTimeout(function() {
      playerImg.classList.remove("jumpUp");
    }, 800);
  }
}

function checkCollision() {
  if (!isGameRunning) return;

  var playerRect = playerImg.getBoundingClientRect();
  var obstacleRect = obstacle.getBoundingClientRect();

  // Bounding Box Collision Check
  if (
    playerRect.left < obstacleRect.right &&
    playerRect.right > obstacleRect.left &&
    playerRect.top < obstacleRect.bottom &&
    playerRect.bottom > obstacleRect.top
  ) {
    handleGameOver();
    return;
  }

  collisionCheckId = requestAnimationFrame(checkCollision);
}

function handleGameOver() {
  isGameRunning = false;
  clearInterval(scoreInterval);
  cancelAnimationFrame(collisionCheckId);

  // Freeze Obstacle
  obstacle.classList.remove("moveObstacle");

  finalScore.innerText = score;
  gameOverModal.style.display = "block";
}

function restartGame(event) {
  if (event) event.stopPropagation();
  playerImg.classList.remove("jumpUp");
  startGame();
}

window.addEventListener("click", function(event) {
  if (event.target.tagName === 'BUTTON') return;
  jump();
});

window.addEventListener("keydown", function(event) {
  if (event.code === "Space" || event.code === "ArrowUp") {
    event.preventDefault();
    jump();
  } else if (event.code === "Enter" && !isGameRunning) {
    startGame();
  }
});