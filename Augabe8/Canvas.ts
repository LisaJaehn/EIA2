namespace L08_Canvas {
    window.addEventListener( "load", init );
    let crc2: CanvasRenderingContext2D;
    let ctx: CanvasRenderingContext2D;



    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        ctx = canvas.getContext( "2d" );
        console.log( crc2 );

        //Boden

        crc2.fillStyle = "rgb(189,183,107)";
        crc2.fillRect( 0, 0, 800, 600 );

        //Wasser

        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect( 0, 0, 800, 400 );

        //Schatztruhe

        crc2.fillStyle = "rgb(139,69,000)";
        crc2.fillRect( 100, 450, 100, 60 );

        //Schiffswrak

        //Schiffskörper

        ctx.beginPath();
        crc2.fillStyle = "rgb(139,69,19 )";
        ctx.moveTo( 450, 450 );
        ctx.bezierCurveTo( 450, 550, 590, 550, 590, 450 );
        ctx.stroke();
        // crc2.beginPath();
        crc2.moveTo( 450, 450 );
        crc2.lineTo( 590, 450 );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        //Schiffsmasten

        crc2.beginPath();
        crc2.moveTo( 520, 450 );
        crc2.lineTo( 520, 300 );
        crc2.closePath();
        crc2.stroke();

        //Flagge

        ctx.beginPath();
        crc2.fillStyle = "rgb(238,0,0)";
        ctx.moveTo( 520, 300 );
        ctx.lineTo( 430, 340 );
        ctx.lineTo( 520, 380 );
        ctx.stroke();
        ctx.fill();
        
        //Luftblasen 

        drawBubble(150, 200);
        
       /* //Fisch
        ctx.beginPath();
        crc2.fillStyle = "rgb(255,20,147)";
        ctx.moveTo( 50, 50);
        ctx.bezierCurveTo( 80, 50, 80, 70, 50, 70 );
        crc2.moveTo( 50, 70 );
        crc2.lineTo( 30, 60);
        crc2.lineTo( 25, 65);
        crc2.lineTo( 25, 50);
        crc2.lineTo( 30, 55);
        crc2.lineTo( 50, 50);
        ctx.stroke();
        ctx.fill();
        crc2.closePath();*/
        
        drawFish(20,20);
        

    }

    //Funktion Luftblasen

    function drawBubble( _x: number, _y: number ): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(152,245,255)";
        ctx.arc( 95, 50, 15, 0, 2 * Math.PI );
        //ctx.stroke();
        crc2.fill();
    }
    
    //Funktion Fische
    
    function drawFish(_x: number, _y: number): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(255,20,147)";
        ctx.moveTo( _x + 50, _y + 50);
        ctx.bezierCurveTo( _x + 30, _y, _x, _y + 20, _x - 30, _y );
        crc2.moveTo( _x, _y);
        crc2.moveTo( _x - 20, _y - 10 );
        crc2.moveTo( _x - 5, _y + 5 );
        crc2.moveTo( _x, _y - 15 );
        crc2.moveTo( _x + 5, _y + 5 );
        crc2.moveTo( _x - 20, _y - 5 );
        ctx.stroke();
        ctx.fill();
        crc2.closePath();

 }

}
    
    