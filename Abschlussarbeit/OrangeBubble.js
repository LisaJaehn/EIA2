var Abschlussarbeit;
(function (Abschlussarbeit) {
    class BubbleOrange extends Abschlussarbeit.MovingObject {
        constructor() {
            super();
            this.points = 3;
            this.color = "rgb(255,144,0)";
            this.setRandomPosition();
        }
    }
    Abschlussarbeit.BubbleOrange = BubbleOrange;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=OrangeBubble.js.map