import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAuthenticatorComponent } from './success-authenticator.component';

describe('SuccessAuthenticatorComponent', () => {
  let component: SuccessAuthenticatorComponent;
  let fixture: ComponentFixture<SuccessAuthenticatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessAuthenticatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessAuthenticatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
