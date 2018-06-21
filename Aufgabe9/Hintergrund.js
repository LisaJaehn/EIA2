var L09_Canvas;
(function (L09_Canvas) {
    class Hintergrund {
        paint() {
            this.drawBackground(260);
            this.drawStone(260, 380);
            this.drawTreasureChest(60, 370, 100, 60);
            this.drawDeckel(87, 290);
            this.drawShip(100, 450);
            this.drawStar(310, 420);
            this.drawPlant1(110, 640);
            this.drawPlant1(290, 640);
            this.drawPlant1(50, 640);
        }
        //Methoden
        //Funktion Schatztruhe
        drawTreasureChest(_x, _y, _width, _height) {
            L09_Canvas.crc2.fillStyle = "rgb(139,69,000)";
            L09_Canvas.crc2.fillRect(_x, _y, _width, _height);
        }
        //Funktion Deckel Schatztruhe
        drawDeckel(_x, _y) {
            L09_Canvas.ctx.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(139,69,000)";
            L09_Canvas.ctx.moveTo(_x, _y);
            L09_Canvas.ctx.bezierCurveTo(_x + 90, _y - 50, _x + 90, _y + 70, _x + 70, _y + 80);
            L09_Canvas.crc2.closePath();
            //ctx.stroke();
            L09_Canvas.crc2.fill();
        }
        //Funktion Hintergrund
        drawBackground(_sandHeight) {
            L09_Canvas.crc2.fillStyle = "rgb(100,149, 237)";
            L09_Canvas.crc2.fillRect(0, 0, L09_Canvas.crc2.canvas.width, L09_Canvas.crc2.canvas.height);
            L09_Canvas.crc2.fillStyle = "rgb(189,183,107)";
            L09_Canvas.crc2.fillRect(0, L09_Canvas.crc2.canvas.height - _sandHeight, L09_Canvas.crc2.canvas.width, L09_Canvas.crc2.canvas.height);
        }
        //Funktion Schiffskörper
        drawShip(_x, _y) {
            L09_Canvas.ctx.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(139,69,19 )";
            L09_Canvas.ctx.moveTo(_x, _y);
            L09_Canvas.ctx.bezierCurveTo(_x, _y + 100, _x + 140, _y + 100, _x + 150, _y);
            L09_Canvas.ctx.stroke();
            L09_Canvas.crc2.moveTo(_x, _y);
            L09_Canvas.crc2.lineTo(_x + 140, _y);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.stroke();
            L09_Canvas.crc2.fill();
            //Funktion Schiffsmasten wird aufgerufen
            this.drawShipsflag(_x + 70, _y);
        }
        //Funktion Schiffsmasten
        drawShipsflag(_x, _y) {
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.moveTo(_x, _y);
            L09_Canvas.crc2.lineTo(_x, _y - 120);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.stroke();
            //Funktion Flagge wird aufgerufen
            this.drawFlag(_x, _y - 120);
        }
        //Funktion Schiffsflagge
        drawFlag(_x, _y) {
            L09_Canvas.ctx.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(238,0,0)";
            L09_Canvas.ctx.moveTo(_x, _y);
            L09_Canvas.ctx.lineTo(_x + 90, _y - 40);
            L09_Canvas.ctx.lineTo(_x, _y - 80);
            L09_Canvas.crc2.closePath();
            L09_Canvas.ctx.stroke();
            L09_Canvas.ctx.fill();
        }
        //Funktion Pflanze 1
        drawPlant1(_x, _y) {
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(34,139,34)";
            L09_Canvas.crc2.moveTo(_x, _y);
            L09_Canvas.crc2.lineTo(_x + 10, _y - 100);
            L09_Canvas.crc2.lineTo(_x + 20, _y + 60);
            L09_Canvas.crc2.lineTo(_x + 20, _y - 40);
            L09_Canvas.crc2.lineTo(_x + 10, _y + 30);
            L09_Canvas.crc2.lineTo(_x + 10, _y - 35);
            L09_Canvas.crc2.lineTo(_x + 10, _y + 85);
            L09_Canvas.crc2.closePath();
            L09_Canvas.ctx.stroke();
            L09_Canvas.crc2.fill();
        }
        //Funktion Pflanze 2
        drawPlant2(_x, _y) {
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(34,139,34)";
            L09_Canvas.crc2.moveTo(_x, _y);
            L09_Canvas.crc2.lineTo(_x + 10, _y - 100);
            L09_Canvas.crc2.lineTo(_x + 20, _y + 60);
            L09_Canvas.crc2.lineTo(_x + 20, _y - 40);
            L09_Canvas.crc2.lineTo(_x + 10, _y + 30);
            L09_Canvas.crc2.lineTo(_x + 10, _y - 35);
            L09_Canvas.crc2.lineTo(_x + 10, _y + 85);
            L09_Canvas.crc2.closePath();
            L09_Canvas.ctx.stroke();
            L09_Canvas.crc2.fill();
        }
        //Funktion Pflanze 3
        drawPlant3(_x, _y) {
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(34,139,34)";
            L09_Canvas.crc2.moveTo(_x, _y);
            L09_Canvas.crc2.lineTo(_x + 10, _y - 100);
            L09_Canvas.crc2.lineTo(_x + 20, _y + 60);
            L09_Canvas.crc2.lineTo(_x + 20, _y - 40);
            L09_Canvas.crc2.lineTo(_x + 10, _y + 30);
            L09_Canvas.crc2.lineTo(_x + 10, _y - 35);
            L09_Canvas.crc2.lineTo(_x + 10, _y + 85);
            L09_Canvas.crc2.closePath();
            L09_Canvas.ctx.stroke();
            L09_Canvas.crc2.fill();
        }
        //Seestern
        drawStar(_x, _y) {
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(255, 165, 0)";
            L09_Canvas.crc2.moveTo(_x + 10, _y);
            L09_Canvas.crc2.lineTo(_x + 20, _y + 30);
            L09_Canvas.crc2.lineTo(_x - 40, _y);
            L09_Canvas.crc2.lineTo(_x + 20, _y - 30);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.moveTo(_x + 20, _y + 10);
            L09_Canvas.crc2.lineTo(_x - 20, _y + 30);
            L09_Canvas.crc2.lineTo(_x - 20, _y - 30);
            L09_Canvas.crc2.lineTo(_x + 40, _y);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.stroke();
            L09_Canvas.crc2.fill();
        }
        drawStone(_x, _y) {
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(190,190,190)";
            L09_Canvas.crc2.moveTo(_x, _y);
            L09_Canvas.crc2.lineTo(_x, _y - 40);
            L09_Canvas.crc2.lineTo(_x + 30, _y - 50);
            L09_Canvas.crc2.lineTo(_x + 50, _y - 70);
            L09_Canvas.crc2.lineTo(_x + 70, _y - 80);
            L09_Canvas.crc2.lineTo(_x + 100, _y - 90);
            L09_Canvas.crc2.lineTo(_x + 100, _y + 0);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.stroke();
            L09_Canvas.crc2.fill();
        }
    }
    L09_Canvas.Hintergrund = Hintergrund;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Hintergrund.js.map