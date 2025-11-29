// Questo file raccoglie i dati caricati dai singoli articoli e li aggrega in array.
// Assicurati che TUTTI i file degli articoli siano caricati PRIMA di questo file nell'HTML.

// Funzione di utilità per filtrare i valori null (nel caso un file non venga caricato)
const filterNull = (arr) => arr.filter(item => item !== null);

const wikiData = {
    "General": filterNull([
        (typeof article_CharCrafter !== 'undefined') ? article_CharCrafter : null
        // Aggiungi qui gli altri articoli 'General'
    ]),
    "NPCs": filterNull([
        (typeof article_Villager !== 'undefined') ? article_Villager : null
        // Aggiungi qui gli altri articoli 'NPCs'
    ]),
    
    // Le categorie senza articoli caricati restano array vuoti
    "Objects": [],
    "Tiles": [],
    "Functions": [],
    "Bosses": []
};
