declare abstract class Persona {
    protected _nombre: string;
    protected _apellido: string;
    protected _direccion: string;
    protected _telefono: string;
    protected _edad: number;
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number);
    verificarEdad(): string;
    abstract mostrarDatos(): string;
}
declare class Empleado extends Persona {
    private _sueldo;
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo?: number);
    cargarSueldo(monto: number): void;
    mostrarSueldo(): string;
    mostrarDatos(): string;
}
declare const formulario: HTMLFormElement;
declare const resultadoDiv: HTMLDivElement;
//# sourceMappingURL=ejercicio5.d.ts.map