var L10_Canvas;
(function (L10_Canvas) {
    class BlasenRandom {
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        //Funktion Luftblasen random im Wasser
        drawBubblesRandom() {
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.fillStyle = "rgb(255,250,240)";
            L10_Canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L10_Canvas.crc2.closePath();
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.fill();
        }
    }
    L10_Canvas.BlasenRandom = BlasenRandom;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=BubbleRandom.js.map