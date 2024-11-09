function printId(id: string | number) {
    console.log(id.toUpperCase()); // Erro: 'toUpperCase' não existe em 'number'
}

// Correto: Usar um tipo condicional
function printIdP(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}


/*Ao trabalhar com tipos de união, é comum esquecer de tratar todos os casos possíveis.
O TypeScript não permite o uso direto de valores de tipo união sem verificar o tipo primeiro */