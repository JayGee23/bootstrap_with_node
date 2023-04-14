const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrantSchema = new Schema({
    firstname: {
        type: String,
        default: '',
        required: true,
    },
    lastname: {
        type: String,
        default: '',
        required: true,
    },
    email: {
        type: String,
        default: '',
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        default: '',
        required: true,
    },
    admin: {
        type: Boolean,
        default: false,
    },
})


const Registrant = mongoose.model('registrants', registrantSchema);

module.exports = Registrant