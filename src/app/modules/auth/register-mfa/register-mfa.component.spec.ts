import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMfaComponent } from './register-mfa.component';

describe('RegisterMfaComponent', () => {
  let component: RegisterMfaComponent;
  let fixture: ComponentFixture<RegisterMfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterMfaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterMfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
