// Register.jsx

import React, { Component } from 'react';
import '../css/Register.css';
import { Redirect, Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { addUser } from '../utils/api';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      error: [],
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      redirectTo: '',
    };

    this.handleTextChange = this.handleTextChange.bind();
    this.handleSubmit = this.handleSubmit.bind();
    this.updateState = this.updateState.bind();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const userObj = this.state;

    // TODO: Validate Input

    // Send Server Request
    console.log('sign-up handleSubmit, username: ');
    const { username } = this.state;
    console.log(username);

    addUser(userObj, this.updateState);
  };

  // Called when form input changes
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
    const {
      name, username, email, password, confirmPassword, redirectTo,
    } = this.state;
    const { isAuthenticated } = this.props;

    // Redirect to home after login or if authenticated
    if (redirectTo) {
      return <Redirect to={{ pathname: redirectTo }} />;
    }

    // Redirect to home if authenticated (so user cant use login form if logged in)
    if (isAuthenticated) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <div className="Register">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5 shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <div className="text-center card-title header">
                <strong>Register An Account</strong>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter name"
                      onChange={this.handleTextChange}
                      value={name}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="username">
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
                  <label htmlFor="email">
                    Email Address
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={this.handleTextChange}
                      name="email"
                      value={email}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="password">
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
                <div className="form-group">
                  <label htmlFor="confirmpassword">
                    Confirm Password
                    <input
                      type="password"
                      className="form-control"
                      id="confirm-password"
                      placeholder="Confirm password"
                      onChange={this.handleTextChange}
                      name="confirmPassword"
                      value={confirmPassword}
                    />
                  </label>
                </div>
                <div className="row float-right">
                  <button type="submit" className="btn btn-primary btn-submit">
                    Sign Up
                  </button>
                  <Link to="/login" className="btn btn-outline-danger">
                    Already Have an Account?
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

Register.propTypes = {
  isAuthenticated: propTypes.bool.isRequired,
};

export default Register;
