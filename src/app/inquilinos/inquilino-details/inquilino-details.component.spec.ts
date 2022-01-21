import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquilinoDetailsComponent } from './inquilino-details.component';

describe('InquilinoDetailsComponent', () => {
  let component: InquilinoDetailsComponent;
  let fixture: ComponentFixture<InquilinoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquilinoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InquilinoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
