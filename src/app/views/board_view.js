import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import CellView from 'app/views/cell_view';
//import the Board collection??

const BoardView = Backbone.View.extend({
  initialize: function() {
    console.log("Made a BoardView!!!");

    this.listenTo(this.model, 'update', this.render);

    this.cells = [];
    this.cellTemplate = _.template($('#tmpl-cell-rendering').html());

    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        var cell = new CellView({
          model: cell,
          row: i,
          column: j,
          template: this.cellTemplate
        });
        this.listenTo(cell, 'setState', this.setMarker);
        this.cells.push(cell);
      }
    }
    this.render();

  },

  setMarker: function() {
    console.log("MARKER SET");
    this.$el.css('')
  },

  render: function() {
    this.cells.forEach(function(cell) {
      cell.render();
      this.$el.append(cell.$el);
    }, this);
    return this;
  }
});

export default BoardView;
