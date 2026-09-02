/**
 * chave-obra.mjs — a chave que liga uma referência bibliográfica ao seu link.
 *
 * Vive num módulo próprio porque três consumidores precisam dela e nenhum deve
 * disparar os outros: `montar-ementas.mjs` (que junta link e referência),
 * `buscar-links.mjs` (que preenche os links) e qualquer conferência manual.
 *
 * A chave precisa ser estável contra as variações que o PPC introduz na mesma
 * obra entre fichas: caixa ("SEBESTA" vs "Sebesta"), acento, pontuação, o
 * "Editora" antes do nome da editora, e o "Disponível em <url>" no fim. Daí a
 * normalização agressiva — tira acento, baixa a caixa e joga fora tudo que não
 * é letra ou dígito.
 *
 * A URL sai da chave de propósito: as fichas de TSAS trazem o mesmo endereço
 * escrito de duas formas (com e sem os espaços que o PDF injeta), e incluí-la
 * faria a mesma obra virar duas chaves.
 */
export function chaveDaObra(referencia) {
  return String(referencia)
    .replace(/\bDispon[íi]ve(l|is)\s+em\b.*$/i, '')
    .replace(/\bRecuperado\s+de\b.*$/i, '')
    .replace(/https?:\/\/\S+/g, '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/\beditora\b|\bed\b|\bpublishing\b/g, '')
    .replace(/[^a-z0-9]/g, '');
}
