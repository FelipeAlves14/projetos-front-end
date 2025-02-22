import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jogador, JogadorComponent } from '../jogador/jogador.component';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { JogadorService } from '../jogador/jogador-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-jogadores',
  imports: [TableModule, PanelModule, JogadorComponent, ButtonModule],
  templateUrl: './lista-jogadores.component.html',
  styleUrl: './lista-jogadores.component.scss',
})
export class ListaJogadoresComponent {
  jogadores: Jogador[] = JogadorService.loadJogadores();
  router: Router = new Router();

  atualizarJogadores() {
    this.jogadores = JogadorService.loadJogadores();
  }

  inserirJogador() {
    this.router.navigate(['/jogadores/novo']);
  }

  deletarJogador(jogador: Jogador) {
    JogadorService.remove(jogador.nome);
    this.atualizarJogadores();
  }
}
