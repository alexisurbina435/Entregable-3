import { Personaje } from "./personaje";

export class Arquero extends Personaje{
    private flechas:number;
    constructor(nombre:string,flechas:number){
        super(nombre)
        this.flechas = flechas;
    }

    getFlechas():number{
        return this.flechas;
    }

    CantidadFlechas():void{
        this.flechas += 5;
    }

    AumentarHp():void{
        this.PuntosDeVida += 40;
    }

    AumentarEp(): void {
        this.PuntosDeEnergia += 40;
    }
}