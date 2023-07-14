import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { FakeEndpointsService } from './fake-endpoints.service';
import { Observable } from 'rxjs';
import { Leaderboard } from '../model/leaderboard';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<Leaderboard>{
  callback:Observable<any> = new Observable();

  constructor(private service: FakeEndpointsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    
    state.root.children.forEach(data => {
      switch(data.routeConfig?.path){
        case 'leaderboard':{
          this.callback = this.service.getLeaderboard();
          break;
        }
        case 'attendee-list':{
          this.callback = this.service.getAttendeeList();
          break;
        }
        case 'backpack':{
          this.callback = this.service.getBackpack();
          break;
        }
      }
    })
    
    return this.callback;
  }

}
