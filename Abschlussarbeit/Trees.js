var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Tree {
        move() {
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "rgb(0,100,0)";
            Abschlussarbeit.crc2.moveTo(this.x, this.y);
            Abschlussarbeit.crc2.lineTo(this.x - 100, this.y);
            Abschlussarbeit.crc2.lineTo(this.x, this.y - 100);
            Abschlussarbeit.crc2.lineTo(this.x - 80, this.y - 100);
            Abschlussarbeit.crc2.lineTo(this.x, this.y - 200);
            Abschlussarbeit.crc2.lineTo(this.x - 60, this.y - 200);
            Abschlussarbeit.crc2.lineTo(this.x + 25, this.y - 300);
            Abschlussarbeit.crc2.lineTo(this.x + 110, this.y - 200);
            Abschlussarbeit.crc2.lineTo(this.x + 50, this.y - 200);
            Abschlussarbeit.crc2.lineTo(this.x + 130, this.y - 100);
            Abschlussarbeit.crc2.lineTo(this.x + 50, this.y - 100);
            Abschlussarbeit.crc2.lineTo(this.x + 150, this.y);
            Abschlussarbeit.crc2.lineTo(this.x + 50, this.y);
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fill();
            this.drawTrunk();
        }
        drawTrunk() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "rgb(139,90,0)";
            Abschlussarbeit.crc2.moveTo(this.x, this.y + 50);
            Abschlussarbeit.crc2.lineTo(this.x, this.y);
            Abschlussarbeit.crc2.lineTo(this.x + 50, this.y);
            Abschlussarbeit.crc2.lineTo(this.x + 50, this.y + 50);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.Tree = Tree;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Trees.js.map