import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Jogador } from './jogador/jogador.component';
import { FormJogadorComponent } from './form-jogador/form-jogador.component';
import { ListaJogadoresComponent } from './lista-jogadores/lista-jogadores.component';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormJogadorComponent, ListaJogadoresComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  jogadores: Jogador[] = [];


  inserirJogador(jogador: Jogador) {
    this.jogadores.push(jogador);
  }

  deletarJogador(jogador: Jogador) {
    this.jogadores = this.jogadores.filter(j => j !== jogador);
  }
}
