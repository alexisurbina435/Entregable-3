import { Personaje } from "./personaje";
import { Guerrero } from "./guerrero";
import { Mago } from "./mago";
import { Arquero } from "./arquero";

let guerrero: Guerrero = new Guerrero("Mirbok",150);

let mago: Mago= new Mago("Mirboki", "evil spirit");

let arquero: Arquero = new Arquero('Mir', 5);

guerrero.atacar();
mago.atacar();
arquero.atacar();

guerrero.defender();
mago.defender();
arquero.defender();

console.log(arquero);

arquero.CantidadFlechas();
arquero.AumentarHp();
console.log(arquero);
