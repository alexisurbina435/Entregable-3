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
exports.SuperGuerrero = void 0;
var guerrero_1 = require("./guerrero");
var SuperGuerrero = /** @class */ (function (_super) {
    __extends(SuperGuerrero, _super);
    function SuperGuerrero(nombre, defensa) {
        var _this = _super.call(this, nombre, defensa) || this;
        _this.nivel = 30;
        _this.PuntosDeVida = 300;
        _this.PuntosDeEnergia = 200;
        return _this;
    }
    SuperGuerrero.prototype.AumentarHp = function () {
        this.PuntosDeVida += 100;
    };
    SuperGuerrero.prototype.AumentarEp = function () {
        this.PuntosDeEnergia += 60;
    };
    return SuperGuerrero;
}(guerrero_1.Guerrero));
exports.SuperGuerrero = SuperGuerrero;
