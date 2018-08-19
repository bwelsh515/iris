// App.jsx

import React from 'react';
import '../css/App.css';
import EntryBox from '../containers/EntryBox';
import NavBar from './NavBar';

const App = () => (
  <div className="App">
    <div className="NavBar">
      <NavBar />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <div className="container">
            <EntryBox />
          </div>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  </div>
);

export default App;
