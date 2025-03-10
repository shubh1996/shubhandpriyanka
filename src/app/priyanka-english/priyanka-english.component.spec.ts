import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriyankaEnglishComponent } from './priyanka-english.component';

describe('PriyankaEnglishComponent', () => {
  let component: PriyankaEnglishComponent;
  let fixture: ComponentFixture<PriyankaEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriyankaEnglishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriyankaEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
