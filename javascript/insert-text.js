class InsertText extends PaintFunction{
    constructor(contextReal, contextDraft){
        super()
        this.ctx = contextReal
        this.ctxDraft = contextDraft
        this.switch = false
    }

    onMouseDown(coord, event){
        if(this.switch == false){
            this.x = coord[0]
            this.y = coord[1]
    
            var input = document.createElement('input')
            input.type = 'text'
            input.placeholder = "add text here"
            input.id = 'textBox'
            
        }


    }
}