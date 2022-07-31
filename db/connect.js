const mongoose = require('mongoose');
require('dotenv').config();

const connectSessionStore = async function() {
    try {
        const connection = await mongoose.createConnection(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).asPromise();
        // console.log(connection);
        return connection.getClient();
    } catch (error) {
        console.error(error);
    }
}

const connectDB = function() {
    // for docker use 'mongodb://storeadmin:versionone@mongodb:27017/apistore'
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    // if use mongoose.createConnection() need to manually attach models to connection
}

module.exports = {
    connectSessionStore,
    connectDB
};