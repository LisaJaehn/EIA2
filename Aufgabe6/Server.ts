//Diese Aufgabe wurde in Gruppenarbeit erstellt

//Bindet Url Modul mit ein

import * as Url from "url";

//HTTP Objekt wird im Code erstellt
//Interpreter sucht nach jedem möglichen Import im http- Modul  und wird ihn einzeln an das http- Objekt im Code anhängen

import * as Http from "http";

//namespace erstellen
namespace Node {
    let studis: L06_Interfaces.Studis = {};

    interface AssocStringString {
        [key: string]: string | string[];
    }

    //Variable port wird erstellt, eine number wird erwartet
    //Infos über Maschine/Umgebung, Maschine gibt den Port vor

    let port: number = process.env.PORT;

    //Wenn der die Portnummer undefiniert ist wird Port 8100 geöffnet

    if ( port == undefined )
        port = 8100;

    //Ereugung des Serverobjektes, Variable server, um mit dem Server weiter arbeiten zu können (Zugriff möglich)

    let server: Http.Server = Http.createServer();

    //Wenn der Server zuhört, wird die Funktion handleListen ausgeführt

    server.addListener( "listening", handleListen );

    // Server beibringen auf etwas zu hören

    server.addListener( "request", handleRequest );
    server.listen( port );

    //Funktion handleListen wird erstellt

    function handleListen(): void {

    }

    //Funktion handleRequest wird erstellt, 2 Parameter werden festgelegt, ohne Rückgabewert
    //Die einkommenden Information werden bearbeitet und wieder zurück geschickt
    //_request: Http.IncomingMessage: Einkommende Informationen
    //_response: Http.ServerResponse: Bearbeitete Informationen

    function handleRequest( _request: Http.IncomingMessage, _response: Http.ServerResponse ): void {

        //Die Headers sind dazu da, um von anderen Servern zugreifen zu können

        _response.setHeader( 'Access-Control-Allow-Origin', '*' );
        _response.setHeader( 'Access-Control-Request-Method', '*' );

        //Options: Um abzufragen, ob man auf den Server zugreifen kann
        //GET: Um Antwort zurück zu bekommen

        _response.setHeader( 'Access-Control-Allow-Methods', 'OPTIONS, GET' );
        _response.setHeader( 'Access-Control-Allow-Headers', '*' );

        //Aus string ein Objekt machen

        let query: AssocStringString = Url.parse( _request.url, true ).query;
        //console.log(query);

        //Schaut nach welche Methode angegeben wurde
        //Wenn die Methode addStudent ist füge Student zur Liste hinzu
        //Gebe als Antwort "Student added!"

        if ( query["method"] == "addStudent" ) {
            let student = <L06_Interfaces.Studi>JSON.parse( query["data"].toString() );
            studis[student.matrikel.toString()] = student;
            _response.write( "Student added!" );
            _response.end();
        }

        //Wenn die Methode refreshStudents ist, gebe die Liste der Studenten als Antwort
        //stringify: Objekt wird zum string

        if ( query["method"] == "refreshStudents" ) {
            _response.write( JSON.stringify( studis ) );
            _response.end();
        }
    }
}