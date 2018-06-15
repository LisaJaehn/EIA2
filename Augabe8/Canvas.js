var L08_Canvas;
(function (L08_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    let ctx;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);
        //Hintergrund
        drawBackground(260);
        //Felsen
        drawStone(260, 380);
        //Schatztruhe
        drawTreasureChest(60, 370, 100, 60);
        //Luftblasen random im Wasser
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawBubble(x, y, 5);
        }
        //Luftblasen aus Kiste
        for (let i = 0; i < 10; i++) {
            let x = (110);
            let y = Math.random() * 370;
            drawBubble(x, y, 10);
        }
        //Schiffswrak
        drawShip(100, 450);
        //Seestern
        drawStar(310, 420);
        //Fische pink
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawFish1(x, y);
        }
        //Fische lila
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawFish2(x, y);
        }
        //Pflanze 1
        drawPlant1(110, 640);
        //Pflanze 2
        drawPlant1(290, 640);
        //Pflanze 3
        drawPlant1(50, 640);
    }
    //Funktion Luftblasen aus der Kiste
    function drawBubble(_x, _y, _radius) {
        ctx.beginPath();
        crc2.fillStyle = "rgb(152,245,255)";
        ctx.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }
    //Funktion Luftblasen random im Wasser
    function drawBubbles(_x, _y, _radius) {
        ctx.beginPath();
        crc2.fillStyle = "rgb(202,225,255)";
        ctx.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }
    //Funktion Schatztruhe
    function drawTreasureChest(_x, _y, _width, _height) {
        crc2.fillStyle = "rgb(139,69,000)";
        crc2.fillRect(_x, _y, _width, _height);
    }
    //Funktion Hintergrund
    function drawBackground(_sandHeight) {
        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.fillStyle = "rgb(189,183,107)";
        crc2.fillRect(0, crc2.canvas.height - _sandHeight, crc2.canvas.width, crc2.canvas.height);
    }
    //Funktion Schiffskörper
    function drawShip(_x, _y) {
        ctx.beginPath();
        crc2.fillStyle = "rgb(139,69,19 )";
        ctx.moveTo(_x, _y);
        ctx.bezierCurveTo(_x, _y + 100, _x + 140, _y + 100, _x + 150, _y);
        ctx.stroke();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 140, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Funktion Schiffsmasten wird aufgerufen
        drawShipsflag(_x + 70, _y);
    }
    //Funktion Schiffsmasten
    function drawShipsflag(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 150);
        crc2.closePath();
        crc2.stroke();
        //Funktion Flagge wird aufgerufen
        drawFlag(_x, _y - 150);
    }
    //Funktion Schiffsflagge
    function drawFlag(_x, _y) {
        ctx.beginPath();
        crc2.fillStyle = "rgb(238,0,0)";
        ctx.moveTo(_x, _y);
        ctx.lineTo(_x - 90, _y + 40);
        ctx.lineTo(_x, _y + 80);
        crc2.closePath();
        ctx.stroke();
        ctx.fill();
    }
    //Funktion pinke Fische
    function drawFish1(_x, _y) {
        ctx.beginPath();
        crc2.fillStyle = "rgb(255,20,147)";
        ctx.moveTo(_x, _y);
        ctx.bezierCurveTo(_x + 30, _y, _x + 30, _y + 20, _x, _y + 20);
        crc2.moveTo(_x, _y + 20);
        crc2.lineTo(_x - 20, _y + 10);
        crc2.lineTo(_x - 25, _y + 15);
        crc2.lineTo(_x - 25, _y);
        crc2.lineTo(_x - 20, _y + 5);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
    }
    //Funktion lila Fische
    function drawFish2(_x, _y) {
        ctx.beginPath();
        crc2.fillStyle = "rgb(199,21,133)";
        ctx.moveTo(_x, _y);
        ctx.bezierCurveTo(_x + 30, _y, _x + 30, _y + 20, _x, _y + 20);
        crc2.moveTo(_x, _y + 20);
        crc2.lineTo(_x - 20, _y + 10);
        crc2.lineTo(_x - 25, _y + 15);
        crc2.lineTo(_x - 25, _y);
        crc2.lineTo(_x - 20, _y + 5);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
    }
    //Funktion Pflanze 1
    function drawPlant1(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(34,139,34)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 100);
        crc2.lineTo(_x + 20, _y + 60);
        crc2.lineTo(_x + 20, _y - 40);
        crc2.lineTo(_x + 10, _y + 30);
        crc2.lineTo(_x + 10, _y - 35);
        crc2.lineTo(_x + 10, _y + 85);
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }
    //Funktion Pflanze 2
    function drawPlant2(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(34,139,34)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 100);
        crc2.lineTo(_x + 20, _y + 60);
        crc2.lineTo(_x + 20, _y - 40);
        crc2.lineTo(_x + 10, _y + 30);
        crc2.lineTo(_x + 10, _y - 35);
        crc2.lineTo(_x + 10, _y + 85);
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }
    //Funktion Pflanze 3
    function drawPlant3(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(34,139,34)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 100);
        crc2.lineTo(_x + 20, _y + 60);
        crc2.lineTo(_x + 20, _y - 40);
        crc2.lineTo(_x + 10, _y + 30);
        crc2.lineTo(_x + 10, _y - 35);
        crc2.lineTo(_x + 10, _y + 85);
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }
    //Seestern
    function drawStar(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255, 165, 0)";
        crc2.moveTo(_x + 10, _y);
        crc2.lineTo(_x + 20, _y + 30);
        crc2.lineTo(_x - 40, _y);
        crc2.lineTo(_x + 20, _y - 30);
        crc2.closePath();
        crc2.moveTo(_x + 20, _y + 10);
        crc2.lineTo(_x - 20, _y + 30);
        crc2.lineTo(_x - 20, _y - 30);
        crc2.lineTo(_x + 40, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawStone(_x, _y) {
        //260, 380
        crc2.beginPath();
        crc2.fillStyle = "rgb(190,190,190)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 40);
        crc2.lineTo(_x + 30, _y - 50);
        crc2.lineTo(_x + 50, _y - 70);
        crc2.lineTo(_x + 70, _y - 80);
        crc2.lineTo(_x + 100, _y - 90);
        crc2.lineTo(_x + 100, _y + 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=Canvas.js.map