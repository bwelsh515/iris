// App.jsx

import React, { Component } from 'react';
import '../css/App.css';
import { Route, Switch } from 'react-router-dom';
import EntryBox from './EntryBox';
import NavBar from '../components/NavBar';
import Login from './Login';
import Register from './Register';
import PrivateRoute from '../utils/PrivateRoute';
import UnusedPage from '../utils/UnusedPage';
import { getUser } from '../utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      gotUser: false, // gotUser needed so redirects don't happen too early
      username: '',
      name: '',
      email: '',
    };

    this.componentWillMount = this.componentWillMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  // Get the User before Page renders
  componentWillMount() {
    getUser(this.updateUser);
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  render() {
    const {
      isAuthenticated, gotUser, username, name,
    } = this.state;
    console.log(isAuthenticated);
    return (
      <div className="App">
        <div className="NavBar">
          <NavBar isAuthenticated={isAuthenticated} updateUser={this.updateUser} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <div className="container">
                <Switch>
                  {/* Only redirect if user has been requested */}
                  {gotUser ? (
                    <PrivateRoute
                      exact
                      path="/"
                      component={EntryBox}
                      isAuthenticated={isAuthenticated}
                      username={username}
                      name={name}
                    />
                  ) : (
                    ''
                  )}
                  <Route
                    path="/login"
                    render={() => (
                      <Login updateUser={this.updateUser} isAuthenticated={isAuthenticated} />
                    )}
                  />
                  <Route
                    path="/register"
                    render={() => (
                      <Register register={this.Register} isAuthenticated={isAuthenticated} />
                    )}
                  />
                  <Route component={UnusedPage} />
                </Switch>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
