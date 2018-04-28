namespace L05_Interfaces {
    window.addEventListener( "load", init );

    function init( _event: Event ): void {
        console.log( "Init" );

        //Enventlistener auf Button übergeben

        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById( "insert" );
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById( "search" );
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById( "refresh" );
        insertButton.addEventListener( "click", insert );
        refreshButton.addEventListener( "click", refresh );
        searchButton.addEventListener( "click", search );
    }


    //Funktion um Daten der Studenten zu speichern

    function insert( _event: Event ): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName( "input" );
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById( "male" );
        let matrikel: string = inputs[2].value;
        let studi: Studi;

        //Interface übergeben

        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt( matrikel ),
            age: parseInt( inputs[3].value ),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName( "select" ).item( 0 ).value
        };



        console.log( studi );
        console.log( studi.age );
        console.log( studi["age"] );

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;


        // nur um das auch noch zu zeigen...
        studiSimpleArray.push( studi );
    }



    //Funktion Ausgabe der Information

    function refresh( _event: Event ): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[1];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays

        for ( let matrikel in studiHomoAssoc ) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }

        // zusätzliche Konsolenausgaben zur Demonstration
        console.group( "Simple Array" );
        console.log( studiSimpleArray );
        console.groupEnd();

        console.group( "Associatives Array (Object)" );
        console.log( studiHomoAssoc );
        console.groupEnd();
    }

    //Funktion, um Studenten nach Matrikelnummer zu suchen

    //Funktion search aufstellen

    function search( _event: Event ): void {

        //Auf erste Textarea zugreifen

        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[0];

        output.value = "";

        //Zugriff auf Inputs

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName( "input" );

        //Matrikel wird aufgerufen durch den 6. Input

        let matrikel: string = inputs[6].value;

        //Matrikelnummer wird gespeichert

        let studi: Studi = studiHomoAssoc[matrikel];

        //Bei keiner korrekten Matrikelnummer erscheint eine Alertbox

        if ( typeof studi === "undefined" ) {
            alert( "Es wurde kein Student gefunden" );

            //Bei korrekter Matrikelnummer werden die Daten im Textfeld ausgegeben

        } else {
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (M)" : ", (F)";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }
    }
}