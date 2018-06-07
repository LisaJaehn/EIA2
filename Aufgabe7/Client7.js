var L07_Interfaces;
(function (L07_Interfaces) {
    window.addEventListener("load", init);
    let address = "https://eia2node257455.herokuapp.com/";
    let inputs = document.getElementsByTagName("input");
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
            studiengang: document.getElementsByTagName("select").item(0).value,
        };
        let stringifyJSON = JSON.stringify(studi);
        console.log(stringifyJSON);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?order=insert&data=" + stringifyJSON, true);
        xhr.send();
    }
    function handleChangeInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?order=refresh", true);
        xhr.send();
    }
    function handleChangeRefresh(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function search(_event) {
        let matrikel = inputs[6].value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?order=search&searchFor=" + matrikel, true);
        xhr.send();
    }
    function handleChangeSearch(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
})(L07_Interfaces || (L07_Interfaces = {}));
//# sourceMappingURL=Client7.js.map