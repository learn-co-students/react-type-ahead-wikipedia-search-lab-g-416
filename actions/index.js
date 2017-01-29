'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();
  var rStore = new resultStore.isOutdated(requested);


  return wikipedia.search(query).then((data) => {
    // TODO

    // THIS IS DATA
  [ 
    'query',
    [ 'title 1', 'title 2' ],
    [ 'description 1', 'description 2' ], 
    [ 'link 1', 'link 2' ] 
  ]



  });
};

module.exports = { search };
