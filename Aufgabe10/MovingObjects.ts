namespace L10_Canvas {

    export class MovingObjects {

        x: number;
        y: number;
        r: number;
        b: number;
        g: number;
        color: string;
        radius: number;

        constructor( _color: string ) {
            this.setRandomPosition();
            this.color = _color;
        }

        setRandomPosition(): void { }
        move(): void { }
        draw(): void { }
    }
}