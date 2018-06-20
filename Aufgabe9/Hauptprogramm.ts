namespace L09_Canvas {
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    export let ctx: CanvasRenderingContext2D;
    let fishes: Shoal[] = [];
    let bubbles: Blasen[] = [];
    let bubblesRandom: BlasenRandom[] = [];
    let n: number = 10;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        ctx = canvas.getContext( "2d" );
        console.log( crc2 );

        //Hintergrund

        drawBackground( 260 );

        //Felsen

        drawStone( 260, 380 );

        //Schatztruhe

        drawTreasureChest( 60, 370, 100, 60 );

        //Deckel Schatztruhe

        drawDeckel( 87, 290 );

        //Luftblasen random im Wasser

        for ( let i: number = 0; i < n; i++ ) {
            let bubbleRandom: BlasenRandom = new BlasenRandom();
            bubbleRandom.x = Math.random() * crc2.canvas.width;
            bubbleRandom.y = Math.random() * crc2.canvas.height;
            bubbleRandom.radius = Math.random() * 10;

            bubblesRandom.push(bubbleRandom);
        }

        //Luftblasen aus Kiste

        for ( let i: number = 0; i < n; i++ ) {
            let bubble: Blasen = new Blasen();
            bubble.x = ( 110 );
            bubble.y = Math.random() * 370;
            bubble.radius = Math.random() * 10;

            bubbles.push(bubble);
        }

        //Schiffswrak

        drawShip( 100, 450 );

        //Seestern

        drawStar( 310, 420 );

        //Fische

        for ( let i: number = 0; i < n; i++ ) {
            let fish: Shoal = new Shoal();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fish.r = Math.random() * 300;
            fish.g = Math.random() * 300;
            fish.b = Math.random() * 300;

        fishes.push(fish);
        
        }

        //Pflanze 1

        drawPlant1( 110, 640 );

        //Pflanze 2

        drawPlant1( 290, 640 );

        //Pflanze 3

        drawPlant1( 50, 640 );
        
        //Animation aufrufen
        animate();

    }

    //Funktion Schatztruhe

    function drawTreasureChest( _x: number, _y: number, _width: number, _height: number ): void {
        crc2.fillStyle = "rgb(139,69,000)";
        crc2.fillRect( _x, _y, _width, _height );
    }

    //Funktion Deckel Schatztruhe

    function drawDeckel( _x: number, _y: number ): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(139,69,000)";
        ctx.moveTo( _x, _y );
        ctx.bezierCurveTo( _x + 90, _y - 50, _x + 90, _y + 70, _x + 70, _y + 80 );
        crc2.closePath();
        //ctx.stroke();
        crc2.fill();
    }

    //Funktion Hintergrund

    function drawBackground( _sandHeight: number ): void {
        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

        crc2.fillStyle = "rgb(189,183,107)";
        crc2.fillRect( 0, crc2.canvas.height - _sandHeight, crc2.canvas.width, crc2.canvas.height );
    }

    //Funktion Schiffskörper

    function drawShip( _x: number, _y: number ): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(139,69,19 )";
        ctx.moveTo( _x, _y );
        ctx.bezierCurveTo( _x, _y + 100, _x + 140, _y + 100, _x + 150, _y );
        ctx.stroke();
        crc2.moveTo( _x, _y );
        crc2.lineTo( _x + 140, _y );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        //Funktion Schiffsmasten wird aufgerufen

        drawShipsflag( _x + 70, _y );
    }

    //Funktion Schiffsmasten

    function drawShipsflag( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.moveTo( _x, _y );
        crc2.lineTo( _x, _y - 120 );
        crc2.closePath();
        crc2.stroke();

        //Funktion Flagge wird aufgerufen

        drawFlag( _x, _y - 120 );
    }

    //Funktion Schiffsflagge

    function drawFlag( _x: number, _y: number ): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(238,0,0)";
        ctx.moveTo( _x, _y );
        ctx.lineTo( _x + 90, _y - 40 );
        ctx.lineTo( _x, _y - 80 );
        crc2.closePath();
        ctx.stroke();
        ctx.fill();
    }


    //Funktion Pflanze 1

    function drawPlant1( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(34,139,34)";
        crc2.moveTo( _x, _y );
        crc2.lineTo( _x + 10, _y - 100 );
        crc2.lineTo( _x + 20, _y + 60 );
        crc2.lineTo( _x + 20, _y - 40 );
        crc2.lineTo( _x + 10, _y + 30 );
        crc2.lineTo( _x + 10, _y - 35 );
        crc2.lineTo( _x + 10, _y + 85 );
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }

    //Funktion Pflanze 2

    function drawPlant2( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(34,139,34)";
        crc2.moveTo( _x, _y );
        crc2.lineTo( _x + 10, _y - 100 );
        crc2.lineTo( _x + 20, _y + 60 );
        crc2.lineTo( _x + 20, _y - 40 );
        crc2.lineTo( _x + 10, _y + 30 );
        crc2.lineTo( _x + 10, _y - 35 );
        crc2.lineTo( _x + 10, _y + 85 );
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }

    //Funktion Pflanze 3

    function drawPlant3( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(34,139,34)";
        crc2.moveTo( _x, _y );
        crc2.lineTo( _x + 10, _y - 100 );
        crc2.lineTo( _x + 20, _y + 60 );
        crc2.lineTo( _x + 20, _y - 40 );
        crc2.lineTo( _x + 10, _y + 30 );
        crc2.lineTo( _x + 10, _y - 35 );
        crc2.lineTo( _x + 10, _y + 85 );
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }

    //Seestern

    function drawStar( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255, 165, 0)";
        crc2.moveTo( _x + 10, _y );
        crc2.lineTo( _x + 20, _y + 30 );
        crc2.lineTo( _x - 40, _y );
        crc2.lineTo( _x + 20, _y - 30 );
        crc2.closePath();
        crc2.moveTo( _x + 20, _y + 10 );
        crc2.lineTo( _x - 20, _y + 30 );
        crc2.lineTo( _x - 20, _y - 30 );
        crc2.lineTo( _x + 40, _y );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawStone( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(190,190,190)";
        crc2.moveTo( _x, _y );
        crc2.lineTo( _x, _y - 40 );
        crc2.lineTo( _x + 30, _y - 50 );
        crc2.lineTo( _x + 50, _y - 70 );
        crc2.lineTo( _x + 70, _y - 80 );
        crc2.lineTo( _x + 100, _y - 90 );
        crc2.lineTo( _x + 100, _y + 0 );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    
    function animate(): void {
        window.setTimeout(animate, 10);
        
        //console.log(animate);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
        
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
        
        for (let i: number = 0; i < bubblesRandom.length; i++) {
            bubblesRandom[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < fishes.length; i++)
            fishes[i].draw();
    
    
        for (let i: number = 0; i < bubbles.length; i++)
        bubbles[i].drawBubble();
        
        for (let i: number = 0; i < bubblesRandom.length; i++)
        bubblesRandom[i].drawBubblesRandom();
}


}
