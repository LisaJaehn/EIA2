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
        //Schatztruhe
        drawTreasureChest(60, 370, 100, 60);
        //Schiffswrak
        drawShip(100, 450);
        //Luftblasen 
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawBubble(x, y, 10);
        }
        //Fische
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawFish(x, y);
        }
    }
    //Funktion Luftblasen
    function drawBubble(_x, _y, _radius) {
        ctx.beginPath();
        crc2.fillStyle = "rgb(152,245,255)";
        ctx.arc(_x, _y, _radius, 0, 2 * Math.PI);
        //ctx.stroke();
        crc2.fill();
    }
    //Funktion Schatruhe
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
        ctx.stroke();
        ctx.fill();
    }
    //Funktion pinke Fische
    function drawFish(_x, _y) {
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
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=Canvas.js.map