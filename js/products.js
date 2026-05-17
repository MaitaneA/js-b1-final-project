const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usuario = urlParams.get('user');

const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD so they are easy to sort
const currentList = new Lista(usuario, currentDate);

// Build the main section with the products
const template = document.getElementById('productType-template');
const main = document.getElementsByTagName('main')[0];

tipos.forEach(tipo => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('button').innerHTML = `
      <h2><span>&#${tipo[1]};</span> ${tipo[0]}</h2>
    `
    const productsList = clone.querySelector('ul');

    // Fill in the products list
    productos.forEach(producto => {
        if (producto.tipo === tipo[0]) {
            const productNode = document.createElement('li');
            productNode.setAttribute('id', producto.nombre.replaceAll(' ', '-'));
            productNode.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src="${producto.enlace}" alt="${producto.nombre}" height="100px">`

            productNode.addEventListener("click", (e) => {
              const amountStr = prompt("¿Cantidad?", "1");
              const amount = isNaN(amountStr) ? 1 : parseInt(amountStr);
              currentList.addProduct(e.currentTarget.id.replaceAll('-', ' '), amount);
            });

            productsList.appendChild(productNode);
        };
    });

    main.appendChild(clone);
});

// Add functionality to the sections for the different product types so they show or hide the content when clicked
var pTypesSections = document.getElementsByClassName("productType");

for (let i = 0; i < pTypesSections.length; i++) {
  pTypesSections[i].addEventListener("click", function() {
    if (this.classList.contains("active")) { // Section was active - make it inactive
      this.classList.remove("active");
      this.nextElementSibling.style.display = "none";

    } else {  // Section was inactive, hide previous active section and show the clicked one

      // Remove previous active section
      for (let j = 0; j < pTypesSections.length; j++) {
        pTypesSections[j].classList.remove("active");
        pTypesSections[j].nextElementSibling.style.display = "none";
      };

      // Make section that was clicked the active one
      this.classList.add("active");
      this.nextElementSibling.style.display = "block";
      this.scrollIntoView({behavior: "smooth"});
    }
  });
};

// 'Guardar' button
document.getElementById("save").addEventListener("click", (e) => {
  if (currentList.productos.length === 0) {
    alert('No hay nada que guardar, la lista está vacía.');
    return;
  };

  // Si no está vacía, la guardamos
  const storedLists = localStorage.getItem("l_" + usuario);
  let userLists;

  if (!storedLists) {
    userLists = [];
  } else {
    userLists = JSON.parse(storedLists);

    if (userLists.at(-1)._fecha === currentList.fecha) { // Solo soporta una lista por fecha, para evitar duplicados si el usuario pulsa guardar varias veces
      userLists.pop();
    };
  };

  userLists.push(currentList);
  localStorage.setItem("l_" + usuario, JSON.stringify(userLists));
});

// 'Mostrar' button
document.getElementById("show").addEventListener("click", (e) => {
  window.location.href = "printable_list.html" + "?user=" + encodeURIComponent(usuario) + "&list=" + currentList.fecha;
});

// 'Listas' button
document.getElementById("lists").addEventListener("click", (e) => {
  window.location.href = "lists.html" + "?user=" + encodeURIComponent(usuario);
});