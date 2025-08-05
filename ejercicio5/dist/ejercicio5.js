"use strict";
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        this._nombre = "";
        this._apellido = "";
        this._direccion = "";
        this._telefono = "";
        this._edad = 0;
        this._nombre = nombre;
        this._apellido = apellido;
        this._direccion = direccion;
        this._telefono = telefono;
        this._edad = edad;
    }
    verificarEdad() {
        return this._edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, direccion, telefono, edad, sueldo = 0) {
        super(nombre, apellido, direccion, telefono, edad);
        this._sueldo = 0;
        this._sueldo = sueldo;
    }
    cargarSueldo(monto) {
        this._sueldo = monto;
    }
    mostrarSueldo() {
        return `Sueldo: ${this._sueldo.toFixed(2)}`;
    }
    mostrarDatos() {
        return `
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Nombre:</strong> ${this._nombre} ${this._apellido}</li>
            <li class="list-group-item"><strong>Dirección:</strong> ${this._direccion}</li>
            <li class="list-group-item"><strong>Teléfono:</strong> ${this._telefono}</li>
            <li class="list-group-item"><strong>Edad:</strong> ${this._edad} años (${this.verificarEdad()})</li>
            <li class="list-group-item"><strong>${this.mostrarSueldo()}</strong></li>
        </ul>`;
    }
}
//MOSTRAR RESULTADO
const formulario = document.getElementById("formEmpleado");
const resultadoDiv = document.getElementById("resultado");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const edad = parseInt(document.getElementById("edad").value);
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const empleado = new Empleado(nombre, apellido, direccion, telefono, edad);
    empleado.cargarSueldo(sueldo);
    resultadoDiv.innerHTML = empleado.mostrarDatos();
    resultadoDiv.classList.remove("d-none");
});
//# sourceMappingURL=ejercicio5.js.map