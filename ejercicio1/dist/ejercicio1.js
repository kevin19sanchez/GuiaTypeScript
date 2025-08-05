"use strict";
class CabeceraPagina {
    constructor() {
        this._titulo = "";
        this._color = "";
        this._fuente = "";
        this._alineacion = "";
    }
    propiedadesHTML(_titulo, _color, _fuente) {
        this._titulo = _titulo;
        this._color = _color;
        this._fuente = _fuente;
    }
    alinearTitulo(_alineacion) {
        this._alineacion = _alineacion;
    }
    mostrarHTMl() {
        const contenedor = document.getElementById("cabeceraPagina");
        if (contenedor) {
            contenedor.innerHTML = `
            <h1 class="text-${this._alineacion}" style="color: ${this._color}; font-family: ${this._fuente};">
                ${this._titulo}
            </h1>
            <p><strong>Color:</strong> ${this._color}</p>
            <p><strong>Fuente:</strong> ${this._fuente}</p>
            <p><strong>Alineacion:</strong> ${this._alineacion}</p>
            `;
        }
    }
}
//INSTANCIA
const cabecera = new CabeceraPagina();
cabecera.propiedadesHTML("Bienvenido a mi página", "red", "Arial");
cabecera.alinearTitulo("center");
cabecera.mostrarHTMl();
//# sourceMappingURL=ejercicio1.js.map