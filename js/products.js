const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usuario = urlParams.get('usuario');

document.getElementById('test').textContent = "El usuario es: " + usuario;


// Build the main section with the products
const template = document.getElementById('productType-template');
const main = document.getElementsByTagName('main')[0];

tipos.forEach(tipo => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('button').textContent = tipo;
    const productsList = clone.querySelector('ul');

    // Fill in the products list
    productos.forEach(producto => {
        if (producto.tipo === tipo) {
            const productNode = document.createElement('li');
            productNode.setAttribute('id', producto.nombre);
            productNode.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src="${producto.enlace}" alt="${producto.nombre}" height="100px">`

            productsList.appendChild(productNode);
        };
    });

    main.appendChild(clone);
});

// Add functionality to the sections for the different product types so they show or hide the content
var pTypesSections = document.getElementsByClassName("productType");

for (let i = 0; i < pTypesSections.length; i++) {
  pTypesSections[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};