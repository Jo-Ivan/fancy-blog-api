/// Require the post model
const Post = require('../models/Post');
// Require the seed data
const seedData = require('./seeds.json');

// Delete any existing documents in the posts collection
Post.deleteMany()
  // Use insertMany and pass it the seed data
  .then(() => Post.insertMany(seedData))
  // Log the successful results
  .then(console.log)
  // Log any errors if things didn't work
  .catch(console.error)
  // Use finally, so that this code will run whether or not
  // things worked and close our connection to the database.
  .finally(process.exit);