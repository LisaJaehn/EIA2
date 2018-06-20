var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let fishes = [];
    let bubbles = [];
    let bubblesRandom = [];
    let n = 10;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L09_Canvas.crc2 = canvas.getContext("2d");
        L09_Canvas.ctx = canvas.getContext("2d");
        console.log(L09_Canvas.crc2);
        //Hintergund mittels einer Klasse erstellen
        let hg = new L09_Canvas.Background;
        imgData = L09_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
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
        //Animation aufrufen
        animate();
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