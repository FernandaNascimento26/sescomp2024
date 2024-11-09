// Código JS convertido diretamente para TS sem tipos adequados
function fetchData(url) {
    return fetch(url).then(response => response.json());
}

// Melhor abordagem: Especificar tipos de parâmetros e retorno
function fetchDataP(url: string): Promise<any> {
    return fetch(url).then(response => response.json());
}


/*Ao renomear um arquivo .js para .ts, pode parecer que estamos migrando para TypeScript,
mas é importante ajustar os tipos internamente. Apenas mudar a extensão não torna o código automaticamente seguro. */