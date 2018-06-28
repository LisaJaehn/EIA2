namespace L10_Canvas {

    export class BlasenRandom extends MovingObjects {

        constructor( _color: string ) {
            super( _color );
        }

        setRandomPosition(): void {

            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
            this.radius = Math.random() * 10;
        }

        move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }

        //Funktion Luftblasen random im Wasser

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