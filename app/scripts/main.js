/*global Tabletop: false, _: false */
'use strict';

var App = App || {};

App = {
  init: function () {
    App.videoBackground();
    App.loadSpreadsheet();
  },
  typeahead: function () {
    var $writer = $('#quote-text'),
        text = $writer.text(),
        textLength = text.length,
        timeOut,
        character = 0;

    $writer.text('|');

    (function typeIt () {
      var humanize = Math.round(Math.random() * (200 - 30)) + 30;

      timeOut = setTimeout(function () {
        character++;
        var type = text.substring(0, character);
        $writer.text(type + '|');
        typeIt();

        if (character === textLength) {
          $writer.text($writer.text().slice(0, -1)); // remove '|'
          clearTimeout(timeOut);
        }
      }, humanize);
    }());

  },
  videoBackground: function() {
    var videoIds = ['doVYFjIJcfU', 'j0kQ6ZEVkmc', 'JVZwoLZgrRs', 'bsaA903oxvc', 'zL0ipXUD-uU', 'EX_9jKFpQKM', 'qpyecIbxGMc', 'Zpq2l-Ljjrw', '6UeCRY1wciA', 'R8XAlSp838Y', 'WWAf0b3yNko', 'Fe93CLbHjxQ', 'sZkxJhsP384', '7AEMiz6rcxc', 'BazcTCoXcTA'];
    $.okvideo({
      video: App._generateId(_.sample(videoIds)),
      annotations: false,
      onFinished: function () {
        location.reload();
      }
    });
  },
  _generateId: function (videoID) {
    return '[:' + videoID + ']';
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
    // Assign either the live data or the proxy data
    App.data = data.length > 1 ? data : App.proxy();
    //randomly select a quote
    var quote = _.sample(App.data);

    $('#quote-text').text(quote.quote);

    App.typeahead();
  },
  proxy: function () {
    console.log('using proxy data');
    var quotes = [
      {"quote":"The universe picked me up, slapped me around and called me Suzie.","rowNumber":1},
      {"quote":"Data is not a magical fucking unicorn","rowNumber":2},
      {"quote":"Well fuck me running with a garden hose.","rowNumber":3},
      {"quote":"I don't do shit.","rowNumber":4},
      {"quote":"Two tears in a bucket -- fuck it.","rowNumber":5},
      {"quote":"Same shit; different shoe.","rowNumber":6},
      {"quote":"The reach around.","rowNumber":7},
      {"quote":"[Insert project or technology] is kickin' my ass","rowNumber":8},
      {"quote":"I gotta put on my monkey suit.","rowNumber":9},
      {"quote":"My race, the cockroach people, are breeding ya'll out fool","rowNumber":10},
      {"quote":"We're taking over your cultural institutions.","rowNumber":11},
      {"quote":"Word up G-Money","rowNumber":12},
      {"quote":"I heard it in a movie in the 90s and I've been using it ever since","rowNumber":13},
      {"quote":"I'd tell her if she didn't have the sauce","rowNumber":14},
      {"quote":"(on Birthdays) Another trip around the sun - fuck it","rowNumber":15},
      {"quote":"Yeah, I'm a ducheschnozle","rowNumber":16},
      {"quote":"(On going to NYT) I thought I'd throw myself in like a big pinata and get beat up.","rowNumber":17},
      {"quote":"Do you want me to hold them down and kick 'em in the ding-ding? (Or simply: Kick 'em in the ding-ding.)","rowNumber":18},
      {"quote":"I have no answers, only tears.","rowNumber":19},
      {"quote":"I'm just a hick from the sticks.","rowNumber":20},
      {"quote":"(on Exercise) They ask me if I want the six pack or the keg. (patting belly) I choose keg every time.","rowNumber":21}
    ];

    return quotes;
  }
};

jQuery(document).ready(function() {
  App.init();
});