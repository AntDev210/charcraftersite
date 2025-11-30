// Questo file raccoglie i dati caricati dai singoli articoli e li aggrega in array.
// Assicurati che TUTTI i file degli articoli siano caricati PRIMA di questo file nell'HTML.

// Funzione di utilità per filtrare i valori null (nel caso un file non venga caricato)
const filterNull = (arr) => arr.filter(item => item !== null);

const wikiData = {
    "General": filterNull([
        (typeof article_CharCrafter !== 'undefined') ? article_CharCrafter : null
        // Per aggiungere altri articoli 'General' (es. article_Guide), dovrai aggiungere una riga qui
        // ESEMPIO: (typeof article_Guide !== 'undefined') ? article_Guide : null
    ]),
    "NPCs": filterNull([
        (typeof article_Villager !== 'undefined') ? article_Villager : null
        // Per aggiungere altri articoli 'NPCs' (es. article_Merchant), aggiungi qui
        // ESEMPIO: (typeof article_Merchant !== 'undefined') ? article_Merchant : null
    ]),
    
    // ⬇️ LE TUE CATEGORIE VUOTE DEVONO ESSERE MODIFICATE COSÌ: ⬇️
    
    "Objects": filterNull([
        // DEVI AGGIUNGERE LA TUA VARIABILE QUI
        // ESEMPIO: (typeof article_Sword !== 'undefined') ? article_Sword : null,
        // ESEMPIO: (typeof article_Pickaxe !== 'undefined') ? article_Pickaxe : null
    ]),
    
    "Tiles": filterNull([
        // DEVI AGGIUNGERE LA TUA VARIABILE QUI
        // ESEMPIO: (typeof article_Dirt !== 'undefined') ? article_Dirt : null,
        // ESEMPIO: (typeof article_Stone !== 'undefined') ? article_Stone : null
    ]),
    
    "Functions": filterNull([
        // DEVI AGGIUNGERE LA TUA VARIABILE QUI
    ]),
    
    "Bosses": filterNull([
        // DEVI AGGIUNGERE LA TUA VARIABILE QUI
    ])
};
