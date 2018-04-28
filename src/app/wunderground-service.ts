import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class WundergroundService {
    //apikey below is only assign for this app
    apiKey = 'f71da349e2a35cd7';
    // Urls should inject for dev and prod in real app. Hardcoded url(s) for demo. 
    private conditionBaseUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/';
    private forecastBaseUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/forecast10day/q/';
    private jsonFileExt: string = '.json';
    constructor(private http: Http) {
    }
//conditionBaseUrl and getCurrentConditionData is used for the view 1 to list the four cities
    getCurrentConditionData(identifier: string) {
        var url = this.conditionBaseUrl + identifier + this.jsonFileExt;
        console.log("getCurrentConditionData url", url);

        // should do error handling for real app.
        return this.http.get(url)
            .map((res: Response) => res.json())
    }
//forcastBaseurl and getForcast10dayData is used for the second view to list the 10 day forcast
    getForecast10dayData(identifier: string) {
        var url = this.forecastBaseUrl + identifier + this.jsonFileExt;
        console.log("getForecast10dayData url", url);

        return this.http.get(url)
            .map((res: Response) => res.json())
    }
}
