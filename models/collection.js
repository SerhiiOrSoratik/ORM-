const {Op} = require('sequelize');
const models = require('../modelsDB/models')

class CollectionModel {

    async showDate(res) {
        let info = {};
        let nowDay = new Date();
        let endDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 23, 59, 59, 0);
        await models.Todos.findAll({
            where: {
                done: false,
                due_date: {
                    [Op.lte]: endDay,
                }
             },
            include: {
                model: models.Todos_list,
                attributes: ['title'],
            }
        }).then(data => {
           info = data
        })
        console.log(info)
        return  info;
    }
}

module.exports = new CollectionModel();