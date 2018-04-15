namespace Memory {

  // Variablen deklarieren.
  let cardContent: string[] = ["Panda", "Koala", "Löwe", "Delfin", "Hase", "Bär", "Katze", "Hund", "Känguru", "Maus"];

  let cardArray: HTMLElement[] = [];
  // Leeres Array, in das die letztendlich für das Spiel benötigten Karten als divs hineingespeichert werden.

  //Variablen definieren.
  let numPairs: number;
  let numPlayers: number;

  let playerInfo: HTMLElement;
  let cardField: HTMLElement;

  //Funktion createCards erzeugen.
  function createCard(textDerAufDieKarteSoll: string, _state: string): void {
    let card: HTMLElement = document.createElement("div");
    // Div wird erzeugt
    card.innerText = textDerAufDieKarteSoll;
    // Text aus dem Array soll auf eine Karte erzeugt werden.
    card.setAttribute("class", "card " + _state);
    // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert
    cardArray.push(card);
    // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten
  }

  /******** Dieser Part wurde von Melvin Busch übernommen, da wir nicht wissen, wie es anders gelöst werden kann *********/
  class Player {

      score: number;
      name: string;
      player: HTMLElement;

      constructor(_name: string) {
          this.name = _name;
          this.score = 0;
      }

      scoreUp(): number {
          this.score += 10;
          return this.score;
      }

      show(): void {
          this.player = document.createElement("div");
          this.player.innerHTML = `
          <span class="player-name">${this.name}</span>
          <span class="player-score">Punkte: ${this.score}</span>`;
          playerInfo.appendChild(this.player);
      }
  }
  /*************** Part Ende *************/

  // Shuffle Arrays
  function randomMix(_array: any[]): any[] {
    // _array = Das Array, das durchmischt werden soll (Karten sollen durchgemischt werden bei jedem neuen Spiel).
    for (let i: number = _array.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
    // Ausgabe = das Array ist jetzt durchmischt
  }

  // Zufallsgenerator als eigene Funktion = schöner & funktioniert besser :D.
  function randomState(): string {
    let randomState: number = Math.random();
    // Zufällige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1.
    if (randomState <= .5) {
      // 50%ige Wahrscheinlichkeit, dass die Karte verdeckt ist.
      return "hidden";
      // Status = hidden.
    } else if (randomState > .5 && randomState <= .75) {
      // Oder wenn: wenn Zahl größer als 0,5 und kleiner gleich 0,75 - dann Status: taken
      return "taken";
    } else if (randomState > .75) {
      // Oder wenn: Wenn Zahl größer als 0,75 - dann Status: visible
      return "visible";
    }
  }

  function main(): void {

    // Spieler soll Anzahl der Kartenpaare eingeben.
    numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
    if (numPairs < 5 || numPairs > 10) {
      numPairs = 8;
    }

    // Spieler sollen angeben, wie viele spielen wollen.
    numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
    numPlayers > 4 ? numPlayers = 4 : numPlayers = numPlayers;

    // DOM abhängige Varaiblen deklarieren.
    playerInfo = document.getElementById("player-info");
    cardField = document.getElementById("card-div");

    // Spielkarten erzeugen.
    for (let i: number = 0; i < numPairs; i++) {
      createCard(cardContent[i], randomState());
      // Word an der Stelle i - wird als Übergabeparameter mitgegeben.

      createCard(cardContent[i], randomState());
      // Word an der Stelle i - wird als Übergabeparameter mitgegeben.
    }

    // Karten mischen.
    randomMix(cardArray);

    // Karten dem Spielbrett hinzufügen.
    for (let i: number = 0; i < cardArray.length; i++) {
      cardField.appendChild(cardArray[i]);
      // dem Spielbrett hinzufügen
    }

    // Spieler Anzeige generieren.
    for (let i: number = 0; i < numPlayers; i++) {
        let player: Player = new Player("Spieler " + (i + 1));
        player.show();
    }

  }
  
  //Ausgabe.
  document.addEventListener("DOMContentLoaded", main);
}
