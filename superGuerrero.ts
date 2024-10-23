import { Guerrero } from "./guerrero";


export class SuperGuerrero extends Guerrero{
   
    constructor(nombre:string,defensa:number){
        super(nombre,defensa);
        this.nivel = 30;
        this.PuntosDeVida = 300;
        this.PuntosDeEnergia = 200;
    }

    AumentarHp():void{
        this.PuntosDeVida += 100;
    }

    AumentarEp(): void {
        this.PuntosDeEnergia += 60;
    }
}