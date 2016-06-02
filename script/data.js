/**
 * Ce code contient les fonctions de génération en front ( MODEL ).
 */



function stockageCliche() {
    var clichebase = [
        {
            'quote': 'Les Français mangent des grenouilles, surtout à Paris.',
            'author': 'Tomdu92',
            'categories': ['Pays', 'Gastronomie'],
            'nbvote': 192
        },
        {
            'quote': 'Les Irlandais sont tous roux.',
            'author': 'Angèle',
            'categories': ['Pays', 'Apparence'],
            'nbvote': 78
        },
        {
            'quote': 'Les femmes ne savent pas faire un créneau.',
            'author': 'StephJ',
            'categories': ['Femmes', 'Transport'],
            'nbvote': 40
        },
        {
            'quote': 'Les sudistes jouent beaucoup à la pétanque.',
            'author': 'JM07',
            'categories': ['Pays', 'Europe', 'Distraction'],
            'nbvote': 203
        },
        {
            'quote': 'Les Italiens sont machos.',
            'author': 'Lolodu13',
            'categories': ['Pays', 'Hommes'],
            'nbvote': 47
        },
        {
            'quote': 'Les hommes sont monotâches.',
            'author': 'YannPPL',
            'categories': ['Hommes'],
            'nbvote': 195
        },
        {
            'quote': 'Tous les chauves donnent des coups de boule.',
            'author': 'Max-84',
            'categories': ['Sport', 'Humour'],
            'nbvote': 168
        },
        {
            'quote': 'Les chats ne servent à rien.',
            'author': 'Jackie23',
            'categories': ['Animaux'],
            'nbvote': 225
        },
        {
            'quote': 'Les Anglais n’ont pas de goûts vestimentaires.',
            'author': 'HellN',
            'categories': ['Pays', 'Europe', 'Mode'],
            'nbvote': 263
        },
        {
            'quote': 'Les hipsters sont tous barbus.',
            'author': 'MarieL75',
            'categories': ['Mode', 'Apparence'],
            'nbvote': 145
        },
        {
            'quote': 'Les Chinois mangent les chiens.',
            'author': 'PaulD',
            'categories': ['Pays', 'Asie', 'Gastronomie'],
            'nbvote': 125
        },
        {
            'quote': 'Les développeurs sont asociaux.',
            'author': 'GigiB57',
            'categories': ['Geek'],
            'nbvote': 84
        },
        {
            'quote': 'Les filles sont frileuses.',
            'author': 'SebM',
            'categories': ['Femmes'],
            'nbvote': 11
        },
        {
            'quote': 'Les Américains mangent que du McDo.',
            'author': 'TommyV',
            'categories': ['Pays', 'Amérique du Nord', 'Gastronomie'],
            'nbvote': 228
        },
        {
            'quote': 'Les personnes agées parlent fort au téléphone.',
            'author': 'AurélieB',
            'categories': ['Famille', 'Humour'],
            'nbvote': 26
        },
        {
            'quote': 'Les Indiens transpirent beaucoup.',
            'author': 'Jo34',
            'categories': ['Pays', 'Asie'],
            'nbvote': 97
        },
        {
            'quote': 'Les belges mangent que des frites.',
            'author': 'Momo',
            'categories': ['Pays', 'Europe', 'Gastronomie'],
            'nbvote': 228
        },
        {
            'quote': 'Les Japonais sont des têtes.',
            'author': 'BlackD',
            'categories': ['Pays', 'Asie'],
            'nbvote': 58
        },
        {
            'quote': 'Les Français sont arrogants.',
            'author': 'Wladouche',
            'categories': ['Pays', 'Europe', 'Histoire'],
            'nbvote': 74
        },
        {
            'quote': 'Les Scandinaves sont tous blonds.',
            'author': 'Lov87',
            'categories': ['Pays', 'Europe', 'Apparence'],
            'nbvote': 36
        },
        {
            'quote': 'Les designers ne savent pas coder.',
            'author': 'Maximus77',
            'categories': ['Art', 'Média'],
            'nbvote': 57
        },
        {
            'quote': 'Les parisiens sont antipathiques.',
            'author': 'RahimusDecimus',
            'categories': ['Pays', 'Europe'],
            'nbvote': 286
        },
        {
            'quote': 'Libérée, délivrée.',
            'author': 'Lulu30',
            'categories': ['Humour', 'Films', 'Musique'],
            'nbvote': 36
        },
        {
            'quote': 'Les développeurs ne se lavent jamais.',
            'author': 'Lov87',
            'categories': ['Geek'],
            'nbvote': 96
        },
        {
            'quote': 'Votre pub ici',
            'author': 'Publicitaire',
            'categories': ['Publicité'],
            'nbvote': '-'
        },
    ];

    // Initialisation du menu dans le localstorage
    var datacliche = JSON.stringify(clichebase);
    localStorage.setItem('cliches', datacliche);

}

stockageCliche(); // Stockage des phrases

