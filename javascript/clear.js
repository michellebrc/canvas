// Clear Code

function clear_canvas() {
    context.fillstyle = start_background_color;
    context.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    context.fillRect(0, 0, canvasDraft.width, canvasDraft.height);

    restore_array =[];
    index = -1;
}