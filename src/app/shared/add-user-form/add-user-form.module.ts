import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserFormComponent } from './add-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AddUserFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[AddUserFormComponent],


})
export class AddUserFormModule { }
