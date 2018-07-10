var Abschlussarbeit;
(function (Abschlussarbeit) {
    class BubbleRed extends Abschlussarbeit.MovingObject {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            this.x += 0;
            this.y += 2;
            if (this.y > Abschlussarbeit.crc2.canvas.height) {
                this.y = -40;
            }
        }
        setRandomPosition() {
            this.x = Math.random() * Abschlussarbeit.crc2.canvas.width;
            this.y = Math.random() * Abschlussarbeit.crc2.canvas.height;
            this.radius = 10;
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "rgb(255,0,0)";
            Abschlussarbeit.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.BubbleRed = BubbleRed;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=RedBubble.js.map