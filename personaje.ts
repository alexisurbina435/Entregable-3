export abstract class Personaje{
    protected nombre: string;
    protected nivel : number = 1;
    protected PuntosDeVida : number = 120;
    protected PuntosDeEnergia: number = 100;
    constructor(nombre: string){
        this.nombre = nombre;
    }

    atacar(): void{
        console.log(`el ${this.nombre} esta atacando`);
    }

    defender(): void{
        console.log(`el ${this.nombre} se esta defendiendo`);
    }

    getNivel(): number{
        return this.nivel;
    }

    getVida():number{
        return this.PuntosDeVida;
    }

    getEnergia():number{
        return this.PuntosDeEnergia;
    }
    
    setNivel(nivel : number): void{
        this.nivel = nivel
    }
    
    abstract AumentarHp():void;

    abstract AumentarEp():void;
}