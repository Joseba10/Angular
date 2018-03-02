export class Usuario {


  id: number;
  nombre: string;
  apellido: string;
  email: string;
  avatar: string;
  sexo: Sexo;


  constructor(nombre: string = 'Anonimo') {

    this.id = -1;
    this.nombre = nombre;
    this.apellido = "";
    this.email = "";
    this.avatar = "https://i.pinimg.com/736x/61/9c/57/619c5741c5294ebd8d10923f67ddae4f--create-an-avatar-sites.jpg";
    this.sexo = Sexo.Indeterminado;



  }
}


export enum Sexo {

  Masculino = "Masculino",
  Femenino = "Femenino",
  Indeterminado = "Indeterminado"


}


