import Backbone from 'backbone';
import Player from 'app/models/player';
import Board from 'app/models/board';


const Game = Backbone.Model.extend({
  initialize: function() {
    this.turnCounter = 0;
    this.playerOne = new Player({name: "Player One", mark: "X"});
    this.playerTwo = new Player({name: "Player Two", mark: "O"});
    this.currentPlayer = this.playerOne;
    this.board = new Board();
    this.won = false;
    console.log("Created a new game with players: " + this.playerOne.name + " & " + this.playerTwo.name + " & board: " + this.board.state);
  },

  togglePlayer: function() {
    if (this.currentPlayer == this.playerOne) {
      this.currentPlayer = this.playerTwo;
      this.turnCounter++;
    } else {
      this.currentPlayer = this.playerOne;
      this.turnCounter++;
    }
  }
});
export default Game;
