const robotservice = require('../services/robotservice');

const getRobots = (req, res) => {
    console.log('Robots controller: getRobots');
    robotservice.getRobots()
        .then((allRobots) => res.json(allRobots));
}

const getRobot= (req, res) => {
    console.log('Robots controller: getRobot');
    let id = req.params.id;
    robotservice.getRobot(id)
        .then((robot) => res.json(robot));
}


module.exports.getRobots = getRobots;
module.exports.getRobot = getRobot;