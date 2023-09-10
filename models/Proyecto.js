const moongoose = require('mongoose');

const ProyectoSchema = moongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },

    creador: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },

    creado: {
        type: Date,
        default: Date.now()
    }

});

module.exports = moongoose.model('Proyecto', ProyectoSchema);