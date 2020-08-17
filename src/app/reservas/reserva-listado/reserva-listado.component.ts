import { Component, OnInit } from '@angular/core';
import { ReservasApiClientService } from '../reservas-api-client.service';

@Component({
  selector: 'app-reserva-listado',
  templateUrl: './reserva-listado.component.html',
  styleUrls: ['./reserva-listado.component.css']
})
export class ReservaListadoComponent implements OnInit {

  constructor(private api: ReservasApiClientService) { }

  ngOnInit(): void {
  }

}
