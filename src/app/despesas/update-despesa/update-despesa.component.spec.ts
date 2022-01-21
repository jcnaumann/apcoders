import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDespesaComponent } from './update-despesa.component';

describe('UpdateDespesaComponent', () => {
  let component: UpdateDespesaComponent;
  let fixture: ComponentFixture<UpdateDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDespesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
