// Login.jsx

import React, { Component } from 'react';
import '../css/Register.css';
import { Redirect, Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { loginUser } from '../utils/api';
import '../css/login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.updateState = this.updateState.bind();
  }

  // Called when submit button is pressed -> Logs in the user
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
    const { username, password } = this.state;
    const { updateUser } = this.props;
    const userObj = { username, password };
    loginUser(userObj, updateUser);
  };

  // Called when input changes on Login Form
  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Helper function to update state
  updateState = (newState) => {
    this.setState(newState);
  };

  render() {
    const { username, password } = this.state;
    const { isAuthenticated } = this.props;

    // Redirect to home if authenticated (so user cant use login form if logged in)
    if (isAuthenticated) {
      return <Redirect to={{ pathname: '/' }} />;
    }
    return (
      <div className="login">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin shadow  mb-5 bg-white rounded">
            <div className="card-header">
              <h3 className="mb-0">Account Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    onChange={this.handleTextChange}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleTextChange}
                    name="password"
                    value={password}
                  />
                </div>
                <div className="row float-right">
                  <Link to="/register" className="mt-4 mr-4 link">
                    Don&apos;t Have an Account?
                  </Link>
                  <button type="submit" className=" btn btn-info btn-lg btn-submit">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="filler" />
      </div>
    );
  }
}

Login.propTypes = {
  isAuthenticated: propTypes.bool.isRequired,
  updateUser: propTypes.func.isRequired,
};

export default Login;
