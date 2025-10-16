import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarPresupuestoComponent,
    GastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
