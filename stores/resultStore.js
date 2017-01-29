'use strict';

const Store = require('./Store');

class ResultStore extends Store {

  constructor(props){
    var rightNow = new Date();

    super(props);
    this.state = { 
      results: []
    };
  }

  isOutdated(requestDate){
    //
    var requestDate = requestDate;

    console.log('THIS IS REQUEST DATE!!!!!!!!!')
    console.log(requestDate);
    console.log(typeof requestDate)
    console.log('THIS IS BOOL!!!!!!!!!');
    return true;
  }
}

module.exports = new ResultStore();
