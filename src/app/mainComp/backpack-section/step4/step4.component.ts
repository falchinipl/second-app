import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Office } from 'src/app/model/office';
import { Prize } from 'src/app/model/prize';




@Component({
  selector: 'step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss','../backpack-section.component.scss']
})
export class Step4Component {


  prize!: Prize;
  office!: Office;

 
  @Input()
  set backpack(prize:Prize){
    this.prize = prize;
  }

  @Input()
  set ufficio(office:Office){
    this.office = office;
  }

  @Input()
  count?: number;

  @Output()
  getAllCards:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  setCount:EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(){
    console.log(this.count);
  }

  ngAfterViewInit(){
    let cards = document.querySelectorAll('.card-info-container');
    this.getAllCards.emit(cards);
  
   }

   setCountForBackpack(){
    let count = 0;
    this.setCount.emit(count);

   }
  

}
