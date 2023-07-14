
import { NgModule } from '@angular/core';



import { RouterModule, Routes } from '@angular/router';
import { SingleProfileInfoComponent } from './single-profile-info.component';

const routes: Routes = [
  {
    path: '',
    component: SingleProfileInfoComponent
  },
];

@NgModule({
  
  imports: [
    
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],


})
export class SingleProfileInfoRoutingModule { }
