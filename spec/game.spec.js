import Game from 'app/models/game';
import Player from 'app/models/player';
import Board from 'app/models/board';

describe('Game', function() {
  var testGame = new Game();
  describe('initial attributes', function(){
    it ("turn counter should have an initial value of 0", function(){
      expect(testGame.turnCounter).toEqual(0);
    });

    it ('has a playerOne', function() {
      expect(testGame.playerOne instanceof(Player)).toEqual(true);
      expect(testGame.playerOne.get('name')).toEqual("Player One");
    });

    it ('has a playerTwo', function() {
      expect(testGame.playerTwo instanceof(Player)).toEqual(true);
      expect(testGame.playerTwo.get('name')).toEqual("Player Two");
    });

    it ('has a currentPlayer', function() {
      expect(testGame.currentPlayer).toEqual(testGame.playerOne);
    });

    it ('has a board', function() {
      expect(testGame.board instanceof(Board)).toEqual(true);
    });
  });

  describe('togglePlayer', function() {
    it('toggles the current player', function() {
      testGame.togglePlayer();
      expect(testGame.currentPlayer).toEqual(testGame.playerTwo);
    });
    it('toggles again', function() {
      testGame.togglePlayer();
      expect(testGame.currentPlayer).toEqual(testGame.playerOne);
    });
  });

  // describe('play a whole game', function() {
  //   //play game script
  //   var wholeGame = new Game();
  //
  //   wholeGame.setMarks();
  //   wholeGame.setNames("Allison", "Guinevere");
  //
  //   // Allison is Player 1 and plays in top left square.
  //   wholeGame.board.makeMove(0,0, wholeGame.currentPlayer.mark);
  //   wholeGame.togglePlayer();
  //   wholeGame.turnCounter ++;
  //
  //   // Guinevere plays top middle
  //   wholeGame.board.makeMove(0,1, wholeGame.currentPlayer.mark);
  //   wholeGame.togglePlayer();
  //   wholeGame.turnCounter ++;
  //
  //   // Allison plays middle left
  //   wholeGame.board.makeMove(1,0, wholeGame.currentPlayer.mark);
  //   wholeGame.togglePlayer();
  //   wholeGame.turnCounter ++;
  //
  //   // Guinevere plays middle middle
  //   wholeGame.board.makeMove(1,1, wholeGame.currentPlayer.mark);
  //   wholeGame.togglePlayer();
  //   wholeGame.turnCounter ++;
  //
  //   // Allison plays bottom left
  //   wholeGame.board.makeMove(2,0, wholeGame.currentPlayer.mark);
  //   wholeGame.togglePlayer();
  //   wholeGame.turnCounter ++;
  //
  //
  //   it('has a turn counter of 5', function(){
  //     expect(wholeGame.turnCounter).toEqual(5);
  //   });
  //   it('PlayerOne wins', function(){
  //     expect(wholeGame.board.checkWin()).toEqual(true);
  //   });
  //   it('PlayerOne is X', function(){
  //     expect(wholeGame.playerOne.mark).toEqual("X");
  //   });
  //   it('Player 2 is O', function(){
  //
  //     expect(wholeGame.playerTwo.mark).toEqual("O");
  //   });
  //   it('board has a winning state', function(){
  //     expect(wholeGame.board.state).toEqual([["X", "O", " "], ["X", "O", " "], ["X", " ", " "]]);
  //     expect(wholeGame.board.checkWin()).toEqual(true);
  //   });
  //   it('now it is Player Two\'s turn', function() {
  //     expect(wholeGame.currentPlayer).toEqual(wholeGame.playerTwo);
  //   });
  // });

});
