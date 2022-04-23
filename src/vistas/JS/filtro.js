function buscar(){
    var opcion=document.getElementById("opcion").value;
    let url="";
    switch (opcion) {
        case "0"://obtener pokemon
            url = 'http://localhost:3000/obpokemo';
            fetch(url)
            .then((res)=> res.json())
            .then((data) => {
                insertar(data);
            })
            break;
        case "1"://por nombre
            url = 'http://localhost:3000/obnombre';
            enviar(url);
            break;
        case "2"://por numero
            url = 'http://localhost:3000/obnumero';
            enviar(url);
            break;
        case "3":// por tipo
            url = 'http://localhost:3000/obtipo';
            enviar(url);
            break;        
        default:
            alert("Escoje una opcion");
            break;
    }
}
async function enviar(url) {
    // creando un json
    var data = {
        dato: document.getElementById("dato").value
    }
    const respuestas = await fetch(url,{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        return data
    })
    insertar(respuestas);    
}

function insertar(respuesta) {
    let contenedor = document.getElementById('contenedor');
    contenedor.innerHTML="";
    if (respuesta[0].Nombre!= undefined) {
        for (let index = 0; index < respuesta.length; index++) {
            contenedor.innerHTML += 
            `<div class="col-auto">
                <div class="card" style="width: 18rem;" >
                    <img class="card-img-top" src="${respuesta[index].Imagen}" alt="Card image cap">
                    <div class="card-body" id="${index}">
                        <h5 class="card-title">${respuesta[index].Numero}.${respuesta[index].Nombre}</h5>
                        <p class="card-text">
                        Tipo: ${respuesta[index].Tipo}<br>
                        Ataque: ${respuesta[index].Ataque}  
                        </p>
                    </div>
                </div>
            </div>`;
            switch (respuesta[index].Tipo) {
                case "Agua":
                    document.getElementById(index).style.backgroundColor = '#87cefa';
                    break;
                case "Fuego":
                    document.getElementById(index).style.backgroundColor = '#f08080';
                    break;
                case "Planta":
                    document.getElementById(index).style.backgroundColor = '#90ee90';
                    break;
            default:
                break;
            }
        }
        
    }else{
        alert("El pokemon no existe");
    }
}
