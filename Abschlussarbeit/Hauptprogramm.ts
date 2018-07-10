namespace Abschlussarbeit {

    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    
    let bubblesPink: BubblePink[] = [];
    let bubblesRed: BubbleRed[] = [];
    let bubblesOrange: BubbleOrange[] = [];
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


        //Korb
        //drawBasket( 450, 630 );


        //Rote Kugeln
        for ( let i: number = 0; i < m; i++ ) {
            let bubbleRed: BubbleRed = new BubbleRed();
            bubbleRed.x = Math.random() * crc2.canvas.width;
            bubbleRed.y = Math.random() * crc2.canvas.height;
            bubbleRed.radius = 10;

            bubblesRed.push( bubbleRed );

        }

        //Orangene Kugeln
        for ( let i: number = 0; i < m; i++ ) {
            let bubbleOrange: BubbleOrange = new BubbleOrange();
            bubbleOrange.x = Math.random() * crc2.canvas.width;
            bubbleOrange.y = Math.random() * crc2.canvas.height;
            bubbleOrange.radius= 10;

            bubblesOrange.push( bubbleOrange );

        }

        //Pinke Kugeln
        for ( let i: number = 0; i < m; i++ ) {
            let bubblePink: BubblePink = new BubblePink();
            bubblePink.x = Math.random() * crc2.canvas.width;
            bubblePink.y = Math.random() * crc2.canvas.height;
            bubblePink.radius = 10;

            bubblesPink.push( bubblePink );

        }
        
      //Baum

        for ( let i: number = 0; i < n; i++ ) {
            let tree: Tree = new Tree();
            tree.x = Math.random() * 900;
            tree.y = ( 550 );

            trees.push( tree );
       
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
        for ( let i: number = 0; i < bubblesRed.length; i++ ) {
            bubblesRed[i].move();
        }

        for ( let i: number = 0; i < bubblesOrange.length; i++ ) {
            bubblesOrange[i].move();
        }

        for ( let i: number = 0; i < bubblesPink.length; i++ ) {
            bubblesPink[i].move();
        }
    }

    function drawObjects(): void {
        
        for ( let i: number = 0; i < trees.length; i++ )
            trees[i].draw();
        
        for ( let i: number = 0; i < bubblesRed.length; i++ )
            bubblesRed[i].draw();


        for ( let i: number = 0; i < bubblesOrange.length; i++ )
            bubblesOrange[i].draw();

        for ( let i: number = 0; i < bubblesPink.length; i++ )
            bubblesPink[i].draw();

    }
}
