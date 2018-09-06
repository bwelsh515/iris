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
    this.pollInterval = null;
    // this.componentWillMount = this.componentWillMount.bind();
    // this.fetchEntries = this.fetchEntries.bind();
    this.updateState = this.updateState.bind();
  }

  // Set state from props / Get user's entries
  componentWillMount() {
    const { name, username } = this.props;
    this.setState({ name, username });

    getUserEntries(username, this.updateState);
  }

  componentDidMount() {
    const { username } = this.state;
    getUserEntries(username, this.updateState);
  }

  // componentDidUpdate() {
  //   // const { username } = this.state;
  //   // getUserEntries(username, this.updateState);
  // }

  fetchEntries = () => {
    // const { username } = this.state;
    // getUserEntries(username, this.updateState);
    // .then((data) => {
    //   this.setState({ data });
    // });
  };

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
    addUserEntry(entryObj, this.updateState);

    // Reset the state of the Component
    this.setState({ title: '', content: '' });
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

EntryBox.propTypes = {
  name: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
};

export default EntryBox;

// TODO: Figure out why the logout button has margins on it when signed in
// Add FA to Entries navbar
// Style Entry Box
