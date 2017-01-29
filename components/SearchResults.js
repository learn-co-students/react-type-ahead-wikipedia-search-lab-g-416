'use strict'

const React = require('react');

const SearchResults = ({ results }) => (
  <ul className='search-results'>
    {results.map((r) => 
      <li>
        <a href={r.link}>{r.title}</a>
        <p>{r.description}</p>
      </li>
    )}
  </ul>
);

module.exports = SearchResults;
