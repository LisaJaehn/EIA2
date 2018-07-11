var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", init);
    let imgData;
    let movingObjects = [];
    let m = 3;
    let trees = [];
    let n = 4;
    let highscore = 0;
    let basket = new Abschlussarbeit.Basket();
    basket.x = 450;
    basket.y = 630;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        console.log(Abschlussarbeit.crc2);
        let hg = new Abschlussarbeit.Background;
        hg.paint();
        imgData = Abschlussarbeit.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        document.addEventListener('keydown', moveBasket);
        document.addEventListener('touchmove', moveBasketTouch);
        //Bäume
        for (let i = 0; i < n; i++) {
            let tree = new Abschlussarbeit.Tree();
            tree.x = Math.random() * 900;
            tree.y = (550);
            trees.push(tree);
        }
        animate();
        checkBubblePosition();
        createBubbles();
    }
    function animate() {
        window.setTimeout(animate, 10);
        Abschlussarbeit.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function checkBubblePosition() {
        window.setTimeout(checkBubblePosition, 10);
        for (let i = 0; i < movingObjects.length; i++) {
            let bubble = movingObjects[i];
            let inside = basket.checkIfInside(bubble.x, bubble.y);
            if (inside) {
                movingObjects.splice(i, 1);
                updateHighscore(bubble.points);
            }
        }
    }
    function createBubbles() {
        window.setTimeout(createBubbles, 500);
        let rand = Math.floor(Math.random() * 3);
        switch (rand) {
            case 0:
                let bubblesRed = new Abschlussarbeit.BubbleRed();
                movingObjects.push(bubblesRed);
                break;
            case 1:
                let bubblesOrange = new Abschlussarbeit.BubbleOrange();
                movingObjects.push(bubblesOrange);
                break;
            case 2:
                let bubblesPink = new Abschlussarbeit.BubblePink();
                movingObjects.push(bubblesPink);
                break;
        }
    }
    function moveBasket(_event) {
        if (_event.key == "ArrowRight") {
            basket.moveRight();
        }
        if (_event.key == "ArrowLeft") {
            basket.moveLeft();
        }
    }
    function moveBasketTouch(_event) {
        if (_event.changedTouches[0].clientX < Abschlussarbeit.crc2.canvas.clientWidth / 2) {
            basket.moveLeft();
        }
        else {
            basket.moveRight();
        }
        console.log(_event, Abschlussarbeit.crc2.canvas.clientWidth / 2);
    }
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < trees.length; i++)
            trees[i].draw();
        for (let i = 0; i < movingObjects.length; i++)
            movingObjects[i].draw();
        basket.draw();
        showHighscore();
    }
    function updateHighscore(points) {
        highscore += points;
        if (highscore >= 200) {
            alert("Glückwunsch!");
            highscore = 0;
        }
    }
    function showHighscore() {
        Abschlussarbeit.crc2.font = "30px Arial";
        Abschlussarbeit.crc2.fillStyle = "#000000";
        Abschlussarbeit.crc2.fillText("Punkte: " + highscore, 10, 50);
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Hauptprogramm.js.map