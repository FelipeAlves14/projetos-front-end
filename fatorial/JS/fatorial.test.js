const fatorialJS = require('./fatorial');

test('fatorial de 5 é 120', () => {
    expect(fatorialJS(5)).toBe(120);
});

test('fatorial de 0 é 1', () => {    
    expect(fatorialJS(0)).toBe(1);
});
