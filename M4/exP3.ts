// Exemplo ruim: Não tipar propriedades de objetos aninhados
let user1: any = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Wonderland"
    }
};

// Exemplo melhor: Criar interfaces para as propriedades do objeto
interface Address {
    street: string;
    city: string;
}

interface User {
    name: string;
    address: Address;
}

const userP: User = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Wonderland"
    }
};

/*squecer de tipar propriedades aninhadas em objetos é um erro comum. 
É recomendável criar interfaces ou tipos para objetos complexos para garantir que as propriedades corretas sejam usadas. */