import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto: number;
  restante: number;
  private gastos$ = new BehaviorSubject<any>([]);
  // private listaGastos = null;

  constructor() {
    this.presupuesto = 0;
    this.restante = 0;
   }

   agregarGasto(gasto: any){
    this.restante = this.restante - gasto.cantidad;
    console.log('Cantidad restante');
    console.log(this.restante);
    // this.listaGastos.push(gasto)
    const listaGastos = this.gastos$.getValue();
    // this.gastos$.next(gasto);
    this.gastos$.next([...listaGastos, gasto])
    // this.gastos$.next(this.listaGastos);
   }

   getGastos(): Observable<any>{
    return this.gastos$.asObservable();
   }
}
