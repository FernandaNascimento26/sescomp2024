// @ts-check

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

console.log(add(5, 10));   // Funciona
console.log(add("5", 10)); // Erro detectado pelo TypeScript


/*o @ts-check ativa a verificação de tipos, e o JSDoc fornece informações de tipo sobre os parâmetros e o retorno da função add. 
O TypeScript detecta que add("5", 10) é um erro, pois o primeiro argumento deveria ser um número, e não uma string. */