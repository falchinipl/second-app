import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAttendeelistSectionComponent } from './card-attendeelist-section.component';

describe('CardAttendeelistSectionComponent', () => {
  let component: CardAttendeelistSectionComponent;
  let fixture: ComponentFixture<CardAttendeelistSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAttendeelistSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAttendeelistSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
