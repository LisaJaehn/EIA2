var Aufgabe_3;
(function (Aufgabe_3) {
    //Variablen definieren
    //Anzehl Spieler
    let numPlayers = 0;
    //Anzahl Kartenpaare
    let numPairs = 0;
    //Array welches alle offenen Karten trackt.
    let openCards = [];
    //Variable counter anlegen
    let counter = 0;
    //Variable l für die Gratulation erstellen
    let l = 0;
    let nehmeKlicksAn = true;
    //Karten einen Inhalt geben
    let cardContent = ["Panda", "Koala", "Löwe", "Delfin", "Hase", "Bär", "Katze", "Hund", "Känguru", "Maus"];
    //Leeres Array um die Karten später hinein abspeichern zu können
    let cardArray = [];
    //Arrays erstellen um  den Score und Anzahl der Spieler später abzuspeichern
    let player = [];
    let score = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    window.addEventListener("click", init);
    //Funktion erstellen
    function init(_event) {
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
        //HTML string
        let childNodeHTML = "";
        //H2 erzeugen
        childNodeHTML += "<h2>Spielfeld</h2>";
        //Div erzeugen
        childNodeHTML += "<div>";
        //Schleife erstellen, i=0, muss kleiner als die cardArray Länge sein und wird hochgezählt
        for (let i = 0; i < cardArray.length; i++) {
            //Div öffnen
            //Divs bekommen ein Attribut, zur Zuordung des Inhaltes und zur Verdeckung (Jede id heißt anders durch das +1)
            childNodeHTML += "<div id = " + i + " attr = " + i + " class = ' ";
            //Aufruf der Funktion randomState für den Status der Karte
            childNodeHTML += cardArray[i] + " " + randomState();
            childNodeHTML += " ' >";
            //cardArray wird aufgerufen
            childNodeHTML += cardArray[i];
            childNodeHTML += "</div>";
        }
        //div schließen
        childNodeHTML += "</div>";
        //Inhalt der Knoten mit childNodeHTML befüllen    
        node.innerHTML += childNodeHTML;
        //Ausgabe auf die Konsole
        console.log(childNodeHTML);
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
        for (let i = 0; i < player.length; i++) {
            //Id "Spieler" wird erzeugt (untergeordnete id)
            childNodeHTML += "<div id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";
            //Paragraph für Spielrnamen wird erzeugt
            childNodeHTML += "<p>Spielername: ";
            childNodeHTML += player[i];
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
        if (l == numPairs) {
            //Alertbox erstellen
            alert("Gratualation, du hast gewonnen!");
        }
    }
    //Hauptfunktion wird erzeugt
    //Funtkion main aufstellen
    function main() {
        //Ausgabe auf die Konsole
        console.log("main");
        //Funtion für die Spielerabfrage erstellen
        //Variable i definieren,, wenn i wahr ist
        let i = true;
        while (i) {
            //Popup für Spieleranzeige wird erstellt, 10 steht für das Dezimalsystem
            numPlayers = parseInt(prompt("Bitte wählen Sie zwischen 1 und 4 Spielern"), 10);
            //Die Spieleranzahl muss größer gleich 1 und kleiner gleich 4 sein, damit 1-4 Spieler möglich sind
            if (numPlayers >= 1 && numPlayers <= 4) {
                //Ansonsten ist i unwahr
                i = false;
            }
        }
        //Schleife für die Abfrage der Spielernamen wird erzeugt, Variable i wird definiert, i=0, i ist kleiner als die Anzahl der Spieler, i wird hochgezählt
        for (let i = 0; i < numPlayers; i++) {
            //Popup für Namen der Spieler wird erzeugt, wenn es mehrere Spielr gibt wird i hochgezählt und der Name des nächsten Spielers wird abgefragt
            player[i] = prompt("Bitte Spielernamen " + (i + 1) + " eingeben");
            //Wenn es keinen Spieler gibt, wird ein Spieler erzeugt, welcher Mickey heißt
            if (player[i] == null) {
                player[i] = "Josef";
            }
        }
        //Kartenpaarabfrage erstellen
        //i wird als wahr definiert
        i = true;
        while (i) {
            //Popup für Kartenpaarabfrage wird erstellt, 10 steht für das Dezimalsystem
            numPairs = parseInt(prompt("Bitte wählen Sie zwischen 5 und 10 Kartenpaaren"), 10);
            //Die Anzahl der Kartenpaare muss größer gleich 5 und kleiner gleich 10 sein
            if (numPairs >= 5 && numPairs <= 10) {
                //Ansonsten ist i unwahr
                i = false;
            }
        }
        //Schleife für die Kartenpaare erstellen, Verdopplung der Kartenpaare
        //Variable i wird definiert, i=0, ist kleiner als die Anzahl der Paare, i wird hochgezählt   
        for (let i = 0; i < numPairs; i++) {
            //Karteninhalt wird verdoppelt, Karten werden verdoppelt/angeheftet
            cardArray.push(cardContent[i]);
            cardArray.push(cardContent[i]);
        }
        //Spielbrett erzeugen 
        createGame();
        //Spielerinfo erzeugen
        playerInfo();
    }
    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollständig geladen ist
    document.addEventListener("DOMContentLoaded", main);
})(Aufgabe_3 || (Aufgabe_3 = {}));
//# sourceMappingURL=Game.js.map