var L11_Inheritance;
(function (L11_Inheritance) {
    class DavidStarGreen extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x -= 3;
            this.y += 4;
        }
    }
    L11_Inheritance.DavidStarGreen = DavidStarGreen;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=DavidStarGreen.js.map