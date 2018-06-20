var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let fishes = [];
    let bubbles = [];
    let bubblesRandom = [];
    let n = 10;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L09_Canvas.crc2 = canvas.getContext("2d");
        L09_Canvas.ctx = canvas.getContext("2d");
        console.log(L09_Canvas.crc2);
        //Hintergrund
        drawBackground(260);
        //Felsen
        drawStone(260, 380);
        //Schatztruhe
        drawTreasureChest(60, 370, 100, 60);
        //Deckel Schatztruhe
        drawDeckel(87, 290);
        //Luftblasen random im Wasser
        for (let i = 0; i < n; i++) {
            let bubbleRandom = new L09_Canvas.BlasenRandom();
            bubbleRandom.x = Math.random() * L09_Canvas.crc2.canvas.width;
            bubbleRandom.y = Math.random() * L09_Canvas.crc2.canvas.height;
            bubbleRandom.radius = Math.random() * 10;
            bubblesRandom.push(bubbleRandom);
        }
        //Luftblasen aus Kiste
        for (let i = 0; i < n; i++) {
            let bubble = new L09_Canvas.Blasen();
            bubble.x = (110);
            bubble.y = Math.random() * 370;
            bubble.radius = Math.random() * 10;
            bubbles.push(bubble);
        }
        //Schiffswrak
        drawShip(100, 450);
        //Seestern
        drawStar(310, 420);
        //Fische
        for (let i = 0; i < n; i++) {
            let fish = new L09_Canvas.Shoal();
            fish.x = Math.random() * L09_Canvas.crc2.canvas.width;
            fish.y = Math.random() * L09_Canvas.crc2.canvas.height;
            fish.r = Math.random() * 300;
            fish.g = Math.random() * 300;
            fish.b = Math.random() * 300;
            fishes.push(fish);
        }
        //Pflanze 1
        drawPlant1(110, 640);
        //Pflanze 2
        drawPlant1(290, 640);
        //Pflanze 3
        drawPlant1(50, 640);
        //Animation aufrufen
        animate();
    }
    //Funktion Schatztruhe
    function drawTreasureChest(_x, _y, _width, _height) {
        L09_Canvas.crc2.fillStyle = "rgb(139,69,000)";
        L09_Canvas.crc2.fillRect(_x, _y, _width, _height);
    }
    //Funktion Deckel Schatztruhe
    function drawDeckel(_x, _y) {
        L09_Canvas.ctx.beginPath();
        L09_Canvas.crc2.fillStyle = "rgb(139,69,000)";
        L09_Canvas.ctx.moveTo(_x, _y);
        L09_Canvas.ctx.bezierCurveTo(_x + 90, _y - 50, _x + 90, _y + 70, _x + 70, _y + 80);
        L09_Canvas.crc2.closePath();
        //ctx.stroke();
        L09_Canvas.crc2.fill();
    }
    //Funktion Hintergrund
    function drawBackground(_sandHeight) {
        L09_Canvas.crc2.fillStyle = "rgb(100,149, 237)";
        L09_Canvas.crc2.fillRect(0, 0, L09_Canvas.crc2.canvas.width, L09_Canvas.crc2.canvas.height);
        L09_Canvas.crc2.fillStyle = "rgb(189,183,107)";
        L09_Canvas.crc2.fillRect(0, L09_Canvas.crc2.canvas.height - _sandHeight, L09_Canvas.crc2.canvas.width, L09_Canvas.crc2.canvas.height);
    }
    //Funktion Schiffskörper
    function drawShip(_x, _y) {
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
        drawShipsflag(_x + 70, _y);
    }
    //Funktion Schiffsmasten
    function drawShipsflag(_x, _y) {
        L09_Canvas.crc2.beginPath();
        L09_Canvas.crc2.moveTo(_x, _y);
        L09_Canvas.crc2.lineTo(_x, _y - 120);
        L09_Canvas.crc2.closePath();
        L09_Canvas.crc2.stroke();
        //Funktion Flagge wird aufgerufen
        drawFlag(_x, _y - 120);
    }
    //Funktion Schiffsflagge
    function drawFlag(_x, _y) {
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
    function drawPlant1(_x, _y) {
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
    function drawPlant2(_x, _y) {
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
    function drawPlant3(_x, _y) {
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
    function drawStar(_x, _y) {
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
    function drawStone(_x, _y) {
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
    function animate() {
        window.setTimeout(animate, 10);
        //console.log(animate);
        L09_Canvas.crc2.clearRect(0, 0, L09_Canvas.crc2.canvas.width, L09_Canvas.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
        for (let i = 0; i < bubblesRandom.length; i++) {
            bubblesRandom[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < fishes.length; i++)
            fishes[i].draw();
        for (let i = 0; i < bubbles.length; i++)
            bubbles[i].drawBubble();
        for (let i = 0; i < bubblesRandom.length; i++)
            bubblesRandom[i].drawBubblesRandom();
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Hauptprogramm.js.map