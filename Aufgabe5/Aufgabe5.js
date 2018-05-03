var Aufgabe_5;
(function (Aufgabe_5) {
    //Variablen definieren
    //Anzehl Spieler
    let numPlayers = 0;
    //Anzahl Kartenpaare
    Aufgabe_5.numPairs = 5;
    //Array welches alle offenen Karten trackt.
    let openCards = [];
    //Variable des momentanen Kartendecks
    let currentCardDeck = undefined;
    //Variable counter anlegen
    let counter = 0;
    //Variable l für die Gratulation erstellen
    let l = 0;
    let nehmeKlicksAn = true;
    //Leeres Array um die Karten später hinein abspeichern zu können
    let cardArray = [];
    //Arrays erstellen um  den Score und Anzahl der Spieler später abzuspeichern
    let playerNames = [];
    let score = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    window.addEventListener("click", verarbeiteKlick);
    Aufgabe_5.populateDecks();
    //Funktion erstellen
    function verarbeiteKlick(_event) {
        let target = _event.target;
        //Konsolenausgabe
        console.log(_event);
        //Bedingung umgedrehte Karte und die Klicks müssen angenommen werden
        if (target.classList.contains("hidden") && nehmeKlicksAn) {
            //Wenn der Counter kleiner 2, hidden verschwindet und die angeklickte Karte wird in das openCard Array gepusht
            if (counter < 2) {
                target.classList.remove("hidden");
                openCards.push(target);
            }
            //Counter wird hochgezählt
            counter++;
            //Counter ist gleich Zwei
            if (counter == 2) {
                //Es werden keine Klicks auf der Karte mehr angenommen
                nehmeKlicksAn = false;
                //Counter wird auf 0 gesetzt
                counter = 0;
                //Inhalt der Karten wird überprüft, sind die Karten gleich oder nicht?
                if (openCards[0].innerText === openCards[1].innerText) {
                    //setTimeout Funktion
                    setTimeout(() => {
                        //Die Karten werden genommen
                        openCards[0].classList.add("taken");
                        openCards[1].classList.add("taken");
                        //Das openCards Array wird geleert
                        openCards = [];
                        //Es werden wieder Klicks angenommen
                        nehmeKlicksAn = true;
                        //Wenn keine Karte mehr mit der Klasse hidden gefunden wurde ist das Spiel vorbei und die Gratulationsbox erscheint
                        if (document.getElementsByClassName("hidden").length == 0) {
                            alert("Glückwunsch, du hast gewonnen!");
                        }
                        //Die Karten werden nach 2 sec. von der Spielfläche entfernt
                    }, 2000);
                }
                else {
                    //setTimeout Funktion
                    setTimeout(() => {
                        //Wenn die Karten nicht gleich sind drehen sie sich wieder um
                        openCards[0].classList.add("hidden");
                        openCards[1].classList.add("hidden");
                        //Das openCards Array wird wieder geleert
                        openCards = [];
                        //Danach werden wieder Klicks angenommen
                        nehmeKlicksAn = true;
                        //Es dauert 2 sek. bis sich die Karten wieder umgedreht haben
                    }, 2000);
                }
            }
        }
    }
    //Funktion erstellen, damit alle Karten umgedreht sind beim Spielbeginn
    function randomState() {
        //Alle Karten sind umgedreht
        return "hidden";
    }
    Aufgabe_5.randomState = randomState;
    //Karten mischen -> Shuffle Funktion (Karten sollen durchgemischt werden, es sollen nicht immer die selben Karten auf dem Spielfeld erscheinen)
    function shuffleCards() {
        //Variable i wird definiert, sie ist so groß wie die Länge des cardArrays
        let i = cardArray.length;
        //Variable j wird definiert, sie entspricht der Zahl 0
        let j = 0;
        //Variable temp wird definiert als string ohne Textinhalt.
        let temp = "";
        //Variable i(Länge des Arrays) wird immer um 1 herunter gezählt und muss immer größer 0 sein
        while (--i > 0) {
            //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf
            j = Math.floor(Math.random() * (i + 1));
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }
    //Spielfeld wird erzeugt
    //Funktion wird erstellt, um das Hauptspielfeld zu erzeugen
    function createGame() {
        //Aufruf der id im Html Dokument
        let node = document.getElementById("Spielfeld");
        //Funktion shuffleCards wird aufgerufen, damit die Karten bei jedem Spiel gemischelt werden
        shuffleCards();
        //Überschrift wird erstellt
        let header = document.createElement("h2");
        header.innerText = "Spielfeld";
        node.appendChild(header);
        //Spielfeld innerhalb eines Divs
        let spielFeld = document.createElement("div");
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement("div");
            card.id = i.toString();
            card.setAttribute("attr", i.toString());
            card.classList.add(cardArray[i]);
            card.classList.add(randomState());
            card.textContent = cardArray[i];
            //CSS wird definiert
            card.style.backgroundColor = currentCardDeck.color;
            card.style.fontFamily = currentCardDeck.font;
            card.style.fontSize = currentCardDeck.size + "px";
            card.style.color = currentCardDeck.textColor;
            spielFeld.appendChild(card);
        }
        node.appendChild(spielFeld);
        //Ausgabe auf die Konsole
    }
    //Spieleranzeige erstellen
    //Funktion playerInfo erstellen
    function playerInfo() {
        //Aufruf der id im Html Dokument
        let node = document.getElementById("Spielerinfo");
        //HTML string
        let childNodeHTML = "";
        //Div erzeugen
        childNodeHTML += "<div>";
        //Schleife erstellen, i=0, i ist größer als die Länge des Spieler Arrays, i wird hochgezählt
        for (let i = 0; i < playerNames.length; i++) {
            //Id "Spieler" wird erzeugt (untergeordnete id)
            childNodeHTML += "<div id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";
            //Paragraph für Spielrnamen wird erzeugt
            childNodeHTML += "<p>Spielername: ";
            childNodeHTML += playerNames[i];
            childNodeHTML += "</p>";
            //Paragraph für Punktestand wird erzeugt
            childNodeHTML += "<p>Punktestand: ";
            //Zugriff auf den Punktestandarray
            childNodeHTML += score[i];
            childNodeHTML += "</p></div>";
        }
        //Div wird geschlossen
        childNodeHTML += "</div>";
        //Inhalt der Knoten mit childNodeHTML befüllen
        node.innerHTML += childNodeHTML;
        //Ausgabe auf die Konsole
        console.log(childNodeHTML);
    }
    //Funktion graduation erstellen
    function graduation() {
        //Es wird geprüft, ob die Anzahl der richtigen Paare die Anzahl auf dem Spielfeld sind
        if (l == Aufgabe_5.numPairs) {
            //Alertbox erstellen
            alert("Gratualation, du hast gewonnen!");
        }
    }
    //Hauptfunktion wird erzeugt
    //Funtkion main aufstellen
    function main() {
        //Funtion für die Spielerabfrage erstellen
        //Variable für Spielernzahl definieren
        let spielerAnzahl;
        //Variable collection als NodeListOfElement
        //NodeList Objekte sind Sammlungen von Knoten
        let collection = document.getElementById("spieleranzahl").getElementsByTagName("input");
        // i=0, größer als die Länge von collection und wird hochgezählt
        for (let i = 0; i < collection.length; i++) {
            //Spieleranzahl wird hochgezählt 
            if (collection[i].checked) {
                spielerAnzahl = i + 1;
                break;
            }
        }
        //Eingabe Spielernamen
        collection = document.getElementById("name").getElementsByTagName("input");
        //Wenn kein Spielername eingegeben wurde, heißt der Spieler Jeff
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].value == "" && i == 0) {
                playerNames.push("Jeff");
            }
            else if (collection[i].value != "") {
                playerNames.push(collection[i].value);
            }
        }
        //Auswahl des Kartensatzes
        collection = document.getElementById("kartensatz").getElementsByTagName("input");
        //Wenn beim Kartendeck nichts ausgewählt wird, erscheint automatisch das Kartendeck "animals"
        if (currentCardDeck == undefined)
            currentCardDeck = Aufgabe_5.decks["animals"];
        //Karten werden erzeugt
        populateCardArray(currentCardDeck.content);
        //Spielbrett erzeugen 
        createGame();
        //Spielerinfo erzeugen
        playerInfo();
        //Starteinstellung wird nach der Einstellung gelöscht
        document.getElementById("starteinstellungen").remove();
    }
    Aufgabe_5.main = main;
    //Für den Kartenpaare Slider
    function onInputEvent(value) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        Aufgabe_5.numPairs = value;
    }
    Aufgabe_5.onInputEvent = onInputEvent;
    //Karten werden hinzugefügt
    function populateCardArray(karten) {
        //Kartenpaare werden erzeugt
        for (let i = 0; i < Aufgabe_5.numPairs; i++) {
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }
    }
    //Für Auswahl des Kartensatzes, damit sich die Länge anpasst
    function bearbeiteKartenSatzKlick(element) {
        currentCardDeck = Aufgabe_5.decks[element.value];
        repopulateCardForm();
    }
    Aufgabe_5.bearbeiteKartenSatzKlick = bearbeiteKartenSatzKlick;
    //Fehlererkennung (Slider ansich ändert sich)
    function repopulateCardForm() {
        let kartenPaareElement = document.getElementById("kartenpaare");
        kartenPaareElement.max = currentCardDeck.content.length.toString();
        let maxWert = currentCardDeck.content.length;
        let momentanerWert = parseInt(kartenPaareElement.value);
        if (maxWert < momentanerWert) {
            kartenPaareElement.value = maxWert.toString();
        }
        //Update des HTML (Zahl neben dem Slider ändert sich)
        document.getElementById("kartenpaare-label").innerText = kartenPaareElement.value;
    }
    //Spieleranzahl und Spielername
    function bearbeiteSpielerZahlKlick(element) {
        //parseInt = String wird zu einer ganzen Zahl umgewandelt
        let spielerZahl = parseInt(element.value);
        for (let i = 1; i <= 4; i++) {
            //`player${i}`: Innerhalb eines String wird Javascripts aufgerufen, zur Bearbeitung  
            let inputElement = document.getElementById(`player${i}`);
            let labelElement = document.getElementById(`player${i}-label`);
            if (i <= spielerZahl) {
                inputElement.disabled = false;
                labelElement.style.opacity = "1";
            }
            else {
                inputElement.disabled = true;
                labelElement.style.opacity = "0.33";
                inputElement.value = "";
            }
        }
    }
    Aufgabe_5.bearbeiteSpielerZahlKlick = bearbeiteSpielerZahlKlick;
})(Aufgabe_5 || (Aufgabe_5 = {}));
//# sourceMappingURL=Aufgabe5.js.map