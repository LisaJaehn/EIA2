namespace L10_Canvas {
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: MovingObject[] = [];
    let n: number = 10;
    let imgData: ImageData;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );

        canvas.addEventListener( "click", insertNewObject );

        let hg: Background = new Background;
        //hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height );
        console.log( imgData );

        for ( let i: number = 0; i < n; i++ ) {

            let fishes: Shoal = new Shoal( /*"#00ffff"*/ );
            movingObjects.push( fishes );

            let bubblesRandom: WaterBubbleRandom = new WaterBubbleRandom( /*"rgb(255,250,240)"*/ );
            movingObjects.push( bubblesRandom );

            let bubbles: Waterbubble = new Waterbubble( /*"rgb(152,245,255)"*/ );
            movingObjects.push( bubbles );

            /*let foods: Food = new Food( "rgb(255,185,15)" );
            movingObjects.push( food );*/

            animate();
        }

        function insertNewObject( _event: MouseEvent ): void {
            /* let foods: Food = new Food("#ffff00");
             fishes.push(food);*/

            let x: number = _event.clientX;
            let y: number = _event.clientY;
            let n: number = Math.floor( Math.random() * 2 );

            switch ( n ) {
                case 0:
                    let foods: Food = new Food( /*"#ffff00"*/ );
                    foods.x = x;
                    foods.y = y;
                    movingObjects.push( foods );
                    break;
            }
        }

        function animate(): void {
            window.setTimeout( animate, 100 );

            crc2.putImageData( imgData, 0, 0 );

            moveObjects();
            drawObjects();
        }

        function moveObjects(): void {
            for ( let i: number = 0; i < movingObjects.length; i++ ) {
                movingObjects[i].move();
            }
        }

        function drawObjects(): void {
            for ( let i: number = 0; i < movingObjects.length; i++ )
                movingObjects[i].draw();
        }
    }
}
