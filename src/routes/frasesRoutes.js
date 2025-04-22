const express = require('express');
const router = express.Router();
const controller = require('../controllers/frasesController');

router.get('/', controller.getFrases);
module.exports = router;
