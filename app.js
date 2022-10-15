const canvas = document.querySelector("canvas");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const lineWidthValue = document.getElementById("line-width");
const colorValue = document.getElementById("color");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidthValue.value;
let isPainting = false;
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(event) {}

function onMouseDown() {
  isPainting = true;
}

function onMouseUp() {
  isPainting = false;
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
}

function changeColorOption(event) {
  const colorPic = event.target.dataset.color;
  ctx.strokeStyle = colorPic;
  colorValue.value = colorPic;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);

lineWidthValue.addEventListener("change", onLineWidthChange);
colorValue.addEventListener("change", onColorChange);

colorOptions.forEach((color) =>
  color.addEventListener("click", changeColorOption)
);
