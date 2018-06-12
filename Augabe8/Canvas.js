var L08_Canvas;
(function (L08_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    let ctx;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);
        //Boden
        crc2.fillStyle = "rgb(189,183,107)";
        crc2.fillRect(0, 0, 800, 600);
        //Wasser
        crc2.fillStyle = "rgb(100,149, 237)";
        crc2.fillRect(0, 0, 800, 400);
        //Schatztruhe
        crc2.fillStyle = "rgb(139,69,000)";
        crc2.fillRect(100, 450, 100, 60);
        //Schiffswrak
        //Schiffskörper
        ctx.beginPath();
        crc2.fillStyle = "rgb(139,69,19 )";
        ctx.moveTo(450, 450);
        ctx.bezierCurveTo(450, 550, 590, 550, 590, 450);
        ctx.stroke();
        // crc2.beginPath();
        crc2.moveTo(450, 450);
        crc2.lineTo(590, 450);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Schiffsmasten
        crc2.beginPath();
        crc2.moveTo(520, 450);
        crc2.lineTo(520, 300);
        crc2.closePath();
        crc2.stroke();
        //Flagge
        ctx.beginPath();
        crc2.fillStyle = "rgb(238,0,0)";
        ctx.moveTo(520, 300);
        ctx.lineTo(430, 340);
        ctx.lineTo(520, 380);
        ctx.fill();
        drawBubble(200, 200);
    }
    //Funktion Luftblasen
    function drawBubble(_x, _y) {
        ctx.beginPath();
        crc2.fillStyle = "rgb(152,245,255)";
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
        crc2.fill();
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=Canvas.js.map