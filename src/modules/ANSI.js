
/** Cria uma sequência de escape *`ANSI`* com o número de código fornecido. Se a sequencia não puder ser criada, pode executar uma função *`callback`*.
 * @param {number} code O número do código de escape válido.
 * @param {function} failCallback Uma função a ser executada caso houver alguma falha na criação
 * 
*/
const ANSI = (code, failCallback) => {
    if (typeof code === "number") { return `\x1b[${code}m` }
    // Executar a função caso houver falha
    if (typeof failCallback === "function") { failCallback(code) }
    throw new Error('failCallback must be a function!')
    
    
}

// cor de texto extendida \x1b[38;5;<n>m
// cor de fundo extendida \x1b[48;5;<n>m

export default ANSI