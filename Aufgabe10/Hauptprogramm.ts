namespace L10_Canvas {
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let fishes: Shoal[] = [];
    let n: number = 10;
    let imgData: ImageData;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );

        //Hintergund mit Klasse erstellen
        let hg: Background = new Background;
        hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height ); 
        console.log( imgData );

        for ( let i: number = 0; i < n; i++ ) {

            let fish: Shoal = new Shoal( "#00ffff" );
            fishes.push( fish );

            let bubbleRandom: BlasenRandom = new BlasenRandom( "rgb(255,250,240)" );
            fishes.push( bubbleRandom );

            let bubble: Blasen = new Blasen( "rgb(152,245,255)" );
            fishes.push( bubble );

            let food: Food = new Food( "rgb(255,185,15)" );
            fishes.push( food );

            animate();
        }

        function animate(): void {
            window.setTimeout( animate, 100 );

            crc2.putImageData( imgData, 0, 0 );

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
