const frases = require('../models/frasesModel');

exports.getFrases = (req, res) => {
  res.status(200).json(frases);
};
