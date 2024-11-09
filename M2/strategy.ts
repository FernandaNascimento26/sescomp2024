interface DiscountStrategy {
    calculate(price: number): number;
}

class NoDiscountT implements DiscountStrategy {
    calculate(price: number): number {
        return price;
    }
}

class TenPercentDiscountT implements DiscountStrategy {
    calculate(price: number): number {
        return price * 0.9;
    }
}

class ShoppingCartT {
    constructor(private discountStrategy: DiscountStrategy) {}

    calculateTotal(price: number): number {
        return this.discountStrategy.calculate(price);
    }
}

const cart1T = new ShoppingCart(new NoDiscount());
console.log(cart1.calculateTotal(100)); // Saída: 100

const cart2T = new ShoppingCart(new TenPercentDiscount());
console.log(cart2.calculateTotal(100)); // Saída: 90


/*Aqui, a interface DiscountStrategy garante que qualquer estratégia passada para ShoppingCart terá o método calculate.
 Se tentarmos usar uma classe que não implementa essa interface, o TypeScript vai nos alertar durante a compilação */