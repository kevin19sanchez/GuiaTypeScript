"use strict";
class Cancion {
    constructor(titulo, cancionGenero) {
        this._titulo = "";
        this._cancionGenero = "";
        this._autor = "";
        this._titulo = titulo;
        this._cancionGenero = cancionGenero;
    }
    //SETTTER Y GETTER
    set autor(valor) {
        this._autor = valor;
    }
    get autor() {
        return this.autor;
    }
    //MOSTRAR DATOS
    mostrarDatos() {
        return `Titulo: ${this._titulo}<br>
        Genero: ${this._cancionGenero}<br>
        Autor: ${this._autor}`;
    }
}
//DOM
const formulario = document.getElementById("form-cancion");
const resultado = document.getElementById("resultado");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const genero = document.getElementById("genero").value;
    const autor = document.getElementById("autor").value;
    const cancion = new Cancion(titulo, genero);
    cancion.autor = autor;
    resultado.innerHTML = cancion.mostrarDatos();
    resultado.classList.remove("d-none");
});
//# sourceMappingURL=ejercicio3.js.map