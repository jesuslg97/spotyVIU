import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./components/inicio/inicio.component";
import { MusicComponent } from "./components/music/music.component";
import { VideogamesComponent } from "./components/videogames/videogames.component";
import { ProgramingComponent } from "./components/programing/programing.component";

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'musica', component: MusicComponent},
  {path: 'videojuegos', component: VideogamesComponent},
  {path: 'programacion', component: ProgramingComponent}
];

export const routing: ModuleWithProviders<Object> = RouterModule.forRoot(appRoutes);
