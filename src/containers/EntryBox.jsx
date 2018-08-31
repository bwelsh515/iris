// EntryBox.jsx

import React, { Component } from 'react';
import propTypes from 'prop-types';
import EntryAdd from '../components/EntryAdd';
import EntryList from '../components/EntryList';
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
    // Set the state of the logged in user name and username
    const { name, username } = this.props;
    this.setState({ name, username });

    // Fetch the user's entries
    getUserEntries(username, this.updateState);
  }

  handleInputChange = (event) => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmitEntry = (e) => {
    e.preventDefault();
    const {
      name, title, content, username,
    } = this.state;
    if (!title || !content) {
      // TODO: Error Handle
      return;
    }
    const entryObj = {
      name,
      title,
      content,
      username,
    };
    addUserEntry(entryObj);

    // Reset the state of the Component
    this.setState({ title: '', content: '' });

    // Get all entries AFTER the newest entry was added (so it displays real time)
    getUserEntries(username, this.updateState);
  };

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
        <EntryList entries={entries} />
      </div>
    );
  }
}

EntryBox.propTypes = {
  name: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
};

export default EntryBox;
