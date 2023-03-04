// A player.js file that contains a Player class.
// Player methods must include, but are not limited to:
// constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
// increaseWins - increases the count of the player’s wins

class Player {
    constructor(id, token) {
        this.id = id;
        this.token = token;
        this.player1Boxes = [];
        this.player2Boxes = [];
        this.increaseWins = 0;
    }
    // playerWins() {
    //     this.increaseWins += 1;
    // }
}