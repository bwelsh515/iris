// EntryBox.jsx

import React, { Component } from 'react';
import fs from 'fs';
import EntryAdd from '../components/EntryAdd';
import EntryList from '../components/EntryList';
import jsonData from '../data.json';
import { getUserEntryData } from '../utils/api';

class EntryBox extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
      author: 'Brian Welsh',
      title: '',
      content: '',
    };
  }

  componentWillMount() {
    this.fetchEntries();
    console.log(this.state.data);
  }

  fetchEntries = () => {
    // use fetch (whatwg-fetch) when DLing from browser
    // console.log(jsonData);

    getUserEntryData().then((data) => {
      this.setState({ data });
    });
  };

  handleInputChange = (event) => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmitEntry = (e) => {
    e.preventDefault();
    const { author, title, content } = this.state;
    // console.log(`author: ${author}   title: ${title}   content: ${content}`);
    if (!title || !content) {
      // TODO: Error Handle
      return;
    }
    // TODO: Encode into JSON and write to data.json (eventually DB)

    jsonData.push({ author, title, content });
    console.log(jsonData);
    console.log(JSON.stringify(jsonData));
    fs.writeFile('../data.json', jsonData, 'utf8', (err, obj) => {
      if (err) throw err;
      console.log('write to json.data complete');
    });
    this.setState({ title: '' });
    this.setState({ content: '' });
  };

  render() {
    const { data, content, title } = this.state;
    return (
      <div className="EntryBox">
        <EntryAdd
          content={content}
          handleInputChange={this.handleInputChange}
          title={title}
          handleSubmitEntry={this.handleSubmitEntry}
        />
        <EntryList data={data} />
      </div>
    );
  }
}

export default EntryBox;
