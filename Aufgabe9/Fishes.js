var L09_Canvas;
(function (L09_Canvas) {
    class Shoal {
        move() {
            // this.x += Math.random() * 4 - 2;
            // this.y += Math.random() * 4 - 2;
            this.x += 2;
            this.y += 0;
        }
        //Funktion Fische
        draw() {
            L09_Canvas.ctx.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            L09_Canvas.ctx.moveTo(this.x, this.y);
            L09_Canvas.ctx.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            L09_Canvas.crc2.moveTo(this.x, this.y + 20);
            L09_Canvas.crc2.lineTo(this.x - 20, this.y + 10);
            L09_Canvas.crc2.lineTo(this.x - 25, this.y + 15);
            L09_Canvas.crc2.lineTo(this.x - 25, this.y);
            L09_Canvas.crc2.lineTo(this.x - 20, this.y + 5);
            L09_Canvas.crc2.lineTo(this.x, this.y);
            L09_Canvas.crc2.closePath();
            L09_Canvas.ctx.stroke();
            L09_Canvas.ctx.fill();
            L09_Canvas.crc2.closePath();
        }
    }
    L09_Canvas.Shoal = Shoal;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Fishes.js.map