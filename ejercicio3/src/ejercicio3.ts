class Cancion{
    public _titulo:string="";
    public _cancionGenero:string = "";
    private _autor:string = "";

    constructor(titulo:string, cancionGenero:string){
        this._titulo = titulo;
        this._cancionGenero = cancionGenero;
    }

    //SETTTER Y GETTER
    public set autor(valor:string){
        this._autor = valor;
    } 

    public get autor():string{
        return this.autor
    }

    //MOSTRAR DATOS
    public mostrarDatos():string{
        return `Titulo: ${this._titulo}<br>
        Genero: ${this._cancionGenero}<br>
        Autor: ${this._autor}`;
    }
}

//DOM
const formulario = document.getElementById("form-cancion") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLDivElement;

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
    const genero = (document.getElementById("genero") as HTMLInputElement).value;
    const autor = (document.getElementById("autor") as HTMLInputElement).value;

    const cancion = new Cancion(titulo, genero);
    cancion.autor = autor;

    resultado.innerHTML = cancion.mostrarDatos();
    resultado.classList.remove("d-none");
});