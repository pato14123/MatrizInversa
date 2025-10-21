const calculaMatriz = require('./calculaMatriz')

describe("Conjunto de testes matriz inversa", () => {
    test("matriz normal1", () => {
        expect(calculaMatriz([1,2,3,4])).toEqual([true, -2, 4, -2, -3, 1])
    });

    test("matriz normal2", () => {
        expect(calculaMatriz([23,41,32,11])).toEqual([true, -1059, 11, -41, -32, 23])
    });

    test("matriz com determinante nulo1", () => {
        expect(calculaMatriz([1,2,3,6])).toEqual([false, 0])
    });

    test("matriz com determinante nulo1", () => {
        expect(calculaMatriz([10,11,20,22])).toEqual([false, 0])
    });
});