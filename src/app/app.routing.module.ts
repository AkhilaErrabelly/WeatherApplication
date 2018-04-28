import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ConditionComponent } from './condition/condition.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
//routes are used to navigate between pages.
export const routes: Routes =[
  {
    path:'',
    redirectTo:'/condition',
    pathMatch:'full'
  },
  {
    path: 'condition',
    component: ConditionComponent,
    pathMatch:'full'
  },
  {
    path: 'forecast/:id',
    component: ForecastComponent,
    pathMatch:'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);