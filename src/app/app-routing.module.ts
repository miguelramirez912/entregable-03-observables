import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { ImprimirPresupuestoComponent } from './components/imprimir-presupuesto/imprimir-presupuesto.component';

const routes: Routes = [
  {path: '', redirectTo: 'ingresarPresupuesto', pathMatch: 'full'},
  {path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  {path: 'gastos', component: GastosComponent},
  {path: 'imprimirPresupuesto', component: ImprimirPresupuestoComponent},
  {path: '**', redirectTo: 'ingresarPresupuesto', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
