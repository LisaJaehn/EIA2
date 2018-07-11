namespace Abschlussarbeit {

    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    let movingObjects: MovingObject[] = [];
    let m: number = 3;

    let trees: Tree[] = [];
    let n: number = 4;

    let highscore: number = 0;

    let basket: Basket = new Basket();
    basket.x = 450;
    basket.y = 630;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );

        let hg: Background = new Background;
        hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height );
        console.log( imgData );

        document.addEventListener('keydown', moveBasket);
        document.addEventListener('touchmove', moveBasketTouch);

        //Bäume

        for ( let i: number = 0; i < n; i++ ) {
            let tree: Tree = new Tree();
            tree.x = Math.random() * 900;
            tree.y = ( 550 );

            trees.push( tree );
        }

        animate();
        checkBubblePosition();
        createBubbles();
    }

    function animate(): void {
        window.setTimeout( animate, 10 );
        crc2.putImageData( imgData, 0, 0 );

        moveObjects();
        drawObjects();
    }

    function checkBubblePosition(): void {
      window.setTimeout( checkBubblePosition, 10 );
      for ( let i: number = 0; i < movingObjects.length; i++ ) {
        let bubble = movingObjects[i];
        let inside = basket.checkIfInside(bubble.x, bubble.y );

        if(inside) {
          movingObjects.splice(i, 1);
          updateHighscore(bubble.points);
        }
      }
    }

    function createBubbles(): void {
      window.setTimeout( createBubbles, 500 );

      let rand: number = Math.floor(Math.random() * 3);
      switch(rand) {
        case 0:
          let bubblesRed: BubbleRed = new BubbleRed();
          movingObjects.push( bubblesRed );
          break;
        case 1:
          let bubblesOrange: BubbleOrange = new BubbleOrange();
          movingObjects.push( bubblesOrange );
          break;
        case 2:
          let bubblesPink: BubblePink = new BubblePink();
          movingObjects.push( bubblesPink );
          break;
      }

    }

    function moveBasket(_event: KeyboardEvent): void {
      if(_event.key == "ArrowRight") {
        basket.moveRight();
      }
      if(_event.key == "ArrowLeft") {
        basket.moveLeft();
      }
    }

    function moveBasketTouch(_event: TouchEvent): void {
      if(_event.changedTouches[0].clientX < crc2.canvas.clientWidth/2) {
        basket.moveLeft();
      } else {
        basket.moveRight();
      }
      console.log(_event, crc2.canvas.clientWidth/2);
    }

    function moveObjects(): void {

        for ( let i: number = 0; i < movingObjects.length; i++ ) {
            movingObjects[i].move();

        }
    }

    function drawObjects(): void {

        for ( let i: number = 0; i < trees.length; i++ )
            trees[i].draw();

        for ( let i: number = 0; i < movingObjects.length; i++ )
            movingObjects[i].draw();

        basket.draw();
        showHighscore();
    }

    function updateHighscore(points: number): void {
      highscore += points;
      if(highscore >= 200) {
        alert("Glückwunsch!");
        highscore = 0;
      }
    }

    function showHighscore(): void {
      crc2.font="30px Arial";
      crc2.fillStyle = "#000000";
      crc2.fillText("Punkte: " + highscore, 10, 50);
    }
}
