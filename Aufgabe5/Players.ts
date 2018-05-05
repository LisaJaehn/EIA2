namespace Aufgabe_5 {

    //Speicherort für die Spielernamen und Score

    export interface Player {

        name: string;
        points: number;
    }

    export interface Players {
        [players: string]: Player;
    }

    export let players: Players = {}  //Objekt
}









