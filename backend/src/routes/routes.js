const { Router } = require('express');
const router = Router();

//inicio sesion
router.post('/iniciarsesion', (req, res) => {
    let usu = require('./usuarios.json');
    let nombre = req.body.nombre;
    let contra = req.body.contra;
    let respuesta = {
        Mensaje: false
    }
    for (let index = 0; index < usu.length; index++) {
        if (usu[index].Usuario == nombre && usu[index].Password == contra) {
            respuesta = {
                Mensaje: true
            }
        }
    }
    res.send(respuesta);
});

//obtener pokemons
router.get('/obpokemo', (req, res) => {
    let pokedex = require('./pokedex.json');
    res.send(pokedex);
});

//obtener por numero
router.post('/obnumero', (req, res) => {
    let pokedex = require('./pokedex.json');
    let numero = req.body.dato;
    let respuesta = [];
    for (let index = 0; index < pokedex.length; index++) {
        if (pokedex[index].Numero == numero) {
            respuesta.push(pokedex[index]);
        }
    }
    res.send(respuesta);
});

//obtener por nombre
router.post('/obnombre', (req, res) => {
    let pokedex = require('./pokedex.json');
    let nombre = req.body.dato;
    let respuesta = [];
    for (let index = 0; index < pokedex.length; index++) {
        if (pokedex[index].Nombre == nombre) {
            respuesta.push(pokedex[index]);
        }
    }
    res.send(respuesta);
});

//obtener por tipo
router.post('/obtipo', (req, res) => {
    let pokedex = require('./pokedex.json');
    let tipo = req.body.dato;
    let respuesta = [];
    for (let index = 0; index < pokedex.length; index++) {
        if (pokedex[index].Tipo == tipo) {
            respuesta.push(pokedex[index]);
        }
    }
    res.send(respuesta);
});

module.exports = router;