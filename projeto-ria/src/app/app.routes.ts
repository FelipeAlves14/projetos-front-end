import { Routes } from '@angular/router';
import { FormJogadorComponent } from './form-jogador/form-jogador.component';
import { ListaJogadoresComponent } from './lista-jogadores/lista-jogadores.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'jogadores', component: ListaJogadoresComponent, pathMatch: 'full' },
  { path: 'jogadores/novo', component: FormJogadorComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/jogadores' }
];
