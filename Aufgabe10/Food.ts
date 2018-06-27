namespace L10_Canvas {

    export class Food {
        x: number;
        y: number;
        radius: number;

        move(): void {

            this.x += 0;
            this.y += 2;
            
            if ( this.y < 0 ) {
                this.y = 300;
            }
        }

        //Funktion Luftblasen aus der Kiste

        drawFood(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(255,185,15)";
            crc2.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

    }
}