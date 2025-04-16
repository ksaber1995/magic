import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresGroupsCreationComponent } from './procedures-groups-creation.component';

describe('ProceduresGroupsCreationComponent', () => {
  let component: ProceduresGroupsCreationComponent;
  let fixture: ComponentFixture<ProceduresGroupsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProceduresGroupsCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProceduresGroupsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
