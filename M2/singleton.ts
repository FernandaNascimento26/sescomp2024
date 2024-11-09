class SingletonTS {
    private static instance: SingletonTS;
    private data: string;

    // Construtor privado para evitar criação direta de instâncias
    private constructor() {
        this.data = "Sou a única instância!";
    }

    // Método estático para acessar a instância única
    public static getInstance(): SingletonTS {
        if (!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS();
        }
        return SingletonTS.instance;
    }

    public getData(): string {
        return this.data;
    }
}

// Testando o Singleton em TypeScript
const instance1T = SingletonTS.getInstance();
const instance2T = SingletonTS.getInstance();
console.log(instance1 === instance2); // true
console.log(instance1.getData());     // Saída: Sou a única instância!


/*

No TypeScript, conseguimos aplicar algumas melhorias importantes:

O construtor é privado (private constructor()), garantindo que não possamos criar novas instâncias de SingletonTS diretamente. 

Apenas o próprio método getInstance() pode acessar o construtor.

A propriedade instance é do tipo SingletonTS, e o TypeScript garante que qualquer valor armazenado nela respeite esse tipo.
Esse uso de tipos e acessos controlados ajuda a evitar erros comuns, garantindo que sempre usamos a instância correta e que o acesso a ela é seguro.

*/