namespace Abschlussarbeit {
    
    window.addEventListener( "load", init );
    let crc2: CanvasRenderingContext2D;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );
        
        
        
      //Hintergrund
        drawBackground( 100 );
        
      //Äpfel
        for ( let i: number = 0; i < 8; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawApples( x, y, 10 );
            
        }
        
       //Orangen
        for ( let i: number = 0; i < 8; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawOranges( x, y, 10 );
            
        }
        
      //Korb
        drawBasket(450, 630);
        
      //Bäume
        drawTrees(100, 600);
        
      //Wolken
        drawClouds(200,200)
        
    }
    
     //Funktion Hintergrund
    function drawBackground( _forestHeight: number ): void {
        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

        crc2.fillStyle = "rgb(0,205,0)";
        crc2.fillRect( 0, crc2.canvas.height - _forestHeight, crc2.canvas.width, crc2.canvas.height );
    }
    
    //Äpfel
    function drawApples( _x: number, _y: number, _radius: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,0,0)";
        crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    
    //Orangen
    function drawOranges( _x: number, _y: number, _radius: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,144,0)";
        crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    
    
    //Korb
    function drawBasket( _x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(139,69,0)";
        crc2.moveTo(400, 630);
        crc2.bezierCurveTo(400, 700, 500, 700, 500, 630);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    
        drawHenckel(500, 630);
    
    }
        
        function drawHenckel( _x: number, _y: number): void {
        crc2.beginPath();
        //crc2.fillStyle = "rgb(139,69,0)";
        crc2.moveTo(500, 630);
        crc2.bezierCurveTo(500, 560, 400, 560, 400, 630);
        crc2.closePath();
        crc2.stroke();
        //crc2.fill();
     }
    
        //Bäume
        function drawTrees( _x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(139,90,0)";
            crc2.moveTo(100, 600);
            crc2.bezierCurveTo(150, 480, 150, 300, 150, 300);
   
            crc2.moveTo(150, 300);
            crc2.lineTo(250, 300);
            
            crc2.moveTo(250, 300);
            crc2.bezierCurveTo(250, 300, 250, 480, 300, 600);
            
            crc2.moveTo(300, 600);
            crc2.lineTo(100, 600);
            
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            
            //Laubhaufen
            
            drawBush2(180, 220, 70 );
            drawBush1(120, 280, 70 );
            drawBush3(180, 300, 70 );
            drawBush4(240, 260, 70 );
            
            
         }
    
    
        function drawBush1( _x: number, _y: number, _radius: number ): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0,139,0)";
            crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        
        function drawBush3( _x: number, _y: number, _radius: number ): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(188,238,104)";
            crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    
        function drawBush2( _x: number, _y: number, _radius: number ): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(188,238,104)";
            crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    
        function drawBush4( _x: number, _y: number, _radius: number ): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0,139,0)";
            crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    
    
        function drawClouds( _x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(255,250,250)";
            crc2.moveTo(200, 200);
            crc2.bezierCurveTo(150, 160, 230, 120, 260, 160);
            
            crc2.moveTo(260, 160);
            crc2.bezierCurveTo(280, 150, 320, 140, 350, 170);
            
            
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
    
    
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
