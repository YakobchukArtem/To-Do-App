const mongoose = require('mongoose')
const todoSChema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('ToDo', todoSChema)