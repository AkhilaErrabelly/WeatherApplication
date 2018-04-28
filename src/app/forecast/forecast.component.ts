import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { WundergroundService } from '../wunderground-service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  data: any[] = [];

  constructor(private http: Http,
    private location: Location,
    private route: ActivatedRoute,
    private weatherService: WundergroundService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.getCityForecast(params['id']));
  }

  getCityForecast(id) {
    console.log("Requesting forecast for : ", id);

    this.weatherService.getForecast10dayData(id).subscribe(x => {
      console.log("Forecast api response for ", id, ": ", x.forecast.txt_forecast.forecastday);
      this.data = x.forecast.txt_forecast.forecastday; // Should handle null and undefined in real scenarios.
    });
  }

  goBack(): void {
    this.location.back();
  }
}
