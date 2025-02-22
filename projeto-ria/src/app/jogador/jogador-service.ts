import { Jogador } from './jogador.component';

export class JogadorService {
  private static _jogadores = new Array<Jogador>();

  static insert(jogador: Jogador): Jogador {
    this._jogadores.push(jogador);
    return jogador;
  }

  static remove(nome: string): void {
    this._jogadores = this._jogadores.filter(
      (jogador) => jogador.nome !== nome
    );
  }

  static update(nome: string, jogador: Jogador): Jogador {
    jogador.geralClass = Number(
      (
        (jogador.stats.defesa +
          jogador.stats.finalizacao +
          jogador.stats.passe +
          jogador.stats.drible +
          jogador.stats.fisico +
          jogador.stats.velocidade) /
        6
      ).toFixed(0)
    );
    jogador.internacional = jogador.geralClass >= 85;
    const index = this._jogadores.findIndex(
      (itJogador) => itJogador.nome === nome
    );
    this._jogadores[index] = jogador;
    return jogador;
  }

  static loadJogadores(): Jogador[] {
    return this._jogadores;
  }
}
