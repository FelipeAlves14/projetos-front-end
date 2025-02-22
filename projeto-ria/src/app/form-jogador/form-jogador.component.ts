import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { Jogador, Stats } from '../jogador/jogador.component';
import { JogadorService } from '../jogador/jogador-service';
import { Router } from '@angular/router';
import jogadorFormModel from './form-jogador';

@Component({
  selector: 'app-form-jogador',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    AutoFocusModule,
    InputNumberModule,
  ],
  templateUrl: './form-jogador.component.html',
  styleUrl: './form-jogador.component.scss',
})
export class FormJogadorComponent {
  router: Router = new Router();
  myForm: FormGroup = jogadorFormModel;

  defaultJogador = new Jogador('', {
    finalizacao: 0,
    passe: 0,
    drible: 0,
    defesa: 0,
    fisico: 0,
    velocidade: 0,
  });
  jogador = this.defaultJogador;

  inserirJogador() {
    if (this.myForm.valid) {
      const stats: Stats = {
        finalizacao: this.myForm.value.finalizacao,
        passe: this.myForm.value.passe,
        drible: this.myForm.value.drible,
        defesa: this.myForm.value.defesa,
        fisico: this.myForm.value.fisico,
        velocidade: this.myForm.value.velocidade,
      };
      const novoJogador: Jogador = new Jogador(this.myForm.value.nome, stats);
      JogadorService.insert(novoJogador);
      this.jogador.nome = this.defaultJogador.nome;
      this.jogador.stats = this.defaultJogador.stats;
      this.voltar();
    }
  }

  voltar() {
    this.router.navigate(['']);
  }
}
