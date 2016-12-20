import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
// import CellView from 'app/views/cell_view';
//import the Board collection??

const BoardView = Backbone.View.extend({
  initialize: function() {
    console.log("Made a BoardView!!!");
    console.log("MODEL ====" + this.model.board.state);

    // this.listenTo(this.model, 'update', this.render);

    // this.cells = [];
    // this.cellTemplate = _.template($('#tmpl-cell-rendering').html());
    //
    // for(var i = 0; i < 3; i++) {
    //   for(var j = 0; j < 3; j++) {
    //     var cell = new CellView({
    //       model: cell,
    //       row: i,
    //       column: j,
    //       template: this.cellTemplate
    //     });
    //     this.listenTo(cell, 'setState', this.setMarker);
    //     this.cells.push(cell);
    //   }
    // }
    // this.render();

  },

  events: {
    'click .square': 'setMarker'
  },

  setMarker: function(e) {
    console.log(e);
    var space = e.target;
    console.log("THE SPACE IS" + space);

    var eRow = e.currentTarget.attributes.row.value;
    var eColumn = e.currentTarget.attributes.col.value;

    console.log("MARKER SET CALLED AT " + eRow + ", " + eColumn);

    if (this.model.board.isAvailable(eRow, eColumn)) {
      this.model.board.makeMove(eRow, eColumn, this.model.currentPlayer.get('mark'));
      var html = "ABC";
      $(space).html(this.model.currentPlayer.get('mark'));
      this.model.togglePlayer();
    }
    console.log(this.model.board.state);
  },

  render: function() {

  }
});//el.html(players marker)

export default BoardView;
