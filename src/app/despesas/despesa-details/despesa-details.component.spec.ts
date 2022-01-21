import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaDetailsComponent } from './despesa-details.component';

describe('DespesaDetailsComponent', () => {
  let component: DespesaDetailsComponent;
  let fixture: ComponentFixture<DespesaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
