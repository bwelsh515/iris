// api.jsx

import axios from 'axios';
import { stat } from 'fs';

const BASE_URL = 'http://localhost:8080';

// function getUserEntryData() {
//   const url = `${BASE_URL}/api/user/entry`;
//   return axios.get(url).then(response => response.data);
// }

// function RegisterUser() {
//   const url = `${BASE_URL}/api/user/register`;
// }

// export { getUserEntryData };

// GET - Current user from Express Sessions
const getUser = (stateCallback) => {
  axios.get('/api/user/').then((response) => {
    console.log('Get user response: ');
    console.log(response.data);
    if (response.data.user) {
      console.log('Get User: There is a user saved in the server session: ');
      console.log(response.data.user);

      stateCallback({
        isAuthenticated: true,
        username: response.data.user.username,
        name: response.data.user.name,
        email: response.data.user.email,
      });
    } else {
      console.log('Get user: no user');
      stateCallback({
        isAuthenticated: false,
        username: null,
      });
    }
    stateCallback({
      gotUser: true,
    });
  });
};

// POST - Add New User
const addUser = (userObj, stateCallback) => {
  const {
    name, username, email, password,
  } = userObj;
  axios
    .post('/api/user/register', {
      name,
      username,
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (!response.data.error) {
        console.log('successful signup');
        stateCallback({
          // redirect to login page
          redirectTo: '/login',
        });
      } else {
        console.log('username already taken');
        // TODO: Fix Error Handling
        this.state.error.push('Username Already Taken');
      }
    })
    .catch((err) => {
      console.log('signup error: ');
      console.log(err);
    });
};

// POST - Login User
const loginUser = (userObj, userCallback, stateCallback) => {
  const { username, password } = userObj;
  axios
    .post('/api/user/login', {
      username,
      password,
    })
    .then((response) => {
      console.log('login response: ');
      console.log(response);
      if (response.status === 200) {
        // update App.js state
        userCallback({
          isAuthenticated: true,
          username: response.data.username,
        });
        // update the state to redirect to home
        stateCallback({
          redirectTo: '/',
        });
      }
    })
    .catch((error) => {
      console.log('login error: ');
      console.log(error);
    });
};

// POST - Logout Current User
const logoutUser = (stateCallback) => {
  console.log('logging out');
  axios
    .post('/api/user/logout')
    .then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        // Authenticate.logout();
        stateCallback({
          isAuthenticated: false,
          username: null,
        });
      }
    })
    .catch((error) => {
      console.log('Logout error');
    });
};

export {
  getUser, addUser, loginUser, logoutUser,
};
