var Abschlussarbeit;
(function (Abschlussarbeit) {
    class BubbleRed extends Abschlussarbeit.MovingObject {
        constructor() {
            super();
            this.points = 10;
            this.color = "rgb(255,0,0)";
            this.setRandomPosition();
        }
    }
    Abschlussarbeit.BubbleRed = BubbleRed;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=RedBubble.js.map