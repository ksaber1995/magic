import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicSelectComponent } from './magic-select.component';

describe('MagicSelectComponent', () => {
  let component: MagicSelectComponent;
  let fixture: ComponentFixture<MagicSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
