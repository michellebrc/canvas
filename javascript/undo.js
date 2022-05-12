//Undo Code

let restore_array =[];
let index = -1;

function undo_last() {
    if ( index <=0 ){
        clear_canvas();
    } else{
        index -= 1;
        restore_array.pop();
        context.putImageData(restore_array[index], 0, 0);
    }
}