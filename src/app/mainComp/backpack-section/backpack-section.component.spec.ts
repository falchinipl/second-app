import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackSectionComponent } from './backpack-section.component';

describe('BackpackSectionComponent', () => {
  let component: BackpackSectionComponent;
  let fixture: ComponentFixture<BackpackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackpackSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackpackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
