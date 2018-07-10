var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", init);
    let imgData;
    let trees = [];
    let n = 4;
    let bubblesPink = [];
    let bubblesRed = [];
    let bubblesOrange = [];
    let m = 8;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        console.log(Abschlussarbeit.crc2);
        let hg = new Abschlussarbeit.Background;
        hg.paint();
        imgData = Abschlussarbeit.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //Baum
        for (let i = 0; i < n; i++) {
            let tree = new Abschlussarbeit.Tree();
            tree.x = Math.random() * 900;
            tree.y = (550);
            trees.push(tree);
        }
        //Korb
        //drawBasket( 450, 630 );
        //Rote Kugeln
        for (let i = 0; i < m; i++) {
            let bubbleRed = new Abschlussarbeit.BubbleRed();
            bubbleRed.x = Math.random() * Abschlussarbeit.crc2.canvas.width;
            bubbleRed.y = Math.random() * Abschlussarbeit.crc2.canvas.height;
            bubbleRed.radius = Math.random() * 5;
            bubblesRed.push(bubbleRed);
        }
        //Orangene Kugeln
        for (let i = 0; i < m; i++) {
            let bubbleOrange = new Abschlussarbeit.BubbleOrange();
            bubbleOrange.x = Math.random() * Abschlussarbeit.crc2.canvas.width;
            bubbleOrange.y = Math.random() * Abschlussarbeit.crc2.canvas.height;
            bubbleOrange.radius = Math.random() * 5;
            bubblesOrange.push(bubbleOrange);
        }
        //Pinke Kugeln
        for (let i = 0; i < m; i++) {
            let bubblePink = new Abschlussarbeit.BubblePink();
            bubblePink.x = Math.random() * Abschlussarbeit.crc2.canvas.width;
            bubblePink.y = Math.random() * Abschlussarbeit.crc2.canvas.height;
            bubblePink.radius = Math.random() * 5;
            bubblesPink.push(bubblePink);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        Abschlussarbeit.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < bubblesRed.length; i++) {
            bubblesRed[i].move();
        }
        for (let i = 0; i < bubblesOrange.length; i++) {
            bubblesOrange[i].move();
        }
        for (let i = 0; i < bubblesPink.length; i++) {
            bubblesPink[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < bubblesRed.length; i++)
            bubblesRed[i].draw();
        for (let i = 0; i < bubblesOrange.length; i++)
            bubblesOrange[i].draw();
        for (let i = 0; i < bubblesPink.length; i++)
            bubblesPink[i].draw();
        for (let i = 0; i < trees.length; i++)
            trees[i].draw();
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Hauptprogramm.js.map