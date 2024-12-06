function fatorial(n: number): number {
    if (n < 0) throw new Error('Número inválido');
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}

module.exports = fatorial;