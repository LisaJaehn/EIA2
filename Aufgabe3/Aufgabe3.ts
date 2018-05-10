namespace Memorie {


//Variablen definieren

    let numPlayers: number;
    let numPairs: number;

    let fieldSize: number = 4;

    let cardArray: string[] = [];


//Doppelte Anzahl an Karten erzeugen
    let numCards: number;
    numPairs * 2;

//Karteninhalt definieren

    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let takenCardContent: boolean[] = [];

    // Funktion zum Karten generieren
    export function createCards() {
        // Feld auffüllen mit leeren Karten
        for (var i = 0; i < fieldSize * fieldSize; i++) {
            cardArray.push("");
        }

        // Anzahl der Paare berechnen
        let _numPairs: number = fieldSize * fieldSize / 2;


        // Loop through each letter of cardContent and add a boolean value of 'false'
        // to takenCardContent to keep track which letter has already been used.
        for (var letter = 0; letter < cardContent.length; letter++)
            takenCardContent.push(false);

        // Schleife durch alle moöglichen Paare, also 6 * 6 / 2 = 18
        // Wird 18 mal ausgeführt..
        for (var i = 0; i < _numPairs; i++) {

            let contentIsTaken: boolean = true;

            // Random Buchstabe generieren.
            let letterIndex: number = getRandomAvailableContent();
            let letter: string = cardContent[letterIndex];

            // Hiermit bestätigen wir dass der Buchstabe benutzt wurde.
            takenCardContent[letterIndex] = true;

            // Mit diesem Wert schauen wir, ob beide Karten gelegt wurden.
            let spotIsTaken: boolean[] = [true, true];
            // Wir machen das 2 mal
            for (var j = 0; j < 2; j++) {
                // Solange der Spot der generiert wurde belegt ist,
                // generiere eine neue Zahl und versuche eine leere Karte zu finden.
                while (spotIsTaken[j]) {
                    // Random Zahl generieren.
                    let spotIndex = Math.floor(Math.random() * Math.floor(cardArray.length))
                    // Schauen ob die Karte belegt ist oder nicht
                    if (cardArray[spotIndex] === "") {
                        spotIsTaken[j] = false;
                        cardArray[spotIndex] = letter;
                    }
                }
            }
        }
        // HTML generieren
        populateField();
    }

    // Funktion zum erstellen des HTMLs
    function populateField() {
        // Die momentane Reihe als Buffer
        let currentRow: HTMLElement;
        // Das globale Feld Element
        let field = document.getElementById('spielfeld');
        // Loope durch jede Karte durch
        for (var i = 0; i < cardArray.length; i++) {
            // Wenn der Rest von i / feldGröße gleich 0 ist, fange eine
            // neue Reihe an indem ein neues div Element generiert wird.
            if (i % fieldSize == 0) {

                currentRow = document.createElement('div');
                // Gebe diesem Element die Klasse 'row'
                currentRow.className = "row";
            }

            // Erstelle ein Card Element
            let newElement = document.createElement('div');
            newElement.className = 'card';
            // Erstelle ein H1 Element (dieser zeigt den Text an)
            let textElement = document.createElement('h1');
            textElement.innerText = cardArray[i];

            // Füge den Text als Kind der Karte hinzu
            newElement.appendChild(textElement);
            // Füge die Karte als Kind der Reihe hinzu
            currentRow.appendChild(newElement);

            // Wenn der Rest von i / feldGröße gleich feldGröße -1 ist,
            // füge die Reihe als Kind des Spielfelds hinzu.
            if (i % fieldSize == fieldSize - 1) {
                field.appendChild(currentRow);
            }
        }
    }

    // Debug Funktion, kann man ignorieren.
    export function debugDrawField() {
        console.log(`length: ${cardContent.length}`);

        let row = "";
        for (var i = 0; i < (fieldSize * fieldSize); i++) {
            if (i % fieldSize == 0)
                row = "";

            row += cardArray[i] + " ";

            if (i % fieldSize == fieldSize - 1)
                console.log(row);
        }
    }

    // Funktion zum generieren einer random Zahl, die einem Buchstaben entspricht.
    function getRandomAvailableContent(): number {

        let letterIndex = Math.floor(Math.random() * Math.floor(cardContent.length));
        let contentIsTaken = takenCardContent[letterIndex];

        // Wenn der Buchstabe schon benutzt wurde, führt sich die Funtion sebst rekursiv aus.
        if (contentIsTaken) {
            return getRandomAvailableContent();
        }

        else return letterIndex;
    }
 

}
