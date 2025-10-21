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
  listaGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService,
              private router: Router){
  }

  ngOnInit(): void {
    this.subscripcion = this._presupuestoService.getGastos().subscribe(data => {
      console.log('.describe() se ejecuta')
      console.log(data);
      this.listaGastos = data;
    })
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  regresar(){
    this.router.navigate(['/gastos'])
  }

}
