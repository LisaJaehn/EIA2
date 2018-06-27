var L11_Inheritance;
(function (L11_Inheritance) {
    class Triangle extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += 2;
            this.y += 0;
            if (this.x > 640) {
                this.x = -40;
            }
        }
        draw() {
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.moveTo(this.x, this.y - 20);
            L11_Inheritance.crc2.lineTo(this.x + 20, this.y + 10);
            L11_Inheritance.crc2.lineTo(this.x - 20, this.y + 10);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.stroke();
            L11_Inheritance.crc2.fill();
        }
    }
    L11_Inheritance.Triangle = Triangle;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Triangle.js.map