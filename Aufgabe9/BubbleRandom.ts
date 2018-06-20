namespace L09_Canvas {
    
    
    export class BlasenRandom {
        x: number;
        y: number;
        radius: number;

       
        move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }   
    
    
        //Funktion Luftblasen random im Wasser

            drawBubblesRandom(): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(255,250,240)";
            ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }
    
     }    
    
    
}