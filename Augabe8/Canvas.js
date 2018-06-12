var L08_Canvas;
(function (L08_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Boden
        crc2.fillStyle = "rgb(189,183,107)";
        crc2.fillRect(0, 0, 800, 600);
        //Wasser
        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect(0, 0, 800, 400);
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=Canvas.js.map