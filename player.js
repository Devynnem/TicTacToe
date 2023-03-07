class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.player1Boxes = [];
    this.player2Boxes = [];
    this.increaseWins = 0;
  }
  
  playerWins() {
    this.increaseWins += 1;
 };
};