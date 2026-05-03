const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usuario = urlParams.get('usuario');

document.getElementById('test').textContent = "El usuario es: " + usuario;