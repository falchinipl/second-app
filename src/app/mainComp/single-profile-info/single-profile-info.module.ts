
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProfileInfoComponent } from './single-profile-info.component';
import { SingleProfileInfoRoutingModule } from './single-profile-info.routing.module';
import { CardDetailModule } from 'src/app/shared/card.detail/card.detail.module';






@NgModule({
  declarations: [
    SingleProfileInfoComponent,
  ],
  imports: [
    CommonModule,
    CardDetailModule,
    SingleProfileInfoRoutingModule
  ],
  exports:[SingleProfileInfoComponent],


})
export class SingleProfileInfoModule { }
