'use strict';

var App = App || {};

App = {
  init: function () {
    App.loadSpreadsheet();
  },
  loadSpreadsheet: function () {
    var googleSpreadsheetKey = '1OWqhOiehU4iXRMipRh7LXCFzEUnSxSHEhpjPmY_T5zM';

    Tabletop.init({
          key: googleSpreadsheetKey,
          simpleSheet: true,
          callback: App.build
        });
  },
  build: function (data) {
    var source = $('#template').html(),
        template = Handlebars.compile(source),
        quotes = { quotes: data };

    $('#template-target').html(template(quotes));
  }
};

jQuery(document).ready(function() {
  App.init();
});