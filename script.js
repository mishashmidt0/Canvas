const canvas = document.querySelector("#draw");

// метод  getContext возвращает обьект рисование  2d (линии)
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";

ctx.lineJoin = "round";
ctx.lineCap = "round";

//ширина линии
ctx.lineWidth = 100;
// служит для остановки рисование
let isDrawing = false;
// координаты перемещение мыши 
let lastX = 0;
let lastY = 0;
// Используеться для изменение цвета
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return  // остановить рисование когда мышь отжата
    //цвет линии
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    // создает контур
    ctx.beginPath();

    //начало рисование
    //перемещает начальную точку нового фрагмента контура в координаты
    ctx.moveTo(lastX, lastY);
    //конец 
    //добавляет новую точку контура и создает линию к этой точке от последней заданной точки
    ctx.lineTo(e.offsetX, e.offsetY);
    // обводит контур цветом
    ctx.stroke();

    // сохраняем координаты последнего перемещиения
    [lastX, lastY] = [e.offsetX, e.offsetY]
    // lastX = e.offsetX;
    // lastY = e.offsetY;

    //изменение цвета
    hue += 0.1;
    if (hue >= 360) hue = 0;

    if (ctx.lineWidth >= 150 || ctx.lineWidth <= 1) direction = !direction;
    (direction) ? ctx.lineWidth += 0.1 : ctx.lineWidth -= 0.1;
};

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);