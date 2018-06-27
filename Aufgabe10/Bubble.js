var L10_Canvas;
(function (L10_Canvas) {
    class Blasen {
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 350;
            }
        }
        //Funktion Luftblasen aus der Kiste
        drawBubble() {
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.fillStyle = "rgb(152,245,255)";
            L10_Canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L10_Canvas.crc2.closePath();
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.fill();
        }
    }
    L10_Canvas.Blasen = Blasen;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Bubble.js.map