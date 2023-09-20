/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

COMIC.init({
  ff: 4, // fuzz factor for line drawing: bigger -> fuzzier
  ffc: 2, // fuzz factor for curve drawing: bigger -> fuzzier
  fsteps: 10, // number of pixels per step: smaller -> fuzzier
  msteps: 2, // min number of steps: bigger -> fuzzier
});

COMIC.ctx(ctx);

ctx.lineWidth = 2;
ctx.globalCompositeOperation = "destination-over";

function speechBallon(x0, y0, x1, y1, x2, y2, x3, y3) {
  ctx.cBezier2(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2, x1, y1);
  ctx.cBezier2(x1, y1, (x1 + x2) / 2, (y1 + y2) / 2, x2, y2);
  ctx.cBezier2(x2, y2, (x2 + x3) / 2, (y2 + y3) / 2, x3, y3);
}

function flipHorizontally(img, x, y) {
  ctx.translate(x + img.width, y);
  ctx.scale(-1, 1);
  ctx.drawImage(img, 0, 0, img.width, img.height);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function drawEloa() {
  ctx.drawImage(this, 40, 300, this.width, this.height);

  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let d = imgData.data;

  for (let i = 0; i < d.length; i += 4) {
    let med = (d[i] + d[i + 1] + d[i + 2]) / 3;
    d[i] = d[i + 1] = d[i + 2] = med;
  }

  ctx.putImageData(imgData, 0, 0);
}

function drawAnotherEloa() {
  ctx.drawImage(this, 300, 320, this.width - 20, this.height - 20);
}

function drawAnotherAnotherEloa() {
  ctx.drawImage(this, 10, 10, this.width, this.height);
}

function drawWalkingSnoopy() {
  ctx.drawImage(this, 10, 10, this.width, this.height);
}

function drawCake() {
  ctx.drawImage(this, 420, 334, this.width, this.height);

  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let d = imgData.data;

  for (let i = 0; i < d.length; i += 4) {
    let med = (d[i] + d[i + 1] + d[i + 2]) / 3;
    d[i] = d[i + 1] = d[i + 2] = med;
  }

  ctx.putImageData(imgData, 0, 0);
}

function drawSnoopy() {
  flipHorizontally(this, 145, 320);

  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let d = imgData.data;

  for (let i = 0; i < d.length; i += 4) {
    let med = (d[i] + d[i + 1] + d[i + 2]) / 3;
    d[i] = d[i + 1] = d[i + 2] = med;
  }

  ctx.putImageData(imgData, 0, 0);
}

function drawOutScene() {
  ctx.font = "24px snoopy";
  ctx.fillText("Parabéns Eloá", 50, 40);
}

function thinkBubble(x, y, radiusX, radiusY, rotation, startAngle, endAngle) {
  ctx.cEllipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
  ctx.fill();
  ctx.fillStyle = "black";
}

function drawSceneOne() {
  ctx.font = "14px Groundnut";

  ctx.fillText(" essas missões ", 150, 90);
  ctx.fillText(" secretas são ", 150, 105);
  ctx.fillText(" assustadoras.. ", 150, 120);

  thinkBubble(140, 160, 8, 8, 0, 0, Math.PI * 2);
  thinkBubble(155, 140, 15, 15, 0, 0, Math.PI * 2);
  thinkBubble(210, 100, 70, 45, 0, 0, Math.PI * 2);
  
  ctx.cRect(50, 50, 250, 200);
  ctx.rect(50, 50, 250, 200);
  ctx.fill();
}

function drawSceneTwo() {
  ctx.cRect(310, 50, 250, 200);
  ctx.rect(310, 148, 250, 102);
  ctx.fill();

  ctx.strokeStyle = "WHITE";
  ctx.lineWidth = 5;
  ctx.globalCompositeOperation = "source-over";

  thinkBubble(450, 185, 8, 8, 0, 0, Math.PI * 2);
  thinkBubble(460, 160, 15, 15, 0, 0, Math.PI * 2);
  speechBallon(312, 145, 450, 149, 466, 150, 559, 144);

  thinkBubble(390, 185, 10, 10, 0, 0, Math.PI * 2);
  thinkBubble(420, 185, 10, 10, 0, 0, Math.PI * 2);

  ctx.strokeStyle = "BLACK";
  ctx.lineWidth = 2;
  ctx.globalCompositeOperation = "destination-over";

  ctx.fillStyle = "black";
  ctx.globalCompositeOperation = "source-over";

  ctx.beginPath();
  ctx.ellipse(390, 185, 5, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(420, 185, 5, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalCompositeOperation = "destination-over";
  
  ctx.font = "15px Groundnut";

  ctx.fillText("  Onde estamos? Não consigo ", 315, 75);
  ctx.fillText("ver nada... Consigo ouvir alguém", 314, 95);
  ctx.fillText("  respirando... Onde estamos?", 315, 115);
  ctx.fillText("  O que está acontecendo?", 315, 135);
}

function drawSceneThree(eloa, snoopy) {
  ctx.cRect(50, 260, 250, 200);

  ctx.cBezier2(52, 300, 168, 311, 250, 303);
  ctx.cBezier2(250, 303, 270, 345, 271, 302);
  ctx.cBezier2(271, 302, 284, 303, 298, 300);

  ctx.font = "24px Groundnut";
  ctx.fillText("FELIZ ANIVERSARIO!!!", 60, 290);

  eloa.onload = drawEloa;
  snoopy.onload = drawSnoopy;
}

function drawSceneFour(anotherEloa, cake) {
  ctx.cRect(310, 260, 250, 200);

  thinkBubble(390, 355, 7, 7, 0, 0, Math.PI * 2);
  thinkBubble(400, 340, 12, 12, 0, 0, Math.PI * 2);

  ctx.cEllipse(430, 300, 110, 35, 0, 0, 10);

  ctx.font = "14px Groundnut";
  ctx.fillText("       BEM, SEREI UM", 340, 292);
  ctx.fillText("BEAGLE DE OLHOS CASTANHOS!", 334, 307);

  anotherEloa.onload = drawAnotherEloa;
  cake.onload = drawCake;
}

function drawScenes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  eloa.src = "eloa.png";
  anotherEloa.src = "eloa.png";

  snoopy.src = "snoopy.png";
  cake.src = "cake.png";

  drawOutScene();
  drawSceneOne(anotherAnotherEloa, walkingSnoopy);
  drawSceneTwo();
  drawSceneThree(eloa, snoopy);
  drawSceneFour(anotherEloa, cake);
}

function fadein(func, size, ...args) {
  alpha += delta;
  if (alpha >= 1) return;

  ctx.clearRect(...size);
  ctx.globalAlpha = alpha;
  func(...args);

  requestAnimationFrame(() => {
    fadein(func, size, ...args);
  });
}

let alpha = 0,
  delta = 0.005;

const eloa = new Image(140, 140);
const anotherEloa = new Image(140, 140);
const anotherAnotherEloa = new Image(140, 140);

const snoopy = new Image(153, 111);
const walkingSnoopy = new Image(153, 111);

const cake = new Image(50, 100);

fadein(drawSceneOne, [50, 50, 250, 200]);
fadein(drawSceneTwo, [310, 50, 250, 200]);
fadein(drawSceneThree, [50, 260, 250, 200], eloa, snoopy);
fadein(drawSceneFour, [310, 260, 250, 200], anotherEloa, cake);

setInterval(drawScenes, 300);
