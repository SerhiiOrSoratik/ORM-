const collectionModel = require('../models/collection');

class Collection {
    getData() {
       collectionModel.getData();
    };

    async showDate(res) {
        res.status(200);
        res.json(await collectionModel.showDate(res));
    }
}

module.exports = new Collection();