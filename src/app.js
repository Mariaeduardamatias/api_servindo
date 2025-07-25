const express = require('express'); 
const cors = require('cors');
const app = express();
const logger = require('./middlewares/logger');

const frasesRoutes = require('./routes/frasesRoutes');
const respiracaoRoutes = require('./routes/respiracaoRoutes');
const autocuidadoRoutes = require('./routes/autocuidadoRoutes');
const emergenciaRoutes = require('./routes/emergenciaRoutes');

app.use(cors());  // <<< Aqui habilita CORS para todas as origens
app.use(express.json());
app.use(logger);

app.use('/frases-motivacionais', frasesRoutes);
app.use('/exercicios-respiracao', respiracaoRoutes);
app.use('/autocuidado', autocuidadoRoutes);
app.use('/emergencia', emergenciaRoutes);

module.exports = app;
