namespace L07_Interfaces {
    window.addEventListener( "load", init );

    let address: string = "https://eia2node257455.herokuapp.com/";

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName( "input" );

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
            studiengang: document.getElementsByTagName( "select" ).item( 0 ).value,
        };

        let stringifyJSON: string = JSON.stringify( studi );
        console.log( stringifyJSON );

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open( "GET", address + "?order=insert&data=" + stringifyJSON, true );
        xhr.send();
    }

    function handleChangeInsert( _event: ProgressEvent ): void {
        var xhr: XMLHttpRequest = ( <XMLHttpRequest>_event.target );
        if ( xhr.readyState == XMLHttpRequest.DONE ) {
            alert( xhr.response );

        }
    }

    function refresh( _event: Event ): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open( "GET", address + "?order=refresh", true );
        xhr.send();
    }

    function handleChangeRefresh( _event: ProgressEvent ): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[1];
        output.value = "";
        var xhr: XMLHttpRequest = ( <XMLHttpRequest>_event.target );
        if ( xhr.readyState == XMLHttpRequest.DONE ) {
            output.value += xhr.response;

        }
    }

    function search( _event: Event ): void {
        let matrikel: string = inputs[6].value;


        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open( "GET", address + "?order=search&searchFor=" + matrikel, true );
        xhr.send();
    }

    function handleChangeSearch( _event: ProgressEvent ): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[0];
        output.value = "";
        var xhr: XMLHttpRequest = ( <XMLHttpRequest>_event.target );
        if ( xhr.readyState == XMLHttpRequest.DONE ) {
            output.value += xhr.response;

        }
    }
}

