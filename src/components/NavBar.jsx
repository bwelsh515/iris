import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../utils/api';
import '../css/navbar.css';

class NavBar extends Component {
  logout = (e) => {
    e.preventDefault();
    const { updateUser } = this.props;
    logoutUser(updateUser);
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-light nav-bar-ctm">
        <NavLink className="navbar-brand nb-brand-custom" to="/">
          Iris
        </NavLink>
        <ul className="mr-auto navbar-nav" />
        <ul className="navbar-nav navbar-right">
          {isAuthenticated ? (
            <li className="nav-item">
              <NavLink className="nav-link align-bottom nav-entry" to="/">
                <i className="fa fa-pen" />
                {'    '}
                Entries
              </NavLink>
            </li>
          ) : (
            ' '
          )}
          {isAuthenticated ? (
            <li>
              <button className="nav-logout" type="button" onClick={this.logout}>
                <i className="fa fa-sign-in" />
                {'    '}
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="nav-login" type="button" to="/login">
                <i className="fa fa-sign-in" />
                {'    '}
                Login
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
