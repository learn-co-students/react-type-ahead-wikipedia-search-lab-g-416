'use strict'

const React = require('react');
const actions = require('../actions/index')

const SearchField = props => (
  <input className='search-field' value={props.value} onChange={props.query}/>
);

module.exports = SearchField;
