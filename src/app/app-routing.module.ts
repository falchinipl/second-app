import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./mainComp/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./mainComp/card-leaderboard-section/card-leaderboard-section.module').then(m => m.CardLeaderboardSectionModule)
  },
  {
    path: 'attendee-list',
    loadChildren: () => import('./mainComp/card-attendeelist-section/card-attendeelist-section.module').then(m => m.CardAttendeelistSectionModule)
  },
  {
    path: 'backpack',
    loadChildren: () => import('./mainComp/backpack-section/backpack-section.module').then(m => m.BackpackSectionModule)
  },
  /*{
    path: 'attendee-list',
    loadChildren: () => import('./mainComp/attendee-list/attendee-list.module').then(m => m.AttendeelistModule)
  },
 
  {
    path: 'attendee-list-detail',
    resolve: {
      profile: ProfileResolverService
    },
    loadChildren: () => import('./mainComp/attendee-list-detail/attendee-list-detail.module').then(m => m.AttendeelistDetailModule)
  }*/
];


@NgModule({
  imports: [    

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
