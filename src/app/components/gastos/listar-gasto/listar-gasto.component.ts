import { Component, OnDestroy } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnDestroy {
  subscripcion: Subscription;

  constructor(private _presupuestoService: PresupuestoService){
    this.subscripcion = this._presupuestoService.getGastos().subscribe(data => {
      console.log(data)
    })
  }
  ngOnDestroy(): void {
    this.subscripcion.unsubscribe;
  }

}
