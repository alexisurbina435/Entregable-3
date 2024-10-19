"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
var personaje_1 = require("./personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, flechas) {
        var _this = _super.call(this, nombre) || this;
        _this.flechas = flechas;
        return _this;
    }
    Arquero.prototype.getFlechas = function () {
        return this.flechas;
    };
    Arquero.prototype.CantidadFlechas = function () {
        this.flechas += 5;
    };
    Arquero.prototype.AumentarHp = function () {
        this.PuntosDeVida += 40;
    };
    Arquero.prototype.AumentarEp = function () {
        this.PuntosDeEnergia += 40;
    };
    return Arquero;
}(personaje_1.Personaje));
exports.Arquero = Arquero;
