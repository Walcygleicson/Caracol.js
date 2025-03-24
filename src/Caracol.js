import get from "./modules/get.js"
import createANSIEscape from "./modules/createANSIEscape.js"
/**
 * @typedef {object} LineLogOptions Objeto define configurações sobre linha de registro.
 * @prop {boolean} [getLineNumber] Se *`true`* obtém o número da linha onde a função foi invocada. O padrão é *`true`*.
 * @prop {string | false} [sep] Define uma *string* que separa o número da linha do restante do texto. O padrão é *`" >> "`*. Se definido como *`false`* apenas um espaço será usado como separador.
 * 
 * 
 * @typedef {object} StyleOptions
 * @prop {ColorName} [color] O nome da cor de texto.
 * @prop {ColorName} [background] O nome da cor de fundo.
 * @prop {StyleName} [style] O nome do estilo da fonte de texto.
 * @prop {boolean} [reset] Reseta a formatação para o padrão do terminal ao final da *`string`*
 * 
 * @typedef {StyleOptions | LineLogOptions} LogInitOptions
 * 
 * @typedef {"red"|"green"|"yellow"|"blue"|"magenta"|"cian"|"white"| "gray"} ColorName
 * @typedef {"bold"|"italic"|"underline"|"blink"|"inverse"|"hidden"|"strike"|"double-undefined"} StyleName
 * 
 */

/** Códigos de cores de texto */
const colorCode = {
    gray: 90,
    red: 91,
    green: 92,
    yellow: 93,
    blue: 94,
    magenta: 95,
    cian: 96,
    white: 97,
}

/** Códigos de estilos de fonte */
const styleCode = {
    bold: 1,
    italic: 3,
    underline: 4,
    blink: 5,
    inverse: 7,
    hidden: 8,
    strike: 9,
    "double-underline": 21
}



const Caracol = {}

/**
 * * Retorna uma string com formatação *`ANSI`* de cor de texto.
 * ---
 * @param {string} message Um dado ou *`string`* a ser formatado. 
 * @param {ColorName} [colorName] O nome da cor de texto.
 * @param {boolean} [reset] Um *`boolean`* define o reset da formatação ao final da *`string`*. O padrão é *`true`*.
 * @returns {string}
 */
Caracol.color = function (message, colorName = "white", reset = true) {
    if (typeof colorName === "string") {
        // Definir reset
        reset ? reset = createANSIEscape(0) : null
        
        // Definir cor
        const color = createANSIEscape(get.colorCode(colorName), () => {
            // Lançar erro caso o nome de cor for inválido
            throw new Error(`Invalid color name ["${colorName}"]!`)
        })
        
        // Formatar mensagem
        message = color + message
        return reset? message + reset : message
    }
}

/**
 * * Retorna uma nova função personalisada que imprime um dado no terminal com as configurações previamente fornecidas no objeto *`logInit`*
 * ---
 * @param {LogInitOptions} logInit Um objeto de inicialização da função personalisada.
 * 
 * @example
 * 
 * // Objeto de inicialização da função personalisada.
 * const init = {
 *      color: "yellow", // Define cor de texto amarelo.
 *      background: "gray", // Define cor de fundo cinza.
 *      getLineNumber: true // Define a impressão da linha do print.
 * }
 * 
 * const print = Caracol.newPrinter(init) // Cria a função personalisada.
 * 
 * print("hello world") //=> 10:01 >> hello world
 * // Saída esperada, cor de texto amarelo e fundo cinza com número da linha.
 */
Caracol.newPrinter = function (logInit) {
    
    /**
     * * Função personalisada imprime um texto no terminal com as configurações de *cor de texto*, *cor de fundo* e *`estilo de fonte`* previamente definidas.
     * ---
     * @param {Array<string>} messages Uma ou mais mensagem a serem imprimidas
     */
    return function(...messages) {
        console.log("eeeeeee")
    }
}


Caracol.format = function (message, styleOptions) { }




export default Caracol