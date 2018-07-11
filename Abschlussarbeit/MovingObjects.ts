namespace Abschlussarbeit {

    export class MovingObject {

        x: number;
        y: number;
        radius: number = 10;
        points: number;
        color: string;

        constructor() {

        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
        }

        move(): void {
            this.x += 0;
            this.y += 2;
        }

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
