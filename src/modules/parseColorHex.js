/**
 * Converte uma string que representa uma cor hexadecimal para código ANSI 256 (0-255)
 * @param {string} hex Cor em formato hexadecimal *`(#RGB, #RRGGBB)`*
 * @returns {number}
 */
export default function parseColorHex(hex) {
    // Remove o '#' e converte para 6 caracteres (se for formato #RGB)
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }

    // Converte para valores RGB (0-255)
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Mapeia para o cubo 6x6x6 de cores ANSI (16-231)
    if (r === g && g === b) {
        // Tons de cinza (232-255)
        if (r < 8) return 16;
        if (r > 248) return 231;
        return Math.round(((r - 8) / 247) * 24) + 232;
    }

    // Cores RGB no cubo 6x6x6
    const ansiR = Math.round(r / 51);
    const ansiG = Math.round(g / 51);
    const ansiB = Math.round(b / 51);

    return 16 + (ansiR * 36) + (ansiG * 6) + ansiB;
}
