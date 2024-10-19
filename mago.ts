import { Personaje } from "./personaje";

export class Mago extends Personaje{
    private hechizo : string;

    constructor(nombre:string,hechizo:string){
        super(nombre)
        this.hechizo = hechizo;
    }

    getHechizo():string{
        return this.hechizo;
    }
    AumentarHp():void{
        this.PuntosDeVida += 30;
    }

    AumentarEp(): void {
        this.PuntosDeEnergia += 90;
    }
}