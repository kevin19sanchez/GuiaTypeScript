declare class Cuenta {
    private _nombre;
    private _cantidad;
    private _tipoCuenta;
    private _numeroCuenta;
    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string);
    depositarDinero(): string;
    retirarDinero(valor: number): string;
    mostrarDatos(): string;
}
declare let cuenta: Cuenta | null;
declare const form: HTMLFormElement;
declare const acciones: HTMLDivElement;
declare const resultado: HTMLDivElement;
declare const btnDepositar: HTMLButtonElement;
declare const btnRetirar: HTMLButtonElement;
declare const btnMostrar: HTMLButtonElement;
declare const inputValorRetiro: HTMLInputElement;
declare function actulizarSaldo(): void;
//# sourceMappingURL=ejercicio4.d.ts.map