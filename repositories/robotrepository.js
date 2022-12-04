const dbService = require('../services/dbservice');

let robotsCollection = null;
dbService.connectToDB()
    .then((db) => robotsCollection = db.collection('robots'));

const getRobots = async () => {
    console.log('Repository: getRobots');
    return await robotsCollection.find({}).toArray();
}

const getRobot = async (id) => {
    console.log('Service: getRobot' + id);
    return await robotsCollection.find({"id": parseInt(id)}).toArray();
}

module.exports.getRobots = getRobots;
module.exports.getRobot = getRobot;
