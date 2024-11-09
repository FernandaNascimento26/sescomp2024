/* No TypeScript, trabalhamos com tipagem estática. 

Isso significa que podemos declarar explicitamente o tipo das variáveis, e esse tipo não pode ser alterado. 
O TypeScript vai nos alertar sobre qualquer tentativa de mudar o tipo, evitando muitos erros 
antes mesmo de executarmos o código.*/

let x = 5;        // x é um número
x = "Hello";      // x agora é uma string
console.log(x);   // Saída: Hello
