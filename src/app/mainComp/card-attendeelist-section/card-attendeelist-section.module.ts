import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAttendeelistSectionComponent } from './card-attendeelist-section.component';
import { CardAttendeelistSectionRoutingModule } from './card-attendeelist-section-routing.module';




@NgModule({
  declarations: [
    CardAttendeelistSectionComponent,
  ],
  imports: [
    CommonModule,
    CardAttendeelistSectionRoutingModule
  ],
  exports:[CardAttendeelistSectionComponent],


})
export class CardAttendeelistSectionModule { }
