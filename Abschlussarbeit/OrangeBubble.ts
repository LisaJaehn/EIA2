namespace Abschlussarbeit {

    export class BubbleOrange extends MovingObject {

        constructor() {
            super();
            this.points = 3;
            this.color = "rgb(255,144,0)";
            this.setRandomPosition();
        }
    }
}
