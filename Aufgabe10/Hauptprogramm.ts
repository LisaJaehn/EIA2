namespace L10_Canvas {
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let fishes: Shoal[] = [];
    //let bubbles: Blasen[] = [];
    //let bubblesRandom: BlasenRandom[] = [];
    //let foods: Food[] = [];
    let n: number = 10;
    let imgData: ImageData;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );

        //Hintergund mit Klasse erstellen
        let hg: Background = new Background;
        hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height ); //Speichern des Canvas als Bild
        console.log( imgData );
        
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
        
        for (let i: number = 0; i < n; i++) {
            
            let fish: Shoal = new Shoal("#00ffff");
            fishes.push(fish);

            let bubbleRandom: BlasenRandom = new BlasenRandom("rgb(255,250,240)");
            fishes.push(bubbleRandom);
            
            let bubble: Blasen = new Blasen("rgb(152,245,255)");
            fishes.push(bubble);
            
            let food: Food = new Food( "rgb(255,185,15)");
            fishes.push(food);
        

     
        //Animation aufrufen

        animate();
    }

    function animate(): void {
        window.setTimeout( animate, 100 );

        //console.log(animate);

        crc2.putImageData( imgData, 0, 0 );

        //crc2.clearRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for ( let i: number = 0; i < fishes.length; i++ ) {
            fishes[i].move();
        }
 }

    function drawObjects(): void {
        for ( let i: number = 0; i < fishes.length; i++ )
            fishes[i].draw();

    }
}
}
