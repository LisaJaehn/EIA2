var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Hintergrund {
        paint() {
            this.drawSun(750, 100, 70);
            this.drawBackground(100);
        }
        //Funktion Hintergrund
        drawBackground(_forestHeight) {
            Abschlussarbeit.crc2.fillStyle = "rgb(100,149, 237)";
            Abschlussarbeit.crc2.fillRect(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
            Abschlussarbeit.crc2.fillStyle = "rgb(0,205,0)";
            Abschlussarbeit.crc2.fillRect(0, Abschlussarbeit.crc2.canvas.height - _forestHeight, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        }
        //Sonne
        drawSun(_x, _y, _radius) {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "rgb(255,255,0)";
            Abschlussarbeit.crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.Hintergrund = Hintergrund;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Background.js.map