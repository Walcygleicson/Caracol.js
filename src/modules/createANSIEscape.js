
/** Cria uma sequência de escape *`ANSI`* com o número de código fornecido. Se a sequencia não puder ser criada, pode executar uma função *`callback`*.
 * @param {number} code O número do código de escape válido.
 * @param {function} failCallback Uma função a ser executada caso houver alguma falha na criação
 * 
*/
const createANSIEscape = (code, failCallback) => {
    if (typeof code === "number") { return `\x1b[${code}m` }
    // Executar a função caso houver falha
    if (typeof failCallback === "function") { failFunction(code) }
    throw new Error('failCallback must be a function!')
    
    
}

export default createANSIEscape