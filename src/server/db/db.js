var mongoose = require('mongoose');

// //set up mongodb URL

// const MONGODB_HOST = process.env.MONGODB_HOST || `localhost`;
// const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
// const MONGODB_USER = process.env.MONGODB_USER || '';
// const MONGODB_PASS = process.env.MONGODB_PASS || '';
// const MONGODB_NAME = process.env.MONGODB_NAME || `market-on-demand`;

// const MONGODB_AUTH = MONGODB_USER
//   ? `${MONGODB_USER}:${MONGODB_PASS}@`
//   : '';

// const MONGODB_URL = `mongodb://${MONGODB_AUTH}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
// mongoose.connect(MONGODB_URL);

mongoose.connect('mongodb://localhost/todos');

var Todo = mongoose.model('Todo', {
  task: String,
  isCompleted: Boolean,
  isEditing: Boolean
});

module.exports.Todo = Todo;
