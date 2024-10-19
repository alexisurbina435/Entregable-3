"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre) {
        this.nivel = 1;
        this.PuntosDeVida = 120;
        this.PuntosDeEnergia = 100;
        this.nombre = nombre;
    }
    Personaje.prototype.atacar = function () {
        console.log("el ".concat(this.nombre, " esta atacando"));
    };
    Personaje.prototype.defender = function () {
        console.log("el ".concat(this.nombre, " se esta defendiendo"));
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.getVida = function () {
        return this.PuntosDeVida;
    };
    Personaje.prototype.getEnergia = function () {
        return this.PuntosDeEnergia;
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
