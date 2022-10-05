const mongoose = require('mongoose')

const connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@cluster1.4l2vj45.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }

};

module.exports = connection;