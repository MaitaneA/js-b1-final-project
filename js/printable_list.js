const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usuario = urlParams.get('user');
const fechaLista = urlParams.get('list') || new Date().toISOString().split('T')[0];

function getListFromStorage(usuario, fechaLista) {
    const storedLists = localStorage.getItem("l_" + usuario);

    if (!storedLists) return null;

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