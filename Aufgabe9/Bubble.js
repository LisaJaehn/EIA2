var L09_Canvas;
(function (L09_Canvas) {
    class Blasen {
        move() {
            this.x += 0;
            this.y -= 2;
        }
        //Funktion Luftblasen aus der Kiste
        drawBubble() {
            L09_Canvas.ctx.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(152,245,255)";
            L09_Canvas.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L09_Canvas.crc2.closePath();
            L09_Canvas.ctx.stroke();
            L09_Canvas.crc2.fill();
        }
    }
    L09_Canvas.Blasen = Blasen;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Bubble.js.map