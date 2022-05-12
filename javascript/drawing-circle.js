class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
    this.contextReal.fillStyle = draw_color;
      this.origX = coord[0];
      this.origY = coord[1];
    }

    onDragging(coord, event) {
      this.contextReal.fillStyle = draw_color;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.arc(
        this.origX,
        this.origY,
        Math.abs(this.origX - coord[0] + this.origY - coord[1]),
        0,
        Math.PI * 2
      );
      this.contextDraft.stroke();
      this.contextDraft.fill();
    }

    onMouseUp(coord, event) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.arc(
        this.origX,
        this.origY,
        Math.abs(this.origX - coord[0] + this.origY - coord[1]),
        0,
        Math.PI * 2
      );
      this.contextReal.stroke();
      this.contextReal.fill();
      saveToSavePoint();
    }
  }