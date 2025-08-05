declare class CabeceraPagina {
    private _titulo;
    private _color;
    private _fuente;
    private _alineacion;
    propiedadesHTML(_titulo: string, _color: string, _fuente: string): void;
    alinearTitulo(_alineacion: "left" | "center" | "right"): void;
    mostrarHTMl(): void;
}
declare const cabecera: CabeceraPagina;
//# sourceMappingURL=ejercicio1.d.ts.map