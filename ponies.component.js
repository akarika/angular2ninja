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
// you need to import the pipe you want to use
var common_1 = require('@angular/common');
var PoniesComponent = (function () {
    // inject the Pipe you want
    function PoniesComponent(jsonPipe) {
        this.size = 2;
        this.birthday = new Date();
        this.ponies = [
            { name: 'Rainbow Dash' },
            { name: 'Pinkie Pie' },
            { name: 'Fluttershy' }
        ];
        // and then call the transform method on it
        this.poniesAsJson = jsonPipe.transform(this.ponies);
    }
    PoniesComponent = __decorate([
        core_1.Component({
            selector: 'ns-ponies',
            template: "<p>{{poniesAsJson}}</p>\n<p>{{ 'Ninja Squad' | slice:0:size }}</p>\n<div *ngFor=\"let pony of ponies | slice:0:2\">{{pony.name}}</div>\n<p>{{ 'Ninja Squad' | uppercase }}</p>\n<p>{{ 'Ninja Squad' | lowercase }}</p>\n<p>{{1983 | number :'.2'}}</p>\n<p>{{ 10.6 | currency:'EUR' }}</p>\n<!-- will display 'EUR10.60' -->\n<p>{{ 10.6 | currency:'USD':true }}</p>\n<!-- will display '$10.60' -->\n<p>{{ 10.6 | currency:\"EUR\":true:\".2\" }}</p>\n<p>{{ birthday | date:'longDate'}}</p>\n<p>{{ birthday | date:'HH:mm'}}</p>\n"
        }), 
        __metadata('design:paramtypes', [common_1.JsonPipe])
    ], PoniesComponent);
    return PoniesComponent;
}());
exports.PoniesComponent = PoniesComponent;
//# sourceMappingURL=ponies.component.js.map