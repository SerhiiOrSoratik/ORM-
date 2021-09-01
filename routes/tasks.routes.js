const Router = require('express');
const tasks = require('../controllers/tasks.controller');
const router = new Router();

router.get('/test', (req, res) => {
    tasks.testGet(req, res);
});

router.post('/test', (req, res) => {
    tasks.testCreate(req, res);
});

router.get('/', (req, res) => {
    tasks.getTasks(req, res);
});

router.get('/:id', (req, res) => {
    tasks.getTask(req, res);
});

router.post('/:todosListId', (req, res) => {
    tasks.createTask(req, res);
});

router.patch('/:id', (req, res) => {
    tasks.updateTask(req, res);
});


router.delete('/:id', (req, res) => {
    tasks.deleteTask(req, res);
});



module.exports = router;