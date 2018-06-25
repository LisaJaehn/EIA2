var L09_Canvas;
(function (L09_Canvas) {
    class BlasenRandom {
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        //Funktion Luftblasen random im Wasser
        drawBubblesRandom() {
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(255,250,240)";
            L09_Canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.stroke();
            L09_Canvas.crc2.fill();
        }
    }
    L09_Canvas.BlasenRandom = BlasenRandom;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=BubbleRandom.js.map