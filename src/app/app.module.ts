import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import {routing} from "./app.routing";
import { MusicComponent } from './components/music/music.component';
import { VideogamesComponent } from './components/videogames/videogames.component';
import { ProgramingComponent } from './components/programing/programing.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    MusicComponent,
    VideogamesComponent,
    ProgramingComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
