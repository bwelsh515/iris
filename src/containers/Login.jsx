import React, { Component } from 'react';
import '../css/Register.css';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { loginUser } from '../utils/api';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      username: '',
      password: '',
      redirectTo: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.updateState = this.updateState.bind();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
    // const userObj = this.state;
    const { username, password } = this.state;
    const { updateUser } = this.props;
    const userObj = { username, password };
    loginUser(userObj, updateUser);
  };

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateState = (newState) => {
    this.setState(newState);
  };

  render() {
    const {
      name, username, email, password, confirmPassword, redirectTo,
    } = this.state;
    const { isAuthenticated } = this.props;

    // Redirect to home after login
    // if (redirectTo) {
    //   return <Redirect to={{ pathname: redirectTo }} />;
    // }
    // Redirect to home if authenticated (so user cant use login form if logged in)
    if (isAuthenticated) {
      return <Redirect to={{ pathname: '/' }} />;
    }
    return (
      <div className="login">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5 shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <div className="text-center card-title header">
                <strong>Log In</strong>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>
                    Username
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      onChange={this.handleTextChange}
                      value={username}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Password
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      onChange={this.handleTextChange}
                      name="password"
                      value={password}
                    />
                  </label>
                </div>
                <div className="row float-right">
                  <button type="submit" className="btn btn-primary btn-submit">
                    Log In
                  </button>
                  <Link to="/register" className="btn btn-outline-danger">
                    Don't Have an Account?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
