/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /* Controller action. It is a function that is called when a request is made to the server. */
  index: async function(req,res) {
    const todos = await Todo.find();
    res.view('todo/index', { todos });
  },

  /* Creating a new todo. */
  create: async function(req,res) {
    const { task, completed } = req.body;
    const todo = await Todo.create({ task, complted }).fetch();
    req.addFlash('success', 'Todo create successfully!');
    res.redirect('/todos');
  },

  /* Updating the todo. */
  update: async function(req,res) {
    const { id } = req.params;
    const { task, completed } = req.body;
    const todo = await Todo.updateOne({ id }).set({ task, completed });
    req.addFlash('success', 'Todo updated successfully!');
    res.redirect('/todos');
  },

  /* Deleting the todo. */
  delete: async function(req, res) {
    const { id } = req.params;
    const todo = await Todo.destroyOne({ id });
    req.addFlash('success', 'Todo deleted successfully');
    res.redirect('/todos');
  }
};

