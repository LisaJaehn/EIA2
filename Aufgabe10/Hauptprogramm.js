var L10_Canvas;
(function (L10_Canvas) {
    window.addEventListener("load", init);
    let fishes = [];
    //let bubbles: Blasen[] = [];
    //let bubblesRandom: BlasenRandom[] = [];
    //let foods: Food[] = [];
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
        /* //Herunterfallendes Essen
   
           for ( let i: number = 0; i < n; i++ ) {
               let food: Food = new Food();
               food.x = Math.random() * crc2.canvas.width;
               food.y = Math.random() * crc2.canvas.height;
               food.radius = Math.random() * 5;
   
              foods.push( food );
           }
   
           //Luftblasen random im Wasser
   
           for ( let i: number = 0; i < n; i++ ) {
               let bubbleRandom: BlasenRandom = new BlasenRandom();
               bubbleRandom.x = Math.random() * crc2.canvas.width;
               bubbleRandom.y = Math.random() * crc2.canvas.height;
               bubbleRandom.radius = Math.random() * 10;
   
               bubblesRandom.push( bubbleRandom );
           }
   
           //Luftblasen aus Kiste
   
           for ( let i: number = 0; i < n; i++ ) {
               let bubble: Blasen = new Blasen();
               bubble.x = ( 110 );
               bubble.y = Math.random() * 370;
               bubble.radius = Math.random() * 10;
   
               bubbles.push( bubble );
           }*/
        for (let i = 0; i < n; i++) {
            let fish = new L10_Canvas.Shoal("#00ffff");
            fishes.push(fish);
            let bubbleRandom = new L10_Canvas.BlasenRandom("rgb(255,250,240)");
            fishes.push(bubbleRandom);
            let bubble = new L10_Canvas.Blasen("rgb(152,245,255)");
            fishes.push(bubble);
            let food = new L10_Canvas.Food("rgb(255,185,15)");
            fishes.push(food);
            //Animation aufrufen
            animate();
        }
        function animate() {
            window.setTimeout(animate, 100);
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
        }
        function drawObjects() {
            for (let i = 0; i < fishes.length; i++)
                fishes[i].draw();
        }
    }
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Hauptprogramm.js.map