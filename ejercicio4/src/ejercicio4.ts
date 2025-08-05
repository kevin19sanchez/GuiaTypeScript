class Cuenta{
    private _nombre:string = "";
    private _cantidad:number = 0;
    private _tipoCuenta:string = "";
    private _numeroCuenta:string = "";

    constructor(nombre:string, cantidad:number, tipoCuenta:string, numeroCuenta:string){
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._tipoCuenta = tipoCuenta;
        this._numeroCuenta = numeroCuenta;
    }

    depositarDinero():string{
        if(this._cantidad < 5){
            return "El valor deber ser mayor a $5.00";
        }else{
            return `Se ha depositado correctamente ${this._cantidad.toFixed(2)}`;
        }
    }

    retirarDinero(valor:number):string{
        if(valor < 5){
            return "El retiro deber ser mayor a $5.00";
        }else if(this._cantidad <= 0){
            return "No hay fondos en la cuenta.";
        }else if(valor > this._cantidad){
            return `Fondos insuficientes. Solo tienes ${this._cantidad.toFixed(2)} en tu cuenta`;
        }else{
            this._cantidad -= valor;
            return `Has retirado ${valor.toFixed(2)}. 
            Saldo actual: ${this._cantidad.toFixed(2)}`;
        }
    }

    mostrarDatos():string{
        return `Nombre: ${this._nombre}\n
        Tipo de cuenta: ${this._tipoCuenta}\n
        Numero de cuenta: ${this._numeroCuenta}\n
        Total en cuenta: ${this._cantidad.toFixed(2)}`;
    }
}

//VARIABLE GLOBAL
let cuenta: Cuenta | null = null;

//OBTENER ELEMENTOS
const form = document.getElementById("cuentaForm") as HTMLFormElement;
const acciones = document.getElementById("acciones") as HTMLDivElement;
const resultado = document.getElementById("resultado") as HTMLDivElement;
const btnDepositar = document.getElementById("btnDepositar") as HTMLButtonElement;
const btnRetirar = document.getElementById("btnRetirar") as HTMLButtonElement;
const btnMostrar = document.getElementById("btnMostrar") as HTMLButtonElement;
const inputValorRetiro = document.getElementById("valorRetiro") as HTMLInputElement;

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const cantidad = parseFloat((document.getElementById("cantidad") as HTMLInputElement).value);
    const tipo = (document.getElementById("tipo") as HTMLInputElement).value;
    const numero = (document.getElementById("numero") as HTMLInputElement).value;

    cuenta = new Cuenta(nombre, cantidad, tipo, numero);

    acciones.style.display = 'block';
    resultado.innerText = "Cuenta creada con exito";
    actulizarSaldo();
});

btnDepositar.addEventListener("click", function(){
    if(cuenta){
        resultado.innerText = cuenta.depositarDinero();
        actulizarSaldo();
    }
});

btnRetirar.addEventListener("click", function(){
    const valor = parseFloat(inputValorRetiro.value);
    if(cuenta && !isNaN(valor)){
        resultado.innerText = cuenta.retirarDinero(valor);
        actulizarSaldo();
    }
});

btnMostrar.addEventListener("click", function(){
    if(cuenta){
        resultado.innerText = cuenta.mostrarDatos();
    }
});

function actulizarSaldo(){
    const saldoElemento = document.getElementById('saldoValor') as HTMLParagraphElement;
    if(cuenta){
        saldoElemento.innerText = `${cuenta["_cantidad"].toFixed(2)}`;
    }else{
        saldoElemento.innerText = `$0.00`;
    }
}