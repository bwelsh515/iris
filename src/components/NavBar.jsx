import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Authenticate from '../utils/Authenticate';

class NavBar extends Component {
  logout = (event) => {
    event.preventDefault();
    console.log('logging out');
    const { updateUser } = this.props;
    axios
      .post('/user/logout')
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          // Authenticate.logout();
          updateUser({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((error) => {
        console.log('Logout error');
      });
  };

  render() {
    const { loggedIn } = this.props;
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
          {loggedIn ? (
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
