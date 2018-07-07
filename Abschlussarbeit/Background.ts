namespace Abschlussarbeit {

    export class Hintergrund {



        public paint(): void {

            this.drawSun( 750, 100, 70 );
            this.drawBackground( 100 );

        }

        //Funktion Hintergrund
        drawBackground( _forestHeight: number ): void {
            crc2.fillStyle = "rgb(100,149, 237)";
            crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

            crc2.fillStyle = "rgb(0,205,0)";
            crc2.fillRect( 0, crc2.canvas.height - _forestHeight, crc2.canvas.width, crc2.canvas.height );
        }

        //Sonne
        drawSun( _x: number, _y: number, _radius: number ): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(255,255,0)";
            crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}
            
            