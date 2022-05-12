// Save Img Code

const btnDownload =document.querySelector("#btnDownload");
btnDownload.addEventListener("click", function(){
    if (window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(canvasDraft.msToBlob(), "canvas-image.png");
    } else{
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = canvasDraft.toDataURL();
        a.download ="canvas-image.png";
        a.click();
        document.body.removeChild(a);
    }
})