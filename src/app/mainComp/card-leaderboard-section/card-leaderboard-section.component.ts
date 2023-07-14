import { Component } from '@angular/core';
import { Leaderboard } from 'src/app/model/leaderboard';

@Component({
  selector: 'card-leaderboard-section',
  templateUrl: './card-leaderboard-section.component.html',
  styleUrls: ['./card-leaderboard-section.component.scss']
})
export class CardLeaderboardSectionComponent {

  ngOnInit(){
    console.log("Leaderboard.component")
  }

}
