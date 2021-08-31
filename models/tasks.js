const models = require('../modelsDB/models')

class TaskModel {

    async createTask (title, done, due_date, todosListId) {  
       return await models.Todos.create({task: title, done, due_date, todosListId});
    }

    async getTask (id) {
        const task = await models.Todos.findAll({
            where: { id: id }
        });
        return task;
    }

    async getTasks () {
        const tasks = await models.Todos.findAll();
        return tasks;
    }

    async updateTask(options, id) {
        const tasksField = ['title', 'done', 'due_date', 'todosListId'];
        let updatedField = {};

        tasksField.forEach(elem => {
            if (options[elem] !== undefined) {
                updatedField[elem] = options[elem];
            }
        })

        await models.Todos.update(
            updatedField,
            {
                where: {
                    id: id
                }
            }
        )
        return 200;
    }

    async deleteTask(id) {
        await models.Todos.destroy({
            where: {
                id: id
            }
        })
    }

}


module.exports = new TaskModel();
