import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLeaderboardSectionComponent } from './card-leaderboard-section.component';

describe('CardLeaderboardSectionComponent', () => {
  let component: CardLeaderboardSectionComponent;
  let fixture: ComponentFixture<CardLeaderboardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLeaderboardSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLeaderboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
