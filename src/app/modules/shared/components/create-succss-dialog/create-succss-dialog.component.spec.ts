import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSuccessDialogComponent } from './create-succss-dialog.component';

describe('CreateSuccssDialogComponent', () => {
  let component: CreateSuccessDialogComponent;
  let fixture: ComponentFixture<CreateSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
