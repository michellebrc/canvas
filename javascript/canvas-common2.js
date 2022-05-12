let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let context = canvasDraft.getContext("2d");
let start_background_color = "white";
//context.fillStyle = start_background_color;
//context.fillRect(0, 0, canvasDraft.width, canvasDraft.height);

let draw_color = "black";
let draw_width = "2";
let is_drawing = false;


function change_color(element) {
    draw_color = element.style.background;
}



canvasDraft.addEventListener("touchstart", start, false);
canvasDraft.addEventListener("touchmove", draw, false);
canvasDraft.addEventListener("mousedown", start, false);
canvasDraft.addEventListener("mousemove", draw, false);

canvasDraft.addEventListener("touchend", stop, false);
canvasDraft.addEventListener("mouseup", stop, false);
canvasDraft.addEventListener("mouseout", stop, false);

function start(event) {
    is_drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvasDraft.offsetLeft,
                    event.clientY - canvasDraft.offsetTop);
    context.preventDefault();
}

function draw(event) {
    if ( is_drawing ){
        context.lineTo(event.clientX - canvasDraft.offsetLeft,
                        event.clientY - canvasDraft.offsetTop);
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
    event.preventDefault();
}

function stop(event){
    if ( is_drawing ){
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    event.preventDefault();

    if ( event.type != 'mouseout'){
    restore_array.push(context.getImageData(0, 0, canvasDraft.width, canvasDraft.height));
    index += 1;
    }
}