import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStatusRequestComponent } from './change-status-request.component';

describe('ChangeStatusRequestComponent', () => {
  let component: ChangeStatusRequestComponent;
  let fixture: ComponentFixture<ChangeStatusRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeStatusRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeStatusRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
