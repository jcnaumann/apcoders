import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUnidadeComponent } from './details-unidade.component';

describe('DetailsUnidadeComponent', () => {
  let component: DetailsUnidadeComponent;
  let fixture: ComponentFixture<DetailsUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
