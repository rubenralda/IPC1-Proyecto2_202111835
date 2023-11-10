let url = 'http://localhost:3000';
async function login() {
    let data = {
        nombre: document.getElementById("nombre").value,
        contra: document.getElementById("pass").value
    }
    const respuestas = await fetch(url + '/iniciarsesion', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => {
            return data
        })
    if (respuestas.Mensaje == true) {
        alert('Bienvenido ' + data.nombre);
        localStorage.setItem("Nombre", document.getElementById("nombre").value);
        location.href = "home.html";

    } else {
        alert('El usuario y contraseña no coinciden, por favor revise sus datos');
    }
}