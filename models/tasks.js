const knexDb = require('../knex');

class TaskModel {

    createTask (req, res) {
        const {listid, task, done, due_date} = req.body;
        knexDb('todo').insert({listid: listid, task: task, done: done, due_date: due_date}, "*")
        .catch((err) => {
            res.json(err);
        })
        .then((data) => {
            res.status(201);
            res.json(data);
        });
    }

    getTask (req, res) {
        knexDb("todo")
        .where('id', req.params.id)
        .catch((err) => {
           res.json(err);
        })
        .then((data) => {
            res.status(200);
            res.json(data);
        })
    }

    getTasks (req, res) {
        knexDb("todo").then((data) => {
          res.status(200);
          res.json(data);
        })  
    }

    updateTask(req, res) {
        if (req.body.task && !req.body.done && !req.body.due_date) {  
            knexDb('todo')
            .where('id', req.params.id)
            .update({task: req.body.task}, "*")
            .catch((err) => {
                res.json(err);
            })
            .then((data) => {
                    res.status(200);
                    res.json(data);
            });
        }
        else if (!req.body.task && req.body.done && !req.body.due_date) {
            knexDb('todo')
            .where('id', req.params.id)
            .update({done: req.body.done}, "*")
            .catch((err) => {
                res.json(err);
            })
            .then((data) => {
                    res.status(200);
                    res.json(data);
            });
        }
        else if (!req.body.task && !req.body.done && req.body.due_date) {
            knexDb('todo')
            .where('id', req.params.id)
            .update({due_date: req.body.due_date}, "8")
            .catch((err) => {
                res.json(err);
            })
            .then((data) => {
                    res.status(200);
                    res.json(data);
            });
        }
        else {
            res.status(400);
            res.end('Bad request');
        } 
    }

    putTask(req, res) {
        const {task, done, due_date} = req.body;
        knexDb('todo')
            .where('id', req.params.id)
            .update({task: task, done: done, due_date: due_date}, "*")
            .catch((err) => {
                res.json(err);
            })
            .then((data) => {
                    res.status(201);
                    res.json(data);
            });
    }

    deleteTask(req, res) {
        knexDb('todo')
        .where('id', req.params.id) 
        .del()
        .catch((err) => {
            res.json(err);
        })
        .then(() => {
            res.status(200);
            res.end();
        });
    }

}


module.exports = new TaskModel();
