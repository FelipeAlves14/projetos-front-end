import { Routes } from '@angular/router';
import { FormJogadorComponent } from './form-jogador/form-jogador.component';
import { ListaJogadoresComponent } from './lista-jogadores/lista-jogadores.component';

export const routes: Routes = [
  { path: 'jogadores', component: ListaJogadoresComponent, pathMatch: 'full' },
  { path: 'jogadores/novo', component: FormJogadorComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/jogadores' }
];
