import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../utils/api';

class NavBar extends Component {
  logout = (e) => {
    e.preventDefault();
    const { updateUser } = this.props;
    logoutUser(updateUser);
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Iris
        </NavLink>
        <ul className="mr-auto navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Entries
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Profile
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right">
          {isAuthenticated ? (
            <li>
              <button type="button" onClick={this.logout} className="btn btn-danger log">
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <NavLink className="btn btn-info log" to="/user/login">
                Log In
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
