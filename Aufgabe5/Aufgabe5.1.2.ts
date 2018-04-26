namespace L04_Interfaces {
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
            studiengang: inputs[6].value,
        };



        console.log( studi );
        console.log( studi.age );
        console.log( studi["age"] );

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;


        // nur um das auch noch zu zeigen...
        studiSimpleArray.push( studi );
    }

    
  //Funktion, um Studenten nach Matrikelnummer zu suchen
    
    function search(_event: Event): void {
        
        //Variable output definieren
        
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        
        for (let matrikel in studiHomoAssoc) {      // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition 
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (M)" : ", (F)";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        
}
    }

    //Funktion Ausgabe der Information

    function refresh( _event: Event ): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[0];
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
    
}