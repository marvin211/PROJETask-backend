const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {

    // Revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Revisar que sea un usuario registrado
        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' });
        }

        // Revisar el password
        const passCorrecto = await bcryptjs.compare(password, usuario.password);

        if (!passCorrecto) {
            return res.status(400).json({ msg: 'Password incorrecto' });
        }

        // Si todo es correcto Crear y firmar el JWT
        const payload = {
            usuario: {
                id: usuario.id // Se guarda el id del usuario que estamos firmando
            }
        }

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // Validez del token 1 hora
        }, (error, token) => {
            // Callback
            if (error) throw error;

            // Mensaje de confirmacion
            res.send({
                token: token // Retorna el token
            });
        });

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

// Obtiene que usuario esta autenticado
exports.usuarioAutenticado = async (req, res) => {

    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.json({ usuario });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error' });
    }

}