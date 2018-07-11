namespace Abschlussarbeit {

    export class BubblePink extends MovingObject{

        constructor() {
            super();
            this.points = 5;
            this.color = "rgb(255,0,255)";
            this.setRandomPosition();
        }
    }
}
