/*no TypeScript, definimos uma interface Person e declaramos que a função greet recebe um objeto desse tipo.
 Isso significa que, se tentarmos passar um objeto sem a propriedade name, o TypeScript detecta o erro antes mesmo de rodarmos o código. */

interface Person {
    name: string;
}

function greetT(person: Person): string {
    return "Hello, " + person.name.toUpperCase();
}

const userr = { firstName: "Alice" };
console.log(greetT(user));  // Erro detectado em tempo de compilação
