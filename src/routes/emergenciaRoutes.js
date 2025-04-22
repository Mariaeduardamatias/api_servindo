const express = require('express');
const router = express.Router();
const controller = require('../controllers/emergenciaController');

router.get('/', controller.getContatos);
module.exports = router;
