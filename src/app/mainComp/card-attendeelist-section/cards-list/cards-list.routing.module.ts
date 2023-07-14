
import { NgModule } from '@angular/core';



import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './cards-list.component';



const routes: Routes = [
  {
    path: '',
    component: CardListComponent
  }
  /*{
    path: 'detail',
    resolve: {
      profile: ProfileResolverService
    },
    component: LeaderboardDetailComponent
  }*/
];

@NgModule({
  
  imports: [
    
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],


})
export class CardsListRoutingModule { }
