const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:pagina', async (req, res)=> {
    const response = await axios.get('https://swapi.co/api/people/?page='+req.params.pagina);
    const personagens = response.data ? response.data.results : [];
    res.send(personagens);
});

router.get('/search/:nome', async (req, res)=> {
    const response = await axios.get('https://swapi.co/api/people/?search='+req.params.nome);
    const personagens = response.data ? response.data.results : [];
    res.send(personagens);
});

module.exports = router;