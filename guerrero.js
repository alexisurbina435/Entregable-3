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
exports.Guerrero = void 0;
var personaje_1 = require("./personaje");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre, defensa) {
        var _this = _super.call(this, nombre) || this;
        _this.defensa = defensa;
        return _this;
    }
    Guerrero.prototype.getDefensa = function () {
        return this.defensa;
    };
    Guerrero.prototype.AumentarHp = function () {
        this.PuntosDeVida += 50;
    };
    Guerrero.prototype.AumentarEp = function () {
        this.PuntosDeEnergia += 10;
    };
    return Guerrero;
}(personaje_1.Personaje));
exports.Guerrero = Guerrero;
