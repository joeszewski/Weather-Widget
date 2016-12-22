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
const core_1 = require('@angular/core');
let WeatherService = class WeatherService {
    getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                console.log("Postion: ", pos.coords.latitude, ",", pos.coords.longitude); // TODO: REMOVE
                return [pos.coords.latitude, pos.coords.longitude];
            }, err => console.error("Unable to get the position - ", err));
        }
        else {
            console.error("Gelocation is not available.  Update your browser!");
            return [0, 0];
        }
    }
};
WeatherService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map