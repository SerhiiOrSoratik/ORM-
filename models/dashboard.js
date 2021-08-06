const models = require('../modelsDB/models');
const {Op} = require('sequelize');

class DashboardModel {
    async getInfo(req, res) {
        let nowDay = new Date();
        let endDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 23, 59, 59, 0);

        res.json(await models.Todos_list.findAndCountAll({
            attributes: ['title'],
            include: [
                { 
                   model: models.Todos,
                   where: {
                       due_date: {
                           [Op.between]: [nowDay, endDay]
                       }
                    },
                   attributes: ['task'], 
                   required: true,
                   
                }
            ],
            
          })
          )

    }
}

module.exports = new DashboardModel();