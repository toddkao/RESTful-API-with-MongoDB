module.exports = app => {
  todoList = require('../controllers/controller')

  // todoList Routes
  app.route('/tasks')
    .get(middleware, todoList.list_all_tasks)
    .post(todoList.create_a_task)

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task)
}

middleware = (req, res, next) => {
  console.log('url:', req.url)
  console.log('method:', req.method)
  console.log('body:', req.body)
  next()
}