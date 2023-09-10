const moogoose = require('mongoose');

const UsuariosSchema = moogoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = moogoose.model('Usuario', UsuariosSchema);