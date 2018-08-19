// AddEntry.js

import React from 'react';
import PropTypes from 'prop-types';
import '../css/EntryAdd.css';

const EntryAdd = (props) => {
  const {
    title, content, handleInputChange, handleSubmitEntry,
  } = props;
  return (
    <div className="add-entry container">
      <form onSubmit={handleSubmitEntry}>
        <div className="form-group">
          <label>
            Title
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="Title of Journal Entry"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            What Happened Today?
            <textarea
              type="text"
              className="journal-text form-control"
              name="content"
              value={content}
              onChange={handleInputChange}
              placeholder="Talk About your day"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Submit
        </button>
      </form>
    </div>
  );
};

EntryAdd.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmitEntry: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default EntryAdd;