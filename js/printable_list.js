const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usuario = urlParams.get('usuario');
const fechaLista = urlParams.get('lista') || new Date().toLocaleDateString('es-ES');

function getListFromStorage(usuario, fechaLista) {
    const storedLists = localStorage.getItem("l_" + usuario);

    if (!storedLists) return;

    const userLists = JSON.parse(storedLists);
    
    return userLists.find((lista) => lista._fecha === fechaLista);
};

const lista = getListFromStorage(usuario, fechaLista);

if (!lista) {
    document.getElementsByTagName('h1')[0].textContent = "Lista con fecha de " + fechaLista + " no encontrada.";
} else {
    document.getElementsByTagName('h1')[0].textContent = "Lista " + lista._fecha;

    const ulElem = document.getElementById('ul-element');

    lista._productos.forEach(prod => {
        const liElem = document.createElement('li');
        liElem.textContent = `${prod[0]}  x${prod[1]}`;
        ulElem.appendChild(liElem);
    });
};