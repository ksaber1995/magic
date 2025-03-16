import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewsPageComponent } from './delete-news-page.component';

describe('DeleteNewsPageComponent', () => {
  let component: DeleteNewsPageComponent;
  let fixture: ComponentFixture<DeleteNewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteNewsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
