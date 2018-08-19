import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Iris
    </Link>
    <ul className="mr-auto navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Entries
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Profile
        </Link>
      </li>
    </ul>
    <ul className="navbar-nav navbar-right">
      <li>
        <button className="btn btn-info log">Log In</button>
      </li>
      <li>
        <button className="btn btn-danger log">Log Out</button>
      </li>
    </ul>
  </nav>
);

export default NavBar;
