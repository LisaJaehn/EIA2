var L10_Canvas;
(function (L10_Canvas) {
    window.addEventListener("load", init);
    let fishes = [];
    let bubbles = [];
    let bubblesRandom = [];
    let foods = [];
    let n = 10;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Canvas.crc2 = canvas.getContext("2d");
        console.log(L10_Canvas.crc2);
        //Hintergund mit Klasse erstellen
        let hg = new L10_Canvas.Background;
        hg.paint();
        imgData = L10_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        console.log(imgData);
        //Herunterfallendes Essen
        for (let i = 0; i < n; i++) {
            let food = new L10_Canvas.Food();
            food.x = Math.random() * L10_Canvas.crc2.canvas.width;
            food.y = Math.random() * L10_Canvas.crc2.canvas.height;
            food.radius = Math.random() * 5;
            foods.push(food);
        }
        //Luftblasen random im Wasser
        for (let i = 0; i < n; i++) {
            let bubbleRandom = new L10_Canvas.BlasenRandom();
            bubbleRandom.x = Math.random() * L10_Canvas.crc2.canvas.width;
            bubbleRandom.y = Math.random() * L10_Canvas.crc2.canvas.height;
            bubbleRandom.radius = Math.random() * 10;
            bubblesRandom.push(bubbleRandom);
        }
        //Luftblasen aus Kiste
        for (let i = 0; i < n; i++) {
            let bubble = new L10_Canvas.Blasen();
            bubble.x = (110);
            bubble.y = Math.random() * 370;
            bubble.radius = Math.random() * 10;
            bubbles.push(bubble);
        }
        //Fische
        for (let i = 0; i < n; i++) {
            let fish = new L10_Canvas.Shoal();
            fish.x = Math.random() * L10_Canvas.crc2.canvas.width;
            fish.y = Math.random() * L10_Canvas.crc2.canvas.height;
            fish.r = Math.random() * 300;
            fish.g = Math.random() * 300;
            fish.b = Math.random() * 300;
            fishes.push(fish);
        }
        //Animation aufrufen
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        //console.log(animate);
        L10_Canvas.crc2.putImageData(imgData, 0, 0);
        //crc2.clearRect( 0, 0, crc2.canvas.width, crc2.canvas.height );
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
        for (let i = 0; i < bubblesRandom.length; i++) {
            foods[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < fishes.length; i++)
            fishes[i].draw();
        for (let i = 0; i < bubbles.length; i++)
            bubbles[i].drawBubble();
        for (let i = 0; i < bubblesRandom.length; i++)
            bubblesRandom[i].drawBubblesRandom();
        for (let i = 0; i < bubblesRandom.length; i++)
            foods[i].drawFood();
    }
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Hauptprogramm.js.map