namespace Aufgabe_3 {
    
//Variablen definieren
    
//Anzehl Spieler
    
let numPlayers: number = 0;

//Anzahl Kartenpaare

let numPairs: number = 0;  

//Neue Variablen für die Id der Karten any, der Typ wird somit selbst ausgesucht

let idCard1: any;

let idCard2: any;

//Neue Variablen für die KLassen der Karten

let classCard1: any;

let classCard2: any;

//Variable counter anlegen

let counter: number = 0;


//Karten einen Inhalt geben

let cardContent: string[] = ["Panda", "Koala", "Löwe", "Delfin", "Hase", "Bär", "Katze", "Hund", "Känguru", "Maus"];

//Leeres Array um die Karten später hinein abspeichern zu können

let cardArray: string[] = [];

let q: number = cardArray.length;

//Arrays erstellen um  den Score und Anzahl der Spieler später abzuspeichern

let player: string[] = [];
let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert


//Funktion erstellen 

window.addEventListener("click", init);

function init (_event: Event): void {
let target: HTMLDivElement = <HTMLDivElement>_event.target;
    
console.log(_event);

if (counter == 0) {
    
    document.getElementById(target.id).classList.remove("hidden");
    classCard1 = target.className;
    idCard1 = target.id;
    document.getElementById(target.id).classList.add("visible");
    
    counter++;
    
    }else if (counter == 1) {
    document.getElementById(target.id).classList.remove("hidden");
    classCard2 = target.className;
    idCard2 = target.id;
    document.getElementById(target.id).classList.add("visible");
    console.log(counter);
    
   

//Timerfunktion, wie lange es dauert bis sich die Karten wieder umdrehen und die verschiednen Fälle

    
setTimeout (function() {


    if (classCard1 == classCard2) {
        document.getElementById(idCard1).classList.remove("visible");
        document.getElementById(idCard2).classList.remove("visible");
      
        
        document.getElementById(idCard1).classList.add("taken");
        document.getElementById(idCard2).classList.add("taken");
        
        q--;
        
        graduation();
        
    }else {
        document.getElementById(idCard1).classList.remove("visible");
        document.getElementById(idCard2).classList.remove("visible");
      
        
        document.getElementById(idCard1).classList.add("hidden");
        document.getElementById(idCard2).classList.add("hidden");
        
        
    }
    
   }, 2000);
       

    //Counter leeren

    counter = 0;
    
    }

}

function graduation(): void {
    
if (q == 0){
    
    alert("Josef ist der Beste");
    
}
}
        
    
//Funktion erstellen, damit alle Karten umgedreht sind beim Spielbeginn

function randomState(): string {
    
    //Alle Karten sind umgedreht
    
    return "hidden";
}


//Karten mischen -> Shuffle Funktion (Karten sollen durchgemischt werden, es sollen nicht immer die selben Karten auf dem Spielfeld erscheinen)        

function shuffleCards(): void {
    
    //Variable i wird definiert, sie ist so groß wie die Länge des cardArrays
    
    let i: number = cardArray.length;

    //Variable j wird definiert, sie entspricht der Zahl 0

    let j: number = 0;

    //Variable temp wird definiert als string ohne Textinhalt.

    let temp: string = "";

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

function createGame(): void {

//Aufruf der id im Html Dokument
    
let node: any = document.getElementById("Spielfeld");

//Funktion shuffleCards wird aufgerufen, damit die Karten bei jedem Spiel gemischelt werden

shuffleCards();

//HTML string

let childNodeHTML: string = "";

//H2 erzeugen

childNodeHTML += "<h2>Spielfeld</h2>";

//Div erzeugen

childNodeHTML += "<div>";

//Schleife erstellen, i=0, muss kleiner als die cardArray Länge sein und wird hochgezählt

for (let i: number = 0; i < cardArray.length; i++) {
    
    //Div öffnen
    
    childNodeHTML += "<div>";
    
    //Divs bekommen ein Attribut, zur Zuordung des Inhaltes und zur Verdeckung (Jede id heißt anders durch das +1)
    
    childNodeHTML += "<div id = " + i + " attr = " + i + " class = ' ";
    
    //Aufruf der Funktion randomState für den Status der Karte
    
    childNodeHTML += cardArray[i] + " " + randomState();
    childNodeHTML += " ' >";
    
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

function playerInfo(): void {
    
  //Aufruf der id im Html Dokument    
    
    let node: any = document.getElementById("Spielerinfo");

    //HTML string

    let childNodeHTML: string = "";

    //Div erzeugen

    childNodeHTML += "<div>";
    
    //Schleife erstellen, i=0, i ist größer als die Länge des Spieler Arrays, i wird hochgezählt
    
    for (let i: number = 0; i < player.length; i++) {
        
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

function main(): void {
    
    //Ausgabe auf die Konsole
    
    console.log("main");
   

//Funtion für die Spielerabfrage erstellen

    //Variable i definieren,, wenn i wahr ist
    
    let i: boolean = true;
    
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
    
    for (let i: number = 0; i < numPlayers; i++) {
        
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
    
for (let i: number = 0; i < numPairs; i++) {
    
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
}