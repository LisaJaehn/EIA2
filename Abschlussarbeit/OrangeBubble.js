var Abschlussarbeit;
(function (Abschlussarbeit) {
    class BubbleOrange {
        move() {
            this.x += 0;
            this.y += 2;
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "rgb(255,144,0)";
            Abschlussarbeit.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.BubbleOrange = BubbleOrange;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=OrangeBubble.js.map