// Exemplo ruim
let data: any = "Hello"; // Evitar o uso de 'any' quando possível
data = 123;

// Exemplo melhor
let dataM: string | number = "Hello";
data = 123; // Seguro e com tipos mais específicos


/**Uma das armadilhas mais comuns ao migrar para TypeScript é o uso excessivo do tipo any.
Embora any seja conveniente, ele pode anular os benefícios da tipagem estática, já que permite qualquer tipo de valor.
Em vez disso, é melhor especificar tipos exatos sempre que possível ou usar tipos mais flexíveis, como unknown, 
que ainda exigem validações de tipo antes do uso */