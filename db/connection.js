// import mongoose
const mongoose = require('mongoose');

// ternary that sets uri to local uri if NODE_ENV isn't set to production
const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1/fancy-blog';

// connect to MongoDB using URI.
mongoose
  .connect(mongoURI)
  // log succesfull connection to what db
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  // log any error
  .catch((error) => console.log('Connection failed!', error));

// export connection
module.exports = mongoose;