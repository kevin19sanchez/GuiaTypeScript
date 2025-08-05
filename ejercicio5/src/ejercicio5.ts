abstract class Persona {
    protected _nombre:string = "";
    protected _apellido:string = "";
    protected _direccion:string = "";
    protected _telefono:string = "";
    protected _edad:number = 0;

    constructor(nombre:string, apellido:string, direccion:string, telefono:string, edad:number) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._direccion = direccion;
        this._telefono = telefono;
        this._edad = edad;
    }

    verificarEdad():string{
        return this._edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
    }

    abstract mostrarDatos():string;
}

class Empleado extends Persona{
    private _sueldo: number = 0;

    constructor(nombre:string, apellido:string, 
        direccion:string, telefono:string, edad:number, sueldo:number=0){
        super(nombre, apellido, direccion, telefono, edad);
        this._sueldo = sueldo;
    }

    cargarSueldo(monto:number):void{
        this._sueldo = monto;
    }

    mostrarSueldo():string{
        return `Sueldo: ${this._sueldo.toFixed(2)}`;
    }

    mostrarDatos(): string {
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
const formulario = document.getElementById("formEmpleado") as HTMLFormElement;
const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const apellido = (document.getElementById("apellido") as HTMLInputElement).value;
    const direccion = (document.getElementById("direccion") as HTMLInputElement).value;
    const telefono = (document.getElementById("telefono") as HTMLInputElement).value;
    const edad = parseInt((document.getElementById("edad") as HTMLInputElement).value);
    const sueldo = parseFloat((document.getElementById("sueldo") as HTMLInputElement).value);

    const empleado = new Empleado(nombre, apellido, direccion, telefono, edad);

    empleado.cargarSueldo(sueldo);

    resultadoDiv.innerHTML = empleado.mostrarDatos();
    resultadoDiv.classList.remove("d-none");
});


