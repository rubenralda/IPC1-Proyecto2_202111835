const { Router } = require('express');
const router = Router();

//inicio sesion
router.post('/',(req,res)=>{
    let usu = require('./usuarios.json');
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
    var numero=req.body.dato;
    var respuesta={};
    for (let index = 0; index < pokedex.length; index++) {
        if (pokedex[index].Numero == numero){
            respuesta=pokedex[index];
        } 
    }
    res.send(respuesta);
});

//obtener por nombre
router.post('/obnombre',(req,res)=>{
    let pokedex = require('./pokedex.json');
    var nombre=req.body.dato;
    var respuesta={};
    for (let index = 0; index < pokedex.length; index++) {
        if (pokedex[index].Nombre == nombre){
            respuesta=pokedex[index];
        } 
    }
    res.send(respuesta);
});

//obtener por tipo
router.post('/obtipo',(req,res)=>{
    let pokedex = require('./pokedex.json');
    var tipo=req.body.dato;
    var respuesta=[{}];
    var x=0;
    for (let index = 0; index < pokedex.length; index++) {
        if (pokedex[index].Tipo == tipo){
            respuesta[x]=pokedex[index];
            x++;
        } 
    }
    res.send(respuesta);
});

module.exports = router;