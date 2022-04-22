const { Router } = require('express');
const router = Router();


//obtener usuarios
router.get('/usuarios',(req,res)=>{
    var respuesta = {
        Mensaje:"Hola mundo"
    }
    res.send(respuesta);
});
//obtener pokemons
router.get('/pokedex',(req,res)=>{
    res.send('Hola mundo desde mi primer Backend con NodeJS');
});

//obtener por numero
router.post('/obnumero',(req,res)=>{
    let pokedex = require('./pokedex.json');
    res.send(pokedex);
});

//obtener por nombre
router.get('/obnombre',(req,res)=>{
    let pokedex = require('./pokedex.json');
    var nombre = 'bulbasu'
    if (pokedex[0].Nombre == nombre){
        res.send(pokedex);
    } else {
        res.send({Mensaje:"Error"});
    }
});

//obtener por tipo
router.post('/obnumero',(req,res)=>{
    let pokedex = require('./pokedex.json');
    res.send(pokedex);
});

module.exports = router;