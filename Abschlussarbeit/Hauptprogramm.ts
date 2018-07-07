namespace Abschlussarbeit {

    window.addEventListener( "load", init );
    let crc2: CanvasRenderingContext2D;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );



        //Hintergrund
        drawBackground( 100 );
        
        //Baum
        drawTree1( 150, 550 );
        
        //Korb
        drawBasket( 450, 630 );
        
        //Sonne
        drawSun(600, 100, 70);

        //Rote Kugeln
        for ( let i: number = 0; i < 8; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawBubbleRed( x, y, 10 );

        }

        //Orangene Kugeln
        for ( let i: number = 0; i < 8; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawBubbleOrange( x, y, 10 );

        }
        
        //Pinke Kugeln
        for ( let i: number = 0; i < 8; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawBubblePink( x, y, 10 );

        }
        
    }

    //Funktion Hintergrund
    function drawBackground( _forestHeight: number ): void {
        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

        crc2.fillStyle = "rgb(0,205,0)";
        crc2.fillRect( 0, crc2.canvas.height - _forestHeight, crc2.canvas.width, crc2.canvas.height );
    }

    //Rote Kugeln
    function drawBubbleRed( _x: number, _y: number, _radius: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,0,0)";
        crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    //Orange Kugeln
    function drawBubbleOrange( _x: number, _y: number, _radius: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,144,0)";
        crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    
    //Pinke Kugeln
    function drawBubblePink( _x: number, _y: number, _radius: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,0,255)";
        crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }


    //Korb
    function drawBasket( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(139,69,0)";
        crc2.moveTo( 400, 630 );
        crc2.bezierCurveTo( 400, 700, 500, 700, 500, 630 );
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        drawHenckel( 500, 630 );

    }

    //Korbhenkel
    function drawHenckel( _x: number, _y: number ): void {
        crc2.beginPath();
        //crc2.fillStyle = "rgb(139,69,0)";
        crc2.moveTo( 500, 630 );
        crc2.bezierCurveTo( 500, 560, 400, 560, 400, 630 );
        crc2.closePath();
        crc2.stroke();
        //crc2.fill();
    }


    //Tannenbaum
    function drawTree1( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(0,100,0)";
        crc2.moveTo( 150, 550 );
        crc2.lineTo( 50, 550 );
        crc2.lineTo( 150, 450 );
        crc2.lineTo( 70, 450 );
        crc2.lineTo( 150, 350 )
        crc2.lineTo( 90, 350 );
        crc2.lineTo( 175, 250 );
        crc2.lineTo( 260, 350 );
        crc2.lineTo( 200, 350 );
        crc2.lineTo( 280, 450 );
        crc2.lineTo( 200, 450 );
        crc2.lineTo( 300, 550 );
        crc2.lineTo( 200, 550 );
        //crc2.closePath();
        crc2.stroke();
        crc2.fill();

        //Baumstamm
        drawTrunk1( 150, 600 );

    }

    //Tannenbaumstamm
    function drawTrunk1( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(139,90,0)";
        crc2.moveTo( 150, 600 );
        crc2.lineTo( 150, 550 );
        crc2.lineTo( 200, 550 );
        crc2.lineTo( 200, 600 );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
}
    
    //Sonne
    function drawSun ( _x: number, _y: number, _radius: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,255,0)";
        crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    
    
    
    
    
    
    
    
    
    
    
    
}
