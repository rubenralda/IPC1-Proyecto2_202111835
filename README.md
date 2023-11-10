| Carnet    | Nombre                      | Auxiliar |
| --------- | --------------------------- | -------- |
| 202111835 | Ruben Alejandro Ralda Mejia | Hector Josue Orozco Salazar 
# Fronted
Se utilizó el conjunto de HTML, CSS y JavaScript en el cual se utilizó bootstrap para agregar más estilos.

## Manual de usuario
### Login
En la página principal se encuentra el login, para iniciar sesión debe ingresar sus credenciales cargadas en la aplicación y dale al boton de **Iniciar Sesión**, si son correctas saldrá una alerta dando la bienvenida y entrará a la página home, de lo contrario si son incorrectas, saldrá una alerta con un error. 

![Login](Capturas/Captura%20de%20pantalla%20(56).png)

### Home Page
Al ingresar a la página se visualizará todos los pokémon precargados.

![alt](Capturas/Captura%20de%20pantalla%20(57).png)

En la lista puede escoger si desea buscar por:
1. Por nombre 
2. Por número de la pokédex
3. Por tipo

Luego en la caja de texto se escribe lo que sea desea buscar y presiona **Filtrar** para mostrar los resultados.

# Backend
API Rest creada con Node.js con los siguentes módulos:
1. Cors
2. Express
3. Morgan
4. Nodemon

Para el uso de la aplicación se utiliza el comando
```
npm run dev
```
La configuración es la siguiente:  
```js
app.set('port', 3000);
```
El primer endpoint utilizado es:
```js
router.post('/iniciarsesion',(req,res)=>{
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
```
la ruta para acceder es /iniciarsesion, necesita de un JSON con las llaves nombre y contra, luego importa el JSON de usuarios y recorre los datos comparando si existe, cuando se cumple envía otro JSON con un mensaje de TRUE de lo contrario con un False. El siguiente endpoint es: 
```js
//obtener pokemons
router.get('/obpokemo',(req,res)=>{
    let pokedex= require('./pokedex.json');
    res.send(pokedex);
});
```
Su ruta es /obpokemo importa el pokedex.json que contiene toda la información por pokémon y la devuleve.
```js
//obtener por numero
router.post('/obnumero',(req,res)=>{
    let pokedex = require('./pokedex.json');
    var numero=req.body.dato;
    var respuesta=[{}];
    var x=0;
    for (let index = 0; index < pokedex.length; index++) {
        if (pokedex[index].Numero == numero){
            respuesta[x]=pokedex[index];
            x++;
        } 
    }
    res.send(respuesta);
});
```
Este endpoint tiene como ruta /obnumero y requiere de un JSON el dato(el numero en este caso) para buscar y devolver otro JSON con la información del pokémon. Nuevamente importa el archivo pokedex.json y lo corre con un ciclo for que con una condicional evalua si el dato coincide con el número de algún pokémon del archivo. A partir de aquí las rutas /obnombre y /obtipo hacen lo mismo pero el la condicional busca por otro atributo.