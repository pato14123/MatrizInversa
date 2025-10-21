const calculaMatriz = require('./calculaMatriz')

describe("Conjunto de testes matriz inversa", () => {
    test("matriz normal", () => {
        expect(calculaMatriz([1,2,3,4])).toBe([true, -2, 4, -2, -3, 1])
    });
});