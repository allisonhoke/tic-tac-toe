import Player from 'app/models/player';

describe('Player', function() {
  var testPlayer = new Player();
  describe('initial attributes', function(){
    it ("should have a name attribute of `null` initially", function(){
      expect(testPlayer.get('name')).toEqual(null);
    });
    it ('should have a mark initally set to `null`', function() {
      expect(testPlayer.get('mark')).toEqual(null);
    });
    // it ('should have a turn attribute of false', function() {
    //   expect(testPlayer.turn).toEqual(false);
    // });
  });

  // describe('toggle turn true/false', function() {
  //   it ('should set the turn to true', function() {
  //     testPlayer.setTurnTrue();
  //     expect(testPlayer.turn).toEqual(true);
  //   });
  //   it ('should set the turn to false', function() {
  //     testPlayer.setTurnFalse();
  //     expect(testPlayer.turn).toEqual(false);
  //   });
  // });

});
