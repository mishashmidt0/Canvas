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

function draw(e) {
    if (!isDrawing) return  // остановить рисование когда мышь отжата

    console.log(e)

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
};

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);