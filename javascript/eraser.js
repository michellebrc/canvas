class Eraser extends PaintFunction{
    constructor(contextReal){
        super()
        this.ctx = contextReal
    }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    // Fill in the color
    this.ctx.strokeStyle = "#fff";
    // Kind of line
    this.ctx.lineJoin = "round";
    // Width of line
    this.ctx.lineWidth = 20;
    // Drawing the line here
    this.ctx.beginPath();
    this.ctx.moveTo(coord[0], coord[1]);
  }
  // Clicking and removing your mouse
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    //
    this.ctx.lineTo(x, y);
    // Draw the line onto the page
    this.ctx.stroke();
  }

}