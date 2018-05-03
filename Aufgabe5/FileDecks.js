var Aufgabe_5;
(function (Aufgabe_5) {
    Aufgabe_5.decks = {}; //Objekt
    function populateDecks() {
        Aufgabe_5.decks["animals"] = {
            name: "animals",
            content: ["Panda", "Koala", "Löwe", "Delfin", "Hase", "Bär", "Katze", "Hund", "Wal", "Kaninchen"],
            color: "hsla(180, 100%, 80%, 0.8)",
            font: "Arial",
            size: 20,
            textColor: "#121212"
        };
        Aufgabe_5.decks["planets"] = {
            name: "planets",
            content: ["Merkur", "Venus", "Erde", "Mars", "Jupiter", "Saturn", "Neptun", "Uranus", "Tatooine", "Endor", "Ahca-To", "Alderaan"],
            color: "hsla(240, 100%, 50%, 0.8)",
            font: "Times New Roman",
            size: 30,
            textColor: "white"
        };
        Aufgabe_5.decks["music"] = {
            name: "music",
            content: ["Metal", "Hip-Hop", "Elektro", "Lo-Fi", "Pop", "Rock", "Dance", "Techno", "Jazz", "Rap", "Klassik", "Indie", "Ska", "K-Pop"],
            color: "hsla(35, 100%, 50%, 0.8)",
            font: "Calibri",
            size: 25,
            textColor: "white"
        };
    }
    Aufgabe_5.populateDecks = populateDecks;
})(Aufgabe_5 || (Aufgabe_5 = {}));
//# sourceMappingURL=FileDecks.js.map