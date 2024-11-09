// @ts-check

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

module.exports = { multiply };


/* Para converter o módulo para TypeScript, primeiro, renomeie o arquivo para .ts e substitua o JSDoc por tipos explícitos.

export function multiply(a: number, b: number): number {
    return a * b;
}

Aqui, removemos o @ts-check e o JSDoc e substituímos pelos tipos TypeScript. 
O TypeScript agora verifica os tipos automaticamente, aumentando a segurança do nosso código.


Em seguida, atualizamos qualquer código que importe esse módulo para garantir que está usando o novo arquivo TypeScript.

import { multiply } from './mathUtils';

console.log(multiply(5, 10));   // Funciona
console.log(multiply("5", 10)); // Erro de compilação no TypeScript
