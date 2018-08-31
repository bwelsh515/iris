// EntryList.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';

// Props: entries: []
const EntryList = (props) => {
  const { entries } = props;

  // Slice and Reverse (so newest entry is at top) entries array
  // Then map them to a new list element of Component Entry
  const entryNodes = entries
    .slice(0)
    .reverse()
    .map(entry => (
      <li className="list-group-item entry" key={entry._id}>
        <Entry author={entry.name} title={entry.title} content={entry.content} />
      </li>
    ));

  // Return the list ul of Entries
  return (
    <ul className="entry-list list-group">
      <div>{entryNodes}</div>
    </ul>
  );
};

// Prop Types for EntryList
EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

// Default Prop Types for EntryList
EntryList.defaultProps = {
  entries: [],
};

export default EntryList;
