namespace Abschlussarbeit {

    export class Basket {

        x: number;
        y: number;

        move(): void {


        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(139,69,0)";
            crc2.moveTo( this.x, this.y );
            crc2.bezierCurveTo( this.x, this.y + 70, this.x + 100, this.y + 70, this.x + 100, this.y );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            this.drawHenkel(/* this.x + 150, this.y */);

            }

            drawHenkel(): void {
            crc2.beginPath();
            crc2.moveTo( this.x, this.y );
            crc2.bezierCurveTo( this.x, this.y - 70, this.x - 100, this.y - 70, this.x - 100, this.y );
            crc2.closePath();
            crc2.stroke();
        }
    }
  }