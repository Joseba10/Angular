export class Usuario{


    id:number;
    Nombre:string;
    Apellido:string;
    Email:string;
    Avatar:string;
    sexo:string;
    

    constructor() { 

        this.id=0;
        this.Nombre="Paco";
        this.Apellido="Martinez";
        this.Email="Paco-Martinez@gmail.com";
        this.Avatar="https://i.pinimg.com/736x/61/9c/57/619c5741c5294ebd8d10923f67ddae4f--create-an-avatar-sites.jpg";
        this.sexo="Masculino";
        
        
        
          }


  ngOnInit() {
}

}

