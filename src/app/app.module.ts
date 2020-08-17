import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './components/destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './components/lista-destinos/lista-destinos.component';
import { DestinoViaje } from './models/destino-viaje.model';
import { reduce } from 'rxjs/operators';
import { LoginComponent } from './components/login/login/login.component';
import { UsuarioLogeadoGuard } from './guards/usuario-logeado/usuario-logeado.guard';
import { AuthService } from './services/auth.service';
//import {ProtectedComponent} from './components/lista-destinos/lista-destinos.component';
import { Routes } from '@angular/router';
import { VuelosMainComponentComponent } from './components/vuelos/vuelos-main-component/vuelos-main-component.component';
import { VuelosComponentComponent } from './components/vuelos/vuelos-component/vuelos-component.component';
import { VuelosMasInfoComponentComponent } from './components/vuelos/vuelos-mas-info-component/vuelos-mas-info-component.component';
import { VuelosDetalleComponentComponent } from './components/vuelos/vuelos-detalle-component/vuelos-detalle-component.component';
import { ReservasModule } from './reservas/reservas.module';

export const childrenRoutesVuelos: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: VuelosMainComponentComponent},
  {path: 'mas-info', component: VuelosMasInfoComponentComponent},
  {path: ':id', component: VuelosDetalleComponentComponent},

];


const routes : Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ListaDestinosComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'protected',
    //component: ProtectedComponent,
    canActivate: [UsuarioLogeadoGuard]
  },
  {
    path: 'vuelos',
    component: VuelosComponentComponent,
    canActivate: [UsuarioLogeadoGuard],
    children: childrenRoutesVuelos
  }
];

// redux init
//export interface AppState{
  //destinos: DestinoViajeState;
//}

//const reducers: ActionReducerMap<AppState> = {
  //destinos: reducersDestinosViajes
//};
//const reducersInitialState = {
  //destinos: initializeDestinosViajesState()
//};


// redux fin init

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    LoginComponent,
    VuelosMainComponentComponent,
    VuelosComponentComponent,
    VuelosMasInfoComponentComponent,
    VuelosDetalleComponentComponent,
   // ProtectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument(),
    AuthService,
    UsuarioLogeadoGuard,
    ReservasModule,

   // NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState})
   //EffectsModule.forRoot([DestinosViajeEffects])

  ],
  providers: [
    AuthService, UsuarioLogeadoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
