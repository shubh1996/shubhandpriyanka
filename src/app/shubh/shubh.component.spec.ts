import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShubhComponent } from './shubh.component';

describe('ShubhComponent', () => {
  let component: ShubhComponent;
  let fixture: ComponentFixture<ShubhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShubhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShubhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
