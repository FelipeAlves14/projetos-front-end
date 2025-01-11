import { Dirigir, Andar } from "./interfaces";


test('exemplo de teste de interfaces', () => {
    const dirigir = new Dirigir('São Paulo', 'Rio de Janeiro');
    dirigir.locomover();
    dirigir.locomover();
    dirigir.locomover();
    dirigir.parar();

    const andar = new Andar('Casa', 'Academia');
    andar.locomover();
    andar.locomover();
    andar.locomover();
    andar.parar();
    andar.locomover();
    andar.locomover();
    andar.locomover();
    andar.parar();
    expect(dirigir.combustivel).toBe(980);
    expect(andar.energia).toBe(6);
});