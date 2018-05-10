function inputPlayer() {
    let inputPlayers = prompt("Wie viele Spieler seid ihr? (1-4)");
    let players = parseInt(inputPlayers);
    return players;
}
function inputCards() {
    let inputPairs = prompt("Wie viele Kartenpaare mÃ¶chtest du? (5-10)");
    let pairs = parseInt(inputPairs);
    return pairs;
}
let anzahl = inputCards();
let spieler = inputPlayer();
//# sourceMappingURL=Abfrage.js.map