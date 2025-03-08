import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDecisionComponent } from './create-decision.component';

describe('CreateDecisionComponent', () => {
  let component: CreateDecisionComponent;
  let fixture: ComponentFixture<CreateDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDecisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
