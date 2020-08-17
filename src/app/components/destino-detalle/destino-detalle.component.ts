import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { DestinoViaje } from '../../models/destino-viaje.model';
import {Api} from './../../models/Api';
import { ActivatedRoute } from '@angular/router';

class ApiViejo {
  getById(id:string): DestinoViaje {
    console.log("Clase vieja");
    return null;
  }
}
interface AppConfig {
  apiEndpoint: 'mi_api.com'
};
const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'mi_api.com'
};
const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

class DestinosApiClientDecorated extends Api {
  getById(id: string):DestinoViaje {
    console.log('class decorada');
    console.log('config: '+this.config.apiEndpoint);
    return super.getById(id);
  }
}

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css'],
  providers: [
    {provide: APP_CONFIG, useValue: APP_CONFIG_VALUE},
    {provide: Api, useClass: DestinosApiClientDecorated},
    {provide: ApiViejo ,useExisting: Api}
  ]
})
export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  constructor(private route: ActivatedRoute, private destinosApliClient: Api) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
      this.destino = this.destinosApliClient.getById(id);
  }

}
