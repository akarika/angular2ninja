"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var race_service_1 = require('./race.service');
var PonyRacerAppComponent = (function () {
    function PonyRacerAppComponent(raceService) {
        this.raceService = raceService;
        //numberOfUsers: number = 146;
        this.name = "roux remy";
    }
    PonyRacerAppComponent.prototype.list = function () {
        return this.raceService.list()[0].name;
    };
    PonyRacerAppComponent = __decorate([
        core_1.Component({
            selector: 'ponyracer-app',
            template: "\n<p>{{list()}}</p>\n<ns-ponies></ns-ponies>\n<ns-gretting></ns-gretting>\n\n"
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], PonyRacerAppComponent);
    return PonyRacerAppComponent;
}());
exports.PonyRacerAppComponent = PonyRacerAppComponent;
//# sourceMappingURL=app.component.js.map