var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", init);
    let imgData;
    //MovingObject
    let movingObjects = [];
    let m = 3;
    //Bäume
    let trees = [];
    let n = 4;
    //Highscore
    let highscore = 0;
    //Korb 
    let basket = new Abschlussarbeit.Basket();
    basket.x = 450;
    basket.y = 630;
    //Funktion init
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        console.log(Abschlussarbeit.crc2);
        //Hintergrund
        let hg = new Abschlussarbeit.Background;
        hg.paint();
        imgData = Abschlussarbeit.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //Um Korb an auf dem Smartphone steuern zu können
        document.addEventListener('keydown', moveBasket);
        //Um Korb auf Handy/Tablet steuern zu können
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
    //Funktion für die Animation
    function animate() {
        window.setTimeout(animate, 10);
        Abschlussarbeit.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    //Funktion um zu checken, ob Korb und Bubble auf selber Höhe sind
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
    //Funktion, damit immer wieder neue Bubbles erstellt werden
    function createBubbles() {
        window.setTimeout(createBubbles, 500);
        let p = Math.floor(Math.random() * 3);
        switch (p) {
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
    //Funktion für Computersteuerung
    function moveBasket(_event) {
        if (_event.key == "ArrowRight") {
            basket.moveRight();
        }
        if (_event.key == "ArrowLeft") {
            basket.moveLeft();
        }
    }
    //Funktion für Smartphone/Tabletsteuerung
    function moveBasketTouch(_event) {
        if (_event.changedTouches[0].clientX < Abschlussarbeit.crc2.canvas.clientWidth / 2) {
            basket.moveLeft();
        }
        else {
            basket.moveRight();
        }
        console.log(_event, Abschlussarbeit.crc2.canvas.clientWidth / 2);
    }
    //Funktion für Bewegung der Bubbels
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    //Funktion welche bewegte Elemente zeichnet
    function drawObjects() {
        for (let i = 0; i < trees.length; i++)
            trees[i].draw();
        for (let i = 0; i < movingObjects.length; i++)
            movingObjects[i].draw();
        basket.draw();
        showHighscore();
    }
    //Funktion die den Punktestand erhöht
    function updateHighscore(points) {
        highscore += points;
        if (highscore >= 200) {
            alert("Glückwunsch!");
            highscore = 0;
        }
    }
    //Funktion die den Punktestand zeichnet
    function showHighscore() {
        Abschlussarbeit.crc2.font = "30px Arial";
        Abschlussarbeit.crc2.fillStyle = "#000000";
        Abschlussarbeit.crc2.fillText("Punkte: " + highscore, 10, 50);
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Hauptprogramm.js.map