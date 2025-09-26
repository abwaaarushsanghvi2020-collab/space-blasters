const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 180, y: 550, width: 40, height: 40 };
let bullets = [];
let enemies = [];

function drawPlayer() {
  ctx.fillStyle = 'lime';
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBullets() {
  ctx.fillStyle = 'yellow';
  bullets.forEach(b => {
    ctx.fillRect(b.x, b.y, 5, 10);
    b.y -= 5;
  });
  bullets = bullets.filter(b => b.y > 0);
}

function drawEnemies() {
  ctx.fillStyle = 'red';
  enemies.forEach(e => {
    ctx.fillRect(e.x, e.y, 30, 30);
    e.y += 2;
  });
  enemies = enemies.filter(e => e.y < canvas.height);
}

function spawnEnemy() {
  const x = Math.random() * (canvas.width - 30);
  enemies.push({ x, y: 0 });
}

function detectCollisions() {
  bullets.forEach((b, bi) => {
    enemies.forEach((e, ei) => {
      if (
        b.x < e.x + 30 &&
        b.x + 5 > e.x &&
        b.y < e.y + 30 &&
        b.y + 10 > e.y
      ) {
        bullets.splice(bi, 1);
        enemies.splice(ei, 1);
      }
    });
  });
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawBullets();
  drawEnemies();
  detectCollisions();
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft' && player.x > 0) player.x -= 10;
  if (e.key === 'ArrowRight' && player.x < canvas.width - player.width) player.x += 10;
  if (e.key === ' ') {
    bullets.push({ x: player.x + player.width / 2 - 2.5, y: player.y });
  }
});

setInterval(spawnEnemy, 1000);
gameLoop();const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 180, y: 550, width: 40, height: 40 };
let bullets = [];
let enemies = [];

function drawPlayer() {
  ctx.fillStyle = 'lime';
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBullets() {
  ctx.fillStyle = 'yellow';
  bullets.forEach(b => {
    ctx.fillRect(b.x, b.y, 5, 10);
    b.y -= 5;
  });
  bullets = bullets.filter(b => b.y > 0);
}

function drawEnemies() {
  ctx.fillStyle = 'red';
  enemies.forEach(e => {
    ctx.fillRect(e.x, e.y, 30, 30);
    e.y += 2;
  });
  enemies = enemies.filter(e => e.y < canvas.height);
}

function spawnEnemy() {
  const x = Math.random() * (canvas.width - 30);
  enemies.push({ x, y: 0 });
}

function detectCollisions() {
  bullets.forEach((b, bi) => {
    enemies.forEach((e, ei) => {
      if (
        b.x < e.x + 30 &&
        b.x + 5 > e.x &&
        b.y < e.y + 30 &&
        b.y + 10 > e.y
      ) {
        bullets.splice(bi, 1);
        enemies.splice(ei, 1);
      }
    });
  });
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawBullets();
  drawEnemies();
  detectCollisions();
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft' && player.x > 0) player.x -= 10;
  if (e.key === 'ArrowRight' && player.x < canvas.width - player.width) player.x += 10;
  if (e.key === ' ') {
    bullets.push({ x: player.x + player.width / 2 - 2.5, y: player.y });
  }
});

setInterval(spawnEnemy, 1000);
gameLoop();