// EntryList.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';

const EntryList = (props) => {
  const { data } = props;
  const entryNodes = data.map(entry => (
    <li className="list-group-item entry">
      <Entry author={entry.author} title={entry.title} content={entry.content} />
    </li>
  ));

  return (
    <ul className="entry-list list-group">
      <div>{entryNodes}</div>
    </ul>
  );
};

EntryList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      id: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

EntryList.defaultProps = {
  data: [],
};

export default EntryList;
