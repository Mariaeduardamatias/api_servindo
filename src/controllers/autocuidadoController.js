const dicas = require('../models/autocuidadoModel');

exports.getDicas = (req, res) => {
  res.status(200).json(dicas);
};
