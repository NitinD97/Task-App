// CRUD
const  { MongoClient, ObjectID} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error,   client) => {
    if (error) {
        return console.log('Unable to connect to DB!!!');
    }

    const db = client.db(databaseName);


    // db.collection('users').updateOne({_id: ObjectID('5e859f3146a38025a0ccb988')}, {
    //     $set: {
    //         name: 'Sparsh Rana'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch(() => {
    //     console.log(error)
    // });

    // db.collection('tasks').updateMany({completed: false}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // });

    // db.collection('users').find({_id: ObjectID('5e859f3146a38025a0ccb988')}, (error, users) => {
    //     users.toArray().then((users) => {
    //         console.log(users)
    //     }).catch((error) => {
    //         console.log(error)
    //     });
    // });

    // db.collection('users').findOne({ name: 'Sparsh' }, (error, user) => {
    //     if (error) {
    //         console.log('Unable to find User!');
    //     } else {
    //         console.log(user);
    //     }
    // })
});