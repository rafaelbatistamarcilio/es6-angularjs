const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:pagina', async (req, res)=> {
    const response = await axios.get('https://swapi.co/api/planets/?page='+req.params.pagina);
    const planetas = response.data ? response.data.results : [];
    res.send(planetas);
});

router.get('/search/:nome', async (req, res)=> {
    const response = await axios.get('https://swapi.co/api/planets/?search='+req.params.nome);
    const planetas = response.data ? response.data.results : [];
    res.send(planetas);
});

module.exports = router;