module.exports = app => {
    const video = require('../controllers/video.controller');
    app.get('/', video.getAll);
    app.get('/:slug', video.getOne);
}