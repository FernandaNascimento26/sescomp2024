class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.data = "Sou a única instância!";
        Singleton.instance = this;
    }

    getData() {
        return this.data;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
console.log(instance1.getData());     // Saída: Sou a única instância!


/*Aqui, usamos uma propriedade estática Singleton.instance para armazenar a instância única. 
Na primeira vez que Singleton é instanciado, Singleton.instance é inicializada.
Nas chamadas seguintes, o construtor retorna essa instância armazenada, garantindo que sempre usemos a mesma instância 

No entanto, sem o TypeScript, não há garantias de que Singleton.instance seja do tipo Singleton. 
Além disso, como o JavaScript não impõe modificadores de acesso como private, não conseguimos evitar que o construtor seja chamado diretamente. */