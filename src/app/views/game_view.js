import Backbone from 'backbone';
import $ from 'jquery';
import Game from 'app/models/game';
// we may not need these:
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
// import Player from 'app/models/player';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.model = new Game();

    var gameViewModel = this.model;
    console.log("MODEL" + this.model.board.state);

    this.board = new BoardView({
      el: $('#game-board'),
      model: gameViewModel
    });

    this.board.render();
  },

  events: {
    'click #new-game-button': 'createNewGame'
  },

  createNewGame: function() {
    console.log("Created a new game");
    this.model = new Game();
    console.log(this.model.board.state);
    //render something here
  }
});

export default GameView;
