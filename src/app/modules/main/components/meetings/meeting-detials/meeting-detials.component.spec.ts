import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDetialsComponent } from './meeting-detials.component';

describe('MeetingDetialsComponent', () => {
  let component: MeetingDetialsComponent;
  let fixture: ComponentFixture<MeetingDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingDetialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
