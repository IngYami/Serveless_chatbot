const {MongoClient} = require('mongodb');

let url = 'mongodb+srv://admin:admin2210@dbapi.a1iobo8.mongodb.net/?retryWrites=true&w=majority';

async function connectDB() {
    const client = new MongoClient(url);
    await client.connect();
    return client;
}

module.exports = connectDB;