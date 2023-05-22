const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const LoginController = require('../controllers/LoginController');
const carritoController = require('../controllers/carritoController');

const router = express.Router();

router.get('/login', LoginController.index);
router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);
router.post('/login', LoginController.auth);
router.get('/logout', LoginController.logout);


router.get('/carrito', carritoController.indexcr);
router.post('/pers/agregar', carritoController.agregar);
router.post('/pers/elimina', carritoController.elimina);

module.exports = router;
