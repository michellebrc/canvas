let fontBoxCounter = false;  


class Text extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.origX = null;
        this.origY = null;
    }

    onMouseDown(coord, styleGuide, event){  
        
        if (fontBoxCounter == false) {
            //original text coordinate
            this.origX = coord[0];
            this.origY = coord[1];
            console.log(`text location coordinate ${this.origX}, ${this.origY}`)

            // Text setting
            this.textSize = 20
            this.font = "Arial"
            this.contextReal.font = `${this.textSize}px ${this.font}`;
            this.contextReal.fillStyle = "#000";

            // Text input setting
            var input = document.createElement('input');
            input.type = 'text';
            input.style.position = 'fixed';
            input.style.border = "2px red solid";
            input.style.placeholder = 'Type please!';
            input.style.height = 40;
            input.style.width = 350;
            input.style.font = styleGuide.font;
            input.placeholder = "To add text, click here, type, and push 'Enter'";
            input.style.left = (this.origX - 5) + 'px'; //the position of input when click mouse//
            input.style.top = (this.origY - 5) + 'px';
            input.id= 'textBox' 
            document.body.appendChild(input);
            fontBoxCounter = true;

            // Press enter, move text to context real
            input.onkeydown = function handleEnter(input) {
                if (input.key == 'Enter') {
                    this.typedText= document.getElementById("textBox").value;
                    contextReal.fillText(this.typedText,coord[0],coord[1]);
                    document.body.removeChild(this);
                    fontBoxCounter = false;
                    console.log(`Text Input: ${this.typedText}`)
                    
                }
            };   
        } 
    }

    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(coord){
        if(coord[0] < this.origX + 300 && coord[0] > this.origX - 300 && coord[1] < this.origY + 40 && coord[1] > this.origY - 40) {
        } else {
            $('#textBox').remove();
            fontBoxCounter = false;
        }
    }
    onMouseEnter(){}
}
