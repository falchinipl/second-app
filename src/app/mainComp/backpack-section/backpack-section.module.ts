
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackpackSectionRoutingModule } from './backpack-section-routing.module';
import { BackpackSectionComponent } from './backpack-section.component';
import { Step1Module } from './step1/step1.module';
import { Step2Module } from './step2/step2.module';
import { Step3Module } from './step3/step3.module';
import { Step4Module } from './step4/step4.module';





@NgModule({
  declarations: [
    BackpackSectionComponent,
  ],
  imports: [
    CommonModule,
    Step1Module,
    Step2Module,
    Step3Module,
    Step4Module,

    BackpackSectionRoutingModule,
    
  ],
  exports:[BackpackSectionComponent],


})
export class BackpackSectionModule { }
