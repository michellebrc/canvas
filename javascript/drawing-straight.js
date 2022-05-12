class DrawingStraight extends PaintFunction{

    constructor(contextReal,contextDraft){
        super();
        this.ctx = contextReal;
        this.ctxDraft = contextDraft;
        this.click = 0;
    }

    onMouseDown(coord, e){
        
        this.ctx.strokeStyle = '#f44'
        this.ctxDraft.strokeStyle = '#f44'

        // Kind of line
        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round"

        this.ctx.lineWidth = 5;
        this.ctxDraft.lineWidth = 5;

        if(this.click === 0){
            this.origX = coord[0]
            this.origY = coord[1]
            console.log(`${this.click} start point coordinate ${this.origX}, ${this.origY}`)
            this.click++
            
        }

        else if(this.click === 1){
            this.endX = coord[0]
            this.endY = coord[1]
            console.log(`${this.click} end point coordinate ${this.endX}, ${this.endY}`)
            this.click++
            
        }



 
    }

    onMouseMove(coord, e){
        if(this.click == 1){
            this.ctxDraft.beginPath();
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            
            this.ctxDraft.moveTo(this.origX, this.origY);
            this.ctxDraft.lineTo(coord[0], coord[1]);

            this.ctxDraft.stroke();
        } 

        else if(this.click == 2){
            console.log("change to context real")
            // Clearing the rectangle first

            this.ctx.moveTo(this.origX, this.origY)
            this.ctx.lineTo(coord[0], coord[1]);
            this.ctx.stroke()
            this.click = 0
        }
        
    }   


    onMouseLeave() {}
    onMouseEnter() {}

}