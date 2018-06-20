namespace L09_Canvas {

    export class Background
 
     paint (){
        this.drawBackground( 260 );
        this.drawStone( 260, 380 );
        this.drawTreasureChest( 60, 370, 100, 60 );
        this.drawDeckel( 87, 290 );
        this.drawShip( 100, 450 );
        this.drawStar( 310, 420 );
        this.drawPlant1( 110, 640 );
        this.drawPlant1( 290, 640 );
        this.drawPlant1( 50, 640 );
    }


    //Methoden

    //Funktion Schatztruhe

    drawTreasureChest( _x: number, _y: number, _width: number, _height: number ): void {
        crc2.fillStyle = "rgb(139,69,000)";
        crc2.fillRect( _x, _y, _width, _height );
    }

    //Funktion Deckel Schatztruhe

    drawDeckel( _x: number, _y: number ): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(139,69,000)";
        ctx.moveTo( _x, _y );
        ctx.bezierCurveTo( _x + 90, _y - 50, _x + 90, _y + 70, _x + 70, _y + 80 );
        crc2.closePath();
        //ctx.stroke();
        crc2.fill();
    }

    //Funktion Hintergrund

    drawBackground( _sandHeight: number ): void {
        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

        crc2.fillStyle = "rgb(189,183,107)";
        crc2.fillRect( 0, crc2.canvas.height - _sandHeight, crc2.canvas.width, crc2.canvas.height );
    }

    //Funktion Schiffskörper

    drawShip( _x: number, _y: number ): void {
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

        this.drawShipsflag( _x + 70, _y );
    }

    //Funktion Schiffsmasten

    drawShipsflag( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.moveTo( _x, _y );
        crc2.lineTo( _x, _y - 120 );
        crc2.closePath();
        crc2.stroke();

        //Funktion Flagge wird aufgerufen

        this.drawFlag( _x, _y - 120 );
    }

    //Funktion Schiffsflagge

    drawFlag( _x: number, _y: number ): void {
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

    drawPlant1( _x: number, _y: number ): void {
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

    drawPlant2( _x: number, _y: number ): void {
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

    drawPlant3( _x: number, _y: number ): void {
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

    drawStar( _x: number, _y: number ): void {
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

    drawStone( _x: number, _y: number ): void {
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
}