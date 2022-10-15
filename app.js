const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 몸
ctx.fillRect(200, 100, 15, 150);
ctx.fillRect(250, 100, 60, 150);
ctx.fillRect(340, 100, 15, 150);
// 헤드
ctx.arc(280, 60, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260, 50, 10, Math.PI, 2 * Math.PI);
ctx.arc(300, 50, 10, Math.PI, 2 * Math.PI);
ctx.arc(280, 50, 5, 0, 2 * Math.PI);
ctx.fill();
