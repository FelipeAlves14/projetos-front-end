import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { PanelModule } from "primeng/panel";
import { AutoFocusModule } from "primeng/autofocus";
import { Jogador, Stats } from "../jogador/jogador.component";

@Component({
  selector: 'app-form-jogador',
  imports: [FormsModule, ButtonModule, InputTextModule, PanelModule, AutoFocusModule, InputNumberModule],
  templateUrl: './form-jogador.component.html',
  styleUrl: './form-jogador.component.scss'
})
export class FormJogadorComponent {
  defaultJogador = new Jogador('', {finalizacao: 0, passe: 0, drible: 0, defesa: 0, fisico: 0, velocidade: 0});

  jogador = this.defaultJogador;
  @Output() insertOutEvent = new EventEmitter<Jogador>();
  inserirJogador() {
    const stats: Stats = {
      finalizacao: Number(this.jogador.stats.finalizacao),
      passe: Number(this.jogador.stats.passe),
      defesa: Number(this.jogador.stats.defesa),
      fisico: Number(this.jogador.stats.fisico),
      drible: Number(this.jogador.stats.drible),
      velocidade: Number(this.jogador.stats.velocidade)
      };
    const novoJogador: Jogador = new Jogador(this.jogador.nome, stats);
    this.insertOutEvent.emit(novoJogador);
    this.jogador = this.defaultJogador;
  }
}