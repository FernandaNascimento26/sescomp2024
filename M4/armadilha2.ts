// Exemplo sem tipo de retorno
function calculatePrice(price: number, tax: number) {
    return price * (1 + tax);
}

// Exemplo com tipo de retorno explícito
function calculatePriceM(price: number, tax: number): number {
    return price * (1 + tax);
}

/**TypeScript infere o tipo de retorno, mas em funções complexas, é uma boa prática 
definir explicitamente o tipo de retorno para aumentar a legibilidade e evitar retornos inesperados.” */