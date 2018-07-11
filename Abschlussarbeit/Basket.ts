namespace Abschlussarbeit {

    export class Basket {

        x: number;
        y: number;

        basketWidth: number = 100;
        basketHeight: number = 70;

        moveLeft(): void {
          if(this.x > 0) {
            this.x -= 10;
          }
        }

        moveRight(): void {
          if(this.x+this.basketWidth < crc2.canvas.width) {
              this.x += 10;
          }
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(139,69,0)";
            crc2.moveTo( this.x, this.y );
            crc2.bezierCurveTo( this.x, this.y + this.basketHeight, this.x + this.basketWidth, this.y + this.basketHeight, this.x + this.basketWidth, this.y );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            this.drawHenkel();
        }

        drawHenkel(): void {
            crc2.beginPath();
            crc2.moveTo( this.x+this.basketWidth, this.y );
            crc2.bezierCurveTo( this.x+50, this.y - this.basketHeight, this.x+50, this.y - this.basketHeight, this.x, this.y );
            crc2.closePath();
            crc2.stroke();
        }

        checkIfInside(_x: number, _y: number): boolean {
          if(_x > this.x && _x < (this.x + this.basketWidth) && _y > this.y && _y < this.y + this.basketHeight) {
            return true;
          }
          return false;
        }
    }
  }
