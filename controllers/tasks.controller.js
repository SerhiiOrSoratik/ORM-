const taskModel = require('../models/tasks')

class Tasks {
    async createTask(req, res) {
        const {title, due_date, description} = req.body;
        const todosListId = req.params.todosListId;
        res.json(await taskModel.createTask(title, due_date, todosListId, description));
    }

    async getTasks(req, res) {     
        res.json(await taskModel.getTasks());
    }

    async getTask(req, res) {
        const id = req.params.id;
        try {
            res.status(200);
            res.json(await taskModel.getTask(id));    
        }
        catch {
            res.status(400);
            res.end('Bad request');
        }     
    }

    async updateTask(req, res) {
        const options = req.body;
        const id = req.params.id;
        try {
            res.status(200);
            res.json(await taskModel.updateTask(options, id))
        }
        catch {
            res.status(400);
            res.end('Bad request');
        }
    }

    async deleteTask(req, res) {
        const id = req.params.id;
        try {
            await taskModel.deleteTask(id);
            res.status(200);
            res.end();
        }
        catch {
            res.status(400);
            res.end('Bad request');
        }
        
    }
}

module.exports = new Tasks();