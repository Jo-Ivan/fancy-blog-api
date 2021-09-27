const Post = require('../models/Post');
const seedData = require('./seeds.json');

// delete any posts in collection
Post.deleteMany()
  // insert seed posts
  .then(() => Post.insertMany(seedData))
  // Log the successful results
  .then(console.log)
  // Log any errors if things didn't work
  .catch(console.error)
  // Use finally, so that this code will run whether or not things worked and close our connection to the database.
  .finally(process.exit);