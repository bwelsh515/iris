// Entry.jsx

import React from 'react';
import PropTypes from 'prop-types';

const Entry = (props) => {
  // destructor
  const { title, author, content } = props;

  return (
    <div className="container entry">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
};

Entry.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Entry;
