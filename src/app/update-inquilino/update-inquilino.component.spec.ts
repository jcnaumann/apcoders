import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInquilinoComponent } from './update-inquilino.component';

describe('UpdateInquilinoComponent', () => {
  let component: UpdateInquilinoComponent;
  let fixture: ComponentFixture<UpdateInquilinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInquilinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInquilinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
