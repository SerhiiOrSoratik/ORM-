const app = require('./app');
const collection = require('./controllers/collection.controller');
const sequalize = require('./sequelize');

const models = require('./modelsDB/models')
const start = async () => {
    try {
        await sequalize.authenticate();
        await sequalize.sync();
        // eager loding
        collection.getData();
        app.listen(3000);
    } catch (e) {
        console.log(e);
    }
}

start();


