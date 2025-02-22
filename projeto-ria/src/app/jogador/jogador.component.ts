import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoFocusModule } from 'primeng/autofocus';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { JogadorService } from './jogador-service';
import jogadorFormModel from '../form-jogador/form-jogador';

@Component({
  selector: 'app-jogador',
  imports: [
    ButtonModule,
    CommonModule,
    PanelModule,
    InputTextModule,
    InputNumberModule,
    AutoFocusModule,
    ReactiveFormsModule,
  ],
  templateUrl: './jogador.component.html',
  styleUrl: './jogador.component.scss',
})
export class JogadorComponent {
  myForm: FormGroup = jogadorFormModel;

  detalhes: boolean = false;
  @Input() jogador: Jogador = new Jogador('', {
    finalizacao: 0,
    passe: 0,
    defesa: 0,
    fisico: 0,
    drible: 0,
    velocidade: 0,
  });
  jogadorAtualizado: Jogador = new Jogador('', {
    finalizacao: 0,
    passe: 0,
    defesa: 0,
    fisico: 0,
    drible: 0,
    velocidade: 0,
  });

  detalharJogador() {
    this.jogadorAtualizado.nome = this.jogador.nome;
    this.jogadorAtualizado.stats = this.jogador.stats;
    this.detalhes = !this.detalhes;
  }

  editarJogador() {
    if (this.myForm.valid) {
      this.jogadorAtualizado.nome = this.myForm.value.nome;
      this.jogadorAtualizado.stats = {
        finalizacao: this.myForm.value.finalizacao,
        passe: this.myForm.value.passe,
        defesa: this.myForm.value.defesa,
        fisico: this.myForm.value.fisico,
        drible: this.myForm.value.drible,
        velocidade: this.myForm.value.velocidade,
      };
      this.jogador = JogadorService.update(
        this.jogador.nome,
        this.jogadorAtualizado
      );
    }
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
    this.geralClass = Number(
      (
        (stats.defesa +
          stats.drible +
          stats.fisico +
          stats.finalizacao +
          stats.passe +
          stats.velocidade) /
        6
      ).toFixed(0)
    );
    this.internacional = this.geralClass >= 85;
  }
}
