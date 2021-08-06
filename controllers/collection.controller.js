const collectionModel = require('../models/collection');

class Collection {
    getData() {
       collectionModel.getData();
    };

    showDate(res) {
        res.status(200);
        res.json(collectionModel.showDate(res));
    }
}

module.exports = new Collection();