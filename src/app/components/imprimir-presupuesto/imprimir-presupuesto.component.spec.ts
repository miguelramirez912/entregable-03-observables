import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirPresupuestoComponent } from './imprimir-presupuesto.component';

describe('ImprimirPresupuestoComponent', () => {
  let component: ImprimirPresupuestoComponent;
  let fixture: ComponentFixture<ImprimirPresupuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimirPresupuestoComponent]
    });
    fixture = TestBed.createComponent(ImprimirPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
