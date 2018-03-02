import { RouterModule, Routes } from '@angular/router';
import{NgModule} from '@angular/core';


//Componentes

import {AppComponent} from './app.component';

import {RecetaComponent} from './receta/receta.component';

import {PropiedadesComponent} from './propiedades/propiedades.component';

import {Page404Component} from './page404/page404.component';

import {HomeComponent} from './home/home.component';

import {UsuarioComponent} from './usuario/usuario.component';
import {ConcesionarioComponent} from './concesionario/concesionario.component';

//Rutas
const appRoutes: Routes=[ 
    {path:'',component:HomeComponent},
{ path: 'receta', component: RecetaComponent },
{ path: 'usuario', component: UsuarioComponent },
{ path: 'propiedades', component: PropiedadesComponent },
{ path: 'concesionario', component: ConcesionarioComponent },
{ path: '**', component: Page404Component }

];

export const AppRouter=RouterModule.forRoot(appRoutes);