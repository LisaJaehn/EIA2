function inputPlayer() : number {
        let inputPlayers : string = prompt("Wie viele Spieler seid ihr? (1-4)");
        let players : number = parseInt(inputPlayers);
        
           return players;
        }
    
     function inputCards() : number {
        let inputPairs : string = prompt("Wie viele Kartenpaare mÃ¶chtest du? (5-10)");
        let pairs : number = parseInt(inputPairs);
    
        return pairs;
     
        }
     let anzahl : number = inputCards();
        let spieler : number = inputPlayer();