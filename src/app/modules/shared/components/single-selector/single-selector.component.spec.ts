import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectorComponent } from './single-selector.component';

describe('SingleSelectorComponent', () => {
  let component: SingleSelectorComponent;
  let fixture: ComponentFixture<SingleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
