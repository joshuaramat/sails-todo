/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /* render the homepage view when the user visits the root route. */
  '/': { view: 'pages/homepage'},

  /* route to get all the todos from the database. */
  'GET /todos': 'TodoController.index',

  /* route mapping. When a POST request is made to the `/todos/create` route, call the `create` action in the `TodoController`. */
  'POST /todos/create': 'TodoController.create',

  /* route mapping. When a POST request is made to the `/todos/update/:id` route, call the
  `update` action in the `TodoController`. */
  'POST /todos/update/:id': 'TodoController.update',
  
  /* route mapping. When a DELETE request is made to the `/todos/delete/:id` route, call the
  `delete` action in the `TodoController`. */
  'DELETE /todos/delete/:id': 'TodoController.delete',
};
