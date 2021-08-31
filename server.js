const app = require('./app');
const sequalize = require('./sequelize');

const start = async () => {
    try {
        await sequalize.authenticate();
        await sequalize.sync();
        app.listen(3001);
    } catch (e) {
        console.log(e);
    }
}

start();


