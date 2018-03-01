/*Clase para encapsular los atributos de una receta*/


export class Receta {

    //Atributos
    nombre: string;
    foto: string;
    descripcion: string;
    likes: number;
    isGlutenFree: boolean;
    fotogluten: string;
    fotoglutenfree: string;
    cocinero: string;
    ingredientes: string[];

    //Solo es posible un Constructor
    constructor(nombre: string) {

        console.log("Receta Constructor");
        this.nombre = nombre;
        this.foto = 'assets/img/marmitako.jpg';
        this.likes = 0;
        this.cocinero = "Anonimo";
        this.descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta nihil consequuntur deleniti molestiae at temporibus, quisquam itaque minus, reprehenderit earum culpa? Qui nesciunt eligendi fugit. Accusantium quibusdam reprehenderit";
        this.isGlutenFree = false;
        this.ingredientes = [];
      

    }

    addIngrediente(ingrediente: string) {
this.ingredientes.push(ingrediente);
        console.log(`Receta nombre=${this.nombre}`);
    }




}
