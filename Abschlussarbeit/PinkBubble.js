var Abschlussarbeit;
(function (Abschlussarbeit) {
    class BubblePink extends Abschlussarbeit.MovingObject {
        constructor() {
            super();
            this.points = 5;
            this.color = "rgb(255,0,255)";
            this.setRandomPosition();
        }
    }
    Abschlussarbeit.BubblePink = BubblePink;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=PinkBubble.js.map