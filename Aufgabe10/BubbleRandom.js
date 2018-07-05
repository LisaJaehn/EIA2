var L10_Canvas;
(function (L10_Canvas) {
    class WaterBubbleRandom extends L10_Canvas.MovingObject {
        constructor() {
            super();
            this.setRandomPosition();
            this.setColor();
        }
        setColor() {
            this.color = "rgb(255,250,240)";
        }
        setRandomPosition() {
            this.x = Math.random() * L10_Canvas.crc2.canvas.width;
            this.y = Math.random() * L10_Canvas.crc2.canvas.height;
            this.radius = Math.random() * 10;
        }
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        //Funktion Luftblasen random im Wasser
        draw() {
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.fillStyle = this.color;
            L10_Canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L10_Canvas.crc2.closePath();
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.fill();
        }
    }
    L10_Canvas.WaterBubbleRandom = WaterBubbleRandom;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=BubbleRandom.js.map