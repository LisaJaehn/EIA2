var L05_Interfaces;
(function (L05_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        //Enventlistener auf Button übergeben
        let insertButton = document.getElementById("insert");
        let searchButton = document.getElementById("search");
        let refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    //Funktion um Daten der Studenten zu speichern
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi;
        //Interface übergeben
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName("select").item(0).value
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L05_Interfaces.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        L05_Interfaces.studiSimpleArray.push(studi);
    }
    //Funktion Ausgabe der Information
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in L05_Interfaces.studiHomoAssoc) {
            let studi = L05_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }
        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(L05_Interfaces.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(L05_Interfaces.studiHomoAssoc);
        console.groupEnd();
    }
    //Funktion, um Studenten nach Matrikelnummer zu suchen
    //Funktion search aufstellen
    function search(_event) {
        //Auf erste Textarea zugreifen
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        //Zugriff auf Inputs
        let inputs = document.getElementsByTagName("input");
        //Matrikel wird aufgerufen durch den 6. Input
        let matrikel = inputs[6].value;
        //Matrikelnummer wird gespeichert
        let studi = L05_Interfaces.studiHomoAssoc[matrikel];
        //Bei keiner korrekten Matrikelnummer erscheint eine Alertbox
        if (typeof studi === "undefined") {
            alert("Es wurde kein Student gefunden");
        }
        else {
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (M)" : ", (F)";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }
    }
})(L05_Interfaces || (L05_Interfaces = {}));
//# sourceMappingURL=Aufgabe5.1.2.js.map