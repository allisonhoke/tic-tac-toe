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
    console.log("Created a new game with players: " + this.playerOne.name + " & " + this.playerTwo.name + " & board: " + this.board.state);
  }

  // newBoard: function() {
  //   this.set({board: new Board()});
  // }

  // togglePlayer: function() {
  //   if (this.currentPlayer == this.playerOne) {
  //     this.currentPlayer = this.playerTwo;
  //   } else {
  //     this.currentPlayer = this.playerOne;
  //   }
  // },

  // setNames: function(nameOne, nameTwo) {
  //   this.playerOne.name = nameOne;
  //   this.playerTwo.name = nameTwo;
  // },

  // setMarks: function() {
  //   var pOne = this.get('playerOne');
  //   var pTwo = this.get('playerTwo');
  //   pOne.mark = "X";
  //   pTwo.mark = "O";
  // }
});
export default Game;
