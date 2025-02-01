import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JogadorComponent, Jogador } from './jogador/jogador.component';
import { FormJogadorComponent } from './form-jogador/form-jogador.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JogadorComponent, FormJogadorComponent, ButtonModule, TableModule, PanelModule],
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

  trackByNome(index: number, jogador: Jogador): string {
    return jogador.nome;
  }
}
