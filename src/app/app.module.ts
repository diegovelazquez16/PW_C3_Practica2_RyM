import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar esto


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EpisodioComponent } from './components/episodio/episodio.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EpisodioComponent,
    FavoritosComponent,
    PersonajesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
