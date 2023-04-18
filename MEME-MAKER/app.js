const lineWidth = document.getElementById('line-width')
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;
const onMove = (event) => {
  if(isPainting){
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
    return
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

const startPainting = (event) => {
  isPainting = true;
}

const cancelPainting = event => {
  isPainting = false;
}

const onLineWidthChange = event => {
  ctx.lineWidth = event.target.value;
}

lineWidth.addEventListener('change', onLineWidthChange)
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);


/* 마우스 드래그시 캔버스 그리기 */
// const colors = [
//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
//   "#18dcff",
//   "#7d5fff",
// ]

// ctx.lineWidth = 2;
// let mouseX =0;
// let mouseY =0;

// const mouseMove = (event) => {
//   ctx.beginPath();
//   ctx.moveTo(mouseX, mouseY);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// const mouseClick = (event) => {
//   ctx.beginPath();
//   mouseX= event.offsetX
//   mouseY= event.offsetY
// }

// canvas.addEventListener('mousemove', mouseMove);
// canvas.addEventListener('click', mouseClick);

/* person */
// ctx.fillRect(170, 180, 15, 100);
// ctx.fillRect(310, 180, 15, 100);
// ctx.fillRect(220, 180, 60, 200);

// ctx.arc(250, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(270, 80, 8, Math.PI, 2 * Math.PI);
// ctx.arc(230, 80, 8, Math.PI, 2 * Math.PI);
// ctx.fill();

/* house */
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

/* theory */
// ctx.rect(50,50,100,100);
// ctx.rect(150,150,100,100);
// ctx.rect(250,250,100,100);
// ctx.fill();

// ctx.beginPath();
// ctx.rect(350,350,100,100);
// ctx.fillStyle = 'red';
// ctx.fill();

// ctx.moveTo(50,50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();