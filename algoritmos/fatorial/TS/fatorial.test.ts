const fatorialTS = require('./fatorial')

test('fatorial de 5 é 120', () => {
    expect(fatorialTS(5)).toBe(120);
});

test('fatorial de 0 é 1', () => {    
    expect(fatorialTS(0)).toBe(1);
});

test('fatorial de -5 é inválido', () => {
    try{
        fatorialTS(-5)
    }
    catch(e: any){
        expect(e.message).toBe("Número inválido")
    }
});