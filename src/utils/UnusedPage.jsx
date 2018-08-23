import React from 'react';
import { Link } from 'react-router-dom';

const UnusedPage = () => (
  <div className="UnusedPage">
    <div className="row">
      <div className="col-md-12">
        <h1>Oops!</h1>
        <h2>404: Not Found</h2>
        <div className="error-details">Sorry, an error has occured. Requested Page not Found!</div>
        <div className="error-actions">
          <Link className="btn btn-lg btn-primary" to="/">
            Take Me Home
            {' '}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default UnusedPage;
