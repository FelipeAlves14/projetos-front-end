import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jogador, JogadorComponent } from '../jogador/jogador.component';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lista-jogadores',
  imports: [TableModule, PanelModule, JogadorComponent, ButtonModule],
  templateUrl: './lista-jogadores.component.html',
  styleUrl: './lista-jogadores.component.scss'
})
export class ListaJogadoresComponent {
  @Input() jogadores: Jogador[] = [];

  @Output() deletarEvent = new EventEmitter<Jogador>();

  deletarJogador(jogador: Jogador){
    this.deletarEvent.emit(jogador);
  }
}
