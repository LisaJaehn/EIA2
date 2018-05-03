namespace Aufgabe_5 {
    export interface Deck {

        name: string;
        content: string[];
        color: string;
        font: string;
        size: number;
        textColor: string;
    }

    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks: Decks = {}  //Objekt

    export function populateDecks() {
        decks["animals"] = {
            name: "animals",
            content: ["Panda", "Koala", "Löwe", "Delfin", "Hase", "Bär", "Katze", "Hund", "Känguru", "Maus"],
            color: "hsla(180, 100%, 80%, 0.8)",
            font: "Arial",
            size: 20,
            textColor: "#121212"
        };

        decks["planets"] = {
            name: "planets",
            content: ["Merkur", "Venus", "Erde", "Mars", "Jupiter", "Saturn", "Neptun", "Uranus", "Tatooine", "Endor"],
            color: "hsla(240, 100%, 50%, 0.8)",
            font: "Times New Roman",
            size: 30,
            textColor: "white"
        };

        decks["music"] = {
            name: "music",
            content: ["Metal", "Hip-Hop", "Elektro", "Lo-Fi", "Pop", "Rock", "Dance", "Techno", "Jazz", "Rap", "Klassik"],
            color: "hsla(35, 100%, 50%, 0.8)",
            font: "Calibri",
            size: 25,
            textColor: "white"
        };
    }
}









