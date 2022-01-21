import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnidadeComponent } from './update-unidade.component';

describe('UpdateUnidadeComponent', () => {
  let component: UpdateUnidadeComponent;
  let fixture: ComponentFixture<UpdateUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
