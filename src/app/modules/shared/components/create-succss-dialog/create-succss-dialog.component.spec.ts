import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSuccssDialogComponent } from './create-succss-dialog.component';

describe('CreateSuccssDialogComponent', () => {
  let component: CreateSuccssDialogComponent;
  let fixture: ComponentFixture<CreateSuccssDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSuccssDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSuccssDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
