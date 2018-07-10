var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Basket {
        move() {
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "rgb(139,69,0)";
            Abschlussarbeit.crc2.moveTo(this.x, this.y);
            Abschlussarbeit.crc2.bezierCurveTo(this.x, this.y + 70, this.x + 100, this.y + 70, this.x + 100, this.y);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            this.drawHenkel();
        }
        drawHenkel() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.moveTo(this.x, this.y);
            Abschlussarbeit.crc2.bezierCurveTo(this.x, this.y - 70, this.x - 100, this.y - 70, this.x - 100, this.y);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.stroke();
        }
    }
    Abschlussarbeit.Basket = Basket;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Basket.js.map