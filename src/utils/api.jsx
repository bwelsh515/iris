// api.jsx

import axios from 'axios';

// GET - Current user from Express Sessions
const getUser = (stateCallback) => {
  axios.get('/api/user/').then((response) => {
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
// userObj -> username/password of login form
// userCallback -> updates the state of App.jsx
const loginUser = (userObj, userCallback) => {
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
        userCallback({
          isAuthenticated: true,
          username: response.data.username,
          name: response.data.name,
        });
      }
    })
    .catch((error) => {
      console.log('login error: ');
      console.log(error);
    });
};

// POST - Logout Current User
// stateCallback -> updates the state of App.jsx
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

// GET -> retrieves all of user's entries & updates state of EntryBox.jsx
const getUserEntries = (username, stateCallback) => {
  console.log('Get Entries for: ', username);

  axios
    .get('/api/user/id/entry', {
      params: {
        username,
      },
    })
    .then((response) => {
      console.log('success', response.data);
      stateCallback({
        entries: response.data.entries,
      });
      return response.data.entries;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {});
};

// POST - Add User Entry
const addUserEntry = (entryObj, stateCallback) => {
  const {
    username, name, title, content,
  } = entryObj;
  const entries = { name, title, content };
  axios
    .post('/api/user/id/entry', {
      username,
      entries,
    })
    .then((response) => {
      console.log(response);
      if (!response.data.error) {
        console.log('successful entry post');
        // Update Entries in EntryList AFTER new entry POST
        getUserEntries(username, stateCallback);
      } else {
        console.log('Unsuccessful entry post');
        // TODO: Fix Error Handling
        this.state.error.push('An error occured');
      }
    })
    .catch((err) => {
      console.log('Entry error: ');
      console.log(err);
    });
};

export {
  getUser, addUser, loginUser, logoutUser, addUserEntry, getUserEntries,
};
