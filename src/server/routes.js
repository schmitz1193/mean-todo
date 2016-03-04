var todosRoutes = require('server/todos/routes');

module.exports = function routes(app) {
  app.use('/todos', todosRoutes);  //anything that has routes todos will be sent through this file
};
