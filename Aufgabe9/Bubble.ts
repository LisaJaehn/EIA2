namespace L09_Canvas {


    export class Blasen {
        x: number;
        y: number;
        radius: number;


        move(): void {

            this.x += 0;
            this.y -= 2;
        }


        //Funktion Luftblasen aus der Kiste

        drawBubble(): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(152,245,255)";
            ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }

    }

}