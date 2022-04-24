| Carnet    | Nombre                      | Auxiliar |
| --------- | --------------------------- | -------- |
| 202111835 | Ruben Alejandro Ralda Mejia | Hector Josue Orozco Salazar 
# Fronted
Se utilizó el conjunto de HTML,CSS y JavaScript en el cual se utilizo bootstrap para agregar los estilos.

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
Los módulos utilizados son
1. Cors
2. Express
3. Morgan
4. Nodemon

Para el uso de la aplicación requiere instalar Node JS y los módulos anteriores. El puerto es el 3000 y su configuración es la siguiente:  
~~~
app.set('port',3000);
~~~
El primer endpoint utilizado es:
~~~
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
~~~
la ruta para acceder es /iniciarsesion, necesita de un JSON con las llaves nombre y contra, luego importa el JSON de usuarios y recorre los datos comparando si existe, cuando se cumple envía otro JSON con un mensaje de TRUE de lo contrario con un False. El siguiente endpoint es: 
~~~
//obtener pokemons
router.get('/obpokemo',(req,res)=>{
    let pokedex= require('./pokedex.json');
    res.send(pokedex);
});
~~~
Su ruta es /obpokemo importa el pokedex.json que contiene toda la información por pokémon y la devuleve.
~~~
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
~~~
Este endpoint tiene como ruta /obnumero y requiere de un JSON el dato(el numero en este caso) para buscar y devolver otro JSON con la información del pokémon. Nuevamente importa el archivo pokedex.json y lo corre con un ciclo for que con una condicional evalua si el dato coincide con el número de algún pokémon del archivo. A partir de aquí las rutas /obnombre y /obtipo hacen lo mismo pero el la condicional busca por otro atributo.
~~~
router.get('/',(req,res)=>{
    res.sendFile(path.join(require('path').dirname(require.main.filename),'vistas/index.html'));
});
router.get('/JS/iniciarsesion.js',(req,res)=>{
    res.sendFile(path.join(require('path').dirname(require.main.filename),'vistas/JS/iniciarsesion.js'));
});
router.get('/home.html',(req,res)=>{
    res.sendFile(path.join(require('path').dirname(require.main.filename),'vistas/home.html'));
});
router.get('/JS/filtro.js',(req,res)=>{
    res.sendFile(path.join(require('path').dirname(require.main.filename),'vistas/JS/filtro.js'));
});
router.get('/css/style.css',(req,res)=>{
    res.sendFile(path.join(require('path').dirname(require.main.filename),'vistas/css/style.css'));
});
~~~
Las siguientes rutas hacen lo mismo, devuelven un archivo para que el navegador lo muestre y lo utilize según el usuario lo necesite.