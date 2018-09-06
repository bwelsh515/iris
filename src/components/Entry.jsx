// Entry.jsx

import React from 'react';
import PropTypes from 'prop-types';
import '../css/Entry.css';

const Entry = (props) => {
  // destructor
  const { title, author, content } = props;

  return (
    <div className="container">
      <h2 className="card-title title pt-3">{title}</h2>
      <h6 className="card-subtitle mb-2 text-muted author">{author}</h6>
      <p className="card-text pb-5 pt-3">{content}</p>
    </div>
  );
};

Entry.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Entry;
