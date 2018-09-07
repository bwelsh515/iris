import React from 'react';
import { Link } from 'react-router-dom';
import '../css/UnusedPage.css';

const UnusedPage = () => (
  <div className="UnusedPage">
    <div className="row">
      <div className="col-md-12 text-center pt-5">
        <h1 className="error-header">Oops!</h1>
        <h2 className="error-subheader">404: Not Found</h2>
        <div className="error-details">Sorry, an error has occured. Requested Page not Found!</div>
        <div className="error-actions mt-5">
          <Link className="home-btn" to="/">
            Take Me Home
            {' '}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default UnusedPage;
