/*global Tabletop: false */
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
    // Assign either the live data or the proxy data
    App.data = data.length > 1 ? data : App.proxy();
    //randomly select a quote
    var quote = App.data[ Math.floor( Math.random() * App.data.length ) ];

    $('.quote').text(quote.quote);
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