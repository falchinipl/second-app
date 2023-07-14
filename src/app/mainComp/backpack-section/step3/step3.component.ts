import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Backpack } from 'src/app/model/backpack';
import { Country } from 'src/app/model/country';
import { Office } from 'src/app/model/office';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss','../backpack-section.component.scss']
})
export class Step3Component {
  country?: Country;
  offices?:Office[] = [];
  office?:Office;
  selected?:boolean;
  cards:any;
  clickedIndex?:number;
  initSelected?:boolean = false;
  filmIcon = faFilm;
  alreadySelectedOffice?: Office;
  stepTemplate?:any;
  @Input()
  set location(location:Country){
    this.country = location;
    this.offices = this.country.offices;
  }
  
  @Input()
  alreadySelected: Backpack = {};

  @Output()
  emitSelected:EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  emitSelectedOffice:EventEmitter<Office> = new EventEmitter<Office>();

  @Output()
  getAllCards:EventEmitter<any> = new EventEmitter<any>();
  

  getCurrentOffice(i: number){
    this.initSelected = false;
    this.offices?.forEach((element:any, index:any) => {

      if(index === i){
        this.clickedIndex = i;
        this.office = element;
        this.selected = true;
        this.emitSelected.emit(this.selected);
        this.emitSelectedOffice.emit(this.office);

      }
    })
   }
  ngOnInit(){
    this.initSelected = true;
    this.alreadySelected?.userSelection?.location?.offices?.forEach((chosenOffice:Office) =>{
      this.alreadySelectedOffice = chosenOffice;
    })
  }
  getStepTemplate(template:any){
    this.stepTemplate = template; 
    this.getAllCards.emit(this.stepTemplate);
  }
  

}
