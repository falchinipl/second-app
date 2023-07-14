import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';

import { Profile } from 'src/app/model/profile';
import { FakeEndpointsService } from 'src/app/services/fake-endpoints.service';
let count = 0;
@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardListComponent {
  
  attendeeList:any = {};
  formModel: Profile = {};
  currentUrl: string | undefined;
  currentProfile:Profile = new Profile();
  profiles: Profile[] | undefined = [];
  nome:FormControl = new FormControl('');
  cognome: FormControl = new FormControl('');
  soprannome:FormControl = new FormControl('');
  punti: FormControl = new FormControl('');
  group!:FormGroup;

  constructor(private apiService: FakeEndpointsService, private router: Router,private fb: FormBuilder){
    this.group = this.fb.group({
      name: this.nome,
      surname: this.cognome,
      nickname: this.soprannome,
      points: this.punti
    })
  }


  ngOnInit(){

    this.currentUrl = this.router.url;
    this.getAttendeeList();
  }


  setFormModel(profile:any){
    profile = this.group.value;

    this.apiService.postAttendeeList(profile);
  }
 


  getAttendeeList(){
    this.apiService.getAttendeeList().subscribe(data => {
      this.attendeeList = data;
      this.profiles = data.profiles;
      
      
      //this.profiles = data.profiles;
    });
    //
  }

  getCurrentProfile(i:number){
    let count = 0;
    count +=1;
    this.profiles?.forEach((element:any, index:any) => {
      if(index === i){
        this.currentProfile = element;
      }
      
    })
    
    this.router.navigate([`${this.currentUrl}/detail`, {profileId: this.currentProfile.profileId}])

  }

  

}
