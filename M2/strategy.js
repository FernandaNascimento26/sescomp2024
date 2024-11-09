class NoDiscount {
    calculate(price) {
        return price;
    }
}

class TenPercentDiscount {
    calculate(price) {
        return price * 0.9;
    }
}

class ShoppingCart {
    constructor(discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    calculateTotal(price) {
        return this.discountStrategy.calculate(price);
    }
}

const cart1 = new ShoppingCart(new NoDiscount());
console.log(cart1.calculateTotal(100)); // Saída: 100

const cart2 = new ShoppingCart(new TenPercentDiscount());
console.log(cart2.calculateTotal(100)); // Saída: 90


/*Em JavaScript, temos flexibilidade para usar qualquer classe como uma estratégia.
No entanto, não há garantias de que discountStrategy realmente tenha o método calculate, o que pode causar erros em tempo de execução. */