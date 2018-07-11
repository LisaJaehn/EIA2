namespace Abschlussarbeit {

    export class BubbleRed extends MovingObject {

        constructor() {
            super();
            this.points = 10;
            this.color = "rgb(255,0,0)";
            this.setRandomPosition();
        }
    }
}
