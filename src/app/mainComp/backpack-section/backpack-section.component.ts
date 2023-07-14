
import { Component} from '@angular/core';
import { Backpack } from 'src/app/model/backpack';

import { Country } from 'src/app/model/country';
import { Office } from 'src/app/model/office';
import { Prize } from 'src/app/model/prize';
import { FakeEndpointsService } from 'src/app/services/fake-endpoints.service';
import { UtilService } from 'src/app/services/util';


@Component({
  selector: 'backpack-section',
  templateUrl: './backpack-section.component.html',
  styleUrls: ['./backpack-section.component.scss']
})


export class BackpackSectionComponent {
  currentUrl: string | undefined;
  count: number = 0;
  country!: Country; 
  prize!:Prize;
  office!:Office;
  selected:boolean = false;
  progress?:any;
  prizes?:Prize[] = [];
  countries?:Country[] = [];
  backpackData: Backpack = {}
  cards:HTMLElement[] = [];

  constructor(private util:UtilService, public fakeEndpoint:FakeEndpointsService){
    

  }

  ngOnInit(){
    this.fakeEndpoint.getBackpack().subscribe((data) => {
      this.prizes = data.prizes;
      this.countries = data.locations;
      this.backpackData = data;
     })
  }

  ngAfterViewInit(){
    this.progress = document.querySelector('.progress-count');
    (this.progress as HTMLElement).style.width = `${((this.count + 1) / 4) * 100}%`;
   }
  setAnimationElements(cards:HTMLElement[]){
    this.util.addAnimation(cards);
    this.cards = cards;
  }

  isSelected(selected: boolean){
    this.selected = selected;
  }

  getCountry(country:Country){
    this.country = country;
  }

  getPrize(prize:Prize){
    this.prize = prize;
  }

  getOffice(office:Office){
    this.office = office;
  }

  goToStep(){
    this.count += 1;
    this.selected = false;
  }

  setProgressBar() {
    (this.progress as HTMLElement).style.width = `${((this.count + 1) / 4) * 100}%`;
  }


}
