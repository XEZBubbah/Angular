import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservaListadoComponent} from './reserva-listado/reserva-listado.component';
import {ReservaDetalleComponent} from './reserva-detalle/reserva-detalle.component';

const routes: Routes = [
  {path: 'reservas', component: ReservaListadoComponent},
  {path: 'reservas/:id', component: ReservaDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
