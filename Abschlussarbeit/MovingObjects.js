var Abschlussarbeit;
(function (Abschlussarbeit) {
    class MovingObject {
        constructor() {
            this.radius = 10;
        }
        setRandomPosition() {
            this.x = Math.random() * Abschlussarbeit.crc2.canvas.width;
            this.y = 0;
        }
        move() {
            this.x += 0;
            this.y += 2;
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = this.color;
            Abschlussarbeit.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.MovingObject = MovingObject;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=MovingObjects.js.map