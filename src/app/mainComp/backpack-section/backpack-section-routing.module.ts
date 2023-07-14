
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BackpackSectionComponent } from './backpack-section.component';


const routes: Routes = [
      {
      path: '',
      component: BackpackSectionComponent,
      
      }
        
   
  

  
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],


})
export class BackpackSectionRoutingModule { }
