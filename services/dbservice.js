const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://root:password@localhost:27017';
const dbName = 'robot_stores';
const client = new MongoClient(url);

const connectToDB = async () => {
    await client.connect();
    console.log('MongoDB client is connected');
    const db = client.db(dbName);
    console.log(`Database is ${dbName}`);
    return db;
}

module.exports.connectToDB = connectToDB;