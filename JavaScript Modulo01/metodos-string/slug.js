/*
* Função Slug para URL amigável
* Autor: Romário Melo - www.romariomelo.com
* 
*/
function slug(texto) {
    return texto.toString().toLowerCase().trim() // transforma texto para caixa baixa e remove espaços nas extremidades do texto
        .replace(/\s+/g, '-')       // substitui espaços por hífen
        .replace(/[áàäâã]/g, 'a')       // substitui caracteres especiais á à ä â ã por a
        .replace(/[éèëê]/g, 'e')       // substitui caracteres especiais é è ë ê  por e
        .replace(/[íìîï]/g, 'i')       // substitui caracteres especiais í ì î ï por i
        .replace(/[óòöôõ]/g, 'o')       // substitui caracteres especiais ó ò ö ô õ por o
        .replace(/[úùüû]/g, 'u')       // substitui caracteres especiais ú ù ü û por u
        .replace(/ñ/g, 'n')       // substitui caracteres especiais ñ por n
        .replace(/ç/g, 'c')       // substitui caracteres especiais ç por c
        .replace(/[^\a-z0-9\-]+/g, '')       // exclui caracteres que não seja alfanumérico
        .replace(/\-\-+/g, '-')       // substitui mutiplos hífens por hífen simples
}