import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelasAliquotasComponent } from './tabelas-aliquotas.component';

describe('TabelasAliquotasComponent', () => {
  let component: TabelasAliquotasComponent;
  let fixture: ComponentFixture<TabelasAliquotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelasAliquotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelasAliquotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
