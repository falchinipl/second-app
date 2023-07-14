import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Backpack } from 'src/app/model/backpack';
import { Prize } from 'src/app/model/prize';


@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss','../backpack-section.component.scss']
})
export class Step1Component {


  prize?:Prize;
  selected?:boolean;
  cards?:any;
  clickedIndex?:number;
  initSelected?:boolean = false;
  stepTemplate?:any;
  
  @Output()
  emitSelectedPrize:EventEmitter<Prize> = new EventEmitter<Prize>();

  @Output()
   emitSelected:EventEmitter<boolean> = new EventEmitter<boolean>();

   @Output()
   getAllCards:EventEmitter<any> = new EventEmitter<any>();

   @Input()
   prizes?:Prize[] = [];

   @Input()
   alreadySelected: Backpack = {};

 getCurrentPrize(i: number){
  this.initSelected = false;
  this.prizes?.forEach((element:any, index:any) => {
      if(index === i){
        this.clickedIndex = i;
        this.prize = element;
        this.selected = true;
        this.emitSelected.emit(this.selected);
        this.emitSelectedPrize.emit(element);

      }
     })
  }

ngOnInit(){
  this.initSelected = true;
}

getStepTemplate(template:any){
  this.stepTemplate = template; 
  this.getAllCards.emit( this.stepTemplate);
}

}
