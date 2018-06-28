var L10_Canvas;
(function (L10_Canvas) {
    class Shoal extends L10_Canvas.MovingObjects {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * L10_Canvas.crc2.canvas.width;
            this.y = Math.random() * L10_Canvas.crc2.canvas.height;
            this.r = Math.random() * 300;
            this.g = Math.random() * 300;
            this.b = Math.random() * 300;
        }
        move() {
            this.x += 2;
            this.y += 0;
            if (this.x > 640) {
                this.x = -40;
            }
        }
        //Funktion Fische
        draw() {
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            L10_Canvas.crc2.moveTo(this.x, this.y);
            L10_Canvas.crc2.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            L10_Canvas.crc2.moveTo(this.x, this.y + 20);
            L10_Canvas.crc2.lineTo(this.x - 20, this.y + 10);
            L10_Canvas.crc2.lineTo(this.x - 25, this.y + 15);
            L10_Canvas.crc2.lineTo(this.x - 25, this.y);
            L10_Canvas.crc2.lineTo(this.x - 20, this.y + 5);
            L10_Canvas.crc2.lineTo(this.x, this.y);
            L10_Canvas.crc2.closePath();
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.fill();
            L10_Canvas.crc2.closePath();
        }
    }
    L10_Canvas.Shoal = Shoal;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Fishes.js.map