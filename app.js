const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#ffc3c3",
  "#c56cf0",
  "#fff200",
  "#32ff72",
  "#7d5fff",
];

function onClick(event) {
  moveToX = event.offsetX;
  moveToY = event.offsetY;
}

function onMouseMove(event) {
  ctx.beginPath();
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.moveTo(moveToX, moveToY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onMouseMove);
