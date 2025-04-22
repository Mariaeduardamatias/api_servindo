const express = require('express');
const router = express.Router();
const controller = require('../controllers/respiracaoController');

router.get('/', controller.getTecnicas);
module.exports = router;
