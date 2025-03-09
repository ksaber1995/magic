import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeUpdatesListComponent } from './committee-updates-list.component';

describe('CommitteeUpdatesListComponent', () => {
  let component: CommitteeUpdatesListComponent;
  let fixture: ComponentFixture<CommitteeUpdatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitteeUpdatesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommitteeUpdatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
