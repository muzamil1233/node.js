const mongoose = require('mongoose');
async function connectMongoDb(){
    return mongoose.connect('mongodb://localhost');
}

module.export = {
    connectMongoDb
    
}