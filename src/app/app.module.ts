import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { APP_ROUTES } from './app.rutas';
//servicios
import { HeroesService } from './servicios/heroes.service';
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/comun/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { from } from 'rxjs';
import { HeroeComponent } from './componentes/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobreComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES 
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
