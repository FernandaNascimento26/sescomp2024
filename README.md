Claro! Aqui está a versão do **README** sem os nomes específicos de arquivos:

---

# Exemplos Práticos - Oficina SESCOMP 2024

**Título da Oficina:**  
**Navegando nas Águas da Tipagem: Explorando as Diferenças entre TypeScript e JavaScript e Seus Reflexos nos Padrões de Projeto de Sistemas**

**Data:**  
SESCOMP 2024

**Link para a Apresentação:**  
[Genially - SESCOMP 2024](https://view.genially.com/672f5983f1245ddb850f332a/presentation-sescomp-2024)

---

## Descrição

Este repositório contém exemplos práticos utilizados na oficina **Navegando nas Águas da Tipagem**, realizada no evento SESCOMP 2024. A oficina abordou como TypeScript e JavaScript podem coexistir e como a tipagem estática do TypeScript melhora a implementação de padrões de projeto.

Esses exemplos são úteis para desenvolvedores que estão começando a adotar TypeScript ou estão migrando projetos existentes em JavaScript. Cada exemplo aqui fornece uma visão prática das diferenças entre as linguagens e das melhores práticas para uma transição gradual e segura.

## Conteúdo

1. **Padrão Singleton (JavaScript e TypeScript)**
   - **Descrição**: Demonstração do padrão Singleton implementado em JavaScript e TypeScript. O exemplo em TypeScript utiliza o construtor privado e tipos para garantir que apenas uma instância seja criada.
   - **Instruções**:
     ```bash
     # Executar exemplo em JavaScript
     node caminho/do/exemplo/singleton.js

     # Compilar e executar exemplo em TypeScript
     npx tsc caminho/do/exemplo/singleton.ts && node caminho/do/exemplo/singleton.js
     ```

2. **Padrão Factory (JavaScript e TypeScript)**
   - **Descrição**: Exemplo de implementação do padrão Factory em JavaScript e TypeScript. No TypeScript, a tipagem garante que o tipo do objeto criado seja válido.
   - **Instruções**:
     ```bash
     # Executar exemplo em JavaScript
     node caminho/do/exemplo/factory.js

     # Compilar e executar exemplo em TypeScript
     npx tsc caminho/do/exemplo/factory.ts && node caminho/do/exemplo/factory.js
     ```

3. **Padrão Strategy (JavaScript e TypeScript)**
   - **Descrição**: Implementação do padrão Strategy em JavaScript e TypeScript. No TypeScript, uma interface define as estratégias, garantindo que todas sigam a estrutura esperada.
   - **Instruções**:
     ```bash
     # Executar exemplo em JavaScript
     node caminho/do/exemplo/strategy.js

     # Compilar e executar exemplo em TypeScript
     npx tsc caminho/do/exemplo/strategy.ts && node caminho/do/exemplo/strategy.js
     ```

4. **Integração JavaScript e TypeScript com `@ts-check` e JSDoc**
   - **Descrição**: Exemplo que utiliza `@ts-check` e JSDoc para aplicar tipagem em JavaScript, ajudando na transição gradual para TypeScript.
   - **Instrução**:
     ```bash
     # Executar exemplo com verificação de tipos ativada
     node caminho/do/exemplo/integration.js
     ```

---

## Pré-requisitos

- **Node.js**: Certifique-se de que o Node.js está instalado para executar os exemplos JavaScript e TypeScript.
- **TypeScript**: Instale o TypeScript globalmente (`npm install -g typescript`) ou use `npx` para compilar arquivos TypeScript.

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/sescomp-2024-exemplos.git
   cd sescomp-2024-exemplos
   ```

2. Navegue até o diretório do exemplo desejado e siga as instruções acima para compilar e executar os códigos.

---

**Dúvidas ou Sugestões?**  
Entre em contato e aproveite os exemplos para aplicar TypeScript e JavaScript nos seus projetos!