const sequelize = require('../sequelize');
const {DataTypes} = require('sequelize');

const Todos = sequelize.define('todos', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    listid: {type: DataTypes.INTEGER, allowNull: false},
    task: {type: DataTypes.STRING, allowNull: false},
    done: {type: DataTypes.BOOLEAN, allowNull: false},
    due_date: {type: DataTypes.DATE}
});

const Todos_list = sequelize.define('todos_list', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: false},
});

Todos_list.hasMany(Todos);
Todos.belongsTo(Todos_list);

module.exports = {
Todos_list, Todos
}