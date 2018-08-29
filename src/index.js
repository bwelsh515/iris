// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './css/bootstrap.min.css';
import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// TODO: Fix File Structure
// TODO: Add Timestamp
