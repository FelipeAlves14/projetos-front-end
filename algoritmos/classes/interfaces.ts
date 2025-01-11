export default interface Locomocao {
    locomover: () => void;
    parar: () => void;
    partida: string;
    destino: string;
}

export class Dirigir implements Locomocao {
    partida: string;
    destino: string;
    combustivel: number;
    constructor(partida: string, destino: string) {
        this.partida = partida;
        this.destino = destino;
        this.combustivel = 1000;
    }
    locomover() {
        this.combustivel -= 10;
        console.log(`Veículo se locomovendo de ${this.partida} para ${this.destino}, agora com ${this.combustivel}% de combustível`);
    }
    parar() {
        this.combustivel += 10;
        console.log('Veículo parado para abastecer');
    }
}

export class Andar implements Locomocao {
    partida: string;
    destino: string;
    energia: number;
    constructor(partida: string, destino: string) {
        this.partida = partida;
        this.destino = destino;
        this.energia = 10;
    }
    locomover() {
        this.energia -= 1;
        console.log(`Pessoa andando de ${this.partida} para ${this.destino}, agora com ${this.energia} de energia`);
    }
    parar() {
        this.energia += 1;
        console.log('Pessoa parada para descansar');
    }
}