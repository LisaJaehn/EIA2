var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Basket {
        constructor() {
            this.basketWidth = 100;
            this.basketHeight = 70;
        }
        //Korb bewegt sich nach links
        moveLeft() {
            if (this.x > 0) {
                this.x -= 10;
            }
        }
        //Korb bewegt sich nach rechts
        moveRight() {
            if (this.x + this.basketWidth < Abschlussarbeit.crc2.canvas.width) {
                this.x += 10;
            }
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "rgb(139,69,0)";
            Abschlussarbeit.crc2.moveTo(this.x, this.y);
            Abschlussarbeit.crc2.bezierCurveTo(this.x, this.y + this.basketHeight, this.x + this.basketWidth, this.y + this.basketHeight, this.x + this.basketWidth, this.y);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            this.drawHenkel();
        }
        drawHenkel() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.moveTo(this.x + this.basketWidth, this.y);
            Abschlussarbeit.crc2.bezierCurveTo(this.x + 50, this.y - this.basketHeight, this.x + 50, this.y - this.basketHeight, this.x, this.y);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.stroke();
        }
        //Um zu checken, ob Kugen und Korb aud gleicher Höhe sind
        checkIfInside(_x, _y) {
            if (_x > this.x && _x < (this.x + this.basketWidth) && _y > this.y && _y < this.y + this.basketHeight) {
                return true;
            }
            return false;
        }
    }
    Abschlussarbeit.Basket = Basket;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Basket.js.map