import code from "./codesHash.js"

/** Fornece métodos que obtem um código de escape específico pelo some fornecido. */
const get = {}

/** Obtém o código de cor se o nome fornecido existir. @returns {number | undefined} */
get.colorCode = function (colorName) { return code.color[colorName] }

/** Obtém o código de cor de fundo se o nome fornecido existir. @returns {number | undefined}*/
get.backgroundCode = function (colorName) { return code.color[colorName] + 10 }

/** Obtém o código de stilo de fonte se o nome fornecido existir. @returns {number | undefined}*/
get.styleCode = function (styleName) { return code.style[styleName] }

export default get