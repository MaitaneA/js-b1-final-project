// Botón de Aceptar (login)
document.getElementById('loginForm').addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    console.log(usuario);
    const contraseña = document.getElementById('contraseña').value;
    console.log(contraseña);

    const storedUser = localStorage.getItem('u_'+usuario);

    if (!storedUser) {
        alert('Usuario no existe.');
        return;
    };
    
    if (JSON.parse(storedUser)._contraseña !== contraseña) {
        alert('Datos de usuario incorrectos.');
        return;
    };

    window.location.href = "products.html?user=" + encodeURIComponent(usuario);
});

// Botón de Nuevo usuario redirige a la página de registro
document.getElementById('register').addEventListener("click", () => {
    window.location.href = "register.html";
});