import Trabalhador, { Registrado, Autonomo } from "./classes-abstratas";

test('exemplo de teste do professor', () => {
    const registrado = new Registrado(1000);
    const autonomo = new Autonomo(1000);

    Registrado.modificarSaldo(registrado, 1500);
    Autonomo.modificarSaldo(autonomo, 200);

    expect(registrado.saldo).toBe(2500);
    expect(registrado.economia).toBe('Média');
    expect(autonomo.saldo).toBe(1230);
    expect(autonomo.economia).toBe('Fraca');
});