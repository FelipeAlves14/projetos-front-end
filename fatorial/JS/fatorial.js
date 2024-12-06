function fatorialJS(n) {
    if (n < 0) throw new Error('Número inválido');
    if (n <= 1) return 1;
    return n * fatorialJS(n - 1);
}

module.exports = fatorialJS;