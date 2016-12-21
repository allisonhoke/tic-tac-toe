import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  defaults: {
    name: null,
    mark: null
  },
  //
  // initialize: function() {
  //   this.turn = false;
  // },
  // 
  // setTurnFalse: function() {
  //   this.turn = false;
  // },
  //
  // setTurnTrue: function() {
  //   this.turn = true;
  // }
});

export default Player;
