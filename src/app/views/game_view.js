import Backbone from 'backbone';
import $ from 'jquery';
import Game from 'app/models/game';
// we may not need these:
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
// import Player from 'app/models/player';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.model = null;
    this.board = null;
    $('#game-board').hide();
  },

  events: {
    'click #new-game-button': 'createNewGame'
  },

  createNewGame: function() {
    $('#game-board').show();
    // console.log("Created a new game");
    this.model = new Game();
    // console.log(this.model.board.state);
    this.createNewBoard(this.model);
  },

  createNewBoard: function(mod) {
    this.board = new BoardView({
      el: $('#game-board'),
      model: mod
    });

    $('td').each(function() {
      $(this).empty();
    });
  }
});

export default GameView;
