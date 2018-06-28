var L10_Canvas;
(function (L10_Canvas) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let n = 10;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Canvas.crc2 = canvas.getContext("2d");
        console.log(L10_Canvas.crc2);
        canvas.addEventListener("click", insertNewObject);
        let hg = new L10_Canvas.Background;
        hg.paint();
        imgData = L10_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i = 0; i < n; i++) {
            let fishes = new L10_Canvas.Shoal("#00ffff");
            movingObjects.push(fishes);
            let bubblesRandom = new L10_Canvas.WaterBubbleRandom("rgb(255,250,240)");
            movingObjects.push(bubblesRandom);
            let bubbles = new L10_Canvas.Waterbubble("rgb(152,245,255)");
            movingObjects.push(bubbles);
            /*let foods: Food = new Food( "rgb(255,185,15)" );
            movingObjects.push( food );*/
            animate();
        }
        function insertNewObject(_event) {
            /* let foods: Food = new Food("#ffff00");
             fishes.push(food);*/
            let x = _event.clientX;
            let y = _event.clientY;
            let n = Math.floor(Math.random() * 2);
            switch (n) {
                case 0:
                    let foods = new L10_Canvas.Food("#ffff00");
                    foods.x = x;
                    foods.y = y;
                    movingObjects.push(foods);
                    break;
            }
        }
        function animate() {
            window.setTimeout(animate, 100);
            L10_Canvas.crc2.putImageData(imgData, 0, 0);
            moveObjects();
            drawObjects();
        }
        function moveObjects() {
            for (let i = 0; i < movingObjects.length; i++) {
                movingObjects[i].move();
            }
        }
        function drawObjects() {
            for (let i = 0; i < movingObjects.length; i++)
                movingObjects[i].draw();
        }
    }
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Hauptprogramm.js.map