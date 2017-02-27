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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var common_1 = require('@angular/common');
var ponies_component_1 = require('./ponies.component');
var api_service_1 = require('./api.service');
var fake_service_1 = require('./fake.service');
var race_service_1 = require('./race.service');
var greeting_component_1 = require('./greeting.component');
var pipe_transform_1 = require("./pipe.transform");
//objet de configuration
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            //declaration des modules d utilisation
            declarations: [app_component_1.PonyRacerAppComponent, ponies_component_1.PoniesComponent, greeting_component_1.AsyncGrettingComponent, pipe_transform_1.FromNowPipe],
            //sur quel component booter
            providers: [api_service_1.ApiService, { provide: race_service_1.RaceService, useClass: fake_service_1.FakeRaceService }, common_1.JsonPipe],
            bootstrap: [app_component_1.PonyRacerAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map