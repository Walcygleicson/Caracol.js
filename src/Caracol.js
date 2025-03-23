
const Caracol = {}

/**
 * @typedef {object} LineLogOptions Objeto define configurações sobre linha de registro.
 * @prop {boolean} [getLineNumber] Se *`true`* obtém o número da linha onde a função foi invocada. O padrão é *`true`*.
 * @prop {string | false} [sep] Define uma *string* que separa o número da linha do restante do texto. O padrão é *`" >> "`*. Se definido como *`false`* apenas um espaço será usado como separador.
 * 
 * 
 * @typedef {object} StyleOptions
 * @prop {} [color] O nome da cor de texto.
 * @prop {} [background] O nome da cor de fundo.
 * @prop {} [font] O nome do estilo da fonte de texto.
 * @prop {} [reset] Reseta a formatação para o padrão do terminal ao final da *`string`*
 * 
 * @typedef {StyleOptions | LineLogOptions} LogInitOptions
 */

/**
 * * Retorna uma nova função personalisada que imprime um dado no terminal com as configurações previamente fornecidas no objeto *`logInit`*
 * ---
 * @param {LogInitOptions} logInit Um objeto de inicialização da função personalisada.
 */
Caracol.newPrinter = function (logInit) {
    
    return function(...data){}
}


export default Caracol