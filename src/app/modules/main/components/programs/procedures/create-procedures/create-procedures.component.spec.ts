import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProceduresComponent } from './create-procedures.component';

describe('CreateProceduresComponent', () => {
  let component: CreateProceduresComponent;
  let fixture: ComponentFixture<CreateProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProceduresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
