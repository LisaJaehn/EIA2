var L10_Canvas;
(function (L10_Canvas) {
    window.addEventListener("load", init);
    let fishes = [];
    let n = 10;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Canvas.crc2 = canvas.getContext("2d");
        console.log(L10_Canvas.crc2);
        canvas.addEventListener("click", insertNewObject);
        //Hintergund mit Klasse erstellen
        let hg = new L10_Canvas.Background;
        hg.paint();
        imgData = L10_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i = 0; i < n; i++) {
            let fish = new L10_Canvas.Shoal("#00ffff");
            fishes.push(fish);
            let bubbleRandom = new L10_Canvas.BlasenRandom("rgb(255,250,240)");
            fishes.push(bubbleRandom);
            let bubble = new L10_Canvas.Blasen("rgb(152,245,255)");
            fishes.push(bubble);
            let food = new L10_Canvas.Food("rgb(255,185,15)");
            fishes.push(food);
            animate();
        }
        function insertNewObject(_event) {
            let food = new L10_Canvas.Food("#ffff00");
            fishes.push(food);
        }
        function animate() {
            window.setTimeout(animate, 100);
            L10_Canvas.crc2.putImageData(imgData, 0, 0);
            moveObjects();
            drawObjects();
        }
        function moveObjects() {
            for (let i = 0; i < fishes.length; i++) {
                fishes[i].move();
            }
        }
        function drawObjects() {
            for (let i = 0; i < fishes.length; i++)
                fishes[i].draw();
        }
    }
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Hauptprogramm.js.map