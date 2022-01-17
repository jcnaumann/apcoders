import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInquilinoComponent } from './create-inquilino.component';

describe('CreateInquilinoComponent', () => {
  let component: CreateInquilinoComponent;
  let fixture: ComponentFixture<CreateInquilinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInquilinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInquilinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
