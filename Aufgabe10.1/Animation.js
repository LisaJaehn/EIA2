var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 50;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        canvas.addEventListener("mousedown", insertNewBubbles, false);
        for (let i = 0; i < n; i++) {
            let star = new L11_Inheritance.DavidStar("#00ffff");
            stars.push(star);
            let rect = new L11_Inheritance.Rect("#ff0000");
            stars.push(rect);
            let circle = new L11_Inheritance.Circle("#FF1493");
            stars.push(circle);
            let triangle = new L11_Inheritance.Triangle("#CD2990");
            stars.push(triangle);
        }
        animate();
    }
    //Bei Klick ensteht ein gelber Stern
    function insertNewObject(_event) {
        let star = new L11_Inheritance.DavidStar("#ffff00");
        stars.push(star);
        let circle = new L11_Inheritance.Circle("#FF4500");
        stars.push(circle);
    }
    function insertNewBubbles() {
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Animation.js.map