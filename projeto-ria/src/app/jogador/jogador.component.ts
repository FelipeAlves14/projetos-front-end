import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoFocusModule } from 'primeng/autofocus';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-jogador',
  imports: [ButtonModule, CommonModule, PanelModule, InputTextModule, InputNumberModule, AutoFocusModule, FormsModule],
  templateUrl: './jogador.component.html',
  styleUrl: './jogador.component.scss'
})
export class JogadorComponent {
  detalhes: boolean = false;
  @Input() jogador: Jogador = new Jogador('', { finalizacao: 0, passe: 0, defesa: 0, fisico: 0, drible: 0, velocidade: 0 });
  jogadorAtualizado: Jogador = new Jogador('', { finalizacao: 0, passe: 0, defesa: 0, fisico: 0, drible: 0, velocidade: 0 });

  detalharJogador(){
    this.jogadorAtualizado.nome = this.jogador.nome;
    this.jogadorAtualizado.stats = this.jogador.stats;
    this.detalhes = !this.detalhes;
  };

  editarJogador(){
    this.jogador.nome = this.jogadorAtualizado.nome;
    this.jogador.stats = this.jogadorAtualizado.stats;
    this.jogador.geralClass = Number(((this.jogadorAtualizado.stats.defesa +
      this.jogadorAtualizado.stats.finalizacao +
      this.jogadorAtualizado.stats.passe +
      this.jogadorAtualizado.stats.drible +
      this.jogadorAtualizado.stats.fisico +
      this.jogadorAtualizado.stats.velocidade) / 6).toFixed(0));
    this.jogador.internacional = this.jogador.geralClass >= 85;
  }

}

export interface Stats {
  finalizacao: number;
  passe: number;
  defesa: number;
  fisico: number;
  drible: number;
  velocidade: number;
}

export class Jogador {
  nome: string;
  stats: Stats;
  geralClass: number;
  internacional: boolean;

  constructor(nome: string, stats: Stats) {
    this.nome = nome;
    this.stats = stats;
    this.geralClass = Number(((stats.defesa + 
      stats.drible + 
      stats.fisico + 
      stats.finalizacao + 
      stats.passe + 
      stats.velocidade) / 6).toFixed(0));
    this.internacional = this.geralClass >= 85;
  }
}