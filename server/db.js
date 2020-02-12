const mongoose = require('mongoose')

mongoose.set('debug', true);

mongoose
    .connect('mongodb://127.0.0.1:27017/node_slawek', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })


const db = mongoose.connection

module.exports = db