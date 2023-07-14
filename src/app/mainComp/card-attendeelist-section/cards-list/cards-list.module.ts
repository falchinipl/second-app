
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CardModule } from 'src/app/shared/card/card.module';

import { CardListComponent } from './cards-list.component';
import { CardsListRoutingModule } from './cards-list.routing.module';
import { AddUserFormModule } from 'src/app/shared/add-user-form/add-user-form.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    AddUserFormModule,
    ReactiveFormsModule,
    CardsListRoutingModule
  ],
  exports:[CardListComponent],


})
export class CardListModule { }
