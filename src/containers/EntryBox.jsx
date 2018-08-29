// EntryBox.jsx

import React, { Component } from 'react';
import fs from 'fs';
import EntryAdd from '../components/EntryAdd';
import EntryList from '../components/EntryList';
import { addUserEntry } from '../utils/api';

class EntryBox extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
      name: '',
      title: '',
      content: '',
      _id: '',
      username: '',
    };
  }

  componentWillMount() {
    // this.fetchEntries();
    //  console.log(this.state.data);
    const { name, username } = this.props;
    this.setState({ name, username });
  }

  // fetchEntries = () => {
  //   // use fetch (whatwg-fetch) when DLing from browser
  //   // console.log(jsonData);

  //   getUserEntryData().then((data) => {
  //     this.setState({ data });
  //   });
  // };

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
    // console.log(`author: ${author}   title: ${title}   content: ${content}`);
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
    this.setState({ title: '' });
    this.setState({ content: '' });
  };

  render() {
    const {
      data, content, title, name, username,
    } = this.state;
    return (
      <div className="EntryBox">
        <EntryAdd
          content={content}
          handleInputChange={this.handleInputChange}
          title={title}
          handleSubmitEntry={this.handleSubmitEntry}
        />
        <EntryList data={data} />
        <h5>
          {name}
          {' '}
          {username}
        </h5>
      </div>
    );
  }
}

export default EntryBox;
