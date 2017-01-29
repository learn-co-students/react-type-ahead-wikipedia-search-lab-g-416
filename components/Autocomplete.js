'use strict'

const React = require('react');
const actions = require('../actions');
const resultStore = require('../stores/resultStore');

const SearchField = require('./SearchField');
const SearchResults = require('./SearchResults');

class Autocomplete extends React.Component {
  constructor(props) {

    const results = resultStore.getState().results;
    super(props);
    this.state = {
      query: '',
      results: results
    };
  } 

  componentDidMount(){
    this.removeListener = resultStore.addListener((state) => {
      this.setState({ results: state.results });
    });
  }
  
  componentWillUnmount(){
    this.removeListener();
  }

  render() {
    return (
      <div className='autocomplete'>
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query}></SearchField>
        <SearchResults results={this.state.results}></SearchResults>
      </div>
    );
  }
}

module.exports = Autocomplete;
