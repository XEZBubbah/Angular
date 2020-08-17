import { Component, OnInit } from '@angular/core';
import {DestinoViaje} from './../../models/destino-viaje.model';
import { map,filter,debounceTime,distinctUntilChanged,switchMap } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { fromEvent } from 'rxjs';
import {Api} from './../../models/Api';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [Api]
})
export class ListaDestinosComponent implements OnInit {
  
  destinos: DestinoViaje[];
  searchResults: string[];

  constructor(private api: Api) { 
    this.destinos = [];
  }

  ngOnInit(): void {
    let elemNombre = <HTMLInputElement> document.getElementById('nombre');
    fromEvent(elemNombre, 'input')
      .pipe(
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value), 
        filter(text => text.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(() => ajax('/assets/datos.json'))
      ).subscribe(AjaxResponse => {
        console.log(AjaxResponse.response)
        this.searchResults = AjaxResponse.response;
      });
  }

  guardar(nombre:string, url:string):boolean{
  	this.destinos.push(new DestinoViaje(nombre,url));
  	console.log(this.destinos);
  	return false;
  }

  elegido(d:DestinoViaje){
    this.destinos.forEach(function(x) {x.setSelected(false);});
    d.setSelected(true);
  }

}
