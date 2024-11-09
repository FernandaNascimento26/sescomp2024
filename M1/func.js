/*Aqui, temos uma função greet que espera um objeto person. 

Em JavaScript, nada nos impede de passar um objeto que não tem a propriedade name.

Isso pode gerar erros que só vamos descobrir em tempo de execução*/

function greet(person) {
    return "Hello, " + person.name.toUpperCase();
}

const user = { firstName: "Alice" };
console.log(greet(user));  // Erro em tempo de execução
