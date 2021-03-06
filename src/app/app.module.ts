import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Nuestro Modulo para Routing
import { AppRouter } from './app.route';

//Services
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/recetas.service'; 
//Componentes
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoComponent } from './concesionario/listado/listado.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetarioDetalleComponent } from './recetario/recetario-detalle/recetario-detalle.component';

//Pipes
import { FilterPipe } from './Pipes/filter.pipe';
import { RoundPipe } from './Pipes/redondear';

import { RecetasFilter } from './Pipes/recetasfilter.pipe';
import { FormularioComponent } from './recetario/formulario/formulario.component';
import { ConcesionarioformularioComponent } from './concesionario/concesionarioformulario/concesionarioformulario.component';
import { FormBasicoComponent } from './form-basico/form-basico.component';






@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,
    RoundPipe,
    FilterPipe,
    RecetarioComponent,
    RecetarioDetalleComponent,
    RecetasFilter,
    FormularioComponent,
    ConcesionarioformularioComponent,
    FormBasicoComponent,
  

   
    
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [
    CochesService,
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
