import Backbone from 'backbone';
import Player from 'app/models/player';
import Board from 'app/models/board';


const Game = Backbone.Model.extend({
  defaults: {
    turnCounter: 0,
    playerOne: new Player({name: "Player One", mark: "X"}),
    playerTwo: new Player({name: "Player Two", mark: "O"}),
    // currentPlayer: this.get('playerOne'),
    board: new Board()
  },

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
