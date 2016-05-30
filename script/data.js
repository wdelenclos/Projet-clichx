function stockageCliche() {
    var clichebase = [
        {
            'quote': 'Les Francais mangent tous des grenoilles, surtout à Paris .',
            'author': 'Tomdu92',
            'categories': ['Pays', 'Gastronomie'],
            'nbvote': 192
        },
        {
            'quote': 'Les Francais mangent tous des grenoilles, surtout à Paris .',
            'author': 'Tomdu92',
            'categories': ['Pays', 'Gastronomie'],
            'nbvote': 192
        },

        {
            'quote': 'Les Francais mangent tous des grenoilles, surtout à Paris .',
            'author': 'Tomdu92',
            'categories': ['Pays', 'Gastronomie'],
            'nbvote': 192
        },

        {
            'quote': 'Les Francais mangent tous des grenoilles, surtout à Paris .',
            'author': 'Tomdu92',
            'categories': ['Pays', 'Gastronomie'],
            'nbvote': 192
        },

        {
            'quote': 'Les Francais mangent tous des grenoilles, surtout à Paris .',
            'author': 'Tomdu92',
            'categories': ['Pays', 'Gastronomie'],
            'nbvote': 192
        },

        {
            'quote': 'Les Francais mangent tous des grenoilles, surtout à Paris .',
            'author': 'Tomdu92',
            'categories': ['Pays', 'Gastronomie'],
            'nbvote': 192
        }
    ];

    // Initialisation du menu dans le localstorage
    var datacliche = JSON.stringify(clichebase);
    localStorage.setItem('cliches', datacliche);

}

stockageCliche(); // Stockage des phrases

