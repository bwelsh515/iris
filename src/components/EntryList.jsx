// EntryList.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';

const EntryList = (props) => {
  const { entries } = props;
  const entryNodes = entries
    .slice(0)
    .reverse()
    .map(entry => (
      <li className="list-group-item entry" key={entry._id}>
        <Entry author={entry.name} title={entry.title} content={entry.content} />
      </li>
    ));

  return (
    <ul className="entry-list list-group">
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
