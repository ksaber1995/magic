import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembersToProjectDialogComponent } from './add-members-to-project-dialog.component';

describe('AddMembersToProjectDialogComponent', () => {
  let component: AddMembersToProjectDialogComponent;
  let fixture: ComponentFixture<AddMembersToProjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMembersToProjectDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMembersToProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
