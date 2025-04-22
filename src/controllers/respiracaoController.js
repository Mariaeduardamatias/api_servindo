const tecnicas = require('../models/respiracaoModel');

exports.getTecnicas = (req, res) => {
  res.status(200).json(tecnicas);
};
