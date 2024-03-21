const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Appli-Tracker'

MongoClient.connect(connectionURL, { useNewUrlParser : true } , (error , client) => {
    if(error) {
        return console.log('Unable to connect to Database !');
    }    

})