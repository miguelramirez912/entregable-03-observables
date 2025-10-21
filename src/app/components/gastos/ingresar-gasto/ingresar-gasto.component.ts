import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textoIncorrecto: string;
  restante: number;

  constructor(private _presupuestoService: PresupuestoService){
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textoIncorrecto = 'El nombre del gasto o la cantidad son incorrectos';
    this.restante = _presupuestoService.restante;
  }

  
  agregar(){
    
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'La cantidad ingresada es mayor a la restante'
      return;
    }

    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'El nombre del gasto o la cantidad son incorrectos'
    } else {

      // Creamos el Objeto Gasto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }

      // Enviamos el Objeto a los suscriptores via subject
      this._presupuestoService.agregarGasto(GASTO);

      // Reseteamos el formulario
          this.formularioIncorrecto = false;
          this.nombreGasto = '';
          this.cantidad = 0;
    }
  }

  

}
