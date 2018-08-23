import React, { Component } from 'react';
import '../css/Register.css';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Authenticate from '../utils/Authenticate';

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
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
    const { username, password } = this.state;

    axios
      .post('/user/login', {
        username,
        password,
      })
      .then((response) => {
        console.log('login response: ');
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          // Authenticate.authenticate();
          const { updateUser } = this.props;
          updateUser({
            loggedIn: true,
            username: response.data.username,
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: '/',
          });
        }
      })
      .catch((error) => {
        console.log('login error: ');
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
      name, username, email, password, confirmPassword, redirectTo,
    } = this.state;
    if (redirectTo) {
      return <Redirect to={{ pathname: redirectTo }} />;
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
                  <Link to="/user/register" className="btn btn-outline-danger">
                    Don't Have an Account?
                  </Link>
                  <button type="submit" className="btn btn-primary btn-submit">
                    Log In
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

export default Login;
