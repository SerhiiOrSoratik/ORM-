const taskModel = require('../models/tasks')

const models = require('../modelsDB/models')

class Tasks {
////////////// ORM
    async testCreate(req, res) {
        const {title} = req.body
        let test = await models.Todos_list.create({title})
        res.json(test);
    }

    async testGet(req, res) {
        const types = await models.Todos_list.findAll();
        res.json(types)
    }
///////////////////
    createTask(req, res) {
        taskModel.createTask(req, res);
    }

    getTasks(req, res) {
        taskModel.getTasks(req, res)
    }

    getTask(req, res) {
        taskModel.getTask(req, res);
    }

    updateTask(req, res) {
        taskModel.updateTask(req, res);
    }

    putTask(req, res) {
        taskModel.putTask(req, res);
    }

    deleteTask(req, res) {
        taskModel.deleteTask(req, res);
    }
}

module.exports = new Tasks();