
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/shared/card/card.module';
import { Step1RoutingModule } from './step1.routing.module';
import { Step1Component } from './step1.component';



@NgModule({
  declarations: [
    Step1Component
  ],
  imports: [
    CommonModule,
    CardModule,

  ],
  exports:[Step1Component],


})
export class Step1Module { }
