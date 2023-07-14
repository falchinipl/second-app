import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/model/profile';
@Component({
  selector: 'single-profile-info',
  templateUrl: './single-profile-info.component.html',
  styleUrls: ['./single-profile-info.component.scss']
})
export class SingleProfileInfoComponent {

  constructor( private route: ActivatedRoute){

  }
  nome?: string = "";
  cognome?: string = "";
  nick?: string = "";
  punti?: string = "";

  ngOnInit(){
    let profileId = this.route.snapshot.paramMap.get('profileId');
    //console.log(profileId);
    this.route.data.subscribe(data => {

      let profiles: Profile[] = data['profile'].profiles;
      profiles.forEach((element:Profile, index:number) => {
        if(element.profileId === profileId){
          this.nome = element.name;
          this.cognome = element.surname;
          this.nick = element.nickname;
          this.punti = element.points?.toString();
          /*console.log(element)*/
        }
      })
    })
  }

}
