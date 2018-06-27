namespace L11_Inheritance {
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 50;


    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );

        canvas.addEventListener( "click", insertNewObject );


        for ( let i: number = 0; i < n; i++ ) {
            let star: DavidStar = new DavidStar( "#00ffff" );
            stars.push( star );

            let rect: Rect = new Rect( "#ff0000" );
            stars.push( rect );

            let circle: Circle = new Circle( "#FF1493" );
            stars.push( circle );

            let triangle: Triangle = new Triangle( "#CD2990" );
            stars.push( triangle );
        }


        animate();
    }

    //Bei Klick ensteht ein gelber Stern

    function insertNewObject( _event: MouseEvent ): void {
        /*let star: DavidStar = new DavidStar("#ffff00");
        stars.push(star);*/

        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let n: number = Math.floor( Math.random() * 2 );

        switch ( n ) {
            case 0:
                let star: DavidStar = new DavidStar( "#ffff00" );
                star.x = x;
                star.y = y;
                stars.push( star );
                break;

            case 1:
                let circle: Circle = new Circle( "#ffb90f" );
                circle.x = x;
                circle.y = y;
                stars.push( circle );
                break;

        }

    }

    function animate(): void {
        window.setTimeout( animate, 10 );

        crc2.clearRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for ( let i: number = 0; i < stars.length; i++ ) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for ( let i: number = 0; i < stars.length; i++ ) {
            stars[i].draw();
        }
    }
}