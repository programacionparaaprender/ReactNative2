
export interface Usuario{
    id: string;
    usuario: string;
    password: string;
    nombre: string;
    apellido: string; 
}

export interface MensajesDeUsuarios{
    usuario1_id:string;
    usuario2_id:string;
    mensaje: string;
    tipo: number;
    fecha: Date;
}

// tipo 0 mensaje, 1 imagen, 2 vídeo

export interface IBoard{
    squares: Array<string>
}  

export interface Vieja {
    history: Array<IBoard>,
    stepNumber: number,
    xIsNext: boolean,
}


export interface Producto{
    id: string;
    name: string;
    description:string
    price: string;
}

export class ProductoClass{
    id: string;
    name: string;
    description:string
    price: string;
    constructor(){
        this.id = "2";
        this.name = "Nombre1";
        this.description="Descripcion1";
        this.price="20.0";
    } 
}