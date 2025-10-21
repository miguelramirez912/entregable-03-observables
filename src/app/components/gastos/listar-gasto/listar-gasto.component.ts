import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;
  presupuesto: number;
  restante: number;
  listGastos: any[] = []

  constructor(private _presupuestoService: PresupuestoService,
              private router: Router
  ){
    this.presupuesto = 0;
    this.restante = 0;
    this.subscripcion = this._presupuestoService.getGastos().subscribe(data => {
      console.log(data)
      // console.log(this.listGastos)
      // Solucionar que reste la cantidad de ultimo elemento agregado al array
      console.log('Ultimo gasto agregado:')
      const gastoAgregado = data[data?.length-1];
      this.restante = this.restante - gastoAgregado?.cantidad;
      // this.listGastos.push(data)
      this.listGastos = data;
    })
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
    // console.log(this.listGastos);
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  aplicarColorRestante(){
    if (this.presupuesto / 4 > this.restante) {
      return 'alert alert-danger';
    } else if (this.presupuesto / 2 > this.restante) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }

  imprimir() {
    this.router.navigate(['/imprimirPresupuesto'])
  }

}
