import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';
import { WundergroundService } from '../wunderground-service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {
  /* 
  *Assuming [state/city] as combined string for demo.
  *In real app, state and city should be paramterized from routes.
*/
  citiesToDemo: string[];
  // listed four cities using id's given from api.
  data: any[] = [];

  constructor(private http: Http,
    private weatherService: WundergroundService) {
    this.citiesToDemo = ["MI/Detroit", "CA/San_diego", "CA/San_francisco", "DC/Washington"];
    this.citiesToDemo.forEach(value => {
      // append .json for file extension.
      this.weatherService.getCurrentConditionData(value).subscribe(x => {
        console.log("$api response for ", value, ": ", x.current_observation);
        var extendedData = {
          'apiData': x.current_observation,
          'id': value
        };
        this.data.push(extendedData);
      });
    });
  }

  ngOnInit() {
  }
}
