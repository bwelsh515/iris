// Connect to Mongo database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to Local DB @ 27017
const uri = 'mongodb://localhost:27017/iris';

mongoose.connect(uri).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('Connected to Mongo');
  },
  (err) => {
    /** handle initial connection error */
    console.log('error connecting to Mongo: ');
    console.log(err);
  },
);

module.exports = mongoose.connection;
