import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProfileInfoComponent  } from './single-profile-info.component';

describe('LeaderboardDetailComponent', () => {
  let component: SingleProfileInfoComponent;
  let fixture: ComponentFixture<SingleProfileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProfileInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
