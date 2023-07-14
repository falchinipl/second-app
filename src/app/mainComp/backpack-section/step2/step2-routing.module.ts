
import { NgModule } from '@angular/core';



import { RouterModule, Routes } from '@angular/router';
import {  Step2Component } from './step2.component';



const routes: Routes = [
  {
    path: '',
    component: Step2Component
  }
  /*{
    path: 'detail',
    resolve: {
      profile: ProfileResolverService
    },
    component: LeaderboardDetailComponent
  }*/
];

@NgModule({
  
  imports: [
    
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],


})
export class Step2RoutingModule { }
