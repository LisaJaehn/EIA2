var L10_Canvas;
(function (L10_Canvas) {
    class Food extends L10_Canvas.Shoal {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * L10_Canvas.crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 10;
        }
        move() {
            this.x += 0;
            /*this.y += 2;

            if ( this.y < 0 ) {
                this.y = 350;
            }*/
            if (this.y < 600) {
                this.y += 2;
            }
            else if (this.y >= 600) {
                this.y += 0;
            }
        }
        //Funktion Luftblasen aus der Kiste
        draw() {
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.fillStyle = this.color;
            L10_Canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L10_Canvas.crc2.closePath();
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.fill();
        }
    }
    L10_Canvas.Food = Food;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Food.js.map