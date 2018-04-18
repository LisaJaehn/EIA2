var Aufgabe_3;
(function (Aufgabe_3) {
    //Variablen definieren
    //Anzehl Spieler
    let numPlayers = 0;
    //Anzahl Kartenpaare
    let numPairs = 0;
    //Karten einen Inhalt geben
    let cardContent = ["Panda", "Koala", "Löwe", "Delfin", "Hase", "Bär", "Katze", "Hund", "Känguru", "Maus"];
    //Leeres Array um die Karten später hinein abspeichern zu können
    let cardArray = [];
    //Arrays erstellen um  den Score und Anzahl der Spieler später abzuspeichern
    let player = [];
    let score = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    //Status mischen(Ist die Karte genommen, zugedeckt oder aufgedeckt?)
    //Funktion erstellen 
    function randomState() {
        //Variable erzeugen (Math.random gibt eine zufällige Zahl von 0-1)
        let randomState = Math.random();
        //If Funktion erstellen für die verschiednen Fälle
        if (randomState <= .5) {
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            return "taken";
        }
        else if (randomState > .75) {
            return "visible";
        }
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
            childNodeHTML += "<div>";
            //Aufruf der class für Css Arbeiten 
            childNodeHTML += "<div class=\"";
            //Aufruf der Funktion randomState für den Status der Karte
            childNodeHTML += randomState();
            childNodeHTML += "\">";
            //cardArray wird aufgerufen
            childNodeHTML += cardArray[i];
            childNodeHTML += "</div></div>";
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
                player[i] = "Mickey";
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
//# sourceMappingURL=Memorie.js.map