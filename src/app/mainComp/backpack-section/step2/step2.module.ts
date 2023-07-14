
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CardModule } from 'src/app/shared/card/card.module';
import { Step2Component } from './step2.component';
import { Step2RoutingModule } from './step2-routing.module';






@NgModule({
  declarations: [
    Step2Component
  ],
  imports: [
    CommonModule,
    CardModule,


  ],
  exports:[Step2Component],


})
export class Step2Module { }
