
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLeaderboardSectionComponent} from './card-leaderboard-section.component';
import { CardLeaderboardSectionRoutingModule } from './card-leaderboard-section-routing.module';




@NgModule({
  declarations: [
    CardLeaderboardSectionComponent,
  ],
  imports: [
    CommonModule,

    CardLeaderboardSectionRoutingModule
  ],
  exports:[CardLeaderboardSectionComponent],


})
export class CardLeaderboardSectionModule { }
