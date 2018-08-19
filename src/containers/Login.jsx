import React, { Component } from 'react';
import '../css/Register.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      username: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
                  <a href="/register" className="btn btn-outline-danger">
                    Don't Have an Account?
                  </a>
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
