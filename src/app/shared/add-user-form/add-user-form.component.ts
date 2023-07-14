import { Component,  EventEmitter,  Input,  Output,  TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

let count = 0;
@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})  

export class AddUserFormComponent {
  


  @Input() 
  formTemplate!: TemplateRef<any>;

  @Input()
  formGroup! : FormGroup;

  @Output()
  formModelEmitter: EventEmitter<any> = new EventEmitter<any>();

  formModel: any;


  ngOnInit(){
  
  }

  onSubmit(){
    
    count += 1;
    this.formModel = this.formGroup.value;
    this.formModel.profileId = '12321-fsddsfds-32324-HKAJS' + count.toString();
    this.formModelEmitter.emit(this.formModel);


  }

}
