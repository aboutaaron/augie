'use strict';

var App = App || {};

App = {
  init: function () {
    console.log('boom!');
  }
};

jQuery(document).ready(function() {
  App.init();
});