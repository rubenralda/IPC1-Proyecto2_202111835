const { Router } = require('express');
const router = Router();

//inicio sesion
router.post('/',(req,res)=>{
    let usu = require('./usuarios.json');
    console.log(req.body);
    var nombre = req.body.nombre;
    var contra= req.body.contra;
    var respuesta = {
        Mensaje:false
    }
    for (let index = 0; index < usu.length; index++) {
        if (usu[index].Usuario == nombre && usu[index].Password==contra){
            respuesta = {
                Mensaje:true
            }
        } 
    }
    res.send(respuesta);
});

//obtener pokemons
router.get('/pokedex',(req,res)=>{
    let pokedex= require('./pokedex.json');
    res.send(pokedex);
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