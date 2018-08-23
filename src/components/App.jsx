// App.jsx

import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import EntryBox from '../containers/EntryBox';
import NavBar from './NavBar';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoute from '../utils/PrivateRoute';
import UnusedPage from '../utils/UnusedPage';
import Authenticate from '../utils/Authenticate';
import Entry from './Entry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      gotUser: false, // gotUser needed so redirects don't happen too early
      username: '',
      name: '',
      email: '',
    };

    this.getUser = this.getUser.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  // Get the User before Page renders
  componentWillMount() {
    this.getUser();
  }

  // GET - User account from express sessions
  getUser() {
    axios.get('/user/').then((response) => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ');

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          name: response.data.user.name,
          email: response.data.user.email,
        });
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
        });
      }
      this.setState({
        gotUser: true,
      });
    });
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  render() {
    const { loggedIn, gotUser } = this.state;
    console.log(loggedIn);
    return (
      <div className="App">
        <div className="NavBar">
          <NavBar loggedIn={loggedIn} updateUser={this.updateUser} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <div className="container">
                <Switch>
                  {/* Only redirect if user has been requested */}
                  {gotUser ? (
                    <PrivateRoute exact path="/" component={EntryBox} loggedIn={loggedIn} />
                  ) : (
                    ''
                  )}
                  <Route path="/user/login" render={() => <Login updateUser={this.updateUser} />} />
                  <Route
                    path="/user/register"
                    render={() => <Register register={this.Register} />}
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
