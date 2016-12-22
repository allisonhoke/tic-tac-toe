import Backbone from 'backbone';
import $ from 'jquery';
import Game from 'app/models/game';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function() {
    //this.model = gameCollection made in app.js
    // this.boardView = null;
    $('#game-board').hide();
    $('#all-game-info').empty();
    // this.listenTo(this.model, 'add', this.render);
    // this.listenTo(this.boardView, 'refresh', this.render);
    // this.listenTo(this.model, 'update', this.render());
  },

  events: {
    'click #new-game-button': 'createNewGame',
    'click #show-games-button': 'showAllGames'
  },

  createNewGame: function() {
    $('#game-board').show();
    $('#all-game-info').hide();
    // console.log("Created a new game");
    this.currentGame = new Game();
    // console.log(this.model.board.state);
    this.createNewBoard(this.currentGame, this.model);

  },

  createNewBoard: function(mod, coll) {
    this.boardView = new BoardView({
      el: $('#game-board'),
      model: mod,
      collection: coll
    });

    $('td').each(function() {
      $(this).empty();
    });
  },

  showAllGames: function() {
    $('#all-game-info').show();
    $('#all-game-info').empty();
    this.model.fetch().done(function(APIdata) {
      APIdata.forEach(function(eachGame) {
        console.log(eachGame);
        $('#all-game-info').append("ID: " + eachGame.id);
        $('#all-game-info').append("Players: " + eachGame.players);
        $('#all-game-info').append("Winner: " + eachGame.outcome);
      });
    });
  },

  render: function() {
    //
    // $('#all-game-info').empty();
    // this.model.fetch().done(function(APIdata) {
    //   APIdata.forEach(function(eachGame) {
    //     console.log(eachGame);
    //     $('#all-game-info').append(eachGame.id);
    //     $('#all-game-info').append(eachGame.outcome);
    //   });
    // });
  }

  // createGameForCollection: function(game) {
  // console.log("========END GAME TRIGGERED=======");
  // // event.preventDefault();
  //
  // // Get the input data from the form and turn it into a contact
  // // var rawGame = {
  // //   board: flatten(game.gameBoard.state),
  // //   players: [game.playerOne.get('name'), game.playerTwo.get('name')],
  // //   outcome: game.gameOutcome
  // // };
  // //
  // // //add the contact to our collection
  // this.model.add(rawGame);
// },
});

export default GameView;
