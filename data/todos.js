class todoController {
    constructor() {
        this.TODOS = []
    }

    async createTodo(req, res){
        const task = req.body.task
        const newTodo = new Todo(Math.random().toString, task)
        this.TODOS.push(newTodo)
        await fileManager.writeFile('./data/todos.json', this)
        res.json({
            message: 'created new todo object',
            newTask: newTodo
        })
    }
}