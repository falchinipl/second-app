
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CardModule } from 'src/app/shared/card/card.module';

import { Step3Component } from './step3.component';

import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    Step3Component
  ],
  imports: [
    CommonModule,
    CardModule,
    FontAwesomeModule

  ],
  exports:[Step3Component],


})
export class Step3Module { 

  constructor(library: FaIconLibrary){
    library.addIcons(faBuilding);
  }

}
