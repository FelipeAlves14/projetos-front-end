function fatorialJS(n) {
    if (n < 0) throw Error('Número inválido');
    if (n <= 1) return 1;
    return n * fatorialJS(n - 1);
}

module.exports = fatorialJS;