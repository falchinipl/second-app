import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Backpack } from 'src/app/model/backpack';
import { Country } from 'src/app/model/country';




@Component({
  selector: 'step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss','../backpack-section.component.scss']
})
export class Step2Component {
  country?:Country;  
  selected?:boolean;
  cards:any;
  clickedIndex?:number;
  initSelected?:boolean = false;
  stepTemplate?:any;

  @Output()
  emitSelectedCountry:EventEmitter<Country> = new EventEmitter<Country>();

  @Output()
  emitSelected:EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  getAllCards:EventEmitter<any> = new EventEmitter<any>();
  
  @Input()
  countries?:Country[] = [];

  @Input()
  alreadySelected: Backpack = {};

  getCurrentCountry(i: number){
    this.initSelected = false;
    this.countries?.forEach((element:any, index:any) => {

      if(index === i){
        this.clickedIndex = i;
        this.country = element;
        this.selected = true;
        this.emitSelected.emit(this.selected);
        this.emitSelectedCountry.emit(this.country);

       }
    })
  }
  ngOnInit(){
    this.initSelected = true;
  }
  getStepTemplate(template:any){
    this.stepTemplate = template; 
    this.getAllCards.emit(this.stepTemplate);
  }
  
}
