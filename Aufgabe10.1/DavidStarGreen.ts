namespace L11_Inheritance  {
    
    export class DavidStarGreen extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }
        
        move(): void {
            this.x -= 3 ;
            this.y += 4 ;
        }
    }
}