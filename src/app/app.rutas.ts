import { RouterModule, Routes } from '@angular/router';
//import { Component } from '@angular/core';
import { HomeComponent } from './componentes/home/home.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { from } from 'rxjs';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';

const APP_RUTAS: Routes = [
    { path:'home', component: HomeComponent},
    { path:'sobre', component: SobreComponent},
    { path:'heroes', component: HeroesComponent},
    { path:'heroe/:id', component: HeroeComponent},
    { path:'buscar/:termino', component: BuscadorComponent},
    { path:'**', pathMatch:'full', redirectTo: 'home'}
];

export const APP_ROUTES = RouterModule.forRoot(APP_RUTAS, {useHash:true});