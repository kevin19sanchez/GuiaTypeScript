"use strict";
class Cuenta {
    constructor(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this._nombre = "";
        this._cantidad = 0;
        this._tipoCuenta = "";
        this._numeroCuenta = "";
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._tipoCuenta = tipoCuenta;
        this._numeroCuenta = numeroCuenta;
    }
    depositarDinero() {
        if (this._cantidad < 5) {
            return "El valor deber ser mayor a $5.00";
        }
        else {
            return `Se ha depositado correctamente ${this._cantidad.toFixed(2)}`;
        }
    }
    retirarDinero(valor) {
        if (valor < 5) {
            return "El retiro deber ser mayor a $5.00";
        }
        else if (this._cantidad <= 0) {
            return "No hay fondos en la cuenta.";
        }
        else if (valor > this._cantidad) {
            return `Fondos insuficientes. Solo tienes ${this._cantidad.toFixed(2)} en tu cuenta`;
        }
        else {
            this._cantidad -= valor;
            return `Has retirado ${valor.toFixed(2)}. 
            Saldo actual: ${this._cantidad.toFixed(2)}`;
        }
    }
    mostrarDatos() {
        return `Nombre: ${this._nombre}\n
        Tipo de cuenta: ${this._tipoCuenta}\n
        Numero de cuenta: ${this._numeroCuenta}\n
        Total en cuenta: ${this._cantidad.toFixed(2)}`;
    }
}
//VARIABLE GLOBAL
let cuenta = null;
//OBTENER ELEMENTOS
const form = document.getElementById("cuentaForm");
const acciones = document.getElementById("acciones");
const resultado = document.getElementById("resultado");
const btnDepositar = document.getElementById("btnDepositar");
const btnRetirar = document.getElementById("btnRetirar");
const btnMostrar = document.getElementById("btnMostrar");
const inputValorRetiro = document.getElementById("valorRetiro");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const tipo = document.getElementById("tipo").value;
    const numero = document.getElementById("numero").value;
    cuenta = new Cuenta(nombre, cantidad, tipo, numero);
    acciones.style.display = 'block';
    resultado.innerText = "Cuenta creada con exito";
    actulizarSaldo();
});
btnDepositar.addEventListener("click", function () {
    if (cuenta) {
        resultado.innerText = cuenta.depositarDinero();
        actulizarSaldo();
    }
});
btnRetirar.addEventListener("click", function () {
    const valor = parseFloat(inputValorRetiro.value);
    if (cuenta && !isNaN(valor)) {
        resultado.innerText = cuenta.retirarDinero(valor);
        actulizarSaldo();
    }
});
btnMostrar.addEventListener("click", function () {
    if (cuenta) {
        resultado.innerText = cuenta.mostrarDatos();
    }
});
function actulizarSaldo() {
    const saldoElemento = document.getElementById('saldoValor');
    if (cuenta) {
        saldoElemento.innerText = `${cuenta["_cantidad"].toFixed(2)}`;
    }
    else {
        saldoElemento.innerText = `$0.00`;
    }
}
//# sourceMappingURL=ejercicio4.js.map