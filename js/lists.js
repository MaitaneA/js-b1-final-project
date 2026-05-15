const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usuario = urlParams.get('user');

const storedLists = localStorage.getItem("l_" + usuario);
if (!storedLists) {
    document.getElementsByTagName('h1')[0].textContent = "No hay listas guardadas para " + usuario;
} else {
    const userLists = JSON.parse(storedLists);

    document.getElementsByTagName('h1')[0].textContent = "Listas de " + usuario;

    const ulElem = document.getElementById('ul-element');

    userLists.sort((a, b) => { // Deberían estar ordenadas en local storage, pero por si acaso
        const dateA = parseInt(a._fecha.replaceAll('-', ''));
        const dateB = parseInt(b._fecha.replaceAll('-', ''));

        return dateB - dateA; // Las listas más recientes primero
    });

    userLists.forEach(list => {
        const liElem = document.createElement('li');
        const pageRedirect = `printable_list.html?user=${encodeURIComponent(usuario)}&list=${encodeURIComponent(list._fecha)}`;
        liElem.innerHTML = `<a href="${pageRedirect}">${list._fecha}</a>`;
        ulElem.appendChild(liElem);
    });
};




