const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const TareaSchema = moongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },

    estado: {
        type: Boolean,
        default: false
    },

    creado: {
        type: Date,
        default: Date.now()
    },

    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto'
    }

});

module.exports = moongoose.model('Tarea', TareaSchema);