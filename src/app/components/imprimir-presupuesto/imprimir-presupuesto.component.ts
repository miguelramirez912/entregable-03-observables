import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprimir-presupuesto',
  templateUrl: './imprimir-presupuesto.component.html',
  styleUrls: ['./imprimir-presupuesto.component.css']
})
export class ImprimirPresupuestoComponent implements OnInit, OnDestroy{

  subscripcion!: Subscription;
  presupuesto: number;
  restante: number;
  listaGastos: any[] = [];
  total: number = 0;

  constructor(private _presupuestoService: PresupuestoService,
              private router: Router){
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnInit(): void {
    this.subscripcion = this._presupuestoService.getGastos().subscribe(data => {
      console.log('.describe() se ejecuta')
      console.log(data);
      this.listaGastos = data;
      this.total = this.listaGastos.reduce((acumulador, gasto) => acumulador + gasto.cantidad, 0)
    });
    
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  regresar(){
    this.router.navigate(['/gastos'])
  }

}
