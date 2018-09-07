// EntryBox.jsx

import React, { Component } from 'react';
import propTypes from 'prop-types';
import EntryAdd from '../components/EntryAdd';
import EntryList from '../components/EntryList';
import '../css/EntryBox.css';
import { addUserEntry, getUserEntries } from '../utils/api';

class EntryBox extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      error: null,
      name: '',
      title: '',
      content: '',
      _id: '',
      username: '',
    };
    this.updateState = this.updateState.bind();
  }

  // Set state from props / Get user's entries
  componentWillMount() {
    const { name, username } = this.props;
    this.setState({ name, username });
  }

  componentDidMount() {
    const { username } = this.state;
    getUserEntries(username, this.updateState);
  }

  handleInputChange = (event) => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmitEntry = (e) => {
    e.preventDefault();

    // Destruct State
    const {
      name, title, content, username,
    } = this.state;

    // Do nothing if either input is empty
    if (!title || !content) {
      // TODO: Error Handle
      return;
    }

    // Call API to add entry to DB
    const entryObj = {
      name,
      title,
      content,
      username,
    };
    addUserEntry(entryObj, this.updateState);

    // Reset the state of the Component
    this.setState({ title: '', content: '' });
  };

  // State Callback
  updateState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    const { content, title, entries } = this.state;
    return (
      <div className="EntryBox">
        <EntryAdd
          content={content}
          handleInputChange={this.handleInputChange}
          title={title}
          handleSubmitEntry={this.handleSubmitEntry}
        />
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <EntryList entries={entries} />
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    );
  }
}

// PropTpes
EntryBox.propTypes = {
  name: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
};

export default EntryBox;
