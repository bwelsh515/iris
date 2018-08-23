// Authenticate.jsx

// Used to Determine if user is signed in or not
// Called on Signin (authenticate()) and on logout (logout())
const Authenticate = {
  isAuth: false,

  authenticate() {
    this.isAuth = true;
  },

  logout() {
    this.isAuth = false;
  },
};

export default Authenticate;
