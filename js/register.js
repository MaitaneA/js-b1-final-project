/*const testUser = new Usuario("John", "Smith", "C/ De la Nada 3", "Madrid", 32323, 600000000, "yo@yo.es", "user1", "pass1");
*/


// Añadir lista de opciones a la selección de población
const poblacionesSelector = document.getElementById("poblacion");
for (const pob in poblaciones){
    const option = document.createElement('option');
    option.textContent = pob;
    option.setAttribute("value", pob);
    poblacionesSelector.appendChild(option);
};

// Autorellenar código postal cuando el usuario selecciona una población
//-- Como algunas poblaciones tienen varios códigos postales, si es el caso ofrecemos las opciones válidas al usuario 
document.getElementById('poblacion').addEventListener("change", (e) => {
    let codPostal = document.getElementById('codPostal');

    if (poblaciones[e.target.value].length === 1) {
        // Selected town has a single post code, so we set it
        if (codPostal.nodeName !== "INPUT") {
            const inputCodPostal = document.createElement('input');
            inputCodPostal.setAttribute("id", "codPostal");
            inputCodPostal.setAttribute("type", "number");
            inputCodPostal.setAttribute("readonly", "readonly");
            
            codPostal.replaceWith(inputCodPostal);
            codPostal = inputCodPostal;
        }

        codPostal.setAttribute("disabled", "disabled");
        codPostal.value = poblaciones[e.target.value][0];

    } else {
        // Selected town has multiple possible post codes, so we make it a selector
        if (codPostal.nodeName !== "SELECT") {
            const selectorCodPostal = document.createElement('select');
            selectorCodPostal.setAttribute("id", "codPostal");
            selectorCodPostal.setAttribute("name", "codigosPostales");
            codPostal.replaceWith(selectorCodPostal);
            codPostal = selectorCodPostal;
        }
        
        codPostal.innerHTML = "<option disabled selected value> -- selecciona código postal -- </option>";
        poblaciones[e.target.value].forEach((codigo) => {
            const option = document.createElement('option');
            option.textContent = codigo;
            option.setAttribute("value", codigo);
            codPostal.appendChild(option);
        });
    };
});

// Validar el código postal introducido por el usuario si no ha seleccionado la población
//-- Si rellena un código postal inválido, mostramos una alerta y vaciamos el código postal
document.getElementById('codPostal').addEventListener("change", (e) => {
    const codPostal = e.target.value;
    let validCodPostal = false;

    for (const pob in poblaciones){
        if (poblaciones[pob].includes(parseInt(codPostal))) {
            validCodPostal = true;
            break;
        }
    };

    if (!validCodPostal) {
        alert("No hay ninguna población con ese código postal");
        e.target.value = "";
    };
});

// Validación de la contraseña
/*document.getElementById('contraseña').addEventListener("change", (e) => {
    const contraseña = e.target.value;
    
    // debe contener mínimo 8 caracteres, letras, números y al menos dos caracteres especiales
    if (contraseña.length < 8) {
        document.getElementById('longitud').textContent = "&#10060; Debe tener un mínimo de 8 caracteres";
        document.getElementById('validacionContraseña').classList.remove('hidden');
    }

    const regex1 = /(?=.*[a-zA-Z])/; // Letras
    if (! regex1.test(contraseña)) {
        document.getElementById('letras').textContent = "&#10060; Debe tener al menos 1 letra";
        document.getElementById('validacionContraseña').classList.remove('hidden');
    }

    const regex2 = /(?=.*\d)/; // Números
    if (! regex2.test(contraseña)) {
        document.getElementById('numeros').textContent = "&#10060; Debe tener al menos 1 número";
        document.getElementById('validacionContraseña').classList.remove('hidden');
    }

    const regex3 = /[@$!%*?&].*[@$!%*?&]/; // 2 caracteres especiales
    if (! regex3.test(contraseña)) {
        document.getElementById('caracteres').textContent = "&#10060; Debe tener al menos 2 caracteres especiales";
        document.getElementById('validacionContraseña').classList.remove('hidden');
    }
});*/


// Guardado de datos en localstorage
document.getElementById('registerForm').addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;

    if(localStorage.getItem('u_' + usuario)) {  // Usuario ya existe
        const divError = document.getElementById('errores');
        divError.textContent = "Ya existe un usuario con ese nombre de usuario.";
        divError.classList.remove("hidden");

        return;
    }

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const direccion = document.getElementById('direccion').value;
    const poblacion = document.getElementById('poblacion').value;
    const codPostal = document.getElementById('codPostal').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    
    const user = new Usuario(nombre, apellidos, direccion, poblacion, codPostal, telefono, email, usuario, contraseña);

    localStorage.setItem("u_" + user._usuario, JSON.stringify(user));
    
    window.location.href = "index.html";
});