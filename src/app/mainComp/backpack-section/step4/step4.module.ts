
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CardModule } from 'src/app/shared/card/card.module';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';



import { Step4Component } from './step4.component';
import { faEdit } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    Step4Component
  ],
  imports: [
    CommonModule,
    CardModule,
    FontAwesomeModule

  ],
  exports:[Step4Component],


})
export class Step4Module {
  constructor(library: FaIconLibrary){
    library.addIcons(faEdit);
  }
 }
