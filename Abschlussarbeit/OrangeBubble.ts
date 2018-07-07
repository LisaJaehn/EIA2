namespace Abschlussarbeit {

    export class BubbleOrange {

        x: number;
        y: number;
        radius: number;

        move() {


        }

    }

    draw(): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,144,0)";
        crc2.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
  }