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

        //Schiffskörper

        drawShip( 100, 450 );

        //Luftblasen 

        for ( let i: number = 0; i < 15; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawBubble( x, y, 10 );
        }

        for ( let i: number = 0; i < 5; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish( x, y );
        }


    }

    //Funktion Luftblasen

    function drawBubble( _x: number, _y: number, _radius: number ): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(152,245,255)";
        ctx.arc( _x, _y, _radius, 0, 2 * Math.PI );
        //ctx.stroke();
        crc2.fill();
    }

    function drawTreasureChest( _x: number, _y: number, _width: number, _height: number ): void {
        crc2.fillStyle = "rgb(139,69,000)";
        crc2.fillRect( _x, _y, _width, _height );

    }

    function drawBackground( _sandHeight: number ): void {

        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

        crc2.fillStyle = "rgb(189,183,107)";
        crc2.fillRect( 0, crc2.canvas.height - _sandHeight, crc2.canvas.width, crc2.canvas.height );

    }


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

        drawShipsflag( _x + 70, _y );
    }

    function drawShipsflag( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.moveTo( _x, _y );
        crc2.lineTo( _x, _y - 150 );
        crc2.closePath();
        crc2.stroke();

        drawFlag( _x, _y - 150 );
    }

    function drawFlag( _x: number, _y: number ): void {

        ctx.beginPath();
        crc2.fillStyle = "rgb(238,0,0)";
        ctx.moveTo( _x, _y );
        ctx.lineTo( _x - 90, _y + 40 );
        ctx.lineTo( _x, _y + 80 );
        ctx.stroke();
        ctx.fill();

    }

    function drawFish( _x: number, _y: number ): void {

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
        ctx.stroke();
        ctx.fill();
        crc2.closePath();

    }

}

