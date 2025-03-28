import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDecisionsComponent } from './project-decisions.component';

describe('ProjectDecisionsComponent', () => {
  let component: ProjectDecisionsComponent;
  let fixture: ComponentFixture<ProjectDecisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectDecisionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDecisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
