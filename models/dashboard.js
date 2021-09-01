const models = require("../modelsDB/models");
const { Op } = require("sequelize");
const { getInfoToday } = require("../controllers/dashboard.controller");

class DashboardModel {
  async getInfo(req, res) {
      const dashboardCount = await models.Todos_list.findAndCountAll({
        attributes: ["title", "id"],
        include: [
          {
            model: models.Todos,
            attributes: ["title"],
            where : {
                done: false,
                // todosListId: req.body.todosListId
            },
            required: true,
          },
        ],
      })
      const countUncompletedTask = dashboardCount.rows.map(d => {
        return {id: d.id, title: d.title, count: d.todos.length}
      })
      const today = await this.getInfoToday();

      res.json({today: today, lists: countUncompletedTask})
  }

  async getInfoToday() {
    let nowDay = new Date();
    let endDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 23, 59, 59, 0);
    const today = await models.Todos.findAndCountAll({
          model: models.Todos,
          attributes: ["title"],
          where : {
              done: false,
              due_date: {
                [Op.lte]: endDay
            }
          },
          required: true,
        });
    return today.count;
}
}

module.exports = new DashboardModel();
