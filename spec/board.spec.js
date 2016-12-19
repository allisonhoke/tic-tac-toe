import Board from 'app/models/board';

describe('Board', function() {
  var testBoard = new Board();
  describe('state of board initially', function(){
    it ("should instantiate a two-dimensional array full of blank spaces", function(){
      expect(testBoard.state).toEqual([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
    });
    it ('should be an array', function() {
      expect(testBoard.state instanceof(Array)).toEqual(true);
    });

  });

  describe('checkRows', function() {
    it ('checks the rows on the board for a win', function() {
      expect(testBoard.checkRows()).toEqual(false);
      testBoard.state = [['X', 'X', 'X'], [" ", " ", " "], [" ", " ", " "]];
      expect(testBoard.checkRows()).toEqual(true);
      testBoard.state = [[" ", " ", " "], [" ", " ", " "], ["O", "O", "O"]];
      expect(testBoard.checkRows()).toEqual(true);
    });
  });

  describe("checkDiags", function() {
    it('checks the diagnals on the board for a win', function(){
      testBoard.state = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
      expect(testBoard.checkDiags()).toEqual(false);
      testBoard.state = [['X', " ", " "], [" ", 'X', " "], [" ", " ", 'X']];
      expect(testBoard.checkDiags()).toEqual(true);
      testBoard.state = [[" ", " ", 'O'], [" ", 'O', " "], ['O', " ", " "]];
      expect(testBoard.checkDiags()).toEqual(true);
      testBoard.state = [['X', " ", " "], [" ", 'O', " "], [" ", " ", 'X']];
      expect(testBoard.checkDiags()).toEqual(false);
    });
  });

  describe('checkColumns', function() {
    it ('checks the columns on the board for a win', function() {
      testBoard.state = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
      expect(testBoard.checkColumns()).toEqual(false);

      testBoard.state = [["X", " ", " "], ["X", " ", " "], ["X", " ", " "]];
      expect(testBoard.checkColumns()).toEqual(true);

      testBoard.state = [[" ", "O", " "], [" ", "O", " "], [" ", "O", " "]];
      expect(testBoard.checkColumns()).toEqual(true);

      testBoard.state = [[" ", " ", "X"], [" ", " ", "X"], [" ", " ", "X"]];
      expect(testBoard.checkColumns()).toEqual(true);

      testBoard.state = [["X", " ", " "], ["O", " ", " "], ["X", " ", " "]];
      expect(testBoard.checkColumns()).toEqual(false);
    });
  });


  describe('checkWin', function() {
    it ('checks the state of the board for a win', function() {
      testBoard.state = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
      expect(testBoard.checkWin()).toEqual(false);

      testBoard.state = [['X', 'X', 'X'], [" ", " ", " "], [" ", " ", " "]];
      expect(testBoard.checkWin()).toEqual(true);

      testBoard.state = [['X', " ", " "], [" ", 'X', " "], [" ", " ", 'X']];
      expect(testBoard.checkWin()).toEqual(true);

      testBoard.state = [[" ", " ", "X"], [" ", " ", "X"], [" ", " ", "X"]];
      expect(testBoard.checkWin()).toEqual(true);

      testBoard.state = [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["O", "X", "O"]
      ];
      expect(testBoard.checkWin()).toEqual(false);
    });
  });

  describe('isAvailable', function() {
    it('checks the space to see if available', function() {
      testBoard.state = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
      expect(testBoard.isAvailable(0, 1)).toEqual(true);

      testBoard.state = [[" ", "X", " "], [" ", " ", " "], [" ", " ", " "]];
      expect(testBoard.isAvailable(0, 1)).toEqual(false);
    });
  });

  describe('makeMove', function() {
    it('should set the given space of the board state', function() {
      testBoard.state = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
      testBoard.makeMove(0, 1, "X");
      expect(testBoard.state).toEqual([[" ", "X", " "], [" ", " ", " "], [" ", " ", " "]]);

    });

  });


});
