namespace L08_Canvas {
    window.addEventListener( "load", init );
    let crc2: CanvasRenderingContext2D;
    let ctx: CanvasRenderingContext2D;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        ctx = canvas.getContext( "2d" );
        console.log( crc2 );

        //Hintergrund

        drawBackground( 260 );

        //Schatztruhe

        drawTreasureChest( 60, 370, 100, 60 );

        //Schiffswrak

        drawShip( 100, 450 );

        //Luftblasen 

        for ( let i: number = 0; i < 15; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawBubble( x, y, 10 );
        }

        //Seestern

        drawStar( 310, 420 );

        //Fische pink

        for ( let i: number = 0; i < 5; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish1( x, y );
        }
        
      //Fische lila

        for ( let i: number = 0; i < 5; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish2( x, y );
        }

        //Pflanze 1

        drawPlant1( 110, 640 );

        //Pflanze 2

        drawPlant1( 290, 640 );

        //Pflanze 3

        drawPlant1( 50, 640 );
    }

    //Funktion Luftblasen

    function drawBubble( _x: number, _y: number, _radius: number ): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(152,245,255)";
        ctx.arc( _x, _y, _radius, 0, 2 * Math.PI );
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }

    //Funktion Schatruhe

    function drawTreasureChest( _x: number, _y: number, _width: number, _height: number ): void {
        crc2.fillStyle = "rgb(139,69,000)";
        crc2.fillRect( _x, _y, _width, _height );
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
        crc2.lineTo( _x, _y - 150 );
        crc2.closePath();
        crc2.stroke();

        //Funktion Flagge wird aufgerufen

        drawFlag( _x, _y - 150 );
    }

    //Funktion Schiffsflagge

    function drawFlag( _x: number, _y: number ): void {

        ctx.beginPath();
        crc2.fillStyle = "rgb(238,0,0)";
        ctx.moveTo( _x, _y );
        ctx.lineTo( _x - 90, _y + 40 );
        ctx.lineTo( _x, _y + 80 );
        crc2.closePath();
        ctx.stroke();
        ctx.fill();
    }

    //Funktion pinke Fische

    function drawFish1( _x: number, _y: number ): void {

        ctx.beginPath();
        crc2.fillStyle = "rgb(255,20,147)";
        ctx.moveTo( _x, _y );
        ctx.bezierCurveTo( _x + 30, _y, _x + 30, _y + 20, _x, _y + 20 );
        crc2.moveTo( _x, _y + 20 );
        crc2.lineTo( _x - 20, _y + 10 );
        crc2.lineTo( _x - 25, _y + 15 );
        crc2.lineTo( _x - 25, _y );
        crc2.lineTo( _x - 20, _y + 5 );
        crc2.lineTo( _x, _y );
        crc2.closePath();
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
    }
    
    function drawFish2( _x: number, _y: number ): void {

        ctx.beginPath();
        crc2.fillStyle = "rgb(199,21,133)";
        ctx.moveTo( _x, _y );
        ctx.bezierCurveTo( _x + 30, _y, _x + 30, _y + 20, _x, _y + 20 );
        crc2.moveTo( _x, _y + 20 );
        crc2.lineTo( _x - 20, _y + 10 );
        crc2.lineTo( _x - 25, _y + 15 );
        crc2.lineTo( _x - 25, _y );
        crc2.lineTo( _x - 20, _y + 5 );
        crc2.lineTo( _x, _y );
        crc2.closePath();
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
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
}

