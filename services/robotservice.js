const robotrepository = require('../repositories/robotrepository');

const getRobots = async () => {
    console.log('Service: getRobots');
    return await robotrepository.getRobots();
}

const getRobot = async (id) => {
    console.log('Service: getRobot' +id);
    return await robotrepository.getRobot(id);
}

module.exports.getRobots = getRobots;
module.exports.getRobot = getRobot;