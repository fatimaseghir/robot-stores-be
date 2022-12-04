const robotController = require('../controllers/robotController');

const routes = (app) => {
    app.get('/robot_stores', robotController.getRobots);
    app.get('/robot_stores/:id', robotController.getRobot);
}

module.exports = routes;
