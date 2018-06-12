var L08_Canvas;
(function (L08_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=Canvas.js.map