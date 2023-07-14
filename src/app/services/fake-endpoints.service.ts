import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { Leaderboard } from '../model/leaderboard';
import { AttendeeList } from '../model/attendeeList';
import { Observable, of } from 'rxjs';
import { Backpack } from '../model/backpack';


@Injectable({
  providedIn: 'root'
})
export class FakeEndpointsService {

  leaderboardProfiles: Leaderboard = {
      "page": 1,
      "count": 3490,
      "me": {
        "position": 4,
        "profileId": "527cbe97-b96c-453a-8035-7ec9c93b2d85",
        "publicProfileId": "527cbe97-b96c-453a-8035-7ec9c93b2d85",
        "name": "Manuela",
        "surname": "Ceroni",
        "nickname": "manu82",
        "imageUrl": "https://assets.entegy.com.au/projects/ef81b942-220f-4945-94d0-f864263e5956/delegates/556f2a6f-b778-4c2e-aa74-fdc1691c8bd2.jpg",

        "profileType": "replyer"
      },
      "profiles": [
        {
          "position": 4,
          "profileId": "527cbe97-b96c-453a-8035-7ec9c93b2d85",
          "publicProfileId": "527cbe97-b96c-453a-8035-7ec9c93b2d85",
          "name": "Manuela",
          
          "nickname": "manu82",
          "imageUrl": "https://assets.entegy.com.au/projects/ef81b942-220f-4945-94d0-f864263e5956/delegates/556f2a6f-b778-4c2e-aa74-fdc1691c8bd2.jpg",
 
          "profileType": "replyer"
        },
        {
          "position": 5,
          "profileId": "333cbe97-b96c-453a-8035-7ec9c93b2d85",
          "publicProfileId": "333cbe97-b96c-453a-8035-7ec9c93b2d85",
          "name": "Pierluigi",
          "surname": "Falchini",
          "nickname": "manu82",
          "imageUrl": "https://assets.entegy.com.au/projects/ef81b942-220f-4945-94d0-f864263e5956/delegates/556f2a6f-b778-4c2e-aa74-fdc1691c8bd2.jpg",
        
          "profileType": "replyer"
        }
      ]
    
  };

  attendeesProfiles: AttendeeList = {
    "page": 1,
    
    "profiles": [
      {
        "position": 4,
        "profileId": "527cbe97-b96c-453a-8035-7ec9c93b2d85",
        "publicProfileId": "527cbe97-b96c-453a-8035-7ec9c93b2d85",


        "nickname": "manu82",
        "imageUrl": "https://assets.entegy.com.au/projects/ef81b942-220f-4945-94d0-f864263e5956/delegates/556f2a6f-b778-4c2e-aa74-fdc1691c8bd2.jpg",
        "points": 560,
        "profileType": "replyer"
      },
      {
        "position": 5,
        "profileId": "333cbe97-b96c-453a-8035-7ec9c93b2d85",
        "publicProfileId": "333cbe97-b96c-453a-8035-7ec9c93b2d85",
        "name": "Pierluigi",
        "surname": "Falchini",
        "nickname": "manu82",
        "imageUrl": "https://assets.entegy.com.au/projects/ef81b942-220f-4945-94d0-f864263e5956/delegates/556f2a6f-b778-4c2e-aa74-fdc1691c8bd2.jpg",
        "points": 560,
        "profileType": "replyer"
      }
    ]
  
};

backpack: Backpack = {
"prizeType": "backpack", 
  "label": "Order now your Reply Backpack! Choose the backpack model", 
  "errorMessage": "Your order is not confirmed, please try again to order your backpack. If the issue keeps happening please write to <br/><a href='mailto:eventsapp@reply.com' mailto>eventsapp@reply.com</a>", 
  "prizes": [ 
    { 
      "prizeId": 6, 
      "prizeType": "backpack", 
      "label": "Blue", 
      "imgUrl": "https://media.istockphoto.com/photos/bilbo-baggins-picture-id459017449?s=612x612", 
      "capacity": 3 
      },
      { 
        "prizeId": 7, 
        "prizeType": "backpack", 
        "label": "Red", 
        "imgUrl": "https://media.istockphoto.com/photos/bilbo-baggins-picture-id459017449?s=612x612", 
        "capacity": 3 
        },
        { 
          "prizeId": 8, 
          "prizeType": "backpack", 
          "label": "Yellow", 
          "imgUrl": "https://media.istockphoto.com/photos/bilbo-baggins-picture-id459017449?s=612x612", 
          "capacity": 3 
          } 
    ],
    "locations": [
      { 
        "name": "Italy", 
        "iconUrl": "https://media.istockphoto.com/photos/bilbo-baggins-picture-id459017449?s=612x612",
        "offices": [ 
          { 
          "priceLocationId": 3, 
          "office": "Milan K1"
          },
          { 
            "priceLocationId": 4, 
            "office": "Milan K3"
            },
            { 
              "priceLocationId": 5, 
              "office": "Turin K4"
           }
        ]
      },
      { 
        "name": "France", 
        "iconUrl": "https://media.istockphoto.com/photos/bilbo-baggins-picture-id459017449?s=612x612",
        "offices": [ 
          { 
          "priceLocationId": 3, 
          "office": "Paris K1"
          },
          { 
            "priceLocationId": 4, 
            "office": "Paris K3"
            },
            { 
              "priceLocationId": 5, 
              "office": "Paris K4"
           }
        ],
        
      }
    ],

    "userSelection": { 
      "prize": { 
        "prizeId": 7, 
      "prizeType": "backpack", 
      "label": "Red", 
      "imgUrl": "https://media.istockphoto.com/photos/bilbo-baggins-picture-id459017449?s=612x612", 
      "capacity": 5
      }, 
        "location": { 
         
        "name": "Italy", 
        "offices": [ 
          { 
            "priceLocationId": 3, 
            "office": "Paris K4"
          }
          
      
                
              ] 
              
              }
                 
            } 
                
        
}

  constructor() { }
getLeaderboard(): Observable<Leaderboard>{
  return of(this.leaderboardProfiles);
}

postLeaderboard(profile:Profile){
  this.leaderboardProfiles.profiles?.push(profile);
  console.log(this.leaderboardProfiles);
}

postAttendeeList(profile:Profile){
  this.attendeesProfiles.profiles?.push(profile);
}

getAttendeeList(): Observable<Leaderboard>{
  return of(this.attendeesProfiles);
}

getBackpack(): Observable<Backpack>{
  return of(this.backpack);
}


}
