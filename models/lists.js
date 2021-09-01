const models = require("../modelsDB/models");

class ListModel {
  async createList(title) {
    return await models.Todos_list.create({ title });
  }

  async getLists() {
    const lists = await models.Todos_list.findAll();
    return lists;
  }

  async updateTask(id, title) {
    await models.Todos_list.update({ title: title }, { where: { id: id } });
    return 200;
  }

  async deleteList(id) {
    models.Todos_list.destroy({
      where: {
        id: id,
      },
    });
  }

  async getTasks(options, res) {
    const { todosListId, all } = options;
    if (all === "true") {
      const tasks = await models.Todos.findAll({
        where: {
          todosListId: todosListId,
        },
        order: [["id", "ASC"]],
      });
      res.status(200);
      res.json(tasks);
    } else if (all === "false") {
      const tasks = await models.Todos.findAll({
        where: {
          todosListId: todosListId,
          done: false,
        },
        order: [["id", "ASC"]],
      });
      res.status(200);
      res.json(tasks);
    } else {
      res.status(400);
      res.end("Bad request");
    }
  }
}

module.exports = new ListModel();
