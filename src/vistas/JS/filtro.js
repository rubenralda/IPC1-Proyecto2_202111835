async function buscar(){
    var opcion=document.getElementById("opcion").value;
    let url="";
    switch (opcion) {
        case 0://obtener pokemon
            url = 'http://localhost:3000/obpokemo';
           
            break;
        case 1://por nombre
            url = 'http://localhost:3000/obnombre';
            enviar(url);
            break;
        case 2://por numero
            url = 'http://localhost:3000/obnumero';
            break;
        case 3:// por tipo
            url = 'http://localhost:3000/obtipo';
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
    if(respuestas!=null){
        alert('bienvenido: '+respuestas.Nombre);
    } else {
        alert('El usuario y contraseña no coinciden, por favor revise sus datos');
    }
}
