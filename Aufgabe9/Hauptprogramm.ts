namespace L09_Canvas {
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let fishes: Shoal[] = [];
    let bubbles: Blasen[] = [];
    let bubblesRandom: BlasenRandom[] = [];
    let n: number = 10;
    let imgData: ImageData;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );

        //Hintergund mit Klasse erstellen
        let hg: Hintergrund = new Hintergrund;
        hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height ); //Speichern des Canvas als Bild
        console.log( imgData );

        //Luftblasen random im Wasser

        for ( let i: number = 0; i < n; i++ ) {
            let bubbleRandom: BlasenRandom = new BlasenRandom();
            bubbleRandom.x = Math.random() * crc2.canvas.width;
            bubbleRandom.y = Math.random() * crc2.canvas.height;
            bubbleRandom.radius = Math.random() * 5;

            bubblesRandom.push( bubbleRandom );
        }

        //Luftblasen aus Kiste

        for ( let i: number = 0; i < n; i++ ) {
            let bubble: Blasen = new Blasen();
            bubble.x = ( 110 );
            bubble.y = Math.random() * 370;
            bubble.radius = Math.random() * 10;

            bubbles.push( bubble );
        }

        //Fische

        for ( let i: number = 0; i < n; i++ ) {
            let fish: Shoal = new Shoal();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fish.r = Math.random() * 300;
            fish.g = Math.random() * 300;
            fish.b = Math.random() * 300;

            fishes.push( fish );
        }

        //Animation aufrufen

        animate();
    }

    function animate(): void {
        window.setTimeout( animate, 10 );

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

        for ( let i: number = 0; i < bubbles.length; i++ ) {
            bubbles[i].move();
        }

        for ( let i: number = 0; i < bubblesRandom.length; i++ ) {
            bubblesRandom[i].move();
        }
    }

    function drawObjects(): void {
        for ( let i: number = 0; i < fishes.length; i++ )
            fishes[i].draw();


        for ( let i: number = 0; i < bubbles.length; i++ )
            bubbles[i].drawBubble();

        for ( let i: number = 0; i < bubblesRandom.length; i++ )
            bubblesRandom[i].drawBubblesRandom();
    }
}
