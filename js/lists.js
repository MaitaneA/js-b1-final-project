const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usuario = urlParams.get('usuario');

const storedLists = localStorage.getItem("l_" + usuario);
if (!storedLists) {
    document.getElementsByTagName('h1')[0].textContent = "No hay listas guardadas para " + usuario;
} else {
    const userLists = JSON.parse(storedLists);

    document.getElementsByTagName('h1')[0].textContent = "Listas de " + usuario;

    const ulElem = document.getElementById('ul-element');

    userLists.forEach(list => {
        const liElem = document.createElement('li');
        const pageRedirect = `printable_list.html?usuario=${encodeURIComponent(usuario)}&lista=${encodeURIComponent(list._fecha)}`;
        liElem.innerHTML = `<a href="${pageRedirect}">${list._fecha}</a>`;
        ulElem.appendChild(liElem);
    });
};




