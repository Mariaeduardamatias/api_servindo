const contatos = require('../models/emergenciaModel');

exports.getContatos = (req, res) => {
  res.status(200).json(contatos);
};
