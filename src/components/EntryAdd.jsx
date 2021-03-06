// AddEntry.js

import React from 'react';
import PropTypes from 'prop-types';
import '../css/EntryAdd.css';

const EntryAdd = (props) => {
  // Destruct props
  const {
    title, content, handleInputChange, handleSubmitEntry,
  } = props;

  return (
    <div className="add-entry">
      <div className="header text-center mb-3">Open Your Mind</div>
      <form onSubmit={handleSubmitEntry}>
        <div className="form-group">
          <label htmlFor="title" className="journal-title">
            Title
            <input
              type="text"
              className="form-control journal-title-box"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="What were today's highlights?"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="journal-content">
            What Happened Today?
            <textarea
              type="text"
              className="journal-content-box form-control"
              name="content"
              value={content}
              onChange={handleInputChange}
              placeholder="Talk about anything"
            />
          </label>
        </div>
        <button type="submit" className="entry-btn float-right">
          Submit
        </button>
      </form>
    </div>
  );
};

// Prop-types
EntryAdd.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmitEntry: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default EntryAdd;
