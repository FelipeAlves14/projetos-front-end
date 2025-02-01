# Projeto de Interfaces Ricas

Criei um CRUD de jogadores de futebol, baseado nos stats do FIFA usando Angular e PrimeNG.

## Modelo

```
Jogador {
    nome: string;
    stats: Stats;
    geralClass: number;
    internacional: boolean;
}

Stats {
    velocidade: number;
    fisico: number;
    drible: number;
    finalizacao: number;
    passe: number;
    defesa: number;
}
```