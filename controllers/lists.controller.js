const tasks = require('./tasks.controller');
const listModel = require('../models/lists');

class Lists {
    
    async createList(req, res) {
        try {
            res.status(201);
            res.json(await listModel.createList(req.body.title));
        }
        catch {
            res.status(400);
            res.end('Bad request');
        }
        
    }

    async getLists(req, res) {
        res.status(200);
        res.json(await listModel.getLists(req, res));
    }

    async updateTask(req, res) {
        try {
            res.status(await listModel.updateTask(req.params.id, req.body.title));
            res.end('Updated');
        }
        catch {
            res.status(400);
            res.end('Bad request');
        }
        
    }

    async deleteList(req, res) {
        await listModel.deleteList(req.params.id);
        res.status(201);
        res.end();
    }

    createTask(req, res) {
        req.body.todosListId = req.params.listid;
        tasks.createTask(req, res);
    }

    getTasks(req, res) {

       const options = {
           todosListId: req.params.listid,
           all: req.query.all
       };
       listModel.getTasks(options, res);
    }
}

module.exports = new Lists();