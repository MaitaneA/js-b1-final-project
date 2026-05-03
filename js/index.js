// Botón de Aceptar (login)
document.getElementById('loginForm').addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    console.log(usuario);
    const contraseña = document.getElementById('contraseña').value;
    console.log(contraseña);

    if (JSON.parse(localStorage.getItem('u_'+usuario))._contraseña !== contraseña) {
        console.log(JSON.parse(localStorage.getItem('u_'+usuario)));
        console.log(JSON.parse(localStorage.getItem('u_'+usuario))._contraseña);
        alert('Datos de usuario incorrectos.');
        return;
    };

    window.location.href = "productos.html?user=" + encodeURIComponent(usuario);
});

// Botón de Nuevo usuario redirige a la página de registro
document.getElementById('register').addEventListener("click", () => {
    window.location.href = "register.html";
});