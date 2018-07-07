var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Hintergrund
        drawBackground(100);
        //Baum
        drawTree1(150, 550);
        //Korb
        drawBasket(450, 630);
        //Sonne
        drawSun(600, 100, 70);
        //Rote Kugeln
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawBubbleRed(x, y, 10);
        }
        //Orangene Kugeln
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawBubbleOrange(x, y, 10);
        }
        //Pinke Kugeln
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawBubblePink(x, y, 10);
        }
    }
    //Funktion Hintergrund
    function drawBackground(_forestHeight) {
        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.fillStyle = "rgb(0,205,0)";
        crc2.fillRect(0, crc2.canvas.height - _forestHeight, crc2.canvas.width, crc2.canvas.height);
    }
    //Rote Kugeln
    function drawBubbleRed(_x, _y, _radius) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,0,0)";
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //Orange Kugeln
    function drawBubbleOrange(_x, _y, _radius) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,144,0)";
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //Pinke Kugeln
    function drawBubblePink(_x, _y, _radius) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,0,255)";
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //Korb
    function drawBasket(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(139,69,0)";
        //crc2.moveTo( 400, 630 );
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x, _y + 70, _x + 100, _y + 70, _x + 100, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        drawHenckel(550, 630);
    }
    //Korbhenkel
    function drawHenckel(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x, _y - 70, _x - 100, _y - 70, _x - 100, _y);
        crc2.closePath();
        crc2.stroke();
    }
    //Tannenbaum
    function drawTree1(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(0,100,0)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 100, _y);
        crc2.lineTo(_x, _y - 100);
        crc2.lineTo(_x - 80, _y - 100);
        crc2.lineTo(_x, _y - 200);
        crc2.lineTo(_x - 60, _y - 200);
        crc2.lineTo(_x + 25, _y - 300);
        crc2.lineTo(_x + 110, _y - 200);
        crc2.lineTo(_x + 50, _y - 200);
        crc2.lineTo(_x + 130, _y - 100);
        crc2.lineTo(_x + 50, _y - 100);
        crc2.lineTo(_x + 150, _y);
        crc2.lineTo(_x + 50, _y);
        crc2.stroke();
        crc2.fill();
        //Baumstamm
        drawTrunk1(150, 600);
    }
    //Tannenbaumstamm
    function drawTrunk1(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(139,90,0)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x + 50, _y - 50);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //Sonne
    function drawSun(_x, _y, _radius) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,255,0)";
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Hauptprogramm.js.map