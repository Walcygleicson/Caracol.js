/**
 * * Testa se uma *`string`*representa uma cor no padrão *`hexadecimal`*.
 */
const isHexColor = (color)=>{
    // Padrão regex para cores hexadecimais:
    // - # seguido de 3 ou 6 caracteres hexadecimais (0-9, a-f, A-F)
    // - ou sem # com 3 ou 6 caracteres hexadecimais
    const hexRegex = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
    return hexRegex.test(color);
}

/**
 * * Retorna uma *`string`* que representa o formato da cor fornecida. Avalia, se passado uma string, o formato hexadecimal, caso não seja, deduz ser por nome. Avalia se é o tipo *`ansi256`* se for um número entre 0 e 255.
 * @param {string | number} colorFormat O formato de representação de cor fornecido pelo usuário.
 * @returns {"name"|"hex"|"ansi256"}
 * 
 */
export default function getColorFormat(colorFormat) {
    const argType = typeof colorFormat
    // Para string
    if (argType === "string") {
        // Testa se é hexadecimal, se não for, retorna "name". Não valida o nome da cor.
        return isHexColor(colorFormat) ? "hex" : "name"
    // Para number - Testa se valor está entre 0 e 255
    } else if (argType === "number" && colorFormat >= 0 && colorFormat <= 255) {
        return "ansi256"
    } 
}
