namespace L10_Canvas {

    export class Shoal extends MovingObject {

        constructor() {
            super();
            this.setRandomPosition();
            this.setRandomColor();
        }
        
        setRandomColor(): void {
            this.r = Math.random() * 300;
            this.g = Math.random() * 300;
            this.b = Math.random() * 300;
            }

        setRandomPosition(): void {

            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
            this.r = Math.random() * 300;
            this.g = Math.random() * 300;
            this.b = Math.random() * 300;
        }

        move(): void {

            this.x += 2;
            this.y += 0;

            if ( this.x > 640 ) {
                this.x = -40;
            }
        }

        //Funktion Fische
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.moveTo( this.x, this.y );
            crc2.bezierCurveTo( this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20 );
            crc2.moveTo( this.x, this.y + 20 );
            crc2.lineTo( this.x - 20, this.y + 10 );
            crc2.lineTo( this.x - 25, this.y + 15 );
            crc2.lineTo( this.x - 25, this.y );
            crc2.lineTo( this.x - 20, this.y + 5 );
            crc2.lineTo( this.x, this.y );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
    }
}