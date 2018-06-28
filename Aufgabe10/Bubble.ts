namespace L10_Canvas {

    export class Waterbubble extends MovingObject {

        constructor( _color: string ) {
            super( _color );
        }

        setRandomPosition(): void {
            this.x = ( 110 );
            this.y = Math.random() * 370;
            this.radius = Math.random() * 10;
        }

        move(): void {

            this.x += 0;
            this.y -= 2;

            if ( this.y < 0 ) {
                this.y = 350;
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