namespace Abschlussarbeit {

    export class Tree {

        x: number;
        y: number;

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0,100,0)";
            crc2.moveTo( this.x, this.y );
            crc2.lineTo( this.x - 100, this.y );
            crc2.lineTo( this.x, this.y - 100 );
            crc2.lineTo( this.x - 80, this.y - 100 );
            crc2.lineTo( this.x, this.y - 200 );
            crc2.lineTo( this.x - 60, this.y - 200 );
            crc2.lineTo( this.x + 25, this.y - 300 );
            crc2.lineTo( this.x + 110, this.y - 200 );
            crc2.lineTo( this.x + 50, this.y - 200 );
            crc2.lineTo( this.x + 130, this.y - 100 );
            crc2.lineTo( this.x + 50, this.y - 100 );
            crc2.lineTo( this.x + 150, this.y );
            crc2.lineTo( this.x + 50, this.y );
            crc2.stroke();
            crc2.fill();


            this.drawTrunk();

        }

        drawTrunk(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(139,90,0)";
            crc2.moveTo( this.x, this.y + 50 );
            crc2.lineTo( this.x, this.y );
            crc2.lineTo( this.x + 50, this.y );
            crc2.lineTo( this.x + 50, this.y + 50 );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

    }
}