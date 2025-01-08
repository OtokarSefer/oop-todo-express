import { Todo } from '../models/todo.js';

class TodoController {
  constructor() {
    this.TODOS = [];
  }

  /**
   * Creates a new Todo item.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  createTodo(req, res) {
    const task = req.body.task;
    const newTodo = new Todo(Math.random().toString(), task);
    this.TODOS.push(newTodo);
    res.json({
      newTask: newTodo,
    });
  }

  /**
   * Retrieves all Todo items.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  getTodos(req, res) {
    res.json({ tasks: this.TODOS });
  }

  /**
   * Updates a Todo item.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  updateTodo(req, res) {
    const todoId = req.params.id;
    const updateTask = req.body.task;
    console.log(req.body);
    console.log(req.params);

    const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
      res.status(404).json({
        message: 'Could not find todo with such index',
      });
      return;
    }

    this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updateTask);
    res.json({
      message: 'Todo is updated',
      updateTask: this.TODOS[todoIndex],
    });
  }

  /**
   * Deletes a Todo item.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  deleteTodo(req, res) {
    const todoId = req.params.id;
    const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
      res.status(404).json({
        message: 'Could not find todo with such index',
      });
      return;
    }

    this.TODOS.splice(todoIndex, 1);
    res.json({
      message: 'Todo is deleted',
    });
  }
}

export const TodoController = new TodoController();