const knexDb = require('../knex')

const models = require('../modelsDB/models')

class CollectionModel {
    info = {};

    async getData() {
        // list of tasks for today
        // knexDb.column('task', {tasklist: 'title'})
        // .select().from('lists')
        // .rightJoin('todo', 'lists.id', 'todo.listid')
        // .where('todo.due_date', new Date())
        // .then((data) => {
        //    this.info = data;
        // })

        await models.Todos.findAll({
            where: {due_date: '2021-08-06 03:00:00+03'},
            attributes: ['task'],
            include: {
                model: models.Todos_list,
                attributes: ['title'],
            }
        }).then(data => {
            this.info = data
        })
    
    };

    showDate(res) {
        return this.info;
    }
}

module.exports = new CollectionModel();