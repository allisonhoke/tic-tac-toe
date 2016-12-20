import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
// import CellView from 'app/views/cell_view';
//import the Board collection??

const BoardView = Backbone.View.extend({
  initialize: function() {
    console.log("Made a BoardView!!!");
    console.log("MODEL ====" + this.model.board.state);
  },

  events: {
    'click .square': 'setMarker'
  },

  setMarker: function(e) {
    var winner = null;
    var space = e.target;
    var eRow = e.currentTarget.attributes.row.value;
    var eColumn = e.currentTarget.attributes.col.value;

    if (!this.model.won && this.model.board.isAvailable(eRow, eColumn)) {
      this.model.board.makeMove(eRow, eColumn, this.model.currentPlayer.get('mark'));
      $(space).html(this.model.currentPlayer.get('mark'));

      //check win
      if (this.model.board.checkWin()) {
        winner = this.model.currentPlayer.get('name');
        this.model.won = true;
        alert(winner + " wins!!!!!");
      }

      this.model.togglePlayer();
    }

    console.log(this.model.board.state);
  },

  render: function() {

  }
});

export default BoardView;
