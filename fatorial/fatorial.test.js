import fatorial from './fatorial.js';

test('fatorial de 5 é 120', () => {
    expect(fatorial(5)).toBe(120);
});

test('fatorial de 0 é 1', () => {    
    expect(fatorial(0)).toBe(1);
});