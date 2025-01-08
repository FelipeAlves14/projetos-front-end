const funcoes = require('./funcoes');

// 1.
test('exemplo de teste do professor', () => {
    expect(funcoes.quadradoForLoop([3, 5, 7, 3, 8, 9, 1])).toStrictEqual([9, 25, 49, 9, 64, 81, 1]);
});
test('teste com zeros e uns', () => {
    expect(funcoes.quadradoForLoop([0, 1, 0, 1, 0, 1])).toStrictEqual([0, 1, 0, 1, 0, 1]);
});
test('teste com números negativos', () => {
    expect(funcoes.quadradoForLoop([-3, -5, -7, -3, -8, -9, -1])).toStrictEqual([9, 25, 49, 9, 64, 81, 1]);
});
test('exemplo de teste do professor', () => {
    expect(funcoes.quadradoForEach([3, 5, 7, 3, 8, 9, 1])).toStrictEqual([9, 25, 49, 9, 64, 81, 1]);
});
test('teste com zeros e uns', () => {
    expect(funcoes.quadradoForEach([0, 1, 0, 1, 0, 1])).toStrictEqual([0, 1, 0, 1, 0, 1]);
});
test('teste com números negativos', () => {
    expect(funcoes.quadradoForEach([-3, -5, -7, -3, -8, -9, -1])).toStrictEqual([9, 25, 49, 9, 64, 81, 1]);
});


// 2.
test('exemplo de teste do professor', () => {
    expect(funcoes.concatenarArray(["Arrays", "com", "TypeScript"])).toStrictEqual("Arrays com TypeScript");
});
test('teste com apenas um elemento', () => {
    expect(funcoes.concatenarArray(["Arrays"])).toStrictEqual("Arrays");
});

// 3.
test('exemplo de teste do professor', () => {
    expect(funcoes.ordenarArray(["carro", "boneco", "ave", "lapís"])).toStrictEqual(["ave", "boneco", "carro", "lapís"]);
});
test('teste com números', () => {
    expect(funcoes.ordenarArray([3, 5, 7, 3, 8, 9, 1])).toStrictEqual([1, 3, 3, 5, 7, 8, 9]);
});
test('teste com números negativos', () => {
    expect(funcoes.ordenarArray([-3, -5, -7, -3, -8, -9, -1])).toStrictEqual([-9, -8, -7, -5, -3, -3, -1]);
});

// 4.
test('exemplo de teste do professor', () => {
    expect(funcoes.pegarDoisPrimeiros([2, 4, 6, 2, 8, 9, 5])).toStrictEqual([2, 4]);
});
test('teste com apenas um elemento', () => {
    expect(funcoes.pegarDoisPrimeiros([2])).toStrictEqual("Array contém menos de 2 elementos: Apenas o valor -> 2");
});
test('teste com array vazio', () => {
    expect(funcoes.pegarDoisPrimeiros([])).toStrictEqual("Array contém menos de 2 elementos: Está vazio");
});

// 5.
test('exemplo de teste do professor', () => {
    expect(funcoes.extrairPares([8, 3, 9, 5, 6, 12])).toStrictEqual([8, 6, 12]);
});
test('teste com apenas um elemento', () => {
    expect(funcoes.extrairPares([2])).toStrictEqual([2]);
});
test('teste com array vazio', () => {
    expect(funcoes.extrairPares([])).toStrictEqual([]);
});
test('teste com números negativos', () => {
    expect(funcoes.extrairPares([-8, -3, -9, -5, -6, -12])).toStrictEqual([-8, -6, -12]);
});
