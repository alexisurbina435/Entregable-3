import { Personaje } from "./personaje";

export class Guerrero extends Personaje{
    private defensa: number;
    constructor(nombre:string,defensa:number){
        super(nombre)
        this.defensa = defensa;
    }

    getDefensa():number{
        return this.defensa;
    }

    AumentarHp():void{
        this.PuntosDeVida += 50;
    }

    AumentarEp(): void {
        this.PuntosDeEnergia += 10;
    }
}