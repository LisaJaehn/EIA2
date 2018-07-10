namespace Abschlussarbeit {

    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    let movingObjects: MovingObject[] = [];
    let m: number = 3;

    let trees: Tree[] = [];
    let n: number = 4;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );

        let hg: Background = new Background;
        hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height );
        console.log( imgData );


        //Bäume

        for ( let i: number = 0; i < n; i++ ) {
            let tree: Tree = new Tree();
            tree.x = Math.random() * 900;
            tree.y = ( 550 );

            trees.push( tree );
        }


        //Kugeln
        
        for ( let i: number = 0; i < m; i++ ) {

            let bubblesRed: BubbleRed = new BubbleRed();
            movingObjects.push( bubblesRed );

            let bubblesOrange: BubbleOrange = new BubbleOrange();
            movingObjects.push( bubblesOrange );

            let bubblesPink: BubblePink = new BubblePink();
            movingObjects.push( bubblesPink );
        }


        animate();

    }

    function animate(): void {
        window.setTimeout( animate, 10 );
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

        for ( let i: number = 0; i < trees.length; i++ )
            trees[i].draw();

        for ( let i: number = 0; i < movingObjects.length; i++ )
            movingObjects[i].draw();



    }
}
