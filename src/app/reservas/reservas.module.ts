import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservaListadoComponent } from './reserva-listado/reserva-listado.component';
import { ReservaDetalleComponent } from './reserva-detalle/reserva-detalle.component';
import { ReservasApiClientService } from './reservas-api-client.service';


@NgModule({
  declarations: [ReservaListadoComponent, ReservaDetalleComponent],
  imports: [
    CommonModule,
    ReservasRoutingModule
  ],
  providers :[
    ReservasApiClientService
  ]
})
export class ReservasModule { }
