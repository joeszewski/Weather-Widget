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
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
const constants_1 = require('../constants/constants');
let WeatherService = class WeatherService {
    constructor(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    getCurrentLocation() {
        if (navigator.geolocation) {
            return Observable_1.Observable.create(observer => {
                navigator.geolocation.getCurrentPosition(pos => {
                    observer.next(pos);
                }),
                    err => {
                        return Observable_1.Observable.throw(err);
                    };
            });
        }
        else {
            return Observable_1.Observable.throw("Gelocation is not available.  Update your browser!");
        }
    }
    getCurrentWeather(lat, long) {
        const url = constants_1.FORECAST_ROOT + constants_1.FORECAST_KEY + "/" + lat + "," + long;
        const queryParams = "?callback=JSONP_CALLBACK";
        return this.jsonp.get(url + queryParams)
            .map(data => data.json())
            .catch(err => {
            console.error("Unable to get weather data - ", err);
            return Observable_1.Observable.throw(err.json());
        });
    }
    getLocationName(lat, long) {
        const url = constants_1.GOOGLE_ROOT;
        const queryParams = "?latlng=" + lat + "," + long + "&key=" + constants_1.GOOGLE_KEY;
        return this.http.get(url + queryParams)
            .map(loc => loc.json())
            .catch(err => {
            console.error("Unable to get location - ", err);
            return Observable_1.Observable.throw(err);
        });
    }
};
WeatherService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Jsonp, http_1.Http])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map