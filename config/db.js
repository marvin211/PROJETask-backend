const moongose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });	// Importante: Instalar dotenv

const conectarDB = async () => {
    try {
        await moongose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        });

        console.log("DB Conectada");

    } catch (error) {
        console.log("Hubo un error el error es: ", error);
        process.exit(1); // Detener la app
    }
}


module.exports = conectarDB;