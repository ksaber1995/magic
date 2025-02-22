import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupremeCommitteeDecisionsComponent } from './supreme-committee-decisions.component';

describe('SupremeCommitteeDecisionsComponent', () => {
  let component: SupremeCommitteeDecisionsComponent;
  let fixture: ComponentFixture<SupremeCommitteeDecisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupremeCommitteeDecisionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupremeCommitteeDecisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
