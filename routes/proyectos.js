const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea proyectos
// api/proyectos
router.post('/',
    auth, // Middleware para proteger la ruta
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto

);

// Obtiene todos los proyectos del usuario autenticado
router.get('/',
    auth,
    proyectoController.obtenerProyectos
);

// Actualizar un proyecto via ID
router.put('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

// Eliminar un proyecto via ID
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
);

module.exports = router; 