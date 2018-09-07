// EntryList.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';
import EntryNone from './EntryNone';
import '../css/EntryNone.css';

const EntryList = (props) => {
  // Destruct Props
  const { entries } = props;
  let entryNodes;

  if (entries && entries.length > 0) {
    // Iterate through entries and map each to an li Entry component
    console.log('Load mapped entries');
    entryNodes = entries
      .slice(0)
      .reverse()
      .map(entry => (
        <li className="list-group-item" key={entry._id}>
          <Entry author={entry.name} title={entry.title} content={entry.content} />
        </li>
      ));
  } else {
    entryNodes = (
      <li className="list-group-item">
        <EntryNone />
      </li>
    );
  }

  // Return list of Entries
  return (
    <ul className="list-group list-group-flush">
      <div>{entryNodes}</div>
    </ul>
  );
};

EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

EntryList.defaultProps = {
  entries: [],
};

export default EntryList;
