export default abstract class Trabalhador {
    abstract saldo: number;
    abstract economia: string;
    abstract receberPagamento(pagamento: number): void;
    static modificarSaldo(trabalhador: Trabalhador, novoSaldo: number): void {
        trabalhador.receberPagamento(novoSaldo);
        if (trabalhador.saldo >= 3000) trabalhador.economia = 'Forte';
        else if (trabalhador.saldo >= 1500) trabalhador.economia = 'Média';
        else trabalhador.economia = 'Fraca';
    }
}

export class Registrado extends Trabalhador {
    salario: number;
    saldo: number;
    economia: string;
    constructor(saldo: number) {
        super();
        this.saldo = saldo;
        this.salario = 1000;
        this.economia = 'fraca';
    }
    receberPagamento(novoSaldo: number) {
        this.salario = novoSaldo;
        this.saldo += this.salario;
        console.log(`Saldo atual: ${this.saldo}`);
    }
}

export class Autonomo extends Trabalhador {
    saldo: number;
    comissao: number;
    economia: string;
    constructor(saldo: number) {
        super();
        this.saldo = saldo;
        this.comissao = 1.15;
        this.economia = 'fraca';
    }
    receberPagamento(pagamento: number) {
        this.saldo += pagamento * this.comissao;
        console.log(`Saldo atual: ${this.saldo}`);
    }
}