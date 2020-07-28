
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    deleted: {
        type: Boolean,
        required: false,
        default: false,
    }
});


const PersonModel = mongoose.model('person', PersonSchema);

module.exports = PersonModel;