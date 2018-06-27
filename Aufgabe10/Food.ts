namespace L10_Canvas {

    export class Food extends Shoal {

        constructor( _color: string ) {
            super( _color );
        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 10;
        }

        move(): void {

            this.x += 0;
            /*this.y += 2;

            if ( this.y < 0 ) {
                this.y = 350;
            }*/

            if ( this.y < 600 ) {
                this.y += 2;
            }

            else if ( this.y >= 600 ) {
                this.y += 0;
            }
        }

        //Funktion Luftblasen aus der Kiste

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}