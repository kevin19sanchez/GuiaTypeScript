class CabeceraPagina{
    private _titulo:string = "";
    private _color:string = "";
    private _fuente:string = "";
    private _alineacion:string = "";

    propiedadesHTML(_titulo:string, _color:string, _fuente:string):void{
        this._titulo =  _titulo;
        this._color = _color;
        this._fuente = _fuente;
    }

    alinearTitulo(_alineacion: "left" | "center" | "right"):void{
        this._alineacion = _alineacion;
    }

    mostrarHTMl():void{
        const contenedor = document.getElementById("cabeceraPagina");

        if(contenedor){
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
