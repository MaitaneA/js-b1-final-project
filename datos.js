class Producto {
    constructor(nombre, tipo, enlace) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.enlace = enlace;
    }

    // getters y setters?
}

class Usuario {
    constructor(nombre, apellidos, direccion, poblacion, codPostal, telefono, email, usuario, contraseña) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.poblacion = poblacion;
        this.codPostal = codPostal;
        this.telefono = telefono;
        this.email = email;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    // getters y setters?
}

class Lista {
    constructor(usuario, fecha, productos) {
        this.usuario = usuario;
        this.fecha = fecha;
        this.productos = [...productos];  // ???
    }

    // getters y setters?
}
