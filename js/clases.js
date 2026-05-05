class Usuario {
    _nombre;
    _apellidos;
    _direccion;
    _poblacion;
    _codPostal;
    _telefono;
    _email;
    _usuario;
    _contraseña;

    constructor(nombre, apellidos, direccion, poblacion, codPostal, telefono, email, usuario, contraseña) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._direccion = direccion;
        this._poblacion = poblacion;
        this._codPostal = codPostal;
        this._telefono = telefono;
        this._email = email;
        this._usuario = usuario;
        this._contraseña = contraseña;
    }

    get nombre() {
        return this._nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    setNewName(nombre, apellidos) {
        if (nombre) this._nombre = nombre;
        if (apellidos) this._apellidos = apellidos;
    }

    getFullAddress() {
        return this._direccion + '\n' + this._codPostal + ' ' + this._poblacion;
    }

    setAddress(direccion, poblacion, codPostal) {
        if (direccion) this._direccion = direccion;
        if (poblacion) this._poblacion = poblacion;
        if (codPostal >= 1000 && codPostal < 53000) this._codPostal = codPostal;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(number) {
        if (number >= 600000000 && number <= 999999999) this._telefono = number;
    }

    get usuario() {
        return this._usuario;
    }

    set usuario(newUsername) {
        if (newUsername) this._usuario = newUsername;
    }
    
    set contraseña(newPassword) {
        if (newPassword) this._contraseña = newPassword;
    }

    validatePassword(contraseña) {  //Para evitar hacer un getter para la contraseña
        return contraseña === this._contraseña;
    }
}

class Producto {
    _nombre;
    _tipo;
    _enlace;

    constructor(nombre, tipo, enlace) {
        this._nombre = nombre;
        this._tipo = tipo;
        this._enlace = enlace;
    }

    get nombre() {
        return this._nombre;
    }

    get tipo() {
        return this._tipo;
    }

    get enlace() {
        return this._enlace;
    }

    set nombre(newProductName) {
        if (!newProductName) return false;
        
        this._nombre = newProductName;
        return true;
    }

    set tipo(newType) {
        if (!newType) return false;
        
        this._tipo = newType;
        return true;
    }

    set enlace(newLink) {
        const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        
        if (!urlPattern.test(newLink)) return false;
        
        this._enlace = newLink;
        return true;
    }
}

class Lista {
    _usuario;
    _fecha;
    _productos;

    constructor(usuario, fecha) {
        this._usuario = usuario;
        this._fecha = fecha;
        this._productos = [];
    }

    get usuario() {
        return this._usuario;
    }

    get fecha() {
        return this._fecha;
    }

    get productos() {
        return this._productos;
    }

    set usuario(newUser) {
        const storedUser = localStorage.getItem('u_'+newUser);

        if (!storedUser) {
            return false;
        } else {
            this._usuario = newUser;
            return true;
        }
    }

    set fecha(newDate) {
        if (!newDate) return false;
        
        this._fecha = newDate;
        return true;
    }

    set productos(newProducts) {
        this._productos = newProducts;
    }
}