const article_Iron = {
    id: "iron",
    title: "Iron",
    date: "2026-02-05 11:26",
    description: "Iron is the Grade 2 metallic mineral that marks the transition from basic copper equipment to high-quality tools and protection. It is a vital resource for progressing into the deeper reaches of the caves and optimizing labor time.",
    content: `
        <p>Iron is the Grade 2 metallic mineral that marks the transition from basic copper equipment to high-quality tools and protection. It is a vital resource for progressing into the deeper reaches of the caves and optimizing labor time.</p>
        
        <p>Compared to copper, iron offers a reduction in energy consumption and an increase in durability, allowing for longer exploration sessions, making it the fundamental pillar of the mid-game.</p>
        
        <h3 class="pixel-text" style="color: #00ff00; margin-top: 20px;">LOCATION AND IDENTIFICATION</h3>
        <p>In the darkness of the underground, iron is not just a material, but a beacon for the explorer's progress:</p>
        
        <ul class="wiki-list">
            <li><strong>Distinctive Sign:</strong> Deposits are recognized by their intense <strong>Brilliant White</strong> color. The map symbol is initially a solid block (█), which stands out clearly against the rock walls.</li>
            <li><strong>Extraction States:</strong> The symbol progressively evolves into semi-empty states (▓, ▒, ∷) as the mineral vein becomes exhausted.</li>
            <li><strong>Geological Distribution:</strong> Iron is mainly found in Cave Level 3 (maximum concentration), while it remains rare in Level 2 and Level 4.</li>
        </ul>
        
        <h3 class="pixel-text" style="color: #00ff00; margin-top: 20px;">EXTRACTION AND ENERGY COSTS</h3>
        <p>Iron extraction marks the pinnacle of efficiency for mid-game exploration. Using an Iron Pickaxe significantly minimizes the physical strain on the character, allowing for extended mining operations in the lower depths.</p>
        
        <ul class="wiki-list">
            <li><strong>Energy Cost (Iron Pickaxe):</strong> 5 Energy per use.</li>
            <li><strong>Processing Time:</strong> Extraction requires a time interval between 28800 and 43200 seconds (approximately 8-12 in-game hours), reflecting the superior sharpness and power of iron tools.</li>
        </ul>
        
        <h3 class="pixel-text" style="color: #00ff00; margin-top: 20px;">THE ART OF CRAFTING</h3>
        <p>Iron crafting is a two-step process involving the <strong>Metalworker</strong> for forging components and the <strong>Woodworker</strong> for final assembly.</p>
        
        <h5 class="pixel-text" style="color: #00ff00; margin-top: 10px;">METALWORKER (FORGING)</h5>
        <p>The Metalworker processes raw materials into usable parts or finished metal goods:</p>
        <ul class="wiki-list">
            <li><strong>Iron Axe Head:</strong> 12x Iron (+ 24 coins)</li>
            <li><strong>Iron Pickaxe Head:</strong> 10x Iron (+ 24 coins)</li>
            <li><strong>Iron Shovel Head:</strong> 5x Iron (+ 24 coins)</li>
            <li><strong>Iron Sword:</strong> 10x Iron (+ 30 coins)</li>
            <li><strong>Iron Knife:</strong> 2x Iron (+ 20 coins)</li>
            <li><strong>Iron Knitting Needles:</strong> 4x Iron (+ 18 coins)</li>
        </ul>

        <h5 class="pixel-text" style="color: #00ff00; margin-top: 10px;">WOODWORKER (ASSEMBLY)</h5>
        <p>The Woodworker combines metal parts with timber to create the final tool:</p>
        <ul class="wiki-list">
            <li><strong>Iron Axe:</strong> 1x Iron Axe Head + 1x Wood (+ 4 coins)</li>
            <li><strong>Iron Pickaxe:</strong> 1x Iron Pickaxe Head + 1x Wood (+ 4 coins)</li>
            <li><strong>Iron Shovel:</strong> 1x Iron Shovel Head + 1x Wood (+ 4 coins)</li>
        </ul>

        <h5 class="pixel-text" style="color: #00ff00; margin-top: 10px;">ARMOR (METALWORKER ONLY)</h5>
        <ul class="wiki-list">
            <li><strong>Light Iron Armor:</strong> 14x Iron (+ 40 coins)</li>
            <li><strong>Normal Iron Armor:</strong> 26x Iron (+ 45 coins)</li>
            <li><strong>Heavy Iron Armor:</strong> 38x Iron (+ 50 coins)</li>
        </ul>
        
        <h3 class="pixel-text" style="color: #00ff00; margin-top: 20px;">ECONOMIC VALUE</h3>
        <ul class="wiki-list">
            <li><strong>Sale Value:</strong> Raw iron can be sold for <strong>10 coins</strong> per unit.</li>
            <li><strong>Crafting Note:</strong> Processing "Raw Iron" into "Iron" at the Metalworker is free (0 coins) but requires 1 unit of the raw resource.</li>
        </ul>
    `,
    infobox: {
        "Object Name": "Iron",
        "Type": "Metallic Mineral (Level 2)",
        "Primary Location": "Cave Level 3 (common), Level 2 & 4 (rare)",
        "Map Symbol": "█ (White)",
        "Sale Value (Raw)": "10 Coins",
        "Energy Cost (Pickaxe)": "From 5 (Iron Pickaxe) to 15 (Stone pickaxe) of Energy",
        "Crafting Category": "Tools, Armor, Components"
    }
};

export default article_Iron;
