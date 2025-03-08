import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesicionsListComponent } from './desicions-list.component';

describe('DesicionsListComponent', () => {
  let component: DesicionsListComponent;
  let fixture: ComponentFixture<DesicionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesicionsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesicionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
