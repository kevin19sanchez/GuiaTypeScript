declare class Cancion {
    _titulo: string;
    _cancionGenero: string;
    private _autor;
    constructor(titulo: string, cancionGenero: string);
    set autor(valor: string);
    get autor(): string;
    mostrarDatos(): string;
}
declare const formulario: HTMLFormElement;
declare const resultado: HTMLDivElement;
//# sourceMappingURL=ejercicio3.d.ts.map