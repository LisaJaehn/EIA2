function Hallo() {
    
  var name = prompt("Wie heißt du?", "");
  if (name != null) {
      
    document.getElementById("Name").innerHTML =
    
      "Servus " + name + "! Schöner Name!";
  }
      
}
