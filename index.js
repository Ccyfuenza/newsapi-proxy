const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const NEWSAPI_KEY = '53245ece38bf4705ae1f3c0180e574d5';

app.get('/news', async (req, res) => {
  const { q } = req.query;

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', { // Aquí faltaban las comillas alrededor de la URL
      params: {
        q,
        language: 'es',
        sortBy: 'publishedAt',
        apiKey: NEWSAPI_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener noticias' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`); // Aquí faltaban las comillas invertidas para la interpolación de la cadena
});
