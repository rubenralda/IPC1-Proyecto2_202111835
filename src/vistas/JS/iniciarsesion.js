

async function login(){
    let url = 'http://localhost:3000/iniciarsesion';
    // creando un json
    var data = {
        nombre: document.getElementById("nombre").value,
        contra: document.getElementById("pass").value
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
    if(respuestas.Mensaje == true){
        alert('Bienvenido '+data.nombre);
        localStorage.setItem("Nombre", document.getElementById("nombre").value);
        location.href="home.html";
        
    } else {
        alert('El usuario y contraseña no coinciden, por favor revise sus datos');
    }
}