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
        // Per aggiungere altri articoli 'NPCs' (es. article_Merchant), aggiungi qui
        // ESEMPIO: (typeof article_Merchant !== 'undefined') ? article_Merchant : null
    ]),
    
    "Objects": filterNull([
        // Devi includere la variabile che definisce l'articolo Wool
        (typeof article_Wool !== 'undefined') ? article_Wool : null,
        (typeof article_BallOfWool !== 'undefined') ? article_BallOfWool : null,
        (typeof article_Copper !== 'undefined') ? article_Copper : null,
        (typeof article_Iron !== 'undefined') ? article_Iron : null
        // Se hai altri oggetti, li aggiungeresti qui (es. article_Sword, ecc.)
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
