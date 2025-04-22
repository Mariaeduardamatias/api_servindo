const express = require('express');
const router = express.Router();
const controller = require('../controllers/autocuidadoController');

router.get('/', controller.getDicas);
module.exports = router;
