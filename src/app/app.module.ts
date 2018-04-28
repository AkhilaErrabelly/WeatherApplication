import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute }   from '@angular/router';
import { HttpModule } from "@angular/http";

import { routing } from './app.routing.module';

import { AppComponent } from './app.component';
import { ConditionComponent } from './condition/condition.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WundergroundService } from './wunderground-service';


@NgModule({
  declarations: [
    AppComponent,
    ConditionComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    WundergroundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
