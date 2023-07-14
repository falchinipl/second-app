
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileResolverService } from 'src/app/services/profile.resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./cards-list/cards-list.module').then(m => m.CardListModule)
  },
  {
    path: 'detail',
    resolve: {
      profile: ProfileResolverService
    },
    loadChildren: () => import('../single-profile-info/single-profile-info.module').then(m => m.SingleProfileInfoModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],


})
export class CardAttendeelistSectionRoutingModule { }
