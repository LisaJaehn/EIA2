namespace Aufgabe_5 {

    //Variablen definieren

    //Anzehl Spieler

    let numPlayers: number = 0;

    //Anzahl Kartenpaare

    export let numPairs: number = 5;

    //Array welches alle offenen Karten trackt.

    let openCards: HTMLElement[] = [];

    //Variable des momentanen Kartendecks, wenn keine Eingaben getätigt werden

    let currentCardDeck: Deck = undefined;


    //Variable counter anlegen

    let counter: number = 0;


    //Variable l für die Gratulation erstellen

    let l: number = 0;

    let nehmeKlicksAn: boolean = true;


    //Leeres Array um die Karten später hinein abspeichern zu können

    let cardArray: string[] = [];

    //Arrays erstellen um  den Score und Anzahl der Spieler später abzuspeichern

    let playerNames: string[] = [];
    let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert

    window.addEventListener( "click", verarbeiteKlick );

    //Aufruf Funktion populateDecks, damit das Spiel gestartet werden kann (Funktion beim Interface)

    populateDecks();


    //Funktion erstellen

    function verarbeiteKlick( _event: Event ): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;

        //Konsolenausgabe

        console.log( _event );

        //Bedingung umgedrehte Karte und die Klicks müssen angenommen werden

        if ( target.classList.contains( "hidden" ) && nehmeKlicksAn ) {

            //Wenn der Counter kleiner 2, hidden verschwindet und die angeklickte Karte wird in das openCard Array gepusht

            if ( counter < 2 ) {
                target.classList.remove( "hidden" );
                openCards.push( target );
            }

            //Counter wird hochgezählt

            counter++;

            //Counter ist gleich Zwei

            if ( counter == 2 ) {

                //Es werden keine Klicks auf der Karte mehr angenommen

                nehmeKlicksAn = false;

                //Counter wird auf 0 gesetzt

                counter = 0;

                //Inhalt der Karten wird überprüft, sind die Karten gleich oder nicht?

                if ( openCards[0].innerText === openCards[1].innerText ) {

                    //setTimeout Funktion

                    setTimeout(() => {

                        //Die Karten werden genommen

                        openCards[0].classList.add( "taken" );
                        openCards[1].classList.add( "taken" );

                        //Das openCards Array wird geleert

                        openCards = [];

                        //Es werden wieder Klicks angenommen

                        nehmeKlicksAn = true;

                        //Wenn keine Karte mehr mit der Klasse hidden gefunden wurde ist das Spiel vorbei und die Gratulationsbox erscheint

                        if ( document.getElementsByClassName( "hidden" ).length == 0 ) {
                            alert( "Glückwunsch, du hast gewonnen!" )
                        }

                        //Die Karten werden nach 2 sec. von der Spielfläche entfernt

                    }, 2000 );


                }
                else {

                    //setTimeout Funktion

                    setTimeout(() => {

                        //Wenn die Karten nicht gleich sind drehen sie sich wieder um

                        openCards[0].classList.add( "hidden" );
                        openCards[1].classList.add( "hidden" );

                        //Das openCards Array wird wieder geleert

                        openCards = [];

                        //Danach werden wieder Klicks angenommen

                        nehmeKlicksAn = true;

                        //Es dauert 2 sek. bis sich die Karten wieder umgedreht haben

                    }, 2000 );


                }


            }

        }


    }

    //Funktion erstellen, damit alle Karten umgedreht sind beim Spielbeginn

    export function randomState(): string {

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

        while ( --i > 0 ) {

            //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf

            j = Math.floor( Math.random() * ( i + 1 ) );
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }

    //Spielfeld wird erzeugt

    //Funktion wird erstellt, um das Hauptspielfeld zu erzeugen

    function createGame(): void {

        //Aufruf der id im Html Dokument

        let node: any = document.getElementById( "Spielfeld" );

        //Funktion shuffleCards wird aufgerufen, damit die Karten bei jedem Spiel gemischelt werden

        shuffleCards();

        //Überschrift wird erstellt

        let header = document.createElement( "h2" );
        header.innerText = "Spielfeld";
        node.appendChild( header );

        //Spielfeld innerhalb eines Divs

        let spielFeld = document.createElement( "div" );

        //Variable i bestimmen, welche=0 ist und kleiner als die Länge des Card Arrays sein muss, i wird hochgezählt

        for ( let i: number = 0; i < cardArray.length; i++ ) {

            //Karte wird als div erstellt

            let card = document.createElement( "div" );

            //Karte bekommt eine id, i wird zum string

            card.id = i.toString();

            //Karte bekommt ein Attribut 

            card.setAttribute( "attr", i.toString() );

            card.classList.add( cardArray[i] );
            card.classList.add( randomState() );

            //Karteninhalt wird im cardArray gespeichert

            card.textContent = cardArray[i];

            //CSS wird definiert (Dynamische Erzeugung)

            card.style.backgroundColor = currentCardDeck.color;
            card.style.fontFamily = currentCardDeck.font;
            card.style.fontSize = currentCardDeck.size + "px";
            card.style.color = currentCardDeck.textColor;

            //Variable card wird als Kind an die Variable spielFeld geheftet

            spielFeld.appendChild( card );
        }

        //An den Knoten wird die Variable spielFeld als Kind angeheftet

        node.appendChild( spielFeld );

    }

    //Spieleranzeige erstellen

    //Funktion playerInfo erstellen

    function playerInfo(): void {

        //Aufruf der id im Html Dokument

        let node: any = document.getElementById( "Spielerinfo" );

        //HTML string

        let childNodeHTML: string = "";

        //Div erzeugen

        childNodeHTML += "<div>";

        //Schleife erstellen, i=0, i ist größer als die Länge des Spieler Arrays, i wird hochgezählt

        for ( let i: number = 0; i < playerNames.length; i++ ) {

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

        console.log( childNodeHTML );
    }

    //Funktion graduation erstellen

    function graduation(): void {

        //Es wird geprüft, ob die Anzahl der richtigen Paare die Anzahl auf dem Spielfeld sind

        if ( l == numPairs ) {

            //Alertbox erstellen

            alert( "Gratualation, du hast gewonnen!" )

        }
    }

    //Hauptfunktion wird erzeugt

    //Funtkion main aufstellen

    export function main(): void {

        //Funtion für die Spielerabfrage erstellen

        //Variable für Spielernzahl definieren

        let spielerAnzahl: number;

        //Variable collection als NodeListOfElement

        //NodeList Objekte sind Sammlungen von Knoten

        //Zugriff auf die id spieleranzahl und auf die inputs

        let collection: NodeListOf<Element> = document.getElementById( "spieleranzahl" ).getElementsByTagName( "input" );

        // i=0, größer als die Länge von collection und wird hochgezählt

        for ( let i = 0; i < collection.length; i++ ) {

            //Spieleranzahl wird hochgezählt 

            //Variable collection als HTMLInputElement

            if ( ( <HTMLInputElement>collection[i] ).checked ) {

                //Spieleranzahl hochzälen

                spielerAnzahl = i + 1;

                //Abbruch

                break;
            }
        }

        //Eingabe Spielernamen

        //Zugriff auf die id name und auf die inputs

        collection = document.getElementById( "name" ).getElementsByTagName( "input" );

        //Variable i=0, ist kleiner als die Länge von collection, wird hochgezählt

        for ( let i = 0; i < collection.length; i++ ) {

            //Wenn kein Spielername eingegeben wurde, heißt der Spieler Jeff

            if ( ( <HTMLInputElement>collection[i] ).value == "" && i == 0 ) {

                //Name wird gepusht

                playerNames.push( "Jeff" )
            }

            //Ansonsten wird der Spielername ins Spiel gepusht der eingegeben wurde

            else if ( ( <HTMLInputElement>collection[i] ).value != "" ) {
                playerNames.push(( <HTMLInputElement>collection[i] ).value )
            }
        }

        //Auswahl des Kartensatzes, Zugriff auf die id kartensatz und auf die inputs

        collection = document.getElementById( "kartensatz" ).getElementsByTagName( "input" );

        //Wenn beim Kartendeck nichts ausgewählt wird, erscheint automatisch das Kartendeck "animals"

        if ( currentCardDeck == undefined )
            currentCardDeck = decks["animals"];

        //Karten werden erzeugt

        populateCardArray( currentCardDeck.content );

        //Spielbrett erzeugen 

        createGame();

        //Spielerinfo erzeugen

        playerInfo();

        //Starteinstellung wird nach der Einstellung gelöscht

        document.getElementById( "starteinstellungen" ).remove()

    }

    //Für den Kartenpaare Slider

    //Parameter value wird als number übergeben

    export function onInputEvent( value: number ) {

        //Zugriff auf die id kartenpaare-label, der Wert wird von einer number zum string

        document.getElementById( "kartenpaare-label" ).innerText = value.toString();
        numPairs = value;
    }

    //Karten werden hinzugefügt

    function populateCardArray( karten: string[] ) {

        //Kartenpaare werden erzeugt

        for ( let i = 0; i < numPairs; i++ ) {
            cardArray.push( karten[i] );
            cardArray.push( karten[i] );
        }

    }

    //Für Auswahl des Kartensatzes, damit sich die Länge anpasst

    export function bearbeiteKartenSatzKlick( element: HTMLInputElement ) {
        currentCardDeck = decks[element.value];
        repopulateCardForm();
    }

    //Fehlererkennung (Slider ansich ändert sich)

    function repopulateCardForm() {

        //Variable kartenPaarElement, als HTMLInputElement, Zugriff auf die id kartenpaare

        let kartenPaareElement = <HTMLInputElement>document.getElementById( "kartenpaare" );

        //Maximallänge des kartenPaareElement beträgt der Länge des Inhaltes des currentCardDecks

        kartenPaareElement.max = currentCardDeck.content.length.toString();

        //Variable maxWert enspricht der Länge des Inhaltes des currentCardDecks

        let maxWert = currentCardDeck.content.length;

        //Variable momentanterWert, string wird zu einer ganzzahligen Zahl umgewandelt

        let momentanerWert = parseInt( kartenPaareElement.value );

        //Wenn der maxWert kleiner als der momentanerWert ist

        if ( maxWert < momentanerWert ) {
            kartenPaareElement.value = maxWert.toString()
        }

        //Update des HTML (Zahl neben dem Slider ändert sich)

        document.getElementById( "kartenpaare-label" ).innerText = kartenPaareElement.value;
    }

    //Spieleranzahl und Spielername

    export function bearbeiteSpielerZahlKlick( element: HTMLInputElement ) {

        //parseInt = String wird zu einer ganzen Zahl umgewandelt

        let spielerZahl = parseInt( element.value );

        //Wenn i gleich 1 und kleiner gleich 4 ist

        for ( let i = 1; i <= 4; i++ ) {

            //`player${i}`: Innerhalb eines String wird Javascripts aufgerufen, zur Bearbeitung  

            let inputElement = <HTMLInputElement>document.getElementById( `player${i}` );
            let labelElement = document.getElementById( `player${i}-label` );

            //Wenn die Eingabe  eintritt, erscheint das Feld, um den Namen einzutragen

            if ( i <= spielerZahl ) {
                inputElement.disabled = false;
                labelElement.style.opacity = "1";

            }

            //Wenn die Eingabe nicht eintritt, wird das Feld, um den Namen einzutragen ausgegraut und man kann nichts mehr eintragen

            else {
                inputElement.disabled = true;
                labelElement.style.opacity = "0.33";
                inputElement.value = "";
            }
        }
    }
}