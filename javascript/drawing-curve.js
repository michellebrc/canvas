class DrawingCurve extends PaintFunction{

    constructor(contextReal,contextDraft){
        super();
        this.ctx = contextReal;
        this.ctxDraft = contextDraft;
        this.click = 0;
    }

    onMouseDown(coord, e){
        
        this.ctx.strokeStyle = draw_color
        this.ctxDraft.strokeStyle = draw_color

        this.ctx.lineWidth = draw_width;
        this.ctxDraft.lineWidth = draw_width;

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

        else if(this.click === 2){
            this.cpX = coord[0]
            this.cpY = coord[1]
            console.log(`${this.click} control point 1 coordinate ${this.cpX}, ${this.cpY}`)
            //this.click = 0 
            this.click++
            
        }

        // else if(this.click === 3){
        //     console.log("change to context real")
        //     // Clearing the rectangle first

        //     this.ctx.moveTo(this.origX, this.origY)
        //     this.ctx.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
        //     this.ctx.stroke()
        //     this.click = 0
        // }
 
    }

    onMouseMove(coord, e){
        if(this.click == 1){
            this.ctxDraft.beginPath();
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            
            this.ctxDraft.moveTo(this.origX, this.origY);
            this.ctxDraft.lineTo(coord[0], coord[1]);

            this.ctxDraft.stroke();
        } else if (this.click == 2){
            this.ctxDraft.beginPath();
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            this.ctxDraft.moveTo(this.origX, this.origY);
            this.ctxDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);

            this.ctxDraft.stroke();
        }

        else if(this.click == 3){
            console.log("change to context real")
            // Clearing the rectangle first

            this.ctx.moveTo(this.origX, this.origY)
            this.ctx.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
            this.ctx.stroke()
            this.click = 0
        }
        
    }   

    // onMouseUp(coord) {
    //     // Clearing the rectangle first
    //     this.contextDraft.clearRect(
    //         0,
    //         0,
    //         canvasDraft.width,
    //         canvasDraft.height
    //     );

    //     this.ctx.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
    //     this.ctx.stroke()
    // }

    onMouseLeave() {}
    onMouseEnter() {}

}