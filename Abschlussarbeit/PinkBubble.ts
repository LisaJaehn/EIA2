namespace Abschlussarbeit {

    export class BubblePink extends MovingObject{

        constructor() {
            super();
            this.setRandomPosition();
            
        }

        move(): void {
            this.x += 0;
            this.y += 2;
            
            if ( this.y > 700 ) {
                this.y = -40;
            }

        }
        
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
            this.radius= 10;
            
        }


        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(255,0,255)";
            crc2.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}