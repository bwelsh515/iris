// Register.jsx

import React, { Component } from 'react';
import axios from 'axios';
import '../css/Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.handleTextChange.bind();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const {
      name, username, email, password, confirmPassword,
    } = this.state;

    // Send Server Request
    axios
      .post('/', {
        name,
        username,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
          console.log('successful signup');
          this.setState({ redirectTo: '/login' });
        } else {
          console.log('sign in error');
        }
      })
      .catch((error) => {
        console.log('sign up server error: ');
        console.log(error);
      });
  };

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      name, username, email, password, confirmPassword,
    } = this.state;
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
                  <label>
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
                <div className="form-group">
                  <label>
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
                  <a href="/login" className="btn btn-outline-danger">
                    Already Have an Account?
                  </a>
                  <button type="submit" className="btn btn-primary btn-submit">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
