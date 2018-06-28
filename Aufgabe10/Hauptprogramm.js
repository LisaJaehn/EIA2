var L10_Canvas;
(function (L10_Canvas) {
    window.addEventListener("load", init);
    let movingObject = [];
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
            let fish = new L10_Canvas.Shoal("#00ffff");
            movingObject.push(fish);
            let bubbleRandom = new L10_Canvas.BlasenRandom("rgb(255,250,240)");
            movingObject.push(bubbleRandom);
            let bubble = new L10_Canvas.Blasen("rgb(152,245,255)");
            movingObject.push(bubble);
            /*let food: Food = new Food( "rgb(255,185,15)" );
            movingObjects.push( food );*/
            animate();
        }
        function insertNewObject(_event) {
            /* let food: Food = new Food("#ffff00");
             fishes.push(food);*/
            let x = _event.clientX;
            let y = _event.clientY;
            let n = Math.floor(Math.random() * 2);
            switch (n) {
                case 0:
                    let food = new L10_Canvas.Food("#ffff00");
                    food.x = x;
                    food.y = y;
                    movingObject.push(food);
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
            for (let i = 0; i < movingObject.length; i++) {
                movingObject[i].move();
            }
        }
        function drawObjects() {
            for (let i = 0; i < movingObject.length; i++)
                movingObject[i].draw();
        }
    }
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Hauptprogramm.js.map