// Clear Code

function clear() {
    contextReal.fillStyle = canvasSettings.colorBackground
    contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height)
    restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
}