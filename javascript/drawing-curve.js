class DrawingCurve extends PaintFunction{

    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;

        this.origX = 0;
        this.origY = 0;
        this.endX = 0;
        this.endY = 0;
        this.controlX = 0;
        this.controlY = 0;
        this.mouseCounter = 0;
    }

    onMouseDown(coord, event){
        this.contextReal.strokeStyle = "#f11"
        this.contextReal.lineWidth = 5



        //start point
        if(this.mouseCounter === 0){
            this.contextReal.beginPath();
            this.contextReal.moveTo(coord[0], coord[1]);

            this.mouseCounter = 1
            console.log(`start point: ${coord[0]}, ${coord[1]}`)
        }

        //endpoint
        else if(this.mouseCounter === 1){
            this.endX = coord[0]
            this.endY = coord[1]

            this.mouseCounter = 2
            console.log(`end point: ${coord[0]}, ${coord[1]}`)
        }

        //control point 
        else if(this.mouseCounter === 2){
            this.controlX = coord[0]
            this.controlY = coord[1]
            
            this.contextReal.quadraticCurveTo(this.endX, this.endY, this.controlX, this.controlY);
            this.contextReal.stroke();
            this.mouseCounter = 0
            console.log(`control point: ${coord[0]}, ${coord[1]}`)
        }

    }

}